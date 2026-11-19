import React from 'react';
import { Sprout, Globe, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
    onKnowMoreClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onKnowMoreClick }) => {
    return (
        <div id="about" className="space-y-4">
            {/* Visual Image with Curved Arch */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 group">
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
                    alt="Fertile Farms of Tamil Nadu"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Curved Green Graphic Treatment Overlay on Left Base */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>

            {/* Heading */}
            <div>
                <h2 className="text-2xl sm:text-3xl font-black text-spizena-blue-900 tracking-tight">
                    About <span className="text-spizena-blue-600">SPIZENA EXPORTS</span>
                </h2>
                <div className="w-16 h-1 bg-spizena-blue-500 rounded-full mt-1"></div>
            </div>

            {/* Paragraph Text */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                We are a trusted exporter of premium quality agricultural products from the fertile farms of Tamil Nadu, India. Our commitment is to deliver natural, safe and authentic products to customers around the world.
            </p>

            {/* 3 Feature Items */}
            <div className="grid grid-cols-3 gap-2 py-1">
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-1 shadow-sm">
                        <Sprout className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Our Roots</span>
                    <span className="text-xs font-black text-spizena-blue-900">Indian Farms</span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-1 shadow-sm">
                        <Globe className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Our Reach</span>
                    <span className="text-xs font-black text-spizena-blue-900">Global Markets</span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-1 shadow-sm">
                        <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Our Promise</span>
                    <span className="text-xs font-black text-spizena-blue-900">Quality & Trust</span>
                </div>
            </div>

            {/* Know More Button */}
            <div>
                <button
                    onClick={onKnowMoreClick}
                    className="bg-spizena-blue-900 text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:bg-spizena-orange-500 hover:shadow-md transition-all duration-300 flex items-center gap-2"
                >
                    <span>Our Export Process</span>
                    <span>→</span>
                </button>
            </div>
        </div>
    );
};
