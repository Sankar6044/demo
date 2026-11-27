const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map();

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function sanitizeHeaderValue(value) {
    return String(value).replace(/[\r\n]+/g, ' ').trim();
}

function getClientIp(req) {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string' && forwarded.length > 0) {
        return forwarded.split(',')[0].trim();
    }
    return req.socket?.remoteAddress || 'unknown';
}

function isRateLimited(ip) {
    const now = Date.now();
    const recent = (rateLimitStore.get(ip) || []).filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
    );

    if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
        rateLimitStore.set(ip, recent);
        return true;
    }

    recent.push(now);
    rateLimitStore.set(ip, recent);
    return false;
}

function parseBody(req) {
    if (!req.body) return {};
    if (typeof req.body === 'string') {
        return JSON.parse(req.body);
    }
    return req.body;
}

function validateEnquiry(payload) {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
        return { error: 'Invalid request payload.' };
    }

    // Honeypot check for automated bot submissions
    if (typeof payload.website === 'string' && payload.website.trim().length > 0) {
        return { error: 'Invalid submission.' };
    }

    const name = typeof payload.name === 'string' ? sanitizeHeaderValue(payload.name) : '';
    const email = typeof payload.email === 'string' ? sanitizeHeaderValue(payload.email) : '';
    const phone = typeof payload.phone === 'string' ? payload.phone.trim() : '';
    const country = typeof payload.country === 'string' ? payload.country.trim() : '';
    const product = typeof payload.product === 'string' ? sanitizeHeaderValue(payload.product) : '';
    const quantity = typeof payload.quantity === 'string' ? payload.quantity.trim() : '';
    const message = typeof payload.message === 'string' ? payload.message.trim() : '';

    if (name.length < 2 || name.length > 100) {
        return { error: 'Please enter a valid name (2–100 characters).' };
    }
    if (!EMAIL_REGEX.test(email) || email.length > 254) {
        return { error: 'Please enter a valid email address.' };
    }
    if (phone.length < 5 || phone.length > 40 || !/\d/.test(phone)) {
        return { error: 'Please enter a valid phone or WhatsApp number.' };
    }
    if (country.length < 2 || country.length > 100) {
        return { error: 'Please enter a valid destination country.' };
    }
    if (product.length < 2 || product.length > 120) {
        return { error: 'Please select a valid product of interest.' };
    }
    if (quantity.length < 1 || quantity.length > 100) {
        return { error: 'Please enter the estimated quantity.' };
    }
    if (message.length > 2000) {
        return { error: 'Additional requirements must be 2000 characters or fewer.' };
    }

    return {
        data: { name, email, phone, country, product, quantity, message },
    };
}

function buildHtmlEmail({ name, email, phone, country, product, quantity, message }) {
    const submittedAt = new Date().toISOString();
    const safeRequirements = message
        ? escapeHtml(message).replace(/\n/g, '<br />')
        : '<em>None provided</em>';

    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:24px;background-color:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
    <tr>
      <td style="background:#0f2942;padding:20px 24px;color:#ffffff;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#fb923c;">Direct Export Inquiry</p>
        <h1 style="margin:0;font-size:20px;font-weight:700;">New Customer Enquiry – SPIZENA EXPORTS</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:24px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="8" style="border-collapse:collapse;font-size:14px;">
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="width:40%;font-weight:700;color:#475569;">Customer Name</td>
            <td style="color:#0f172a;">${escapeHtml(name)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="font-weight:700;color:#475569;">Email Address</td>
            <td style="color:#0f172a;"><a href="mailto:${escapeHtml(email)}" style="color:#ea580c;text-decoration:none;">${escapeHtml(email)}</a></td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="font-weight:700;color:#475569;">Phone / WhatsApp</td>
            <td style="color:#0f172a;">${escapeHtml(phone)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="font-weight:700;color:#475569;">Destination Country</td>
            <td style="color:#0f172a;">${escapeHtml(country)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="font-weight:700;color:#475569;">Product of Interest</td>
            <td style="color:#0f172a;font-weight:700;">${escapeHtml(product)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="font-weight:700;color:#475569;">Estimated Quantity</td>
            <td style="color:#0f172a;">${escapeHtml(quantity)}</td>
          </tr>
          <tr>
            <td style="font-weight:700;color:#475569;vertical-align:top;">Additional Requirements</td>
            <td style="color:#0f172a;line-height:1.5;">${safeRequirements}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:14px 24px;background:#f1f5f9;font-size:12px;color:#64748b;">
        Submitted via SPIZENA EXPORTS website on ${escapeHtml(submittedAt)}. Reply directly to this email to respond to ${escapeHtml(name)}.
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildTextEmail({ name, email, phone, country, product, quantity, message }) {
    return [
        'New Customer Enquiry – SPIZENA EXPORTS',
        '========================================',
        `Customer Name: ${name}`,
        `Email Address: ${email}`,
        `Phone / WhatsApp: ${phone}`,
        `Destination Country: ${country}`,
        `Product of Interest: ${product}`,
        `Estimated Quantity: ${quantity}`,
        `Additional Requirements / Specifications: ${message || 'None provided'}`,
    ].join('\n');
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed.' });
    }

    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
        return res.status(429).json({
            error: 'Too many enquiries submitted. Please wait a few minutes and try again.',
        });
    }

    let payload;
    try {
        payload = parseBody(req);
    } catch {
        return res.status(400).json({ error: 'Invalid JSON request body.' });
    }

    const { data, error: validationError } = validateEnquiry(payload);
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const businessEmail = process.env.BUSINESS_EMAIL || 'spizenaexports@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'SPIZENA EXPORTS <onboarding@resend.dev>';

    if (!apiKey) {
        console.error('RESEND_API_KEY environment variable is not configured.');
        return res.status(500).json({
            error: 'Email service is not configured. Please contact us directly at spizenaexports@gmail.com.',
        });
    }

    try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: fromEmail,
                to: [businessEmail],
                reply_to: data.email,
                subject: `New Customer Enquiry – SPIZENA EXPORTS (${data.product})`,
                html: buildHtmlEmail(data),
                text: buildTextEmail(data),
            }),
        });

        const resendBody = await resendResponse.json().catch(() => ({}));

        if (!resendResponse.ok) {
            console.error('Resend API error:', resendResponse.status, resendBody);
            return res.status(502).json({
                error: 'Unable to send your enquiry right now. Please try again later.',
            });
        }

        return res.status(200).json({
            success: true,
            id: resendBody.id || null,
        });
    } catch (err) {
        console.error('Failed to communicate with Resend API:', err);
        return res.status(502).json({
            error: 'Unable to send your enquiry right now. Please try again later.',
        });
    }
}
