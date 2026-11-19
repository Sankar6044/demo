import React from 'react';
import { ShieldCheck, Truck, DollarSign, Award, Users, Leaf } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
    const reasons = [
        { text: 'Consistent Premium Quality', icon: ShieldCheck },
        { text: 'Reliable Supply Chain', icon: Truck },
        { text: 'Competitive Pricing', icon: DollarSign },
        { text: 'Food Safety & Compliance', icon: Award },
        { text: 'Customer-Centric Approach', icon: Users },
    ];

    return (
        <div id="quality" className="space-y-4 bg-sky-50/70 p-4 sm:p-5 rounded-2xl border border-sky-100/90 shadow-sm flex flex-col justify-between">
            <div>
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-black text-spizena-blue-900 tracking-tight mb-3">
                    Why Choose Us?
                </h2>

                {/* Feature List */}
                <div className="space-y-2.5">
                    {reasons.map((item, idx) => {
                        const IconComp = item.icon;
                        return (
                            <div key={idx} className="flex items-center gap-3 p-2 rounded-xl bg-white/90 border border-slate-100 hover:border-emerald-200 transition-colors shadow-xs">
                                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                                    <IconComp className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-xs sm:text-sm font-bold text-slate-800">
                                    {item.text}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Handwritten Script Message Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 p-3.5 rounded-xl border border-amber-200/70 shadow-xs relative overflow-hidden mt-3">
                <div className="flex items-start gap-2">
                    <div className="font-script text-lg sm:text-xl font-bold text-slate-800 leading-snug">
                        Partner with us <br />
                        <span className="text-spizena-orange-600">for a healthier</span> <br />
                        and sustainable future
                    </div>
                    <Leaf className="w-6 h-6 text-emerald-600 ml-auto flex-shrink-0 transform rotate-12" />
                </div>
            </div>
        </div>
    );
};
