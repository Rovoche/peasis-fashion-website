/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from '../data';

export default function ClientTestimonials() {
  return (
    <section id="testimonials" className="py-32 md:py-48 bg-[#0F0F0F] text-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Block */}
        <div className="mb-24 text-left max-w-xl">
          <span className="text-[10px] tracking-[0.45em] text-[#B89B5E] block mb-3 uppercase font-sans font-medium">
            Client Sentiments
          </span>
          <h2 className="font-serif-editorial text-4xl md:text-6xl font-light text-white tracking-wide leading-tight">
            Voices of Elegance
          </h2>
          <p className="font-sans text-xs text-gray-400 font-light mt-6 tracking-widest leading-relaxed">
            Words from the distinguished clients who have entrusted Maison PEASIS to compose their most precious sartorial moments.
          </p>
        </div>

        {/* Pure Typographical Columns without borders or icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between text-left"
            >
              <div>
                <p className="font-serif-editorial text-xl md:text-2xl text-gray-100 leading-relaxed italic font-light tracking-wide mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 mt-auto">
                <span className="block font-serif-editorial text-base text-white tracking-widest uppercase font-normal">
                  {t.author}
                </span>
                <span className="block text-[9px] tracking-[0.25em] text-[#B89B5E] uppercase mt-2 font-mono">
                  {t.garment}
                </span>
                <span className="block text-[9px] tracking-[0.25em] text-gray-500 uppercase mt-1 font-sans">
                  {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
