/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const CURRENCIES = [
  { code: 'NGN', symbol: '₦', label: 'NGN (₦)', rate: 1 },
  { code: 'USD', symbol: '$', label: 'USD ($)', rate: 0.00067 }, // Approx 1500 NGN
  { code: 'GBP', symbol: '£', label: 'GBP (£)', rate: 0.00052 }, // Approx 1900 NGN
];

export const COLLECTIONS = [
  {
    id: 'everyday-elegance',
    name: 'EVERYDAY ELEGANCE',
    description: 'Bespoke tailoring reimagined for daily transition. Impeccable lines, refined construction, and structural grace designed to elevate everyday wear.',
    leadTime: '3–5 business days',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'occasion-wear',
    name: 'OCCASION WEAR',
    description: 'Statement couture tailored for major moments. High-contrast designs, dramatic volumes, and hand-applied embellishments that command any room.',
    leadTime: '5–10 business days',
    images: [
      '/src/assets/images/hero_emerald_gown_1782127131376.jpg'
    ]
  },
  {
    id: 'couture',
    name: 'COUTURE',
    description: 'The height of Lagos craftsmanship. One-of-one masterworks drafted from the ground up, requiring dedicated styling consultations, custom toile trials, and hand-stitched detailing.',
    leadTime: 'Determined upon consultation',
    images: [
      '/src/assets/images/couture_bridal_gown_1782127150813.jpg'
    ]
  }
];

export const PRODUCTS = [
  // COLLECTION 01: EVERYDAY ELEGANCE
  {
    id: 'peasis-016',
    name: 'Black Off-Shoulder Ruffle Maxi Dress',
    slug: 'black-off-shoulder-ruffle-maxi-dress',
    collectionId: 'everyday-elegance',
    price: 110000,
    description: 'An commanding off-shoulder masterpiece constructed with tiered luxury ruffles. Captures fluid posture and high-fashion line draping.',
    fabric: 'Heavy structured luxury crepe, lightweight silk organza ruffles, fully lined.',
    skyTimeline: '3–5 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true
  },
  {
    id: 'peasis-001',
    name: 'Crystal Detail Office Dress',
    slug: 'crystal-detail-office-dress',
    collectionId: 'everyday-elegance',
    price: 95000,
    description: 'A sharp, structural shift dress lined with delicate micro-crystal trim details. Perfect for the modern woman who transitions seamlessly from boardroom leadership to high-elegance evenings.',
    fabric: 'Premium Structured Crepe, Swarovski Crystal details, silk-finish interior lining.',
    skyTimeline: '3–5 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true
  },
  {
    id: 'peasis-002',
    name: 'Black Fit and Flare Midi Dress',
    slug: 'black-fit-and-flare-midi-dress',
    collectionId: 'everyday-elegance',
    price: 85000,
    description: 'An architectural take on the timeless midi dress. Features a close-cut bodice with sculptural princess seams, flaring into a breathtaking, structured bell skirt.',
    fabric: 'Heavyweight Italian Scuba-Crepe blend, light support corsetry, hidden back zip.',
    skyTimeline: '3–5 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true
  },
  {
    id: 'peasis-003',
    name: 'Classic Black Button Pencil Dress',
    slug: 'classic-black-button-pencil-dress',
    collectionId: 'everyday-elegance',
    price: 90000,
    description: 'A classic, body-skimming tailored dress characterized by subtle horn buttons accentuating the front frame. Meticulously darted to celebrate natural curves.',
    fabric: 'Premium stretch-woven wool crepe, hand-detailed premium buttons, cupro lining.',
    skyTimeline: '3–5 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true
  },
  {
    id: 'peasis-004',
    name: 'Printed Wide Leg Pants',
    slug: 'printed-wide-leg-pants',
    collectionId: 'everyday-elegance',
    price: 65000,
    description: 'High-waisted wide-leg trousers incorporating premium custom-curated prints. Flows exquisitely with every step, showcasing dramatic proportion and unmatched comfort.',
    fabric: 'Heavyweight Matte Mulberry Silk-satin blend, anti-static micro-satin pocket lining.',
    skyTimeline: '3–5 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'peasis-005',
    name: 'Ankara Peplum Top',
    slug: 'ankara-peplum-top',
    collectionId: 'everyday-elegance',
    price: 75000,
    description: 'A sophisticated peplum silhouette showcasing structured West African Ankara heritage. Features sharp structural pleats and precision lines designed to accentuate the waist.',
    fabric: '100% Genuine Hand-Selected Premium Ankara Cotton, structured internal canvas stay.',
    skyTimeline: '3–5 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      'https://images.unsplash.com/photo-1544078751-58feb2dcbda7?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true
  },
  {
    id: 'peasis-006',
    name: 'Contemporary Ankara Bustier Top',
    slug: 'contemporary-ankara-bustier-top',
    collectionId: 'everyday-elegance',
    price: 80000,
    description: 'A striking fusion of classic corsetry and contemporary fabric art. Features rigid inner boning, dynamic pattern matching, and an elegant sweetheart bust cut.',
    fabric: 'Authentic Nigerian Ankara wax fabric, robust flexi-boning channels, secure zip back.',
    skyTimeline: '3–5 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true
  },

  // COLLECTION 02: OCCASION WEAR
  {
    id: 'peasis-007',
    name: 'Handkerchief Hem Dress',
    slug: 'handkerchief-hem-dress',
    collectionId: 'occasion-wear',
    price: 220000,
    description: 'A masterful, cascading handkerchief dress that achieves mesmerizing movement. Crafted with precision-aligned panels and a breathtaking asymmetrical hemline.',
    fabric: 'Featherweight pure Silk Chiffon, lightweight silk habotai inner slip layer.',
    skyTimeline: '5–10 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'peasis-008',
    name: 'Lavender Beaded Bow Sleeve Occasion Dress',
    slug: 'lavender-beaded-bow-sleeve-occasion-dress',
    collectionId: 'occasion-wear',
    price: 350000,
    description: 'A breathtaking evening wear ensemble in a delicate lavender tone. Accented with dramatic hand-turned bow sleeves and micro-beading meticulously hand-sewn across the body.',
    fabric: 'Delicate high-end French Tulle, glass caviar micro-beads, premium lavender crepe satin.',
    skyTimeline: '5–10 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80'
    ],
    isFeatured: true
  },
  {
    id: 'peasis-009',
    name: 'Emerald Green Beaded Illusion Gown',
    slug: 'emerald-green-beaded-illusion-gown',
    collectionId: 'occasion-wear',
    price: 450000,
    description: 'Our ultimate occasion centerpiece. Combining a lightweight, sheer illusion corset base with a cascading sweep of emerald green glass bugle beads. Intricately customized for an absolute second-skin feel.',
    fabric: 'Premium sheer skin-tint mesh, hand-finished emerald bugle beading, liquid-sheen heavy satin foundation.',
    skyTimeline: '5–10 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      '/src/assets/images/hero_emerald_gown_1782127131376.jpg'
    ],
    isFeatured: false
  },
  {
    id: 'peasis-014',
    name: 'Ankara Tie Front Two Piece Set',
    slug: 'ankara-tie-front-two-piece-set',
    collectionId: 'occasion-wear',
    price: 185000,
    description: 'An elegant Ankara tie-front active two-piece set. Marries a beautifully knotted crop bodice with an structured, flowing column skirt designed to accentuate movement.',
    fabric: 'Premium Grade-A Ankara Wax Print Cotton, soft inner support lining, invisible zipper.',
    skyTimeline: '5–10 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'peasis-015',
    name: 'Burgundy Blouse Floral Maxi Skirt Set',
    slug: 'burgundy-blouse-floral-maxi-skirt-set',
    collectionId: 'occasion-wear',
    price: 210000,
    description: 'A striking statement pairing. Features a structured silk-crepe burgundy blouse with high-fashion neck details, counter-balanced by a dramatic sweeping floral maxi skirt in deep luster finishes.',
    fabric: 'Pure Mulberry Silk-Crepe blouse, structural jacquard floral weave skirt.',
    skyTimeline: '5–10 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80'
    ]
  },

  // COLLECTION 03: COUTURE
  {
    id: 'peasis-010',
    name: 'White Lace Corset Bridal Gown',
    slug: 'white-lace-corset-bridal-gown',
    collectionId: 'couture',
    description: 'The ultimate bespoke experience for the modern bride. Features a fully custom built-in French corset bodice with meticulously hand-placed Chantilly lace appliques and a sweeping trailing train.',
    fabric: 'Authentic French Chantilly Lace, premium duchess silk satin, custom wire micro-corsetry.',
    skyTimeline: 'Determined upon Bespoke Consultation',
    sizes: ['Bespoke Custom Made (Hand-drafted to your exact measurements)'],
    images: [
      '/src/assets/images/couture_bridal_gown_1782127150813.jpg'
    ],
    isFeatured: true
  },
  {
    id: 'peasis-011',
    name: 'Luxury beaded gowns',
    slug: 'luxury-beaded-gowns',
    collectionId: 'couture',
    description: 'Meticulously crafted masterpieces featuring thousands of glittering seed pearls, Austrian crystals, and fine glass beads sewn completely by hand over weeks of devoted craftsmanship.',
    fabric: 'Couture hand-woven net mesh, natural seed pearls, premium crystals, lightweight silk crepe backing.',
    skyTimeline: 'Determined upon Bespoke Consultation',
    sizes: ['Bespoke Custom Made (Hand-drafted to your exact measurements)'],
    images: [
      '/src/assets/images/hero_emerald_gown_1782127131376.jpg'
    ]
  },
  {
    id: 'peasis-012',
    name: 'Bridal couture',
    slug: 'bridal-couture',
    collectionId: 'couture',
    description: 'For the elite bridal party and modern luxury bride who demand unmatched exclusivity. Includes bespoke veils, custom embroidered corsetry, and breathtaking structural volume.',
    fabric: 'Pure Silk tulle, handcrafted custom lace, silk organza, individual crystal trims.',
    skyTimeline: 'Determined upon Bespoke Consultation',
    sizes: ['Bespoke Custom Made (Hand-drafted to your exact measurements)'],
    images: [
      '/src/assets/images/couture_bridal_gown_1782127150813.jpg'
    ]
  },
  {
    id: 'peasis-013',
    name: 'Special occasion couture',
    slug: 'special-occasion-couture',
    collectionId: 'couture',
    description: 'Architectural silhouettes designed for national benefits, high galas, and global red carpets. Made completely to measure, creating an unforgettable statement.',
    fabric: 'Structural mikado silk, glass micro-bead embellishments, gold-spun thread detailing.',
    skyTimeline: 'Determined upon Bespoke Consultation',
    sizes: ['Bespoke Custom Made (Hand-drafted to your exact measurements)'],
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80'
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "The gown fits as if it were sculpted onto my skin. I received hundreds of questions about who designed it at our event. PEASIS is Lagos haute couture at its absolute finest.",
    author: "Somto Okeke",
    city: "Lagos / London",
    garment: "Bespoke Emerald Bead illusion Gown"
  },
  {
    quote: "Every detail—from the reinforced boning of the corset to the hand-finished seams—exemplifies deep care and artistry. It is an absolute masterpiece.",
    author: "Zainab Al-Hassan",
    city: "Abuja",
    garment: "Bespoke Bridal Silhouette"
  },
  {
    quote: "A rare combination of timeless elegance and contemporary sophistication. Peasis garments make you feel powerful yet beautifully feminine.",
    author: "Funmi Adebayo",
    city: "Lekki, Lagos",
    garment: "Lavender Beaded Occasion Dress"
  }
];

export function formatPrice(priceNGN, currencyCode) {
  const currency = CURRENCIES.find(c => c.code === currencyCode) || CURRENCIES[0];
  const converted = priceNGN * currency.rate;
  
  if (currencyCode === 'NGN') {
    return `${currency.symbol}${Math.round(converted).toLocaleString()}`;
  } else {
    // Round to nearest 5 or 10 units for a premium, non-cluttered look
    const rounded = Math.round(converted / 5) * 5;
    return `${currency.symbol}${rounded.toLocaleString()}`;
  }
}

export function getProductPriceRange(product, currencyCode) {
  if (product.collectionId === 'couture' || !product.price) {
    return 'Fully bespoke piece — fabric and detail dependent. Book a consultation for a quote.';
  }

  // Calculate clean, luxurious ranges
  const minPrice = product.price;
  const maxPrice = Math.round((minPrice * 1.5) / 5000) * 5000; // Round to nearest 5k NGN for clean increments
  
  return `Range: ${formatPrice(minPrice, currencyCode)} – ${formatPrice(maxPrice, currencyCode)}`;
}
