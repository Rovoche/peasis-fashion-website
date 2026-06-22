/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { ArrowLeft, Send, Sparkles, MessageSquare } from 'lucide-react';
import { ViewRoute } from '../types';
import { CONTACT } from '../data';

interface ConsultationFormProps {
  onNavigate: (route: ViewRoute) => void;
}

export default function ConsultationForm({ onNavigate }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    collectionOfInterest: 'couture',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, this would send an email or store in a DB.
    // For PEASIS, we simulate success beautifully with slow luxury animations.
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const message = `Hello PEASIS,\n\nI would like to book a Private Bespoke Consultation.\n\nMy Details:\n- Name: ${formData.name || 'Interested Client'}\n- Collection: ${formData.collectionOfInterest.toUpperCase()}\n- Target Event Date: ${formData.eventDate || 'To Be Arranged'}\n- Message: ${formData.details || 'Interested in a custom fitting.'}\n\nPlease let me know your availability.\n\nThank you.`;
    window.open(`${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-32 pb-24 md:pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Back navigation */}
        <button
          onClick={() => onNavigate({ type: 'home' })}
          className="group flex items-center space-x-2 text-xs tracking-widest text-gray-500 hover:text-[#B89B5E] mb-12 focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>BACK TO HOME</span>
        </button>

        {/* Framing Box */}
        <div className="bg-white border border-[#B89B5E]/20 p-8 md:p-16 shadow-lg">
          
          {isSubmitted ? (
            <div className="text-center py-12 flex flex-col items-center max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#B89B5E]/10 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#B89B5E]" />
              </div>
              <span className="text-[#B89B5E] text-[10px] tracking-[0.4em] font-medium block mb-2 uppercase">
                Reservation Pending
              </span>
              <h2 className="font-serif-editorial text-3xl md:text-4xl text-[#0F0F0F] tracking-wide mb-6">
                A Representative Shall Attend To You.
              </h2>
              <p className="font-sans text-xs md:text-sm text-gray-500 font-light leading-relaxed tracking-wider mb-8">
                We have registered your interest in our bespoke couture services. A member of our Lagos atelier team will review your timeline and contact you within 24 business hours to finalize your secure fitting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button
                  onClick={handleWhatsAppBooking}
                  className="flex-1 flex items-center justify-center space-x-2 bg-[#0F0F0F] text-white hover:bg-[#B89B5E] hover:text-[#0F0F0F] text-xs font-semibold tracking-widest py-4 transition-all duration-300 uppercase"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Speed up via WhatsApp</span>
                </button>
                <button
                  onClick={() => onNavigate({ type: 'home' })}
                  className="flex-1 border border-gray-300 text-gray-700 hover:border-black hover:text-black text-xs font-semibold tracking-widest py-4 transition-all duration-300 uppercase"
                >
                  Return Home
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Header Title */}
              <div className="mb-12 border-b border-gray-100 pb-8">
                <span className="text-[#B89B5E] text-[10px] tracking-[0.4em] block mb-3 uppercase">
                  Private Salon Booking
                </span>
                <h1 className="font-serif-editorial text-3xl md:text-5xl font-light text-[#0F0F0F] tracking-wide uppercase">
                  Begin Your Tailored Story
                </h1>
                <p className="font-sans text-xs text-gray-500 font-light mt-4 leading-relaxed tracking-wider">
                  Select your appointment parameters below. For bridal requirements and custom 1-of-1 beaded commissions, we highly recommend booking at least six weeks in advance.
                </p>
              </div>

              {/* Form details */}
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label className="text-[10px] tracking-widest text-[#B89B5E] font-medium uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Somto Okeke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-b border-gray-300 focus:border-[#B89B5E] py-2 text-xs tracking-wider font-light focus:outline-none bg-transparent transition-colors duration-300 text-[#1A1A1A]"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col">
                    <label className="text-[10px] tracking-widest text-[#B89B5E] font-medium uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-b border-gray-300 focus:border-[#B89B5E] py-2 text-xs tracking-wider font-light focus:outline-none bg-transparent transition-colors duration-300 text-[#1A1A1A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone field */}
                  <div className="flex flex-col">
                    <label className="text-[10px] tracking-widest text-[#B89B5E] font-medium uppercase mb-2">
                      Telephone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 ... (or international country code)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-b border-gray-300 focus:border-[#B89B5E] py-2 text-xs tracking-wider font-light focus:outline-none bg-transparent transition-colors duration-300 text-[#1A1A1A]"
                    />
                  </div>

                  {/* Date field */}
                  <div className="flex flex-col">
                    <label className="text-[10px] tracking-widest text-[#B89B5E] font-medium uppercase mb-2">
                      Target Event Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="border-b border-gray-300 focus:border-[#B89B5E] py-2 text-xs tracking-wider font-light focus:outline-none bg-transparent transition-colors duration-300 text-gray-500"
                    />
                  </div>
                </div>

                {/* Collection Dropdown */}
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-widest text-[#B89B5E] font-medium uppercase mb-2">
                    Collection of Interest
                  </label>
                  <select
                    value={formData.collectionOfInterest}
                    onChange={(e) => setFormData({ ...formData, collectionOfInterest: e.target.value })}
                    className="border-b border-gray-300 focus:border-[#B89B5E] py-2 text-xs tracking-wider font-light focus:outline-none bg-transparent text-[#1A1A1A]"
                  >
                    <option value="everyday-elegance">EVERYDAY ELEGANCE (Made-to-Order)</option>
                    <option value="occasion-wear">OCCASION WEAR (Statement Statement pieces)</option>
                    <option value="couture">COUTURE (Bespoke 1-of-1 bridal & special occasions)</option>
                  </select>
                </div>

                {/* Details field */}
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-widest text-[#B89B5E] font-medium uppercase mb-2">
                    Style, Silhouette, or Measurement details (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your desired fit, shoulder lines, trim detail preferences, or custom measurements (bust, waist, hips)..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="border border-gray-200 focus:border-[#B89B5E] p-3 text-xs tracking-wider font-light focus:outline-none bg-[#F8F5F0]/30 transition-colors duration-300 text-[#1A1A1A] resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  {/* Subtle actions */}
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center space-x-2 bg-[#0F0F0F] text-white hover:bg-[#B89B5E] hover:text-[#0F0F0F] text-xs font-semibold tracking-widest py-4 transition-all duration-300 uppercase"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Atelier Request</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="flex-1 flex items-center justify-center space-x-2 border border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-white text-xs font-semibold tracking-widest py-4 transition-all duration-300 uppercase"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Initiate on WhatsApp</span>
                  </button>
                </div>

              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
