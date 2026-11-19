import React from 'react';
import { X, CheckCircle2, Package, Globe, ShieldCheck } from 'lucide-react';
import { ProductItem } from './ProductStrip';

interface ProductDetailModalProps {
    product: ProductItem | null;
    onClose: () => void;
    onQuoteClick: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
    product,
    onClose,
    onQuoteClick,
}) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
            <div className="my-auto max-h-[calc(100vh-2rem)] overflow-y-auto bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">

                    {/* Left: Product Image */}
                    <div className="sm:col-span-5 bg-amber-50/60 p-4 rounded-2xl border border-amber-100/80 flex items-center justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-md"
                        />
                        {product.imageCredit && product.imageCreditUrl && product.imageLicense && product.imageLicenseUrl && (
                            <p className="mt-2 text-center text-[10px] leading-relaxed text-slate-500">
                                Photo by{' '}
                                <a href={product.imageCreditUrl} target="_blank" rel="noreferrer" className="underline hover:text-spizena-orange-600">
                                    {product.imageCredit}
                                </a>
                                {' · '}
                                <a href={product.imageLicenseUrl} target="_blank" rel="noreferrer" className="underline hover:text-spizena-orange-600">
                                    {product.imageLicense}
                                </a>
                            </p>
                        )}
                    </div>

                    {/* Right: Product Info & Specifications */}
                    <div className="sm:col-span-7 space-y-4">
                        <div>
                            <span className="text-xs font-black uppercase tracking-wider text-spizena-orange-500">
                                Premium Export Grade
                            </span>
                            <h2 className="text-2xl font-black text-spizena-blue-900 leading-tight">
                                {product.name}
                            </h2>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">
                            {product.description || 'Export quality processed agricultural produce sourced from certified Tamil Nadu farms.'}
                        </p>

                        <div className="space-y-2 pt-1 border-t border-slate-100">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                <span>Category: {product.category}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                <Package className="w-4 h-4 text-emerald-600" />
                                <span>Packaging options confirmed for your order</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                <Globe className="w-4 h-4 text-emerald-600" />
                                <span>International shipping options available</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                <span>Specifications confirmed against buyer requirements</span>
                            </div>
                        </div>

                        <div className="pt-2 flex items-center gap-3">
                            <button
                                onClick={() => {
                                    onClose();
                                    onQuoteClick();
                                }}
                                className="flex-1 bg-spizena-orange-500 text-white font-bold py-2.5 rounded-xl shadow-md hover:bg-spizena-orange-600 transition-colors text-xs sm:text-sm text-center"
                            >
                                Inquire Bulk Pricing →
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
