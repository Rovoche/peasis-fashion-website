/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function ThePEASISDifference() {
  return (
    <section id="brand-philosophy" className="py-28 md:py-40 bg-[#0F0F0F] text-[#F8F5F0] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
        <span className="font-serif-editorial text-[18vw] md:text-[24vw] tracking-[0.3em] font-bold text-white select-none">
          PEASIS
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-1.5 h-1.5 bg-[#B89B5E] rotate-45" />
          <div className="w-10 h-[1px] bg-white/20" />
          <div className="w-1.5 h-1.5 bg-[#B89B5E] rotate-45" />
        </div>

        <span className="text-[10px] tracking-[0.4em] text-[#B89B5E] block mb-6 uppercase">
          Brand Philosophy
        </span>

        <p className="font-serif-editorial text-3xl md:text-5xl font-light leading-snug md:leading-relaxed text-[#F8F5F0] tracking-wide mb-8 italic">
          "PEASIS creates garments that combine contemporary sophistication with exceptional craftsmanship. Every piece is thoughtfully designed and carefully produced to celebrate individuality, confidence, and timeless beauty."
        </p>

        <p className="font-sans text-xs text-gray-400 font-light leading-relaxed tracking-widest max-w-2xl mx-auto mb-10">
          From finished silhouettes to couture-quality construction, each commission is shaped for presence — not spectacle.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10 max-w-2xl mx-auto">
          <div>
            <h4 className="font-serif-editorial text-lg text-white font-medium tracking-widest">FINISHED FORM</h4>
            <span className="text-[9px] tracking-[0.2em] text-gray-500 uppercase mt-1 block">Garments That Command</span>
          </div>
          <div>
            <h4 className="font-serif-editorial text-lg text-white font-medium tracking-widest">COUTURE CRAFT</h4>
            <span className="text-[9px] tracking-[0.2em] text-gray-500 uppercase mt-1 block">Precision &amp; Detail</span>
          </div>
          <div>
            <h4 className="font-serif-editorial text-lg text-white font-medium tracking-widest">CLIENT RESULTS</h4>
            <span className="text-[9px] tracking-[0.2em] text-gray-500 uppercase mt-1 block">Designed To Be Remembered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
