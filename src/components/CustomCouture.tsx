/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewRoute } from '../types';

interface CustomCoutureProps {
  onNavigate: (route: ViewRoute) => void;
}

export default function CustomCouture({ onNavigate }: CustomCoutureProps) {
  return (
    <section id="custom-couture" className="py-32 md:py-48 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[3/4.5] overflow-hidden bg-gray-100">
            <img
              src="/images/white-lace-corset-bridal-gown-2.jpg"
              alt="White lace corset bridal gown"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <span className="text-[10px] tracking-[0.45em] text-[#B89B5E] block mb-3 uppercase font-sans">
              Bespoke Atelier
            </span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl font-light text-[#0F0F0F] tracking-wide leading-tight mb-6">
              Custom Couture
            </h2>
            <p className="font-serif-editorial text-2xl md:text-3xl text-[#0F0F0F] italic mb-8">
              Starting from ₦150,000
            </p>
            <p className="font-sans text-xs text-gray-600 font-light leading-relaxed tracking-widest mb-8">
              Final pricing depends on fabric selection, embellishment level, garment complexity, and measurements.
            </p>

            <ul className="space-y-4 mb-10 text-xs tracking-widest text-gray-600 font-light uppercase">
              <li className="flex items-start space-x-3">
                <span className="text-[#B89B5E] mt-1">—</span>
                <span>Fabric selection</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#B89B5E] mt-1">—</span>
                <span>Embellishment level</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#B89B5E] mt-1">—</span>
                <span>Garment complexity</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#B89B5E] mt-1">—</span>
                <span>Measurements &amp; bespoke fitting</span>
              </li>
            </ul>

            <button
              onClick={() => onNavigate({ type: 'consultation' })}
              className="border border-[#0F0F0F] text-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-white text-[10px] tracking-[0.35em] uppercase font-medium px-8 py-4 transition-all duration-300"
            >
              Begin Your Piece
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
