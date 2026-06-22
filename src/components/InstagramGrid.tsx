/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram } from 'lucide-react';

export default function InstagramGrid() {
  const images = [
    {
      url: '/images/white-lace-corset-bridal-gown-2.jpg',
      tag: '@peasis.maison'
    },
    {
      url: '/images/emerald-green-beaded-illusion-gown-2.jpg',
      tag: '@peasis.maison'
    },
    {
      url: '/images/lavender-beaded-bow-sleeve-occasion-dress-2.jpg',
      tag: '@peasis.maison'
    },
    {
      url: '/images/black-fit-and-flare-midi-dress-2.jpg',
      tag: '@peasis.maison'
    },
    {
      url: '/images/Ankara peplum top (2).jpg',
      tag: '@peasis.maison'
    },
    {
      url: '/images/Handkerchief hem dress (2).jpg',
      tag: '@peasis.maison'
    }
  ];

  return (
    <section id="instagram-gallery" className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Visual Line Accent and Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-[10px] tracking-[0.4em] text-[#B89B5E] block mb-2 uppercase">Lagos Chronicles</span>
            <h2 className="font-serif-editorial text-2xl md:text-3xl font-light text-[#0F0F0F] tracking-wide">
              Maison on Feed
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs tracking-widest text-gray-500 hover:text-[#B89B5E] transition-colors duration-300"
          >
            <Instagram className="w-4 h-4" />
            <span className="hidden sm:inline">FOLLOW @PEASIS.MAISON</span>
          </a>
        </div>

        {/* Beautiful Image Squares */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden bg-gray-200 border border-gray-200/50 shadow-sm"
            >
              <img
                src={img.url}
                alt={`Studio Grid Detail ${idx + 1}`}
                className="w-full h-full object-cover object-center transition-transform duration-[1500ms] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Luxury gold hover grid reveal overlay */}
              <div className="absolute inset-0 bg-[#0F0F0F]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center">
                <Instagram className="w-6 h-6 text-white mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500" />
                <span className="text-[10px] tracking-widest text-white/90 font-light transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {img.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
