/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { COLLECTIONS, PRODUCTS, TESTIMONIALS, formatPrice, getProductPriceRange, CURRENCIES } from './data.js';

// Global state
const state = {
  route: { type: 'home' },
  currency: 'NGN',
  activeProductImage: 0,
  formSubmitted: false,
  formData: {
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    collectionOfInterest: 'couture',
    details: ''
  }
};

// Auto-detect currency by timezone on load
function detectCurrency() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz.includes('London') || tz.includes('Europe/London') || tz.includes('GB')) {
      return 'GBP';
    } else if (tz.includes('America') || tz.includes('US') || tz.includes('Canada')) {
      return 'USD';
    }
  } catch (e) {
    console.error('Error detecting timezone', e);
  }
  return 'NGN';
}

// Initialize state
state.currency = localStorage.getItem('peasis_currency') || detectCurrency();

// Navigation Actions
export function navigateTo(routeType, routeParam = null) {
  if (routeType === 'home') {
    window.location.hash = '#/';
  } else if (routeType === 'collection') {
    window.location.hash = `#/collection/${routeParam}`;
  } else if (routeType === 'product') {
    window.location.hash = `#/product/${routeParam}`;
  } else if (routeType === 'consultation') {
    window.location.hash = '#/consultation';
  }
}

// Nav actions with smooth scrolling for anchors
export function handleNavAction(targetId) {
  const isHome = window.location.hash === '#/' || window.location.hash === '';
  if (!isHome) {
    window.location.hash = '#/';
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  } else {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Universal Currency update
function setCurrency(currencyCode) {
  state.currency = currencyCode;
  localStorage.setItem('peasis_currency', currencyCode);
  
  // Sync select items
  const selDesktop = document.getElementById('currency-select');
  const selMobile = document.getElementById('currency-select-mobile');
  if (selDesktop) selDesktop.value = currencyCode;
  if (selMobile) selMobile.value = currencyCode;

  // Re-render components to apply new currency formats
  updateDynamicContent();
}

// Routing handoff
function handleRouting() {
  const hash = window.location.hash || '#/';
  
  // Close mobile menu and scroll to top on routing
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'instant' });

  const homeView = document.getElementById('home-view');
  const collectionView = document.getElementById('collection-view');
  const productView = document.getElementById('product-view');
  const consultationView = document.getElementById('consultation-view');

  // Set all views hidden
  if (homeView) homeView.classList.add('hidden');
  if (collectionView) collectionView.classList.add('hidden');
  if (productView) productView.classList.add('hidden');
  if (consultationView) consultationView.classList.add('hidden');

  if (hash === '#/' || hash === '') {
    state.route = { type: 'home' };
    if (homeView) homeView.classList.remove('hidden');
    renderHomeView();
  } else if (hash.startsWith('#/collection/')) {
    const colId = hash.replace('#/collection/', '');
    state.route = { type: 'collection', id: colId };
    if (collectionView) collectionView.classList.remove('hidden');
    renderCollectionView(colId);
  } else if (hash.startsWith('#/product/')) {
    const productSlug = hash.replace('#/product/', '');
    state.route = { type: 'product', slug: productSlug };
    state.activeProductImage = 0; // Reset active product image index
    if (productView) {
      productView.classList.remove('hidden');
      renderProductView(productSlug);
    }
  } else if (hash === '#/consultation') {
    state.route = { type: 'consultation' };
    if (consultationView) {
      consultationView.classList.remove('hidden');
      renderConsultationView();
    }
  } else {
    // default fallback
    state.route = { type: 'home' };
    if (homeView) homeView.classList.remove('hidden');
    renderHomeView();
  }

  // Refresh lucide icons to replace any dynamic svg icon injections
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render dynamic homepage categories, signature items, and RTW products
function renderHomeView() {
  // 1. Featured Collections Showcase
  const collGrid = document.getElementById('featured-collections-grid');
  if (collGrid) {
    collGrid.innerHTML = COLLECTIONS.map(col => `
      <div class="group relative bg-[#0F0F0F] text-white aspect-[3/4] md:aspect-[4/5] overflow-hidden shadow-lg select-none">
        <!-- Direct Background photo -->
        <div class="absolute inset-0">
          <img 
            src="${col.images[0]}" 
            alt="${col.name}" 
            class="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 opacity-70"
            referrerpolicy="no-referrer"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />
        </div>

        <!-- Contents -->
        <div class="absolute inset-0 p-8 flex flex-col justify-end text-left z-10">
          <span class="text-[9px] tracking-[0.4em] text-[#B89B5E] font-medium uppercase font-sans mb-2">
            ${col.id === 'couture' ? 'ATELIER' : 'READY-TO-WEAR'}
          </span>
          <h3 class="font-serif-editorial text-2xl tracking-widest uppercase mb-4 text-white">
            ${col.name}
          </h3>
          <p class="font-sans text-[11px] text-gray-300 font-light tracking-wide leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm line-clamp-3">
            ${col.description}
          </p>
          <div class="flex items-center space-x-2 text-[10px] tracking-widest text-[#B89B5E] font-medium font-sans">
            <button data-nav-col="${col.id}" class="hover:underline hover:text-white uppercase transition-colors duration-300">
              EXPLORE COLLECTION →
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 2. Dynamic Signature items
  const sigGrid = document.getElementById('signature-items-grid');
  if (sigGrid) {
    const signatureItems = PRODUCTS.filter(p => p.isFeatured);
    sigGrid.innerHTML = signatureItems.map(p => `
      <div class="flex flex-col md:flex-row items-center border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        <!-- Left Side: Image Carousel Area -->
        <div class="w-full md:w-1/2 aspect-[3/4] bg-gray-100 relative overflow-hidden select-none">
          <img 
            src="${p.images[0]}" 
            alt="${p.name}" 
            class="w-full h-full object-cover object-center image-zoom-img"
            referrerpolicy="no-referrer"
          />
        </div>
        
        <!-- Right Side: Editorial Info pane -->
        <div class="w-full md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center text-left">
          <span class="text-[9px] tracking-[0.45em] text-[#B89B5E] block mb-3 uppercase font-sans font-medium">
            Signature Piece
          </span>
          <h3 data-nav-prod="${p.slug}" class="font-serif-editorial text-2xl lg:text-3xl text-gray-900 pb-3 border-b border-gray-100 tracking-wide font-light uppercase leading-tight hover:text-[#B89B5E] cursor-pointer transition-colors duration-300">
            ${p.name}
          </h3>

          <div class="font-serif-editorial text-[14px] text-[#B89B5E] tracking-wider my-6 font-semibold">
            ${getProductPriceRange(p, state.currency)}
          </div>

          <p class="font-sans text-xs md:text-sm text-gray-600 font-light leading-relaxed tracking-widest mb-8">
            ${p.description}
          </p>

          <div class="flex flex-col gap-3 font-mono text-[9px] text-gray-400 uppercase mb-8 border-t border-gray-50 pt-6">
            <div class="flex items-center space-x-2">
              <span class="w-1 h-1 rounded-full bg-[#B89B5E]" />
              <span>Fabric: ${p.fabric}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-1 h-1 rounded-full bg-[#B89B5E]" />
              <span>Lead Timeline: ${p.skyTimeline}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-4">
            <button data-nav-prod="${p.slug}" class="flex-1 bg-[#1A1A1A] hover:bg-[#B89B5E] text-white hover:text-[#F8F5F0] text-[9px] font-semibold tracking-widest py-4 transition-all duration-300 uppercase">
              VIEW DETAILS
            </button>
            <a 
              href="https://wa.me/2348060495986?text=Hello%20Maison%20PEASIS,%20I%20wish%20to%20commence%20a%20commission%20for%20the%20${encodeURIComponent(p.name)}." 
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 border border-black/20 hover:border-[#B89B5E] hover:text-[#B89B5E] text-[#1A1A1A] text-[9px] font-semibold tracking-widest py-4 transition-all duration-300 uppercase text-center flex items-center justify-center space-x-2"
            >
              <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
              <span>RESERVE PIECE</span>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 3. Dynamic RTW grid
  const rtwGrid = document.getElementById('rtw-items-grid');
  if (rtwGrid) {
    const rtwProducts = PRODUCTS.filter(p => p.collectionId === 'everyday-elegance');
    rtwGrid.innerHTML = rtwProducts.map(p => `
      <div class="group flex flex-col justify-between">
        <!-- Image Area -->
        <div data-nav-prod="${p.slug}" class="aspect-[3/4] w-full bg-gray-100 relative mb-6 overflow-hidden cursor-pointer shadow-sm select-none">
          <img 
            src="${p.images[0]}" 
            alt="${p.name}" 
            class="w-full h-full object-cover object-center transition-all duration-[1.2s] group-hover:scale-105"
            referrerpolicy="no-referrer"
          />
          <!-- Lead time bar -->
          <div class="absolute bottom-4 left-4 bg-[#F8F5F0]/95 backdrop-blur-sm px-3 py-1.5 text-[8px] font-mono tracking-widest uppercase text-gray-500 border border-black/5">
            READY TO ORDER
          </div>
        </div>

        <!-- Details Block -->
        <div class="text-left flex flex-col flex-grow">
          <div class="mb-2">
            <h3 data-nav-prod="${p.slug}" class="font-serif-editorial text-lg hover:text-[#B89B5E] cursor-pointer transition-colors tracking-wide font-normal leading-tight h-12 uppercase">
              ${p.name}
            </h3>
            <div class="font-sans text-[11px] text-[#B89B5E] font-semibold tracking-wider mt-1.5">
              ${getProductPriceRange(p, state.currency)}
            </div>
          </div>

          <p class="font-sans text-[11px] text-gray-500 font-light tracking-wide leading-relaxed mb-4 line-clamp-2 h-8">
            ${p.description}
          </p>

          <div class="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
            <button data-nav-prod="${p.slug}" class="text-[9px] font-sans font-medium tracking-[0.2em] text-[#0F0F0F] hover:text-[#B89B5E] transition-colors uppercase">
              VIEW PIECE →
            </button>
            <a 
              href="https://wa.me/2348060495986?text=Hello%20Maison%20PEASIS,%20I'm%20interested%20in%20the%20${encodeURIComponent(p.name)}."
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-[#B89B5E] transition-colors"
              title="Order on WhatsApp"
            >
              <i data-lucide="message-square" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 4. Update the start pricing on custom couture section
  const startingPriceEl = document.getElementById('starting-price-couture');
  if (startingPriceEl) {
    startingPriceEl.innerText = `Starting from ${formatPrice(150000, state.currency)}`;
  }

  // Setup click listeners on dynamic items
  bindDynamicNavigation();
}

// Render Collection Details View
function renderCollectionView(collId) {
  const container = document.getElementById('collection-view');
  if (!container) return;

  const collection = COLLECTIONS.find(c => c.id === collId);
  if (!collection) {
    container.innerHTML = `<div class="py-24 text-center text-sm font-sans tracking-widest text-gray-500 uppercase">Collection Not Found</div>`;
    return;
  }

  const collProducts = PRODUCTS.filter(p => p.collectionId === collId);

  container.innerHTML = `
    <!-- Top banner -->
    <div class="relative py-28 md:py-36 bg-[#0E0E0E] text-[#F8F5F0] overflow-hidden">
      <!-- Ambient details -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(184,155,94,0.06),transparent)] pointer-events-none" />
      <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(10,61,48,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div class="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center select-none">
        <button id="btn-back-to-home-coll" class="group inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] text-gray-400 hover:text-[#B89B5E] mb-10 transition-colors uppercase">
          <i data-lucide="arrow-left" class="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1"></i>
          <span>RETURN TO COUTURE HOME</span>
        </button>

        <span class="text-[9px] tracking-[0.45em] text-[#B89B5E] block mb-3 uppercase font-mono font-medium">
          Maison Collection Detail
        </span>
        <h1 class="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-white tracking-widest font-light leading-none uppercase mb-6">
          ${collection.name}
        </h1>
        <p class="font-sans text-xs sm:text-sm text-gray-400 font-light leading-relaxed tracking-widest max-w-2xl mx-auto mb-8">
          ${collection.description}
        </p>

        <div class="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 text-[9px] tracking-widest uppercase font-mono text-gray-400">
          <i data-lucide="clock" class="w-3.5 h-3.5 text-[#B89B5E]"></i>
          <span>AVERAGE PRODUCTION TIMELINE: ${collection.leadTime}</span>
        </div>
      </div>
    </div>

    <!-- Product lists -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 text-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        ${collProducts.map(p => `
          <div class="group flex flex-col justify-between">
            <div data-nav-prod="${p.slug}" class="aspect-[3/4] w-full bg-gray-100 relative mb-6 overflow-hidden cursor-pointer shadow-sm select-none">
              <img 
                src="${p.images[0]}" 
                alt="${p.name}" 
                class="w-full h-full object-cover object-center transition-all duration-[1.2s] group-hover:scale-105"
                referrerpolicy="no-referrer"
              />
              <div class="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[8px] font-mono tracking-widest uppercase text-gray-500 border border-black/5">
                ${collection.id === 'couture' ? 'ATELIER BESPOKE' : 'READY-TO-WEAR'}
              </div>
            </div>

            <div class="text-left flex flex-col flex-grow">
              <h3 data-nav-prod="${p.slug}" class="font-serif-editorial text-lg hover:text-[#B89B5E] cursor-pointer transition-colors tracking-wide font-normal leading-tight h-12 uppercase">
                ${p.name}
              </h3>
              <div class="font-sans text-[11px] font-semibold tracking-wider text-[#B89B5E] mt-1.5 mb-4">
                ${getProductPriceRange(p, state.currency)}
              </div>
              <p class="font-sans text-[11px] text-gray-500 font-light tracking-wide leading-relaxed mb-4 line-clamp-2 h-8">
                ${p.description}
              </p>

              <div class="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <button data-nav-prod="${p.slug}" class="text-[9px] font-sans font-medium tracking-[0.2em] text-[#0F0F0F] hover:text-[#B89B5E] transition-colors uppercase">
                  EXPLORE PIECE →
                </button>
                <a 
                  href="https://wa.me/2348060495986?text=Hello%20Maison%20PEASIS,%20I'm%20inquiring%20about%20the%20${encodeURIComponent(p.name)}."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-[#B89B5E] transition-colors"
                >
                  <i data-lucide="message-square" class="w-4 h-4"></i>
                </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Bind Back button
  document.getElementById('btn-back-to-home-coll').addEventListener('click', () => {
    navigateTo('home');
  });

  // Bind dynamic items inside collection
  bindDynamicNavigation();
}

// Render Product Details View
function renderProductView(productSlug) {
  const container = document.getElementById('product-view');
  if (!container) return;

  const product = PRODUCTS.find(p => p.slug === productSlug);
  if (!product) {
    container.innerHTML = `<div class="py-24 text-center text-sm font-sans tracking-widest text-[#B89B5E] uppercase">Piece Not Found</div>`;
    return;
  }

  // Generate dynamic sizes layout
  const sizesLayout = product.sizes.map((sz, idx) => `
    <label class="group flex items-center justify-between border ${idx === 0 ? 'border-[#B89B5E] bg-[#B89B5E]/5' : 'border-gray-200'} px-4 py-3.5 cursor-pointer hover:border-[#B89B5E] transition-all duration-300">
      <div class="flex items-center space-x-3">
        <input 
          type="radio" 
          name="product-size-select" 
          value="${sz}" 
          ${idx === 0 ? 'checked' : ''} 
          class="accent-[#B89B5E] w-3.5 h-3.5"
          onchange="this.parentNode.parentNode.parentNode.querySelectorAll('label').forEach(lbl => lbl.className = 'group flex items-center justify-between border border-gray-200 px-4 py-3.5 cursor-pointer hover:border-[#B89B5E] transition-all duration-300'); this.parentNode.parentNode.className = 'group flex items-center justify-between border border-[#B89B5E] bg-[#B89B5E]/5 px-4 py-3.5 cursor-pointer hover:border-[#B89B5E] transition-all duration-300';"
        />
        <span class="font-sans text-xs tracking-widest font-medium text-gray-800 uppercase">${sz}</span>
      </div>
      <span class="text-[9px] font-mono text-[#B89B5E] opacity-0 group-hover:opacity-100 transition-opacity uppercase">${sz === 'Custom Fit' || sz.startsWith('Bespoke') ? 'Measuring Provided' : 'Standard Fit'}</span>
    </label>
  `).join('');

  // Main structure
  container.innerHTML = `
    <div class="bg-[#F8F5F0] pt-28 md:pt-32 pb-24 md:pb-32">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        <!-- Back navigation links -->
        <button id="btn-back-to-home-prod" class="group inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] text-gray-500 hover:text-[#B89B5E] mb-12 transition-colors uppercase">
          <i data-lucide="arrow-left" class="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1"></i>
          <span>RETURN TO COUTURE HOME</span>
        </button>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <!-- Image View Section -->
          <div class="col-span-1 lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
            
            <!-- Large Image stage -->
            <div class="flex-grow aspect-[4/5] bg-white relative border border-black/5 overflow-hidden group select-none">
              <!-- Active image -->
              <img 
                id="product-active-image" 
                src="${product.images[state.activeProductImage]}" 
                alt="${product.name}" 
                class="w-full h-full object-cover object-center duration-300 pointer-events-none"
                referrerpolicy="no-referrer"
              />

              <!-- Fully functioning interactive Zoom Glass overlay -->
              <div id="zoom-stage" class="absolute inset-0 bg-no-repeat opacity-0 pointer-events-none transition-opacity duration-300 z-10" style="background-image: url('${product.images[state.activeProductImage]}'); background-size: 200%;"></div>

              <!-- Zoom prompt helper -->
              <div id="zoom-prompt" class="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm px-3 py-2 text-[9px] font-mono tracking-widest text-[#F8F5F0] flex items-center space-x-2 border border-white/10 select-none transition-opacity pointer-events-none uppercase">
                <i data-lucide="zoom-in" class="w-3.5 h-3.5 text-[#B89B5E]"></i>
                <span>Hover Image to Zoom Detail</span>
              </div>
            </div>

            <!-- Vertical Thumbnail lists -->
            <div class="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-x-visible md:w-24 shrink-0">
              ${product.images.map((img, idx) => `
                <button 
                  data-thumb-idx="${idx}" 
                  class="aspect-[4/5] w-16 md:w-full bg-white border border-gray-200 transition-all focus:outline-none p-0.5 shrink-0 ${idx === state.activeProductImage ? 'border-[#B89B5E] ring-1 ring-[#B89B5E]' : 'hover:border-gray-400'}"
                >
                  <img src="${img}" alt="Thumb" class="w-full h-full object-cover" referrerpolicy="no-referrer" />
                </button>
              `).join('')}
            </div>

          </div>

          <!-- Description and Ordering panel -->
          <div class="col-span-1 lg:col-span-5 text-left flex flex-col justify-center">
            
            <div class="border-b border-gray-300/45 pb-6 mb-8">
              <span class="text-[9px] tracking-[0.45em] text-[#B89B5E] font-medium uppercase font-sans mb-3 block">
                Maison Artistry
              </span>
              <h1 class="font-serif-editorial text-3xl sm:text-4xl text-[#0F0F0F] tracking-wide uppercase font-light leading-snug mb-4">
                ${product.name}
              </h1>
              
              <div class="font-serif-editorial text-sm tracking-widest font-semibold text-[#B89B5E]">
                ${getProductPriceRange(product, state.currency)}
              </div>
            </div>

            <!-- Detailed Copy -->
            <div class="space-y-6 mb-8">
              <p class="font-sans text-xs md:text-sm text-gray-600 font-light leading-relaxed tracking-wider">
                ${product.description}
              </p>

              <!-- Luxury specifications lists -->
              <div class="grid grid-cols-1 gap-4 font-sans text-[11px] border-t border-b border-gray-200/50 py-6">
                <div class="flex items-start pb-2">
                  <i data-lucide="sparkles" class="w-4 h-4 text-[#B89B5E] shrink-0 mr-3 mt-0.5"></i>
                  <div>
                    <span class="font-semibold text-gray-800 tracking-wider">Composition Detail:</span>
                    <p class="text-gray-500 font-light mt-1 tracking-wide leading-relaxed">${product.fabric}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i data-lucide="clock" class="w-4 h-4 text-[#B89B5E] shrink-0 mr-3 mt-0.5"></i>
                  <div>
                    <span class="font-semibold text-gray-800 tracking-wider">Production & Fitting Timeline:</span>
                    <p class="text-gray-500 font-light mt-1 tracking-wide leading-relaxed">${product.skyTimeline}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Fitting Sizes Selection -->
            <div class="mb-8">
              <div class="flex justify-between items-center mb-4">
                <span class="text-[10px] tracking-widest text-gray-500 font-sans font-medium uppercase">Select Atelier Size</span>
                <button id="btn-custom-fitting" class="text-[10px] font-mono text-[#B89B5E] hover:underline uppercase">Measurement Help</button>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="sizes-radio-group">
                ${sizesLayout}
              </div>
            </div>

            <!-- Action buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button 
                id="btn-order-whatsapp" 
                class="flex-1 bg-[#0F0F0F] text-[#F8F5F0] hover:bg-[#B89B5E] hover:text-white text-xs font-semibold tracking-widest py-4 transition-all duration-300 uppercase flex items-center justify-center space-x-2 shadow-lg shadow-[#0F0F0F]/5"
              >
                <i data-lucide="message-circle" class="w-4 h-4"></i>
                <span>ORDER CUSTOM PIECE</span>
              </button>
            </div>

            <!-- Trust Badge indicators -->
            <div class="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-[9px] font-mono text-gray-400 uppercase select-none">
              <span class="flex items-center"><i data-lucide="shield-check" class="w-3.5 h-3.5 mr-1.5 text-[#B89B5E]"></i> Handmade in Lagos</span>
              <span>•</span>
              <span class="flex items-center"><i data-lucide="ruler" class="w-3.5 h-3.5 mr-1.5 text-[#B89B5E]"></i> Absolute Custom Fitting</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  `;

  // Bind Back button
  document.getElementById('btn-back-to-home-prod').addEventListener('click', () => {
    navigateTo('home');
  });

  // Bind thumbnails update image
  document.querySelectorAll('[data-thumb-idx]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.getAttribute('data-thumb-idx'), 10);
      state.activeProductImage = idx;
      
      // Update state classes in thumbs
      document.querySelectorAll('[data-thumb-idx]').forEach(t => t.className = "aspect-[4/5] w-16 md:w-full bg-white border border-gray-200 transition-all focus:outline-none p-0.5 shrink-0 hover:border-gray-400");
      btn.className = "aspect-[4/5] w-16 md:w-full bg-white border border-[#B89B5E] ring-1 ring-[#B89B5E] transition-all focus:outline-none p-0.5 shrink-0";

      // Update image src
      const mainImg = document.getElementById('product-active-image');
      if (mainImg) mainImg.src = product.images[idx];

      const zoomStage = document.getElementById('zoom-stage');
      if (zoomStage) zoomStage.style.backgroundImage = `url('${product.images[idx]}')`;
    });
  });

  // Zoom stage mechanics
  const zoomStage = document.getElementById('zoom-stage');
  const activeImageImg = document.getElementById('product-active-image');
  const imgFrame = activeImageImg ? activeImageImg.parentNode : null;

  if (imgFrame && zoomStage) {
    imgFrame.addEventListener('mouseenter', () => {
      zoomStage.classList.remove('opacity-0');
      const zoomPrompt = document.getElementById('zoom-prompt');
      if (zoomPrompt) zoomPrompt.classList.add('opacity-0');
    });

    imgFrame.addEventListener('mousemove', (e) => {
      const rect = imgFrame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate percentages for centering origin
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;
      
      zoomStage.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    });

    imgFrame.addEventListener('mouseleave', () => {
      zoomStage.classList.add('opacity-0');
      const zoomPrompt = document.getElementById('zoom-prompt');
      if (zoomPrompt) zoomPrompt.classList.remove('opacity-0');
    });
  }

  // Measurement Help
  const btnFitting = document.getElementById('btn-custom-fitting');
  if (btnFitting) {
    btnFitting.addEventListener('click', () => {
      alert("ATELIER MEASURING INSTRUCTIONS:\n\nFor a perfect second-skin silhouette, we suggest providing standard measurements when finalizing your WhatsApp commission:\n\n- BUST: Fulllest point across shoulder blades and breast line.\n- WAIST: Narrowest point between rib cage and belly button.\n- HIPS: Fullest point around hips and buttocks.\n\nAlternatively, you may specify your closest UK sizing, and request a physical measuring template. Our Lagos stylists will support you completely.");
    });
  }

  // Active WhatsApp booking click
  const btnOrder = document.getElementById('btn-order-whatsapp');
  if (btnOrder) {
    btnOrder.addEventListener('click', () => {
      let selectedSize = 'UK 10';
      const checkedSizeEl = document.querySelector('input[name="product-size-select"]:checked');
      if (checkedSizeEl) {
        selectedSize = checkedSizeEl.value;
      }
      
      const whatsappPhone = '2348060495986';
      const msg = `Hello PEASIS,\n\nI am interested in ordering the custom piece ${product.name}.\n\nAtelier Parameters:\n- Target Size: ${selectedSize}\n- Selected Currency: ${state.currency}\n- Product Link: https://maisonpeasis.com/product/${product.slug}\n\nPlease let me know the production intake slot and measuring templates.\n\nThank you very much.`;
      
      window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render Consultation View Form & success screens
function renderConsultationView() {
  const container = document.getElementById('consultation-view');
  if (!container) return;

  const startingPrice = formatPrice(150000, state.currency);

  if (state.formSubmitted) {
    container.innerHTML = `
      <div class="min-h-screen bg-[#F8F5F0] pt-28 pb-24 md:pb-32 flex items-center justify-center">
        <div class="max-w-xl w-full mx-6 bg-white border border-[#B89B5E]/30 p-8 md:p-14 text-center shadow-lg">
          <div class="w-16 h-16 rounded-full bg-[#B89B5E]/10 flex items-center justify-center mx-auto mb-6">
            <i data-lucide="sparkles" class="w-8 h-8 text-[#B89B5E]"></i>
          </div>
          <span class="text-[#B89B5E] text-[10px] tracking-[0.4em] font-medium block mb-2 uppercase">
            RESERVATION REGISTERED
          </span>
          <h2 class="font-serif-editorial text-3xl text-[#0F0F0F] tracking-wide mb-6 uppercase">
            A Fitting Specialist Will Connect.
          </h2>
          <p class="font-sans text-xs md:text-sm text-gray-500 font-light leading-relaxed tracking-wider mb-8">
            We have registered your parameters into our private Lagos atelier calendar. Our representative will contact you via WhatsApp / Telephone within 24 business hours to lock in your secure timing.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <button 
              id="success-btn-whatsapp"
              class="flex-1 flex items-center justify-center space-x-2 bg-[#0F0F0F] text-white hover:bg-[#B89B5E] text-xs font-semibold tracking-widest py-4 transition-all duration-300 uppercase"
            >
              <i data-lucide="message-square" class="w-4 h-4"></i>
              <span>Initiate WhatsApp Now</span>
            </button>
            <button 
              id="success-btn-home"
              class="flex-1 border border-gray-300 text-gray-700 hover:border-black hover:text-black text-xs font-semibold tracking-widest py-4 transition-all duration-300 uppercase"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('success-btn-home').addEventListener('click', () => {
      state.formSubmitted = false;
      navigateTo('home');
    });

    document.getElementById('success-btn-whatsapp').addEventListener('click', () => {
      const msg = `Hello PEASIS,\n\nI just submitted a Bespoke Private Salon Booking request.\n\nMy Details:\n- Name: ${state.formData.name || 'Interested Client'}\n- Service: Private Consultation\n\nPlease let me know your calendar.\n\nThank you.`;
      window.open(`https://wa.me/2348060495986?text=${encodeURIComponent(msg)}`, '_blank');
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
    return;
  }

  // Show normal form inputs
  container.innerHTML = `
    <div class="bg-[#F8F5F0] pt-28 pb-24 md:pb-32">
      <div class="max-w-4xl mx-auto px-6 md:px-12">
        
        <!-- Back navigation link -->
        <button id="btn-back-to-home-form" class="group inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] text-gray-500 hover:text-[#B89B5E] mb-12 transition-colors uppercase">
          <i data-lucide="arrow-left" class="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1"></i>
          <span>RETURN TO HOME</span>
        </button>

        <!-- Framing Box container -->
        <div class="bg-white border border-[#B89B5E]/20 p-8 md:p-16 shadow-lg">
          <div>
            <!-- Header Title -->
            <div class="mb-12 border-b border-gray-100 pb-8 text-left">
              <span class="text-[#B89B5E] text-[10px] tracking-[0.4em] block mb-3 uppercase">
                Private Consultation Appt
              </span>
              <h1 class="font-serif-editorial text-3xl md:text-5xl font-light text-[#0F0F0F] tracking-wide uppercase">
                Begin Your Bespoke Story
              </h1>
              <p class="font-sans text-xs text-gray-500 font-light mt-4 leading-relaxed tracking-wider">
                Specify your fitting parameters below. For high bridal requirements, custom corsetry, or meticulously hand-beaded lace commissions, we recommend scheduling details at least six weeks in advance.
              </p>
            </div>

            <!-- Form parameters -->
            <form id="consultation-form-element" class="space-y-8 text-left">
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Name field -->
                <div class="flex flex-col">
                  <label class="text-[10px] tracking-widest text-[#B89B5E] font-medium uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    id="form-input-name"
                    placeholder="e.g. Somto Okeke"
                    class="border-b border-gray-300 focus:border-[#B89B5E] py-2 text-xs tracking-wider font-light focus:outline-none bg-transparent transition-colors duration-300 text-[#1A1A1A]"
                    value="${state.formData.name}"
                  />
                </div>

                <!-- Email field -->
                <div class="flex flex-col">
                  <label class="text-[10px] tracking-widest text-[#B89B5E] font-medium uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    id="form-input-email"
                    placeholder="your.email@domain.com"
                    class="border-b border-gray-300 focus:border-[#B89B5E] py-2 text-xs tracking-wider font-light focus:outline-none bg-transparent transition-colors duration-300 text-[#1A1A1A]"
                    value="${state.formData.email}"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Telephone field -->
                <div class="flex flex-col">
                  <label class="text-[10px] tracking-widest text-[#B89B5E] font-medium uppercase mb-2">
                    Telephone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    id="form-input-phone"
                    placeholder="+234 ... or international area code"
                    class="border-b border-gray-300 focus:border-[#B89B5E] py-2 text-xs tracking-wider font-light focus:outline-none bg-transparent transition-colors duration-300 text-[#1A1A1A]"
                    value="${state.formData.phone}"
                  />
                </div>

                <!-- Date picker code -->
                <div class="flex flex-col">
                  <label class="text-[10px] tracking-widest text-[#B89B5E] font-medium uppercase mb-2">
                    Target Bridal / Fitting Date (Optional)
                  </label>
                  <input
                    type="date"
                    id="form-input-date"
                    class="border-b border-gray-300 focus:border-[#B89B5E] py-2 text-xs tracking-wider font-light focus:outline-none bg-transparent transition-colors duration-300 text-gray-500"
                    value="${state.formData.eventDate}"
                  />
                </div>
              </div>

              <!-- Selection -->
              <div class="flex flex-col">
                <label class="text-[10px] tracking-widest text-[#B89B5E] font-medium uppercase mb-2">
                  Atelier Service Needed
                </label>
                <select
                  id="form-input-interest"
                  class="border-b border-gray-300 focus:border-[#B89B5E] py-2 text-xs tracking-wider font-light focus:outline-none bg-transparent text-[#1A1A1A]"
                >
                  <option value="everyday-elegance" ${state.formData.collectionOfInterest === 'everyday-elegance' ? 'selected' : ''}>EVERYDAY ELEGANCE (Made-to-Order)</option>
                  <option value="occasion-wear" ${state.formData.collectionOfInterest === 'occasion-wear' ? 'selected' : ''}>OCCASION WEAR (Statement Silk & Beads)</option>
                  <option value="couture" ${state.formData.collectionOfInterest === 'couture' ? 'selected' : ''}>COUTURE (Bespoke Bridal & One-Of-One Gowns)</option>
                </select>
              </div>

              <!-- Detailed Area -->
              <div class="flex flex-col">
                <label class="text-[10px] tracking-widest text-[#B89B5E] font-medium uppercase mb-2">
                  Style details, Silhouette, or Measurement (Optional)
                </label>
                <textarea
                  id="form-input-details"
                  rows="4"
                  placeholder="Tell us everything about your desired corset fit, shoulder lines, trim choices, neck neck lines, or measurements..."
                  class="border border-gray-200 focus:border-[#B89B5E] p-3 text-xs tracking-wider font-light focus:outline-none bg-[#F8F5F0]/30 transition-colors duration-300 text-[#1A1A1A] resize-none"
                >${state.formData.details}</textarea>
              </div>

              <div class="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  class="flex-1 flex items-center justify-center space-x-2 bg-[#0F0F0F] text-white hover:bg-[#B89B5E] text-xs font-semibold tracking-widest py-4 transition-all duration-300 uppercase shadow-md pointer-events-auto"
                >
                  <i data-lucide="send" class="w-4 h-4 mr-1.5"></i>
                  <span>Submit Atelier request</span>
                </button>
                <button
                  type="button"
                  id="form-btn-direct-whatsapp"
                  class="flex-1 flex items-center justify-center space-x-2 border border-[#B89B5E] text-[#B89B5E] hover:bg-[#B89B5E] hover:text-white text-xs font-semibold tracking-widest py-4 transition-all duration-300 uppercase"
                >
                  <i data-lucide="message-square" class="w-4 h-4 mr-1.5"></i>
                  <span>Book Instantly on WhatsApp</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  // Bind Back Button
  document.getElementById('btn-back-to-home-form').addEventListener('click', () => {
    navigateTo('home');
  });

  // Handle Form Submission
  const form = document.getElementById('consultation-form-element');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Save state values
    state.formData.name = document.getElementById('form-input-name').value;
    state.formData.email = document.getElementById('form-input-email').value;
    state.formData.phone = document.getElementById('form-input-phone').value;
    state.formData.eventDate = document.getElementById('form-input-date').value;
    state.formData.collectionOfInterest = document.getElementById('form-input-interest').value;
    state.formData.details = document.getElementById('form-input-details').value;

    state.formSubmitted = true;
    renderConsultationView();
  });

  // Submit instantly on WhatsApp
  document.getElementById('form-btn-direct-whatsapp').addEventListener('click', () => {
    const name = document.getElementById('form-input-name').value || 'Bespoke Client';
    const email = document.getElementById('form-input-email').value;
    const phone = document.getElementById('form-input-phone').value;
    const date = document.getElementById('form-input-date').value || 'Not arranged';
    const coll = document.getElementById('form-input-interest').value.toUpperCase();
    const details = document.getElementById('form-input-details').value || 'Requesting a fitting calendar.';

    const msg = `Hello PEASIS,\n\nI want to book a Bespoke Fitting Consultation.\n\nMy Details:\n- Name: ${name}\n- Email: ${email}\n- Tel: ${phone}\n- Target Date: ${date}\n- Intended Service: ${coll}\n- Custom details: ${details}\n\nPlease let me know your availability.\n\nThank you.`;
    window.open(`https://wa.me/2348060495986?text=${encodeURIComponent(msg)}`, '_blank');
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Global update on active view (keeps currency conversions active in real time)
function updateDynamicContent() {
  const hash = window.location.hash || '#/';
  
  if (hash === '#/' || hash === '') {
    renderHomeView();
  } else if (hash.startsWith('#/collection/')) {
    const colId = hash.replace('#/collection/', '');
    renderCollectionView(colId);
  } else if (hash.startsWith('#/product/')) {
    const productSlug = hash.replace('#/product/', '');
    renderProductView(productSlug);
  } else if (hash === '#/consultation') {
    renderConsultationView();
  }
}

// Binds custom layout click elements dynamically on demand
function bindDynamicNavigation() {
  document.querySelectorAll('[data-nav-col]').forEach(btn => {
    btn.addEventListener('click', () => {
      const colId = btn.getAttribute('data-nav-col');
      navigateTo('collection', colId);
    });
  });

  document.querySelectorAll('[data-nav-prod]').forEach(btn => {
    btn.addEventListener('click', () => {
      const slug = btn.getAttribute('data-nav-prod');
      navigateTo('product', slug);
    });
  });
}

// Initialize listeners on first load
document.addEventListener('DOMContentLoaded', () => {
  // Setup primary selects
  const selectDesktop = document.getElementById('currency-select');
  const selectMobile = document.getElementById('currency-select-mobile');

  if (selectDesktop) {
    selectDesktop.value = state.currency;
    selectDesktop.addEventListener('change', (e) => {
      setCurrency(e.target.value);
    });
  }

  if (selectMobile) {
    selectMobile.value = state.currency;
    selectMobile.addEventListener('change', (e) => {
      setCurrency(e.target.value);
    });
  }

  // Setup Mobile Menu toggle
  const btnToggleOpen = document.getElementById('btn-mobile-menu-open');
  const btnToggleClose = document.getElementById('btn-mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  if (btnToggleOpen && mobileMenu) {
    btnToggleOpen.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
  }

  if (btnToggleClose && mobileMenu) {
    btnToggleClose.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  // Bind static anchors links inside standard headers
  const navAnchorLinks = document.querySelectorAll('[data-anchor-target]');
  navAnchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-anchor-target');
      handleNavAction(target);
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    });
  });

  // Smooth click scroll down Vertical Indicator bottom-left
  const btnBookConsultationHeader = document.getElementById('btn-book-consult-header');
  if (btnBookConsultationHeader) {
    btnBookConsultationHeader.addEventListener('click', () => {
      navigateTo('consultation');
    });
  }

  // Bind Home route back on brand logo click
  const logoButtons = document.querySelectorAll('.btn-home-logo');
  logoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navigateTo('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Initial Router Check
  window.addEventListener('hashchange', handleRouting);
  handleRouting();
});
