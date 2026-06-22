/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from 'react';
import { ViewRoute, Product } from '../types';
import { ArrowLeft, Sparkles, Clock, Ruler, MessageCircle, ZoomIn, ShieldCheck } from 'lucide-react';
import { PRODUCTS, CONTACT } from '../data';

interface ProductDetailsProps {
  productSlug: string;
  onNavigate: (route: ViewRoute) => void;
}

export default function ProductDetails({ productSlug, onNavigate }: ProductDetailsProps) {
  const product = PRODUCTS.find((p) => p.slug === productSlug);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  if (!product) {
    return (
      <div className="py-32 text-center text-sm font-light tracking-widest text-gray-500">
        Garment not found.
      </div>
    );
  }

  // Generate WhatsApp message
  const generateWhatsAppLink = () => {
    const message = `Hello PEASIS,\n\nI am interested in the ${product.name}.\n\nPlease send more information regarding sizing, production timeline, and ordering.\n\nThank you.`;
    return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  const handleZoomMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const formatPrice = (price?: number) => {
    if (!price || product.collectionId === 'couture') {
      return (
        <span className="text-[#B89B5E] text-sm uppercase tracking-[0.2em] font-sans font-medium flex items-center space-x-1.5 mt-2">
          <Sparkles className="w-4 h-4" />
          <span>Made Exclusively For You</span>
        </span>
      );
    }
    return `Starting From ₦${price.toLocaleString()}`;
  };

  return (
    <article className="min-h-screen bg-[#F8F5F0] pt-32 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Navigation Breadcrumb */}
        <button
          onClick={() => onNavigate({ type: 'collection', id: product.collectionId })}
          className="group flex items-center space-x-2 text-xs tracking-widest text-gray-500 hover:text-[#B89B5E] mb-12 focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="uppercase">BACK TO {product.collectionId.replace('-', ' ')}</span>
        </button>

        {/* Core Product Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Gallery Module (Left columns) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
            
            {/* Main Stage with Detail Zoom feature */}
            <div className="flex-1 bg-white p-4 border border-gray-200/50 shadow-sm relative overflow-hidden">
              <div
                className="relative aspect-[3/4] cursor-zoom-in overflow-hidden bg-gray-100"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleZoomMouseMove}
              >
                <img
                  src={product.images[activeImageIdx]}
                  alt={`${product.name} Main View`}
                  className={`w-full h-full object-cover object-center transition-transform duration-200 ${
                    isZoomed ? 'scale-[2.2] absolute' : 'scale-100'
                  }`}
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                        }
                      : undefined
                  }
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Zoom Hint badge */}
                {!isZoomed && (
                  <div className="absolute bottom-4 right-4 bg-[#0F0F0F]/65 backdrop-blur-sm text-white p-2 flex items-center space-x-1 text-[9px] tracking-widest uppercase">
                    <ZoomIn className="w-3.5 h-3.5 text-[#B89B5E]" />
                    <span>Hover to examine close</span>
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnails rail on the side */}
            <div className="flex md:flex-col gap-3 md:w-28 order-last md:order-first">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`aspect-square w-20 md:w-full border-2 p-1 bg-white transition-all duration-350 focus:outline-none ${
                    idx === activeImageIdx
                      ? 'border-[#B89B5E]'
                      : 'border-transparent hover:border-gray-200'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>

          </div>

          {/* Editorial specifications module (Right columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Category tag */}
            <span className="text-[#B89B5E] text-[10px] tracking-[0.4em] font-medium block uppercase mb-2">
              {product.collectionId.replace('-', ' ')}
            </span>

            {/* Product Title */}
            <h1 className="font-serif-editorial text-3xl md:text-5xl font-light text-[#0F0F0F] tracking-wide mb-3">
              {product.name}
            </h1>

            {/* Display Starting Price */}
            <div className="font-serif-editorial text-xl font-medium text-[#0F0F0F] mb-8 pb-6 border-b border-gray-300/40">
              {formatPrice(product.price)}
            </div>

            {/* Garment Description */}
            <p className="font-sans text-xs md:text-sm text-gray-600 font-light leading-relaxed tracking-wider mb-8">
              {product.description}
            </p>

            {/* Technical Detail rows */}
            <div className="space-y-4 border-t border-b border-gray-200/50 py-6 mb-8">
              <div>
                <span className="text-[10px] tracking-widest text-[#B89B5E] block uppercase mb-1">Fabric & Finishings</span>
                <p className="font-sans text-xs text-gray-800 font-medium tracking-wide">
                  {product.fabric}
                </p>
              </div>

              <div className="flex items-center space-x-1.5 pt-3">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-[10px] tracking-widest text-gray-500 uppercase">Estimated production window:</span>
                <span className="text-xs font-semibold text-[#0F0F0F] tracking-wide">{product.skyTimeline}</span>
              </div>
            </div>

            {/* Sizing display with button trigger */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] tracking-widest text-gray-500 uppercase">Available sizing options:</span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="group flex items-center space-x-1 text-[10px] tracking-widest text-[#B89B5E] font-medium hover:text-[#0F0F0F] transition-colors focus:outline-none"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>VIEW SIZE GUIDE</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="border border-gray-300/50 bg-white/40 px-3.5 py-2 text-[10px] tracking-widest font-medium text-gray-700 uppercase"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Elite WhatsApp Action triggers */}
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-[#0F0F0F] text-[#F8F5F0] hover:bg-[#B89B5E] hover:text-[#0F0F0F] transition-all duration-300 py-4 px-6 text-xs font-bold tracking-[0.25em] shadow-md focus:outline-none uppercase"
            >
              <MessageCircle className="w-4 h-4" />
              <span>INQUIRE VIA WHATSAPP</span>
            </a>

            <div className="flex items-center space-x-2 mt-4 justify-center text-gray-400 text-[10px] tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B89B5E]" />
              <span>100% Handcrafted Under Lagos Fair Labor Codes</span>
            </div>

          </div>

        </div>

      </div>

      {/* Elegant Size Guide Overlay Modal */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0F0F]/65 backdrop-blur-sm">
          <div className="bg-[#F8F5F0] border border-[#B89B5E]/30 w-full max-w-xl p-8 md:p-10 shadow-2xl relative">
            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-black focus:outline-none font-sans text-xs tracking-widest"
            >
              CLOSE (X)
            </button>
            
            <span className="text-[#B89B5E] text-[10px] tracking-[0.4em] font-medium block mb-2 uppercase">
              Peasis Measurement standard
            </span>
            <h2 className="font-serif-editorial text-2xl md:text-3xl text-[#0F0F0F] tracking-wide mb-6 uppercase">
              Maison Size Chart
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-xs tracking-wider border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 font-semibold text-gray-700">
                    <th className="py-2">SIZE</th>
                    <th className="py-2">BUST (IN)</th>
                    <th className="py-2">WAIST (IN)</th>
                    <th className="py-2">HIPS (IN)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/60 font-light text-gray-600">
                  <tr>
                    <td className="py-2.5 font-medium text-black">UK 6</td>
                    <td className="py-2.5">32</td>
                    <td className="py-2.5">24</td>
                    <td className="py-2.5">35</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-black">UK 8</td>
                    <td className="py-2.5">33.5</td>
                    <td className="py-2.5">25.5</td>
                    <td className="py-2.5">36.5</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-black">UK 10</td>
                    <td className="py-2.5">35</td>
                    <td className="py-2.5">27</td>
                    <td className="py-2.5">38</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-black">UK 12</td>
                    <td className="py-2.5">37</td>
                    <td className="py-2.5">29</td>
                    <td className="py-2.5">40</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-black">UK 14</td>
                    <td className="py-2.5">39</td>
                    <td className="py-2.5">31</td>
                    <td className="py-2.5">42</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-black">UK 16</td>
                    <td className="py-2.5">41</td>
                    <td className="py-2.5">33</td>
                    <td className="py-2.5">44</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <span className="text-[#B89B5E] text-[10px] tracking-widest block uppercase mb-2 font-medium">Have customized details?</span>
              <p className="font-sans text-[11px] text-gray-500 font-light leading-relaxed">
                If you choose <strong className="text-black font-medium">Custom Fit</strong>, our ateliers will reach out upon WhatsApp inquiry receipt to request exact shoulder-to-hem, bust-to-waist, and structural lengths for an absolute tailor-fit masterpiece.
              </p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
