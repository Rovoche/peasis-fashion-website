/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewRoute, Collection } from '../types';
import { PRODUCTS, COLLECTIONS } from '../data';
import { ArrowLeft, Sparkles, Clock, Compass } from 'lucide-react';

interface CollectionDetailsProps {
  collectionId: Collection['id'];
  onNavigate: (route: ViewRoute) => void;
}

export default function CollectionDetails({ collectionId, onNavigate }: CollectionDetailsProps) {
  const collection = COLLECTIONS.find((c) => c.id === collectionId);
  const products = PRODUCTS.filter((p) => p.collectionId === collectionId);

  if (!collection) {
    return (
      <div className="py-32 text-center text-sm font-light tracking-widest text-gray-500">
        Collection not found.
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#F8F5F0] pt-32 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Back navigation */}
        <button
          onClick={() => onNavigate({ type: 'home' })}
          className="group flex items-center space-x-2 text-xs tracking-widest text-gray-500 hover:text-[#B89B5E] mb-12 focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>BACK TO HOME</span>
        </button>

        {/* Collection Editorial Header banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-16 md:mb-24 pb-12 border-b border-gray-300/40">
          <div className="lg:col-span-7">
            <span className="text-[#B89B5E] text-[10px] tracking-[0.4em] font-medium block mb-3 uppercase">
              {collectionId === 'couture' ? 'BESPOKE SALON' : 'MADE TO ORDER SELECTION'}
            </span>
            <h1 className="font-serif-editorial text-4xl md:text-7xl font-light text-[#0F0F0F] tracking-wide uppercase">
              {collection.name}
            </h1>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="font-sans text-xs md:text-sm text-gray-600 font-light leading-relaxed tracking-wider">
              {collection.description}
            </p>
            <div className="flex items-center space-x-2 bg-[#0F0F0F] text-[#F8F5F0] px-4 py-2 self-start w-fit text-[10px] tracking-widest uppercase">
              <Clock className="w-3.5 h-3.5 text-[#B89B5E]" />
              <span className="font-medium text-gray-300">ESTIMATED LEAD TIME:</span>
              <span className="text-white font-semibold ml-1">{collection.leadTime}</span>
            </div>
          </div>
        </div>

        {/* Product List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => onNavigate({ type: 'product', slug: product.slug })}
              className="group cursor-pointer flex flex-col justify-between h-full bg-white p-4 border border-gray-200/40 hover:shadow-xl transition-all duration-500"
            >
              <div>
                {/* Large responsive square image */}
                <div className="image-zoom-container relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 shadow-sm">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="image-zoom-img w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  {/* Luxury corner stays */}
                  <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/15 pointer-events-none transition-all duration-500 group-hover:border-white/35" />
                  
                  {/* Category accent tag */}
                  <div className="absolute top-6 left-6 bg-[#0F0F0F] text-white/90 text-[8px] tracking-[0.25em] py-1.5 px-3 uppercase">
                    PEASIS ATELIER
                  </div>
                </div>

                <div className="px-2">
                  <h3 className="font-serif-editorial text-xl md:text-2xl text-[#0F0F0F] tracking-wider mb-2 group-hover:text-[#B89B5E] transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  {/* Dynamic Pricing according to Couture & Standard settings */}
                  <div className="font-serif-editorial text-sm font-semibold tracking-wide text-gray-800 mb-4 italic">
                    {collectionId === 'couture' ? (
                      <span className="text-[#B89B5E] not-italic tracking-[0.1em] text-xs uppercase font-sans font-medium flex items-center space-x-1.5">
                        <Sparkles className="w-3 h-3" />
                        <span>Made Exclusively For You</span>
                      </span>
                    ) : (
                      <span>Starting From ₦{product.price?.toLocaleString()}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 px-2 mt-4 flex items-center justify-between">
                <span className="text-[10px] tracking-widest text-gray-400 font-light uppercase">
                  Details & Order Form
                </span>
                <span className="w-6 h-[1px] bg-gray-300 transition-all duration-300 group-hover:w-12 group-hover:bg-[#B89B5E]" />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic couture consultation block if they are on Couture page */}
        {collectionId === 'couture' && (
          <div className="mt-24 md:mt-32 border border-[#B89B5E]/30 bg-white/40 p-12 text-center max-w-4xl mx-auto flex flex-col items-center">
            <Compass className="w-8 h-8 text-[#B89B5E] mb-6" />
            <h3 className="font-serif-editorial text-2xl md:text-3xl text-[#0F0F0F] tracking-wider mb-4 uppercase">
              Begin Your Custom Commission
            </h3>
            <p className="font-sans text-xs md:text-sm text-gray-500 font-light max-w-xl leading-relaxed mb-8">
              Bespoke Bridal Gown commissions and Couture Occasion Wear require direct consultation with our Lagos lead draping curators. Let us create a visual testament tailored to your story.
            </p>
            <button
              onClick={() => onNavigate({ type: 'consultation' })}
              className="bg-[#0F0F0F] text-[#F8F5F0] hover:bg-[#B89B5E] text-xs font-medium tracking-[0.2em] py-4 px-8 transition-all duration-300"
            >
              BOOK BESPOKE INQUIRY
            </button>
          </div>
        )}

      </div>
    </article>
  );
}
