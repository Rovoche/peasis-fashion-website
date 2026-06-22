/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ViewRoute } from '../types';

interface CoutureShowcaseProps {
  onNavigate: (route: ViewRoute) => void;
}

export default function CoutureShowcase({ onNavigate }: CoutureShowcaseProps) {
  return (
    <section id="couture-showcase" className="py-32 md:py-48 bg-[#0F0F0F] text-[#F8F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32">
          <div className="max-w-xl">
            <span className="text-[10px] tracking-[0.45em] text-[#B89B5E] uppercase block mb-3 font-sans">The Pinnacle of Atelier Craft</span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-7xl font-light tracking-wide text-white leading-[1.1]">
              Couture Showcase
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-gray-400 font-light max-w-sm mt-6 md:mt-0 tracking-widest leading-relaxed">
            Where each gown is modeled individually with hours of draping, micro-pleating, and hand-embroidered Swarovski detail.
          </p>
        </div>

        {/* Asymmetrical High Fashion Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start pb-12">
          
          {/* Main Dominant Image Column (Left) - Occupies 7 columns */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative aspect-[3/4.5] w-full overflow-hidden bg-[#1A1A1A]">
              <img
                src="/images/white-lace-corset-bridal-gown-2.jpg"
                alt="LA MARIÉE COUTURE Bridal Silhouette"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Luxury Overlay Accent */}
              <div className="absolute inset-0 bg-black/5" />
            </div>
            
            <div className="mt-4 max-w-lg">
              <span className="text-[9px] tracking-[0.35em] text-[#B89B5E] uppercase font-sans font-medium">L'ART DE LA MARIÉE</span>
              <h3 className="font-serif-editorial text-2xl md:text-3xl font-light text-white italic mt-1">The Grand Wedding Corset</h3>
              <p className="font-sans text-xs text-gray-400 font-light leading-relaxed mt-3 tracking-widest">
                A seamless integration of corded floral lace layered with translucent micro-tulle, supporting a tailored internal bustier sculpted for weeks in our atelier.
              </p>
            </div>
          </div>

          {/* Staggered Secondary Image Column (Right) - Occupies 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-12 lg:pt-32">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[3/4.2] w-full overflow-hidden bg-[#1A1A1A]">
                <img
                  src="/images/emerald-green-beaded-illusion-gown-2.jpg"
                  alt="Emerald Green Beaded Illusion Gown Portrait"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>
              <div className="mt-2 text-left">
                <span className="text-[9px] tracking-[0.35em] text-[#B89B5E] uppercase font-sans font-medium">Bespoke Eveningwear</span>
                <h4 className="font-serif-editorial text-xl md:text-2xl font-light text-white italic mt-1">Swarovski Illusion Netting</h4>
                <p className="font-sans text-xs text-gray-400 font-light leading-relaxed mt-2 tracking-widest">
                  Deep forest green crystals hand-stitched into sheer tulle panels create an elegant second-skin effect.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-start lg:pl-12 pt-8 border-t border-gray-800/60">
              <span className="text-[10px] tracking-[0.4em] text-[#B89B5E] uppercase block mb-2 font-mono">Curated Experience</span>
              <p className="font-sans text-xs text-gray-400 font-light leading-relaxed tracking-wider mb-6">
                Maison PEASIS invites you to discover couture through a private bridal or occasion wear styling session.
              </p>
              <button
                onClick={() => onNavigate({ type: 'consultation' })}
                className="bg-transparent border border-[#B89B5E]/30 hover:border-[#B89B5E] text-[#B89B5E] hover:text-white px-8 py-4 text-[10px] tracking-[0.35em] uppercase font-medium transition-all duration-300"
              >
                REQUEST DESIGN DRAFT
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
