import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Search, ChevronDown, Menu, X, Leaf } from 'lucide-react';

interface HeaderProps {
    onOpenQuoteModal: () => void;
    onOpenSearchModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onOpenSearchModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('Home');
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#about' },
        { name: 'Products', href: '#products', hasDropdown: true },
        { name: 'Quality', href: '#quality' },
        { name: 'Global Markets', href: '#global-markets' },
        { name: 'Our Process', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ];

    const productCategories = [
        'Dry Red Chilli',
        'Turmeric Powder & Finger',
        'Black Pepper',
        'Cumin Seeds',
        'Coriander Seeds',
        'Moringa Powder',
        'Curry Leaf Powder',
        'Millets & Grains',
        'Fresh Coconuts',
        'Banana Leaf'
    ];

    return (
        <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2.5' : 'py-3.5 border-b border-slate-100'
            }`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">

                    {/* Left: Logo */}
                    <Logo />

                    {/* Navigation Links (Desktop) */}
                    <nav className="hidden xl:flex items-center gap-6 text-[15px] font-semibold text-slate-700">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.hasDropdown ? (
                                    <button
                                        onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                                        onMouseEnter={() => setIsProductsDropdownOpen(true)}
                                        className={`flex items-center gap-1 hover:text-spizena-orange-500 transition-colors py-2 ${activeNav === item.name ? 'text-spizena-orange-500 font-bold' : ''
                                            }`}
                                    >
                                        {item.name}
                                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-500" />
                                    </button>
                                ) : (
                                    <a
                                        href={item.href}
                                        onClick={() => setActiveNav(item.name)}
                                        className={`relative py-2 transition-colors hover:text-spizena-orange-500 ${activeNav === item.name ? 'text-spizena-orange-500 font-bold' : ''
                                            }`}
                                    >
                                        {item.name}
                                        {activeNav === item.name && (
                                            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-spizena-orange-500 rounded-full" />
                                        )}
                                    </a>
                                )}

                                {/* Dropdown Menu for Products */}
                                {item.hasDropdown && (
                                    <div
                                        onMouseLeave={() => setIsProductsDropdownOpen(false)}
                                        className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-3 transition-all duration-200 ${isProductsDropdownOpen
                                                ? 'opacity-100 visible translate-y-1'
                                                : 'opacity-0 invisible translate-y-3'
                                            }`}
                                    >
                                        <div className="px-4 py-2 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            Product Portfolio
                                        </div>
                                        {productCategories.map((prod) => (
                                            <a
                                                key={prod}
                                                href="#products"
                                                onClick={() => setIsProductsDropdownOpen(false)}
                                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-spizena-orange-600 font-medium transition-colors"
                                            >
                                                {prod}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right Actions: Search + Get a Quote + Handwritten Badge */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Search Icon */}
                        <button
                            onClick={onOpenSearchModal}
                            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-spizena-orange-500 hover:border-spizena-orange-400 hover:bg-amber-50/50 transition-all shadow-sm"
                            title="Search Spices & Products"
                        >
                            <Search className="w-4 h-4" />
                        </button>

                        {/* Get a Quote Button */}
                        <button
                            onClick={onOpenQuoteModal}
                            className="bg-gradient-to-r from-spizena-orange-500 to-spizena-orange-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:shadow-hero-btn hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
                        >
                            <span>Get a Quote</span>
                            <span className="text-base leading-none">→</span>
                        </button>

                        {/* Handwritten Script Badge (Far Right) */}
                        <div className="hidden 2xl:flex flex-col items-end leading-tight text-spizena-blue-900 ml-2 font-script text-lg select-none">
                            <span className="text-slate-800 font-semibold tracking-wide">Indian Goodness</span>
                            <span className="text-slate-700">for a Healthier</span>
                            <div className="relative flex items-center gap-1 font-bold text-spizena-green-600">
                                <span>World</span>
                                <Leaf className="w-4 h-4 text-spizena-green-500 rotate-45 inline-block" />
                                {/* Green curved underline accent */}
                                <svg className="absolute -bottom-1 left-0 w-full h-2 text-spizena-green-500" viewBox="0 0 100 20" fill="none">
                                    <path d="M 0 10 Q 50 18 100 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="flex xl:hidden items-center gap-2">
                        <button
                            onClick={onOpenSearchModal}
                            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600"
                        >
                            <Search className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-slate-700 hover:text-spizena-orange-500 focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer Navigation */}
            {isMobileMenuOpen && (
                <div className="xl:hidden bg-white border-t border-slate-100 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                                setActiveNav(item.name);
                                setIsMobileMenuOpen(false);
                            }}
                            className={`block py-2 text-base font-semibold border-b border-slate-100 ${activeNav === item.name ? 'text-spizena-orange-500' : 'text-slate-700'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="pt-2 flex flex-col gap-3">
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                onOpenQuoteModal();
                            }}
                            className="w-full bg-spizena-orange-500 text-white py-3 rounded-full font-bold text-center shadow-md flex items-center justify-center gap-2"
                        >
                            <span>Get a Quote</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};
