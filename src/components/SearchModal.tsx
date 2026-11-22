import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { productsData, ProductItem } from './ProductStrip';
import { ProductImage } from './ProductImage';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectProduct: (product: ProductItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectProduct }) => {
    const [searchTerm, setSearchTerm] = useState('');

    if (!isOpen) return null;

    const filteredProducts = productsData.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-16 px-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
            <div className="mb-auto max-h-[calc(100vh-5rem)] overflow-y-auto bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 relative">

                {/* Top Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-slate-800 font-bold">
                        <Search className="w-5 h-5 text-spizena-orange-500" />
                        <span>Search Agricultural Products & Spices</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Input Field */}
                <div className="py-4">
                    <input
                        type="text"
                        autoFocus
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Type chilli, turmeric, pepper, moringa, millets..."
                        className="w-full px-4 py-3 rounded-2xl border-2 border-spizena-orange-400/60 text-base focus:outline-none focus:border-spizena-orange-500 focus:ring-4 focus:ring-amber-100"
                    />
                </div>

                {/* Search Results List */}
                <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((prod) => (
                            <div
                                key={prod.id}
                                onClick={() => {
                                    onSelectProduct(prod);
                                    onClose();
                                }}
                                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-amber-50/80 border border-slate-100 hover:border-amber-200 transition-all cursor-pointer group"
                            >
                                <div className="flex items-center gap-3">
                                    <ProductImage
                                        src={prod.image}
                                        alt={prod.name}
                                        className="w-12 h-12 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                                    />
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-spizena-orange-600">
                                            {prod.name}
                                        </h4>
                                        <span className="text-[10px] font-bold uppercase tracking-wide text-spizena-orange-600">
                                            {prod.category}
                                        </span>
                                        <p className="text-xs text-slate-500 truncate max-w-sm">
                                            {prod.description}
                                        </p>
                                    </div>
                                </div>

                                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-spizena-orange-500 group-hover:translate-x-1 transition-all" />
                            </div>
                        ))
                    ) : (
                        <div className="py-8 text-center text-sm text-slate-400">
                            No products found matching "{searchTerm}"
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};
