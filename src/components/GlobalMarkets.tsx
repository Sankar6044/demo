import React from 'react';

export const GlobalMarkets: React.FC = () => {
    return (
        <div id="global-markets" className="space-y-4 bg-sky-50/50 p-4 rounded-2xl border border-sky-100/80">
            {/* Heading */}
            <div>
                <span className="text-xs font-semibold text-slate-500 block">Exporting to</span>
                <h2 className="text-2xl sm:text-3xl font-black text-spizena-blue-900 tracking-tight">
                    Global Markets
                </h2>
            </div>

            {/* World Map Visual Container */}
            <div className="relative w-full h-44 sm:h-52 bg-gradient-to-br from-sky-100/60 to-blue-100/40 rounded-xl overflow-hidden border border-sky-200/60 p-2 flex items-center justify-center">

                {/* World Map Vector Illustration */}
                <svg className="w-full h-full text-sky-400/40 opacity-80" viewBox="0 0 1000 500" fill="currentColor">
                    {/* Western routes */}
                    <path d="M 150 120 Q 200 100 280 140 T 250 250 T 160 220 Z" />
                    {/* Southern routes */}
                    <path d="M 280 280 Q 320 320 300 420 T 240 380 Z" />
                    {/* Northern routes */}
                    <path d="M 480 100 Q 560 90 600 150 T 520 200 Z" />
                    {/* Central routes */}
                    <path d="M 490 220 Q 580 230 570 360 T 510 320 Z" />
                    {/* Eastern routes */}
                    <path d="M 620 120 Q 800 100 880 220 T 680 280 Z" />
                    {/* Southern ocean routes */}
                    <path d="M 800 340 Q 880 340 860 420 T 780 400 Z" />
                </svg>

                {/* Dynamic Connection Lines & Glowing Orange Nodes */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500" fill="none">
                    {/* India Export Origin Node */}
                    <circle cx="680" cy="230" r="10" fill="#f58220" className="animate-ping opacity-75" />
                    <circle cx="680" cy="230" r="7" fill="#f58220" />
                    <text x="685" y="215" fill="#0f2b48" fontSize="16" fontWeight="bold">INDIA</text>

                    {/* Western connection */}
                    <path d="M 680 230 Q 600 120 530 140" stroke="#f58220" strokeWidth="3" strokeDasharray="5 5" className="animate-pulse" />
                    <circle cx="530" cy="140" r="5" fill="#2563eb" />

                    {/* Regional connection */}
                    <path d="M 680 230 Q 620 180 590 210" stroke="#f58220" strokeWidth="3" strokeDasharray="4 4" />
                    <circle cx="590" cy="210" r="5" fill="#2563eb" />

                    {/* Long-distance connection */}
                    <path d="M 680 230 Q 400 60 220 160" stroke="#f58220" strokeWidth="3" strokeDasharray="6 6" />
                    <circle cx="220" cy="160" r="5" fill="#2563eb" />

                    {/* Eastern connection */}
                    <path d="M 680 230 Q 750 180 820 200" stroke="#f58220" strokeWidth="3" strokeDasharray="4 4" />
                    <circle cx="820" cy="200" r="5" fill="#2563eb" />

                    {/* Southern connection */}
                    <path d="M 680 230 Q 600 280 530 300" stroke="#f58220" strokeWidth="3" strokeDasharray="5 5" />
                    <circle cx="530" cy="300" r="5" fill="#2563eb" />
                </svg>

            </div>

        </div>
    );
};
