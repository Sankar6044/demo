import React, { useState } from 'react';
import { ArrowUpRight, Cookie, Leaf, Wheat } from 'lucide-react';

export type ProductCategory =
    | 'Fresh Vegetables'
    | 'Premium Spices'
    | 'South Indian Snacks'
    | 'Other Agricultural Products';

export interface ProductItem {
    id: string;
    name: string;
    image: string;
    description: string;
    category: ProductCategory;
    imageCredit?: string;
    imageCreditUrl?: string;
    imageLicense?: string;
    imageLicenseUrl?: string;
}

export const productCategories: ProductCategory[] = [
    'Fresh Vegetables',
    'Premium Spices',
    'South Indian Snacks',
    'Other Agricultural Products',
];

export const productsData: ProductItem[] = [
    {
        id: 'onion',
        name: 'Onion',
        image: '/images/catalog/onion.jpg',
        description: 'Fresh, carefully sorted onions selected for export quality.',
        category: 'Fresh Vegetables',
    },
    {
        id: 'potato',
        name: 'Potato',
        image: '/images/catalog/potato.jpg',
        description: 'Farm-fresh potatoes graded for size and quality.',
        category: 'Fresh Vegetables',
    },
    {
        id: 'tomato',
        name: 'Tomato',
        image: '/images/catalog/tomato.jpg',
        description: 'Fresh red tomatoes handled with care from farm to shipment.',
        category: 'Fresh Vegetables',
    },
    {
        id: 'drumstick',
        name: 'Drumstick (Moringa)',
        image: '/images/catalog/drumstick.jpg',
        description: 'Fresh green moringa pods, selected and packed for export.',
        category: 'Fresh Vegetables',
    },
    {
        id: 'green-chilli',
        name: 'Green Chilli',
        image: '/images/catalog/green-chilli.jpg',
        description: 'Fresh green chillies with vibrant colour and a bold flavour.',
        category: 'Fresh Vegetables',
    },
    {
        id: 'brinjal',
        name: 'Brinjal (Eggplant)',
        image: '/images/catalog/brinjal.jpg',
        description: 'Fresh eggplant sorted for colour, firmness and size.',
        category: 'Fresh Vegetables',
    },
    {
        id: 'okra',
        name: 'Okra (Ladies Finger)',
        image: '/images/catalog/okra.jpg',
        description: 'Tender green okra selected for freshness and consistent grading.',
        category: 'Fresh Vegetables',
    },
    {
        id: 'carrot',
        name: 'Carrot',
        image: '/images/catalog/carrot.jpg',
        description: 'Fresh, crisp carrots cleaned and graded for export.',
        category: 'Fresh Vegetables',
    },
    {
        id: 'cabbage',
        name: 'Cabbage',
        image: '/images/catalog/cabbage.jpg',
        description: 'Fresh green cabbage heads selected for quality and freshness.',
        category: 'Fresh Vegetables',
    },
    {
        id: 'cauliflower',
        name: 'Cauliflower',
        image: '/images/catalog/cauliflower.jpg',
        description: 'Fresh cauliflower heads carefully graded and packed.',
        category: 'Fresh Vegetables',
    },
    {
        id: 'dry-red-chilli',
        name: 'Dry Red Chilli',
        image: '/images/catalog/dry-red-chilli.jpg',
        description: 'Stemless and with-stem premium Indian S17 Teja and Sanam red chillies.',
        category: 'Premium Spices',
    },
    {
        id: 'turmeric',
        name: 'Turmeric',
        image: '/images/catalog/turmeric.jpg',
        description: 'High-curcumin turmeric fingers and pure powder from Salem and Nizamabad.',
        category: 'Premium Spices',
    },
    {
        id: 'black-pepper',
        name: 'Black Pepper',
        image: '/images/catalog/black-pepper.jpg',
        description: 'Malabar garbled black pepper, export graded for bold size and aroma.',
        category: 'Premium Spices',
    },
    {
        id: 'cumin',
        name: 'Cumin Seeds',
        image: '/images/catalog/cumin-seeds.jpg',
        description: 'Machine-cleaned cumin seeds selected for aroma and export quality.',
        category: 'Premium Spices',
    },
    {
        id: 'coriander',
        name: 'Coriander Seeds',
        image: '/images/catalog/coriander-seeds.jpg',
        description: 'Carefully cleaned coriander seeds with a fresh, aromatic flavour.',
        category: 'Premium Spices',
    },
    {
        id: 'cardamom',
        name: 'Cardamom',
        image: '/images/catalog/cardamom.jpg',
        description: 'Aromatic green cardamom pods selected for colour and fragrance.',
        category: 'Premium Spices',
    },
    {
        id: 'cloves',
        name: 'Cloves',
        image: '/images/catalog/cloves.jpg',
        description: 'Whole aromatic cloves, cleaned and sorted for export.',
        category: 'Premium Spices',
    },
    {
        id: 'cinnamon',
        name: 'Cinnamon',
        image: '/images/catalog/cinnamon.jpg',
        description: 'Fragrant cinnamon sticks prepared for international buyers.',
        category: 'Premium Spices',
    },
    {
        id: 'fenugreek-seeds',
        name: 'Fenugreek Seeds',
        image: '/images/catalog/fenugreek-seeds.jpg',
        description: 'Cleaned fenugreek seeds with their characteristic warm aroma.',
        category: 'Premium Spices',
    },
    {
        id: 'fennel-seeds',
        name: 'Fennel Seeds',
        image: '/images/catalog/fennel-seeds.jpg',
        description: 'Fragrant whole fennel seeds, carefully cleaned and graded.',
        category: 'Premium Spices',
    },
    {
        id: 'murukku',
        name: 'Murukku',
        image: '/images/catalog/murukku.jpg',
        description: 'Traditional crunchy Tamil Nadu murukku, packed for freshness.',
        category: 'South Indian Snacks',
    },
    {
        id: 'thattai',
        name: 'Thattai',
        image: '/images/catalog/thattai.jpg',
        description: 'Crisp, savoury traditional thattai made for sharing.',
        category: 'South Indian Snacks',
    },
    {
        id: 'mixture',
        name: 'Mixture',
        image: '/images/catalog/mixture.jpg',
        description: 'A savoury South Indian snack mix with a satisfying crunch.',
        category: 'South Indian Snacks',
    },
    {
        id: 'ribbon-pakoda',
        name: 'Ribbon Pakoda',
        image: '/images/catalog/ribbon-pakoda.jpg',
        description: 'Light, crisp ribbon pakoda made using a traditional recipe.',
        category: 'South Indian Snacks',
    },
    {
        id: 'nippattu',
        name: 'Nippattu',
        image: '/images/catalog/nippattu.jpg',
        description: 'Crunchy savoury rice-flour discs, traditionally prepared.',
        category: 'South Indian Snacks',
    },
    {
        id: 'seedai',
        name: 'Seedai',
        image: '/images/catalog/seedai.jpg',
        description: 'Bite-sized traditional rice snacks with a crisp finish.',
        category: 'South Indian Snacks',
    },
    {
        id: 'thenkuzhal',
        name: 'Thenkuzhal',
        image: '/images/catalog/thenkuzhal.jpg',
        description: 'A light and crisp South Indian rice-flour snack.',
        category: 'South Indian Snacks',
    },
    {
        id: 'karasev',
        name: 'Karasev',
        image: '/images/catalog/karasev.jpg',
        description: 'Crunchy, savoury karasev seasoned in a classic South Indian style.',
        category: 'South Indian Snacks',
    },
    {
        id: 'mannapparai-murukku',
        name: 'Mannapparai Murukku',
        image: '/images/catalog/mannapparai-murukku.jpg',
        description: 'Traditional hand-crafted Mannapparai-style crunchy murukku.',
        category: 'South Indian Snacks',
    },
    {
        id: 'banana-chips',
        name: 'Banana Chips',
        image: '/images/catalog/banana-chips.jpg',
        description: 'Crisp banana chips prepared and packed to preserve freshness.',
        category: 'South Indian Snacks',
    },
    {
        id: 'moringa-powder',
        name: 'Moringa Powder',
        image: '/images/products/moringa-powder.jpg',
        description: '100% organic sun-dried Moringa oleifera leaf powder.',
        category: 'Other Agricultural Products',
        imageCredit: 'Satyalatha',
        imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Moringa_leaves_powder.jpg',
        imageLicense: 'CC BY-SA 4.0',
        imageLicenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    },
    {
        id: 'curry-leaf-powder',
        name: 'Curry Leaf Powder',
        image: '/images/products/curry-leaf-powder.jpg',
        description: 'Aromatic farm-fresh curry leaves, gently dried and milled into powder.',
        category: 'Other Agricultural Products',
        imageCredit: 'Prakrutim',
        imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Curry_Leaf_Powder_And_Idli.jpg',
        imageLicense: 'CC BY-SA 4.0',
        imageLicenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    },
    {
        id: 'millets',
        name: 'Millets',
        image: '/images/products/millets.jpg',
        description: 'Pearl millet, finger millet, foxtail millet and little millet.',
        category: 'Other Agricultural Products',
        imageCredit: 'Sengai Podhuvan',
        imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Food_grain_pearl_millet_1.jpg',
        imageLicense: 'CC BY-SA 3.0',
        imageLicenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    },
    {
        id: 'coconut',
        name: 'Coconut',
        image: '/images/products/coconut.jpg',
        description: 'Semi-husked fresh Pollachi coconuts and desiccated coconut.',
        category: 'Other Agricultural Products',
        imageCredit: 'Ivar Leidus',
        imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Coconuts_-_single_and_cracked_open.jpg',
        imageLicense: 'CC BY-SA 4.0',
        imageLicenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    },
    {
        id: 'banana-leaf',
        name: 'Banana Leaf',
        image: '/images/products/banana-leaf.jpg',
        description: 'Fresh natural banana leaves for culinary and food-service use.',
        category: 'Other Agricultural Products',
        imageCredit: 'Vít Baisa',
        imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Banana_leaf_in_a_botanical_garden.jpg',
        imageLicense: 'CC BY-SA 4.0',
        imageLicenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    },
    {
        id: 'coconut-oil',
        name: 'Coconut Oil',
        image: '/images/products/coconut-oil.jpg',
        description: 'Coconut oil produced by a small agricultural farm in Coimbatore, Tamil Nadu.',
        category: 'Other Agricultural Products',
        imageCredit: 'deadrat',
        imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Coconut_oil_bottle_in_the_background_of_coconuts_from_Kaleeswari_Farm.jpg',
        imageLicense: 'CC BY-SA 4.0',
        imageLicenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    },
];

const categoryDetails: Record<ProductCategory, { subtitle: string; Icon: typeof Leaf }> = {
    'Fresh Vegetables': {
        subtitle: 'Farm fresh  |  Naturally grown  |  Global quality',
        Icon: Leaf,
    },
    'Premium Spices': {
        subtitle: 'Rich aroma  |  Pure taste  |  Global demand',
        Icon: Wheat,
    },
    'South Indian Snacks': {
        subtitle: 'Traditional taste  |  Homemade quality  |  Packed for export',
        Icon: Cookie,
    },
    'Other Agricultural Products': {
        subtitle: 'Carefully sourced  |  Quality checked  |  Ready for export',
        Icon: Wheat,
    },
};

interface ProductStripProps {
    onSelectProduct?: (product: ProductItem) => void;
}

export const ProductStrip: React.FC<ProductStripProps> = ({ onSelectProduct }) => {
    const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Fresh Vegetables');
    const visibleProducts = productsData.filter((product) => product.category === selectedCategory);
    const category = categoryDetails[selectedCategory];
    const CategoryIcon = category.Icon;

    return (
        <section id="products" className="border-y border-slate-200 bg-slate-50 py-10 sm:py-14">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-spizena-orange-600">
                            Our product range
                        </span>
                        <h2 className="mt-1 text-3xl font-black tracking-tight text-spizena-blue-900 sm:text-4xl">
                            Fresh from India
                        </h2>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                            Browse our export products by category. Select any item to see its details.
                        </p>
                    </div>
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-800 ring-1 ring-emerald-200">
                        <Leaf className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                        Farm-sourced • Export-ready
                    </div>
                </div>

                <div
                    aria-label="Product categories"
                    className="mb-6 flex gap-2 overflow-x-auto pb-2 sm:mb-8 sm:flex-wrap"
                    role="tablist"
                >
                    {productCategories.map((categoryName) => {
                        const selected = selectedCategory === categoryName;
                        const count = productsData.filter((product) => product.category === categoryName).length;

                        return (
                            <button
                                key={categoryName}
                                type="button"
                                role="tab"
                                aria-selected={selected}
                                onClick={() => setSelectedCategory(categoryName)}
                                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-colors ${
                                    selected
                                        ? 'border-spizena-blue-900 bg-spizena-blue-900 text-white shadow-md'
                                        : 'border-slate-200 bg-white text-slate-700 hover:border-spizena-orange-400 hover:text-spizena-orange-600'
                                }`}
                            >
                                {categoryName}
                                <span className={`rounded-full px-2 py-0.5 text-xs ${selected ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div
                    id="product-category-panel"
                    role="tabpanel"
                    aria-label={selectedCategory}
                    className="overflow-hidden rounded-3xl bg-gradient-to-br from-spizena-blue-900 via-spizena-blue-800 to-emerald-950 p-4 shadow-xl sm:p-6 lg:p-8"
                >
                    <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/15 pb-4 sm:mb-6">
                        <div>
                            <div className="mb-1 flex items-center gap-2 text-xs font-bold text-amber-200 sm:text-sm">
                                <CategoryIcon className="h-4 w-4" aria-hidden="true" />
                                {category.subtitle}
                            </div>
                            <h3 className="text-2xl font-black text-white sm:text-3xl">{selectedCategory}</h3>
                        </div>
                        <span className="hidden rounded-full border border-amber-300/80 px-3 py-2 text-center text-[10px] font-black uppercase tracking-wider text-amber-200 sm:inline-flex sm:text-xs">
                            {visibleProducts.length === 10 ? 'Top 10' : `${visibleProducts.length} products`}
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
                        {visibleProducts.map((product, index) => (
                            <article
                                key={product.id}
                                className="group overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-white/30 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <button
                                    type="button"
                                    onClick={() => onSelectProduct?.(product)}
                                    aria-label={`View ${product.name} details`}
                                    className="block w-full text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-amber-300"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-amber-50">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-black text-spizena-blue-900 shadow-sm">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <span className="flex min-h-12 items-center justify-between gap-2 bg-white px-3 py-2.5 text-xs font-extrabold text-slate-900 sm:text-sm">
                                        <span>{product.name}</span>
                                        <ArrowUpRight className="h-4 w-4 shrink-0 text-spizena-orange-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                                    </span>
                                </button>
                                {product.imageCredit && product.imageCreditUrl && product.imageLicense && product.imageLicenseUrl && (
                                    <p className="px-3 pb-2 text-[9px] leading-tight text-slate-500">
                                        Photo: <a href={product.imageCreditUrl} target="_blank" rel="noreferrer" className="underline hover:text-spizena-orange-600">{product.imageCredit}</a>
                                        {' · '}
                                        <a href={product.imageLicenseUrl} target="_blank" rel="noreferrer" className="underline hover:text-spizena-orange-600">{product.imageLicense}</a>
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
