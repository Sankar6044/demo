import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react';

interface HeroProps {
    onExploreClick: () => void;
    onQualityClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onQualityClick }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            subtitle: 'PREMIUM QUALITY AGRICULTURAL PRODUCTS',
            titleLine1: 'GLOBAL EXPORTS',
            titleLine2: 'FROM INDIA',
            tagline: 'Pure • Natural • Trusted',
            description: 'We bring the rich flavors and natural goodness of Indian farms to global markets with uncompromising quality, trust and sustainability.',
        },
        {
            subtitle: 'AUTHENTIC SPICES & GRAINS FROM TAMIL NADU',
            titleLine1: 'FARM FRESH',
            titleLine2: 'SPICE EXPORTS',
            tagline: 'Natural • Organic • Certified',
            description: 'Directly sourced from verified Indian farmers, ensuring maximum freshness, aroma, and long-lasting shelf life for worldwide buyers.',
        },
        {
            subtitle: 'SUSTAINABLE INTERNATIONAL AGRICULTURAL LOGISTICS',
            titleLine1: 'TRUSTED GLOBAL',
            titleLine2: 'LOGISTICS PARTNER',
            tagline: 'Reliable • On-Time • Compliant',
            description: 'Equipped with international quality standards, ISO certified processing, and end-to-end air & sea cargo tracking.',
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const activeSlideData = slides[currentSlide];

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-spizena-blue-700 min-h-[580px] lg:min-h-[640px] flex items-center">
            {/* Background Export Image Layer */}
            <div className="absolute inset-0 z-0">
                {/* Sky, Ship, Plane export image */}
                <img
                    src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2000&q=85"
                    srcSet="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85 1200w, https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2000&q=85 2000w"
                    sizes="100vw"
                    alt="Global Agricultural Exports Background"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-center opacity-85 mix-blend-overlay"
                />
                {/* Soft Blue Ocean Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-spizena-blue-900/90 via-sky-800/60 to-spizena-blue-800/80"></div>

                {/* World Map Connectivity Arc Lines Visual */}
                <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" viewBox="0 0 1200 600" fill="none">
                    {/* Curved connection arcs */}
                    <path d="M 200 350 Q 450 120 750 250 T 1100 200" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="6 6" />
                    <path d="M 150 200 Q 500 80 850 350" stroke="#fcd34d" strokeWidth="2" strokeDasharray="4 4" />

                    {/* Pulsing Location Nodes */}
                    <circle cx="200" cy="350" r="6" fill="#f58220" className="animate-ping" />
                    <circle cx="200" cy="350" r="5" fill="#f58220" />

                    <circle cx="750" cy="250" r="6" fill="#38bdf8" />
                    <circle cx="1100" cy="200" r="6" fill="#ffc107" />
                    <circle cx="500" cy="180" r="4" fill="#ffffff" />
                </svg>
            </div>

            {/* Main Container */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Hero Text Box */}
                    <div className="lg:col-span-6 text-white space-y-5 animate-fadeIn">

                        {/* Top Subtitle Pill */}
                        <div className="inline-block bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-sky-100 uppercase">
                                {activeSlideData.subtitle}
                            </span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-1">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] drop-shadow-md">
                                <span className="text-white block">{activeSlideData.titleLine1}</span>
                                <span className="text-spizena-yellow-400 block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-spizena-yellow-400 to-amber-200">
                                    {activeSlideData.titleLine2}
                                </span>
                            </h1>
                        </div>

                        {/* Tagline Badge */}
                        <div className="inline-flex items-center gap-2 bg-spizena-blue-900/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-spizena-yellow-400/40 text-spizena-yellow-400 font-bold text-sm sm:text-base">
                            <span>{activeSlideData.tagline}</span>
                            <Leaf className="w-4 h-4 text-emerald-400" />
                        </div>

                        {/* Supporting Paragraph */}
                        <p className="text-slate-100 text-base sm:text-lg max-w-xl leading-relaxed font-normal opacity-95">
                            {activeSlideData.description}
                        </p>

                        {/* Buttons */}
                        <div className="pt-2 flex flex-wrap items-center gap-4">
                            <button
                                onClick={onExploreClick}
                                className="bg-gradient-to-r from-spizena-yellow-400 to-amber-500 text-slate-900 px-7 py-3.5 rounded-full font-black text-base hover:from-amber-400 hover:to-spizena-yellow-400 shadow-hero-btn hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5"
                            >
                                <span>Explore Our Products</span>
                                <span className="text-xl leading-none">→</span>
                            </button>

                            <button
                                onClick={onQualityClick}
                                className="border-2 border-white/80 text-white hover:bg-white/10 px-7 py-3.5 rounded-full font-bold text-base backdrop-blur-sm transition-all duration-300 hover:border-white"
                            >
                                Our Quality
                            </button>
                        </div>
                    </div>

                    {/* Right Hero Visuals: Spices Bowl Arrangement & Wooden Signboard */}
                    <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
                        <div className="relative w-full max-w-[620px]">

                            {/* Spices Image Bowl Display */}
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm bg-white/10 group">
                                <img
                                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85"
                                    srcSet="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=85 800w, https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85 1200w"
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    alt="Authentic Indian Spices in Wooden Bowls"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Soft Gradient Overlay at base */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                            </div>

                            {/* Wooden Signboard Badge (Right side callout) */}
                            <div className="absolute -bottom-6 -right-2 sm:right-4 z-20 bg-amber-100/95 border-2 border-amber-800/40 rounded-xl p-3 sm:p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-[200px] sm:max-w-[220px]">
                                <div className="border border-dashed border-amber-800/30 rounded-lg p-2.5 bg-amber-50 text-center">
                                    <span className="block font-script text-xl sm:text-2xl font-bold text-amber-950 leading-tight">
                                        From Our Farms
                                    </span>
                                    <span className="block font-script text-xl sm:text-2xl font-bold text-spizena-orange-600 leading-tight">
                                        to Your Table
                                    </span>
                                    <div className="mt-1 flex items-center justify-center text-emerald-600 gap-1">
                                        <Leaf className="w-3.5 h-3.5 fill-emerald-600" />
                                        <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-800">100% Organic</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Leaf Accent Top Left */}
                            <div className="absolute -top-6 -left-6 z-20 text-emerald-400 opacity-90 animate-bounce">
                                <Leaf className="w-12 h-12 transform -rotate-45" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Carousel Navigation Arrows & Pagination Dots */}
                <div className="mt-8 flex items-center justify-between">

                    {/* Left Carousel Pagination Dots */}
                    <div className="flex items-center gap-2">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`transition-all duration-300 rounded-full ${currentSlide === idx
                                        ? 'w-8 h-3 bg-spizena-yellow-400'
                                        : 'w-3 h-3 bg-white/50 hover:bg-white'
                                    }`}
                                title={`Slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Side Nav Buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 border border-white/40 flex items-center justify-center transition-all shadow-md active:scale-95"
                            title="Previous Slide"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 border border-white/40 flex items-center justify-center transition-all shadow-md active:scale-95"
                            title="Next Slide"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};
