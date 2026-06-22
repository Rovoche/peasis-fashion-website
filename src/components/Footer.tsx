/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewRoute } from '../types';
import { Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { CONTACT } from '../data';

interface FooterProps {
  onNavigate: (route: ViewRoute) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="peasis-footer" className="bg-[#0F0F0F] text-[#F8F5F0] pt-20 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col text-left">
              <div className="mb-4 text-white">
                <BrandLogo className="h-11 md:h-14" showText={true} variant="light" />
              </div>
              <p className="font-sans text-xs text-gray-500 font-light mt-4 max-w-sm leading-relaxed tracking-wider">
                A Lagos fashion house devoted to couture quality, refined construction, and garments designed to be remembered.
              </p>
            </div>
            <div className="hidden lg:flex items-center space-x-2 text-gray-500 text-[10px] tracking-widest mt-8 uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#B89B5E]" />
              <span>Victoria Island, Lagos, Nigeria</span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[10px] tracking-[0.3em] text-[#B89B5E] block mb-6 font-semibold uppercase">
              Collections
            </span>
            <ul className="space-y-4 font-sans text-xs tracking-wider text-gray-400 font-light">
              <li>
                <button
                  onClick={() => onNavigate({ type: 'collection', id: 'everyday-elegance' })}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Everyday Elegance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'collection', id: 'occasion-wear' })}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Occasion Wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'collection', id: 'couture' })}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Bespoke Couture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: 'consultation' })}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Begin Your Piece
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <span className="text-[10px] tracking-[0.3em] text-[#B89B5E] block mb-6 font-semibold uppercase">
              Contact
            </span>
            <ul className="space-y-4 font-sans text-xs tracking-wider text-gray-400 font-light">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-500" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-white transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-gray-500" />
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-gray-500" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>

            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center space-x-2 bg-[#B89B5E] text-[#0F0F0F] hover:bg-white transition-all duration-300 py-3 px-6 text-[10px] tracking-[0.25em] uppercase font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-widest text-gray-600 uppercase font-light">
          <div>
            &copy; {currentYear} PEASIS. All Rights Reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-gray-500">LAGOS • HAUTE COUTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
