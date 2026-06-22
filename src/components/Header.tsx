/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { ViewRoute } from '../types';
import BrandLogo from './BrandLogo';
import { CONTACT } from '../data';

interface HeaderProps {
  currentRoute: ViewRoute;
  onNavigate: (route: ViewRoute) => void;
}

export default function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (route: ViewRoute) => {
    onNavigate(route);
    setIsOpen(false);
  };

  const isActive = (route: ViewRoute) => {
    if (route.type === currentRoute.type) {
      if (route.type === 'collection' && currentRoute.type === 'collection') {
        return route.id === currentRoute.id;
      }
      return true;
    }
    return false;
  };

  const navLinks = [
    { label: 'HOME', route: { type: 'home' } as ViewRoute },
    { label: 'EVERYDAY ELEGANCE', route: { type: 'collection', id: 'everyday-elegance' } as ViewRoute },
    { label: 'OCCASION WEAR', route: { type: 'collection', id: 'occasion-wear' } as ViewRoute },
    { label: 'COUTURE', route: { type: 'collection', id: 'couture' } as ViewRoute },
  ];

  return (
    <header
      id="peasis-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F8F5F0]/95 backdrop-blur-md py-4 border-b border-gray-200/50 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick({ type: 'home' })}
          className="focus:outline-none"
        >
          <BrandLogo className="h-9 md:h-11" showText={true} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.route)}
              className={`relative py-1 font-sans text-xs tracking-[0.2em] font-medium transition-colors duration-300 focus:outline-none ${
                isActive(link.route)
                  ? 'text-[#B89B5E]'
                  : 'text-[#1A1A1A] hover:text-[#B89B5E]'
              }`}
            >
              {link.label}
              {isActive(link.route) && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B89B5E]" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 border border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-[#0F0F0F] text-[10px] font-medium tracking-[0.2em] px-5 py-3 transition-all duration-300"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WHATSAPP</span>
          </a>
          <button
            onClick={() => handleLinkClick({ type: 'consultation' })}
            className="group flex items-center space-x-3 bg-[#0F0F0F] text-[#F8F5F0] hover:bg-[#B89B5E] text-xs font-medium tracking-[0.2em] px-6 py-3 transition-all duration-300 shadow-sm"
          >
            <span>BEGIN YOUR PIECE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#0F0F0F] hover:text-[#B89B5E] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[77px] bg-[#F8F5F0] z-40 lg:hidden flex flex-col justify-between px-8 py-12 border-t border-gray-200/50">
          <div className="flex flex-col space-y-8">
            <div className="pb-4 border-b border-gray-200/50">
              <BrandLogo className="h-9" showText={true} />
            </div>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.route)}
                className={`text-left font-serif-editorial text-2xl tracking-[0.1em] transition-colors duration-300 focus:outline-none ${
                  isActive(link.route) ? 'text-[#B89B5E]' : 'text-[#0F0F0F] hover:text-[#B89B5E]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-6">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-[#B89B5E] text-[#B89B5E] tracking-[0.2em] text-xs font-medium py-4 px-6 hover:bg-[#B89B5E] hover:text-[#0F0F0F] transition-all duration-300"
            >
              <span className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP</span>
              </span>
            </a>
            <button
              onClick={() => handleLinkClick({ type: 'consultation' })}
              className="flex items-center justify-between bg-[#0F0F0F] text-[#F8F5F0] tracking-[0.2em] text-xs font-medium py-4 px-6 hover:bg-[#B89B5E] transition-all duration-300"
            >
              <span>BEGIN YOUR PIECE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-center font-sans text-xs tracking-widest text-gray-400">
              LAGOS • COUTURE • MADE EXCLUSIVELY FOR YOU
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
