/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewRoute } from '../types';

interface FinalCallToActionProps {
  onNavigate: (route: ViewRoute) => void;
}

export default function FinalCallToAction({ onNavigate }: FinalCallToActionProps) {
  return (
    <section id="final-cta" className="py-28 md:py-36 bg-[#0F0F0F] text-[#F8F5F0] relative overflow-hidden">
      
      {/* Structural accent background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full border border-[#B89B5E]/30 blur-3xl" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full border border-[#B89B5E]/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        {/* Intricacy crown accent */}
        <div className="w-10 h-[1px] bg-[#B89B5E] mb-8" />

        <span className="text-[10px] tracking-[0.4em] text-[#B89B5E] block mb-4 uppercase">
          Maison peasis Invitation
        </span>

        {/* Master headline */}
        <h2 className="font-serif-editorial text-4xl md:text-7xl font-light text-white tracking-wide mb-6">
          Your Next Signature Piece Awaits.
        </h2>

        {/* Supporting quiet text */}
        <p className="font-sans text-xs md:text-sm text-gray-400 font-light max-w-xl leading-relaxed tracking-wider mb-12">
          Experience slow luxury tailored meticulously to celebrate you. Join our international clientele and secure a garment engineered for timeless moments.
        </p>

        {/* Functional Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-md">
          <button
            onClick={() => onNavigate({ type: 'collection', id: 'everyday-elegance' })}
            className="w-full sm:w-auto bg-[#F8F5F0] text-[#0F0F0F] hover:bg-[#B89B5E] hover:text-[#0F0F0F] text-xs font-medium tracking-[0.2em] px-8 py-4 transition-all duration-300"
          >
            BROWSE COLLECTIONS
          </button>
          <button
            onClick={() => onNavigate({ type: 'consultation' })}
            className="w-full sm:w-auto bg-transparent border border-white/30 hover:border-[#B89B5E] hover:text-[#B89B5E] text-xs font-medium tracking-[0.2em] px-8 py-4 transition-all duration-300 text-white"
          >
            START A CONSULTATION
          </button>
        </div>

      </div>
    </section>
  );
}
