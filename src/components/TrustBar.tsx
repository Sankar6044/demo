import React from 'react';
import { ShieldCheck, Award, Truck, Handshake, Leaf, Sprout } from 'lucide-react';

export const TrustBar: React.FC = () => {
    const trustPoints = [
        {
            title: '100% Natural',
            subtitle: '& Pure',
            icon: Leaf,
        },
        {
            title: 'Premium',
            subtitle: 'Quality',
            icon: ShieldCheck,
        },
        {
            title: 'Sustainably',
            subtitle: 'Sourced',
            icon: Sprout,
        },
        {
            title: 'Global Standards',
            subtitle: '& Certifications',
            icon: Award,
        },
        {
            title: 'On-Time',
            subtitle: 'Delivery',
            icon: Truck,
        },
        {
            title: 'Long-Term',
            subtitle: 'Partnerships',
            icon: Handshake,
        },
    ];

    return (
        <section className="bg-spizena-blue-900 text-white py-6 border-b border-spizena-blue-800 shadow-inner relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                    {/* Trust Points Grid / Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-4 flex-1 w-full">
                        {trustPoints.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={idx} className="flex items-center gap-3 group">
                                    {/* Gold Circle Outline Icon */}
                                    <div className="w-11 h-11 rounded-full border-2 border-spizena-yellow-400 flex items-center justify-center text-spizena-yellow-400 group-hover:bg-spizena-yellow-400 group-hover:text-spizena-blue-900 transition-all duration-300 flex-shrink-0 shadow-sm">
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    {/* Label */}
                                    <div className="leading-tight">
                                        <span className="block text-xs sm:text-sm font-bold text-white group-hover:text-spizena-yellow-400 transition-colors">
                                            {item.title}
                                        </span>
                                        <span className="block text-xs sm:text-sm font-semibold text-slate-300">
                                            {item.subtitle}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Yellow Brush Banner Badge */}
                    <div className="flex-shrink-0 relative mt-2 lg:mt-0">
                        <div className="bg-gradient-to-r from-spizena-yellow-400 via-amber-400 to-spizena-yellow-400 text-slate-900 px-6 py-2.5 rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 border-2 border-amber-300/60 relative overflow-hidden group">

                            {/* Slanted brush effect */}
                            <div className="absolute top-0 right-0 w-8 h-full bg-white/20 transform skew-x-12 translate-x-4 group-hover:translate-x-32 transition-transform duration-700"></div>

                            <div className="relative z-10 flex items-center gap-2">
                                <div>
                                    <div className="text-sm font-black tracking-tight leading-tight text-slate-950 uppercase">
                                        Your Trusted Export Partner
                                    </div>
                                    <div className="text-[11px] font-bold text-emerald-900 tracking-wide">
                                        from Tamil Nadu, India
                                    </div>
                                </div>
                                <Leaf className="w-5 h-5 text-emerald-700 fill-emerald-600 flex-shrink-0" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
