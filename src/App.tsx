import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductStrip, ProductItem } from './components/ProductStrip';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { GlobalMarkets } from './components/GlobalMarkets';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BadgeCheck, ClipboardCheck, PackageCheck, Ship } from 'lucide-react';

export function App() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col antialiased text-slate-900 font-sans selection:bg-spizena-orange-500 selection:text-white">

            {/* Header / Navigation */}
            <Header
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                onOpenSearchModal={() => setIsSearchModalOpen(true)}
            />

            {/* Main Content Area */}
            <main className="flex-1">

                {/* Hero Section */}
                <Hero
                    onExploreClick={() => {
                        const el = document.getElementById('products');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    onQualityClick={() => {
                        const el = document.getElementById('quality');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                />

                {/* Product Strip ("OUR PREMIUM PRODUCTS") */}
                <ProductStrip
                    onSelectProduct={(product) => setSelectedProduct(product)}
                />

                {/* Trust / USP Bar */}
                <TrustBar />

                {/* 3-Column Feature Grid: About Spizena | Global Markets | Why Choose Us */}
                <section className="py-10 bg-white border-b border-slate-200/60">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                            {/* Left Column: About Spizena Exports */}
                            <AboutSection
                                onKnowMoreClick={() => {
                                    const el = document.getElementById('process');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                            />

                            {/* Center Column: Global Markets World Map */}
                            <GlobalMarkets />

                            {/* Right Column: Why Choose Us */}
                            <WhyChooseUs />

                        </div>
                    </div>
                </section>

                <section id="process" className="bg-slate-50 py-14 sm:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center mb-10">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-spizena-orange-600">
                                From farm to destination
                            </span>
                            <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-spizena-blue-900">
                                A clear, quality-first export process
                            </h2>
                            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                                Work directly with our team from product selection through shipment coordination.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                            {[
                                {
                                    title: 'Share your requirements',
                                    description: 'Tell us the product, quantity, destination and preferred specifications.',
                                    icon: ClipboardCheck,
                                },
                                {
                                    title: 'Confirm product & quote',
                                    description: 'Our team reviews availability, quality requirements and packaging options.',
                                    icon: PackageCheck,
                                },
                                {
                                    title: 'Quality preparation',
                                    description: 'We coordinate product checks and shipment documentation for your order.',
                                    icon: BadgeCheck,
                                },
                                {
                                    title: 'Coordinate delivery',
                                    description: 'We work with you on dispatch planning and international shipment details.',
                                    icon: Ship,
                                },
                            ].map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-black tracking-widest text-spizena-orange-600">
                                                STEP 0{index + 1}
                                            </span>
                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-spizena-blue-50 text-spizena-blue-700">
                                                <Icon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-4 text-base font-extrabold text-spizena-blue-900">{step.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                                    </article>
                                );
                            })}
                        </div>

                        <div className="mt-8 text-center">
                            <button
                                onClick={() => setIsQuoteModalOpen(true)}
                                className="rounded-full bg-spizena-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-spizena-orange-600"
                            >
                                Discuss your order
                            </button>
                        </div>
                    </div>
                </section>

            </main>

            {/* Dark Navy Footer */}
            <Footer />

            {/* Modals */}
            <QuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />

            <SearchModal
                isOpen={isSearchModalOpen}
                onClose={() => setIsSearchModalOpen(false)}
                onSelectProduct={(product) => setSelectedProduct(product)}
            />

            <ProductDetailModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
                onQuoteClick={() => setIsQuoteModalOpen(true)}
            />

        </div>
    );
}

export default App;
