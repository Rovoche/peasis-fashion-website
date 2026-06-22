/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewRoute } from '../types';
import { FEATURED_LOOKS } from '../data';

interface FeaturedCollectionsProps {
  onNavigate: (route: ViewRoute) => void;
}

export default function FeaturedCollections({ onNavigate }: FeaturedCollectionsProps) {
  const [heroLook, ...supportingLooks] = FEATURED_LOOKS;

  return (
    <section id="featured-collections" className="py-32 md:py-48 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-20 md:mb-28 text-left md:max-w-xl">
          <span className="text-[10px] tracking-[0.45em] text-[#B89B5E] block mb-3 uppercase font-sans">
            Featured Collections
          </span>
          <h2 className="font-serif-editorial text-4xl md:text-6xl font-light text-[#0F0F0F] tracking-wide leading-tight">
            Campaign Selections
          </h2>
          <p className="font-sans text-xs text-gray-500 font-light mt-6 tracking-widest leading-relaxed">
            A curated edit of signature silhouettes — presented with editorial restraint.
          </p>
        </div>

        <div
          onClick={() => heroLook.slug && onNavigate({ type: 'product', slug: heroLook.slug })}
          className={`relative mb-16 md:mb-24 overflow-hidden bg-gray-100 ${heroLook.slug ? 'cursor-pointer group' : ''}`}
        >
          <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden">
            <img
              src={heroLook.image}
              alt={heroLook.name}
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="text-[9px] tracking-[0.4em] text-[#B89B5E] block mb-2 uppercase font-sans">
                Signature Look
              </span>
              <h3 className="font-serif-editorial text-3xl md:text-5xl font-light text-white tracking-wide italic">
                {heroLook.name}
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {supportingLooks.map((look) => (
            <div
              key={`${look.slug}-${look.image}`}
              onClick={() => look.slug && onNavigate({ type: 'product', slug: look.slug })}
              className={`flex flex-col ${look.slug ? 'cursor-pointer group' : ''}`}
            >
              <div className="relative aspect-[3/4.2] overflow-hidden bg-gray-100 mb-5">
                <img
                  src={look.image}
                  alt={look.name}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif-editorial text-xl md:text-2xl font-light text-[#0F0F0F] tracking-wide group-hover:text-[#B89B5E] transition-colors duration-300">
                {look.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
