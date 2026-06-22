/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewRoute } from '../types';

interface HeroProps {
  onNavigate: (route: ViewRoute) => void;
}

const HERO_IMAGES = [
  {
    url: '/images/lavender-beaded-bow-sleeve-occasion-dress.customer-in-event-jpg.jpg',
    alt: 'Lavender beaded occasion dress — client portrait',
  },
  {
    url: '/images/lavender-beaded-bow-sleeve-occasion-dress.customer-in-event-2.jpg',
    alt: 'Lavender beaded occasion dress — evening presence',
  },
];

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home-hero"
      className="relative min-h-screen w-full bg-[#0A0A0A] text-[#F8F5F0] overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {HERO_IMAGES.map((image) => (
          <div key={image.url} className="relative min-h-[50vh] lg:min-h-screen">
            <img
              src={image.url}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent pointer-events-none" />

      <div className="absolute inset-0 z-10 flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
          <span className="text-[10px] sm:text-xs tracking-[0.55em] text-[#B89B5E] font-medium uppercase font-sans block mb-4">
            PEASIS — Lagos Haute Couture
          </span>

          <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-7xl font-normal tracking-wide leading-[1.05] text-white max-w-4xl mb-5">
            Where Elegance Takes Form.
          </h1>

          <p className="font-sans text-sm sm:text-base text-gray-300 font-light max-w-xl leading-relaxed tracking-widest mb-10">
            Crafted in Lagos. Designed to be remembered.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate({ type: 'collection', id: 'occasion-wear' })}
              className="bg-white text-[#0A0A0A] hover:bg-[#B89B5E] hover:text-white text-[10px] tracking-[0.35em] uppercase font-medium px-8 py-4 transition-all duration-300"
            >
              Explore The Collection
            </button>
            <button
              onClick={() => onNavigate({ type: 'consultation' })}
              className="border border-white/30 hover:border-[#B89B5E] hover:text-[#B89B5E] text-white text-[10px] tracking-[0.35em] uppercase font-medium px-8 py-4 transition-all duration-300 bg-black/20 backdrop-blur-sm"
            >
              Begin Your Piece
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
