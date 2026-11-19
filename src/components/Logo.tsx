import React from 'react';

interface LogoProps {
    light?: boolean;
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ light = false, className = '' }) => {
    return (
        <a
            href="#"
            aria-label="SPIZENA EXPORTS home"
            className={`inline-flex flex-shrink-0 items-center gap-2.5 group ${className}`}
        >
            <img
                src="/spizena-logo.png"
                alt="SPIZENA EXPORTS"
                className="h-14 w-14 rounded-full border border-slate-200 bg-white object-cover shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16"
            />
            <span className="flex min-w-0 flex-col leading-none">
                <span className={`text-lg font-black tracking-tight sm:text-xl ${light ? 'text-white' : 'text-spizena-blue-700'}`}>
                    SPIZENA
                </span>
                <span className={`mt-1 text-[11px] font-extrabold tracking-[0.25em] ${light ? 'text-spizena-orange-400' : 'text-spizena-orange-500'}`}>
                    EXPORTS
                </span>
                <span className={`mt-1.5 whitespace-nowrap text-[8px] font-semibold tracking-tight sm:text-[9px] ${light ? 'text-slate-300' : 'text-spizena-blue-700'}`}>
                    Pure Products <span className="px-0.5 text-spizena-orange-500">|</span> Global Quality <span className="px-0.5 text-spizena-orange-500">|</span> Indian Origin
                </span>
            </span>
        </a>
    );
};
