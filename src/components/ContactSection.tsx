/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, MessageCircle, Phone } from 'lucide-react';
import { ViewRoute } from '../types';
import { CONTACT } from '../data';

interface ContactSectionProps {
  onNavigate: (route: ViewRoute) => void;
}

export default function ContactSection({ onNavigate }: ContactSectionProps) {
  const whatsAppMessage = encodeURIComponent(
    'Hello PEASIS,\n\nI would like to inquire about your collections.\n\nThank you.'
  );

  return (
    <section id="contact" className="py-32 md:py-48 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <span className="text-[10px] tracking-[0.45em] text-[#B89B5E] block mb-3 uppercase font-sans">
              Contact
            </span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl font-light text-[#0F0F0F] tracking-wide leading-tight mb-6">
              Begin The Conversation
            </h2>
            <p className="font-sans text-xs text-gray-500 font-light tracking-widest leading-relaxed mb-10 max-w-md">
              For orders, fittings, and couture inquiries — reach the PEASIS atelier directly.
            </p>

            <ul className="space-y-5 font-sans text-xs tracking-wider text-gray-600 font-light">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#B89B5E]" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#0F0F0F] transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#B89B5E]" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-[#0F0F0F] transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-[#B89B5E]" />
                <a
                  href={`${CONTACT.whatsappUrl}?text=${whatsAppMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0F0F0F] transition-colors"
                >
                  WhatsApp {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-[#0F0F0F] text-[#F8F5F0] p-10 md:p-14">
            <span className="text-[10px] tracking-[0.4em] text-[#B89B5E] block mb-4 uppercase">
              Fastest Response
            </span>
            <h3 className="font-serif-editorial text-3xl md:text-4xl font-light tracking-wide mb-6">
              Order on WhatsApp
            </h3>
            <p className="font-sans text-xs text-gray-400 font-light leading-relaxed tracking-widest mb-8">
              Ready-to-wear and couture inquiries are handled directly via WhatsApp — no checkout, no cart, no payment gateway.
            </p>
            <a
              href={`${CONTACT.whatsappUrl}?text=${whatsAppMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 w-full sm:w-auto bg-[#B89B5E] text-[#0F0F0F] hover:bg-white transition-all duration-300 py-4 px-8 text-[10px] font-semibold tracking-[0.3em] uppercase"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate({ type: 'consultation' })}
              className="mt-4 block text-[10px] tracking-[0.3em] uppercase text-gray-400 hover:text-[#B89B5E] transition-colors"
            >
              Or request a consultation →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
