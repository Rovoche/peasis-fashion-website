/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ViewRoute } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ThePEASISDifference from './components/ThePEASISDifference';
import FeaturedCollections from './components/FeaturedCollections';
import SignaturePieces from './components/SignaturePieces';
import PeasisInMotion from './components/PeasisInMotion';
import ReadyToWear from './components/ReadyToWear';
import CustomCouture from './components/CustomCouture';
import CoutureExperience from './components/CoutureExperience';
import ContactSection from './components/ContactSection';
import CollectionDetails from './components/CollectionDetails';
import ProductDetails from './components/ProductDetails';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

export default function App() {
  const [route, setRoute] = useState<ViewRoute>({ type: 'home' });

  const parseRouteFromLocation = (): ViewRoute => {
    const path = window.location.pathname;
    if (path === '/' || path === '') {
      return { type: 'home' };
    }
    if (path === '/everyday-elegance') {
      return { type: 'collection', id: 'everyday-elegance' };
    }
    if (path === '/occasion-wear') {
      return { type: 'collection', id: 'occasion-wear' };
    }
    if (path === '/couture') {
      return { type: 'collection', id: 'couture' };
    }
    if (path === '/consultation') {
      return { type: 'consultation' };
    }
    if (path.startsWith('/product/')) {
      const slug = path.replace('/product/', '');
      return { type: 'product', slug };
    }
    return { type: 'home' };
  };

  const buildPathForRoute = (r: ViewRoute): string => {
    switch (r.type) {
      case 'home':
        return '/';
      case 'collection':
        return `/${r.id}`;
      case 'product':
        return `/product/${r.slug}`;
      case 'consultation':
        return '/consultation';
    }
  };

  const handleNavigate = (newRoute: ViewRoute) => {
    const nextPath = buildPathForRoute(newRoute);
    window.history.pushState(null, '', nextPath);
    setRoute(newRoute);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  useEffect(() => {
    setRoute(parseRouteFromLocation());

    const handlePopstate = () => {
      setRoute(parseRouteFromLocation());
    };

    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  const renderViewContent = () => {
    switch (route.type) {
      case 'home':
        return (
          <div className="fade-in-up">
            <Hero onNavigate={handleNavigate} />
            <ThePEASISDifference />
            <FeaturedCollections onNavigate={handleNavigate} />
            <SignaturePieces onNavigate={handleNavigate} />
            <PeasisInMotion />
            <ReadyToWear onNavigate={handleNavigate} />
            <CustomCouture onNavigate={handleNavigate} />
            <CoutureExperience />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        );
      case 'collection':
        return (
          <div className="fade-in-up">
            <CollectionDetails collectionId={route.id} onNavigate={handleNavigate} />
          </div>
        );
      case 'product':
        return (
          <div className="fade-in-up">
            <ProductDetails productSlug={route.slug} onNavigate={handleNavigate} />
          </div>
        );
      case 'consultation':
        return (
          <div className="fade-in-up">
            <ConsultationForm onNavigate={handleNavigate} />
          </div>
        );
      default:
        return (
          <div className="py-32 text-center text-sm font-light tracking-widest text-gray-500">
            Maison View Error
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F0] selection:bg-[#B89B5E] selection:text-white">
      <Header currentRoute={route} onNavigate={handleNavigate} />

      <main className="flex-grow">
        {renderViewContent()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
