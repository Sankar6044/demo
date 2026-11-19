import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { productCategories, productsData } from './ProductStrip';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        product: 'Dry Red Chilli',
        quantity: '',
        message: '',
    });

    const handleClose = () => {
        setSubmitted(false);
        onClose();
    };

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            `Phone / WhatsApp: ${formData.phone}`,
            `Destination country: ${formData.country}`,
            `Product: ${formData.product}`,
            `Estimated quantity: ${formData.quantity}`,
            `Additional requirements: ${formData.message || 'None provided'}`,
        ].join('\n');
        const subject = encodeURIComponent(`Export inquiry - ${formData.product}`);
        const body = encodeURIComponent(message);
        window.location.href = `mailto:spizenaexports@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
            <div className="my-auto max-h-[calc(100vh-2rem)] overflow-y-auto bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {submitted ? (
                    <div className="py-12 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">Your email draft is ready</h3>
                        <p className="text-sm text-slate-600 max-w-md mx-auto">
                            Your email app should open with the inquiry details. Review the message and send it to complete your request.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <span className="text-xs font-extrabold uppercase text-spizena-orange-500 tracking-wider">
                                Direct Export Inquiry
                            </span>
                            <h2 className="text-2xl font-black text-spizena-blue-900">
                                Request a Custom Quote
                            </h2>
                            <p className="text-xs text-slate-500">
                                Get competitive pricing for bulk shipments to your international destination.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-spizena-orange-500 focus:ring-2 focus:ring-amber-100"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="john@company.com"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-spizena-orange-500 focus:ring-2 focus:ring-amber-100"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-spizena-orange-500 focus:ring-2 focus:ring-amber-100"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Destination Country *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.country}
                                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                    placeholder="e.g. United Arab Emirates, Germany, Singapore"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-spizena-orange-500 focus:ring-2 focus:ring-amber-100"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Product of Interest *</label>
                                <select
                                    value={formData.product}
                                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-spizena-orange-500 focus:ring-2 focus:ring-amber-100 bg-white"
                                >
                                    {productCategories.map((category) => (
                                        <optgroup key={category} label={category}>
                                            {productsData.filter((prod) => prod.category === category).map((prod) => (
                                                <option key={prod.id} value={prod.name}>
                                                    {prod.name}
                                                </option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Quantity (Tons/Kg) *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.quantity}
                                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                    placeholder="e.g. 5 Metric Tons"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-spizena-orange-500 focus:ring-2 focus:ring-amber-100"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Additional Requirements / Specifications</label>
                            <textarea
                                rows={3}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Mention moisture levels, packaging type (25kg/50kg PP bags), target port..."
                                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-spizena-orange-500 focus:ring-2 focus:ring-amber-100"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-spizena-orange-500 to-spizena-orange-600 text-white font-bold py-3.5 rounded-2xl shadow-lg hover:shadow-hero-btn transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <Send className="w-4 h-4" />
                            <span>Submit Inquiry Now</span>
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};
