/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewRoute } from '../types';
import { PRODUCTS, SIGNATURE_SLUGS } from '../data';

interface SignaturePiecesProps {
  onNavigate: (route: ViewRoute) => void;
}

export default function SignaturePieces({ onNavigate }: SignaturePiecesProps) {
  const signatureItems = SIGNATURE_SLUGS
    .map((slug) => PRODUCTS.find((product) => product.slug === slug))
    .filter(Boolean);

  const formatPrice = (price?: number) => {
    if (!price) return 'Consultation Required';
    return `From ₦${price.toLocaleString()}`;
  };

  return (
    <section id="signature-pieces" className="py-32 md:py-48 bg-[#0F0F0F] text-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32">
          <div>
            <span className="text-[10px] tracking-[0.45em] text-[#B89B5E] block mb-3 uppercase font-sans">
              Signature Pieces
            </span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl font-light tracking-wide leading-tight">
              The Maison Edit
            </h2>
          </div>
          <p className="font-sans text-xs text-gray-400 font-light max-w-sm mt-6 md:mt-0 leading-relaxed tracking-widest">
            Defining silhouettes selected for their craftsmanship, presence, and client impact.
          </p>
        </div>

        <div className="space-y-32 md:space-y-40">
          {signatureItems.map((product, idx) => {
            if (!product) return null;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={product.id}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div
                  onClick={() => onNavigate({ type: 'product', slug: product.slug })}
                  className="w-full lg:w-3/5 group cursor-pointer overflow-hidden bg-[#1A1A1A]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-2/5 flex flex-col justify-center text-left">
                  <span className="text-[#B89B5E] text-[10px] tracking-[0.45em] font-medium uppercase mb-3 font-sans">
                    {product.collectionId.replace('-', ' ')}
                  </span>

                  <h3
                    onClick={() => onNavigate({ type: 'product', slug: product.slug })}
                    className="font-serif-editorial text-3xl md:text-4xl font-light tracking-wide mb-4 hover:text-[#B89B5E] cursor-pointer transition-colors duration-300"
                  >
                    {product.name}
                  </h3>

                  <div className="font-serif-editorial text-lg italic font-normal tracking-wide mb-6 text-gray-300">
                    {formatPrice(product.price)}
                  </div>

                  <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed tracking-widest mb-8">
                    {product.description}
                  </p>

                  <button
                    onClick={() => onNavigate({ type: 'product', slug: product.slug })}
                    className="group self-start flex items-center space-x-3 text-[10px] tracking-[0.35em] font-medium text-white hover:text-[#B89B5E] transition-all duration-350 focus:outline-none"
                  >
                    <span>VIEW PIECE</span>
                    <span className="w-8 h-[1px] bg-current transition-all duration-300 group-hover:w-16" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
