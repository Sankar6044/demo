import React from 'react';

interface ProductImageProps {
    src: string;
    alt: string;
    className?: string;
    sizes?: string;
    loading?: 'eager' | 'lazy';
}

export const ProductImage: React.FC<ProductImageProps> = ({
    src,
    alt,
    className = '',
    sizes = '100vw',
    loading = 'lazy',
}) => {
    const isJpeg = /\.jpe?g$/i.test(src);
    const imageBase = isJpeg ? src.replace(/\.jpe?g$/i, '') : src;
    const hasResponsiveVariants = src.startsWith('/images/products/');
    const modernSource = (format: 'avif' | 'webp') => {
        if (hasResponsiveVariants) {
            return `${imageBase}-480.${format} 480w, ${imageBase}-960.${format} 960w`;
        }
        return isJpeg ? `${imageBase}.${format}` : undefined;
    };

    return (
        <picture>
            {isJpeg && (
                <>
                    <source
                        type="image/avif"
                        srcSet={modernSource('avif')}
                        sizes={hasResponsiveVariants ? sizes : undefined}
                    />
                    <source
                        type="image/webp"
                        srcSet={modernSource('webp')}
                        sizes={hasResponsiveVariants ? sizes : undefined}
                    />
                </>
            )}
            <img
                src={src}
                alt={alt}
                loading={loading}
                decoding="async"
                sizes={hasResponsiveVariants ? sizes : undefined}
                className={className}
            />
        </picture>
    );
};
