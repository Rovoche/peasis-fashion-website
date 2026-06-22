/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from 'lucide-react';
import { ViewRoute } from '../types';
import { CONTACT, PRODUCTS } from '../data';

interface ReadyToWearProps {
  onNavigate: (route: ViewRoute) => void;
}

export default function ReadyToWear({ onNavigate }: ReadyToWearProps) {
  const readyToWearItems = PRODUCTS.filter(
    (product) => product.collectionId === 'everyday-elegance' && product.price
  );

  const orderOnWhatsApp = (productName: string) => {
    const message = `Hello PEASIS,\n\nI would like to order the ${productName}.\n\nPlease confirm availability, sizing, and production timeline.\n\nThank you.`;
    return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="ready-to-wear" className="py-32 md:py-48 bg-[#0F0F0F] text-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl mb-20 md:mb-28">
          <span className="text-[10px] tracking-[0.45em] text-[#B89B5E] block mb-3 uppercase font-sans">
            Ready-To-Wear
          </span>
          <h2 className="font-serif-editorial text-4xl md:text-6xl font-light tracking-wide leading-tight mb-6">
            Available To Order
          </h2>
          <p className="font-sans text-xs text-gray-400 font-light tracking-widest leading-relaxed">
            Made To Order · Production Time: 3–5 Days · Ordering via WhatsApp only
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {readyToWearItems.map((product) => (
            <article
              key={product.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-b border-white/10 pb-16 md:pb-20 last:border-b-0 last:pb-0"
            >
              <div
                onClick={() => onNavigate({ type: 'product', slug: product.slug })}
                className="lg:col-span-5 cursor-pointer group overflow-hidden bg-[#1A1A1A]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <button
                  onClick={() => onNavigate({ type: 'product', slug: product.slug })}
                  className="text-left focus:outline-none"
                >
                  <h3 className="font-serif-editorial text-3xl md:text-4xl font-light tracking-wide mb-3 hover:text-[#B89B5E] transition-colors">
                    {product.name}
                  </h3>
                </button>

                <p className="font-serif-editorial text-xl text-[#B89B5E] italic mb-4">
                  ₦{product.price?.toLocaleString()}
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-6">
                  <span>Available To Order</span>
                  <span>Made To Order</span>
                  <span>Production Time: 3–5 Days</span>
                </div>

                <p className="font-sans text-xs text-gray-400 font-light leading-relaxed tracking-widest mb-8 max-w-xl">
                  {product.description}
                </p>

                <a
                  href={orderOnWhatsApp(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-[#B89B5E] text-[#0F0F0F] hover:bg-white transition-all duration-300 py-4 px-8 text-[10px] font-semibold tracking-[0.3em] uppercase"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
