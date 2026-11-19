import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Globe, Leaf, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/919080039122?text=Hello%20Spizena%20Exports%2C%20I%20am%20interested%20in%20your%20agricultural%20products.', '_blank');
    };

    return (
        <footer id="contact" className="bg-spizena-blue-950 text-white pt-12 pb-6 border-t-4 border-spizena-orange-500 relative">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">

                    {/* Column 1: Logo & Company (3 cols) */}
                    <div className="xl:col-span-3 space-y-4">
                        <Logo light />
                        <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                            Premier exporter of high-grade Indian spices, dry red chillies, turmeric, millets and authentic agricultural produce from Tamil Nadu to global international markets.
                        </p>
                    </div>

                    {/* Column 2: Quick Links (3 cols) */}
                    <div className="xl:col-span-3 space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-spizena-orange-400">
                            Quick Links
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-300">
                            <a href="#" className="hover:text-spizena-orange-400 transition-colors">Home</a>
                            <a href="#quality" className="hover:text-spizena-orange-400 transition-colors">Quality</a>
                            <a href="#about" className="hover:text-spizena-orange-400 transition-colors">About Us</a>
                            <a href="#process" className="hover:text-spizena-orange-400 transition-colors">Our Process</a>
                            <a href="#products" className="hover:text-spizena-orange-400 transition-colors">Products</a>
                            <a href="#global-markets" className="hover:text-spizena-orange-400 transition-colors">Global Markets</a>
                            <a href="#contact" className="hover:text-spizena-orange-400 transition-colors">Contact</a>
                        </div>
                    </div>

                    {/* Column 3: Contact Us (3 cols) */}
                    <div className="xl:col-span-3 space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-spizena-orange-400">
                            Contact Us
                        </h3>

                        <div className="space-y-2.5 text-xs text-slate-300">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-spizena-orange-500 flex-shrink-0 mt-0.5" />
                                <span>
                                    D NO 23/22, First floor<br />
                                    GOVINDHAPPALLI (Vill), THADIKKAL (po),<br />
                                    Denkanikottai (Tk), Krishnagiri,<br />
                                    Tamil Nadu - 635107
                                </span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-spizena-orange-500 flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span>+91 90800 39122</span>
                                    <span>+91 63747 76022</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-spizena-orange-500 flex-shrink-0" />
                                <a href="mailto:spizenaexports@gmail.com" className="hover:text-spizena-orange-400 transition-colors">
                                    spizenaexports@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Connect With Us & Handwritten Footer Quote (3 cols) */}
                    <div className="xl:col-span-3 space-y-4 flex flex-col justify-between">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-spizena-orange-400 mb-3">
                                Connect With Us
                            </h3>

                            <div className="flex flex-wrap gap-2 text-xs font-bold">
                                <a
                                    href="https://wa.me/919080039122"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200 transition-colors hover:border-emerald-500 hover:text-emerald-300"
                                >
                                    WhatsApp
                                </a>
                                <a
                                    href="mailto:spizenaexports@gmail.com"
                                    className="rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-slate-200 transition-colors hover:border-spizena-orange-500 hover:text-spizena-orange-300"
                                >
                                    Email
                                </a>
                            </div>
                        </div>

                        {/* Handwritten Footer Tagline */}
                        <div className="pt-2 font-script text-xl text-amber-200 leading-tight">
                            <span>Pure Spices</span> <br />
                            <span className="text-white">Global Taste</span> <br />
                            <div className="flex items-center gap-1 text-spizena-orange-400">
                                <span>Indian Pride</span>
                                <Leaf className="w-4 h-4 text-emerald-400 fill-emerald-500" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Floating WhatsApp CTA */}
                <div className="fixed bottom-6 right-6 z-50">
                    <button
                        onClick={handleWhatsAppClick}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/40 group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center font-bold">
                            <MessageCircle className="w-5 h-5 fill-emerald-600 stroke-white" />
                        </div>
                        <span className="font-bold text-sm tracking-wide pr-1">Chat with Us</span>
                    </button>
                </div>

                {/* Bottom Bar: Copyright & Website URL */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
                    <div>
                        © 2025 Spizena Exports. All Rights Reserved.
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-300 hover:text-spizena-orange-400 transition-colors">
                        <Globe className="w-3.5 h-3.5 text-spizena-orange-500" />
                        <a href="https://www.spizenaexports.com" target="_blank" rel="noreferrer">
                            www.spizenaexports.com
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};
