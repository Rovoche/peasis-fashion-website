/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Collection, FeaturedLook, YouTubeVideo } from './types';

export const CONTACT = {
  email: 'styleimagestun@gmail.com',
  phone: '+2348060495986',
  whatsapp: '2348060495986',
  whatsappUrl: 'https://wa.me/2348060495986',
};

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [];

export const FEATURED_LOOKS: FeaturedLook[] = [
  {
    slug: 'black-off-shoulder-ruffle-maxi-dress',
    name: 'Black Off-Shoulder Ruffle Maxi Dress',
    image: '/images/black-off-shoulder-ruffle-maxi-dress-1.jpg',
    collectionId: 'occasion-wear',
  },
  {
    slug: 'black-fit-and-flare-midi-dress',
    name: 'Black Fit and Flare Midi Dress',
    image: '/images/black-fit-and-flare-midi-dress-1.jpg',
    collectionId: 'everyday-elegance',
  },
  {
    slug: 'classic-black-button-pencil-dress',
    name: 'Classic Black Button Pencil Dress',
    image: '/images/classic-black-button-pencil-dress-1.jpg',
    collectionId: 'everyday-elegance',
  },
  {
    name: 'Lavender Beaded Bow Sleeve — Client Portrait',
    image: '/images/lavender-beaded-bow-sleeve-occasion-dress.customer-in-event-jpg.jpg',
    slug: 'lavender-beaded-bow-sleeve-occasion-dress',
    collectionId: 'occasion-wear',
  },
  {
    name: 'Lavender Beaded Bow Sleeve — Evening Presence',
    image: '/images/lavender-beaded-bow-sleeve-occasion-dress.customer-in-event-2.jpg',
    slug: 'lavender-beaded-bow-sleeve-occasion-dress',
    collectionId: 'occasion-wear',
  },
  {
    slug: 'white-lace-corset-bridal-gown',
    name: 'White Lace Corset Bridal Gown',
    image: '/images/white-lace-corset-bridal-gown-1.jpg',
    collectionId: 'couture',
  },
  {
    slug: 'crystal-detail-office-dress',
    name: 'Crystal Detail Office Dress',
    image: '/images/Crystal Detail Office Dress (1).jpg',
    collectionId: 'everyday-elegance',
  },
  {
    slug: 'ankara-peplum-top',
    name: 'Ankara Peplum Top',
    image: '/images/Ankara peplum top (1).jpg',
    collectionId: 'everyday-elegance',
  },
  {
    slug: 'contemporary-ankara-bustier-top',
    name: 'Contemporary Ankara Bustier Top',
    image: '/images/Contemporary Ankara Bustier Top (1).jpg',
    collectionId: 'everyday-elegance',
  },
];

export const SIGNATURE_SLUGS = [
  'lavender-beaded-bow-sleeve-occasion-dress',
  'white-lace-corset-bridal-gown',
  'black-off-shoulder-ruffle-maxi-dress',
  'crystal-detail-office-dress',
  'ankara-peplum-top',
];

export const COLLECTIONS: Collection[] = [
  {
    id: 'everyday-elegance',
    name: 'EVERYDAY ELEGANCE',
    description: 'Bespoke tailoring reimagined for daily transition. Impeccable lines, refined construction, and structural grace designed to elevate everyday wear.',
    leadTime: '3–5 business days',
    images: [
      '/images/black-fit-and-flare-midi-dress-1.jpg'
    ]
  },
  {
    id: 'occasion-wear',
    name: 'OCCASION WEAR',
    description: 'Statement couture tailored for major moments. High-contrast designs, dramatic volumes, and hand-applied embellishments that command any room.',
    leadTime: '5–10 business days',
    images: [
      '/images/lavender-beaded-bow-sleeve-occasion-dress.customer-in-event-2.jpg'
    ]
  },
  {
    id: 'couture',
    name: 'COUTURE',
    description: 'The height of Lagos craftsmanship. One-of-one masterworks drafted from the ground up, requiring dedicated styling consultations, custom toile trials, and hand-stitched detailing.',
    leadTime: 'Determined upon consultation',
    images: [
      '/images/white-lace-corset-bridal-gown-1.jpg'
    ]
  }
];

export const PRODUCTS: Product[] = [
  // COLLECTION 01: EVERYDAY ELEGANCE
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
      '/images/Crystal Detail Office Dress (1).jpg',
      '/images/Crystal Detail Office Dress (2).jpg',
      '/images/Crystal Detail Office Dress (3).jpg',
      '/images/Crystal Detail Office Dress (4).jpg'
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
      '/images/black-fit-and-flare-midi-dress-1.jpg',
      '/images/black-fit-and-flare-midi-dress-2.jpg',
      '/images/black-fit-and-flare-midi-dress-3.jpg',
      '/images/black-fit-and-flare-midi-dress-4.jpg'
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
      '/images/classic-black-button-pencil-dress-1.jpg',
      '/images/classic-black-button-pencil-dress-2.jpg',
      '/images/classic-black-button-pencil-dress-3.jpg',
      '/images/classic-black-button-pencil-dress-4.jpg'
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
      '/images/printed-wide-leg-pants-1.jpg',
      '/images/printed-wide-leg-pants-2.jpg',
      '/images/printed-wide-leg-pants-3.jpg',
      '/images/printed-wide-leg-pants-4.jpg'
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
      '/images/Ankara peplum top (1).jpg',
      '/images/Ankara peplum top (2).jpg',
      '/images/Ankara peplum top (3).jpg',
      '/images/Ankara peplum top (4).jpg',
      '/images/Ankara peplum top (5).jpg',
      '/images/Ankara peplum top (6).jpg'
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
      '/images/Contemporary Ankara Bustier Top (1).jpg',
      '/images/Contemporary Ankara Bustier Top (2).jpg',
      '/images/Contemporary Ankara Bustier Top (3).jpg',
      '/images/Contemporary Ankara Bustier Top (4).jpg',
      '/images/Contemporary Ankara Bustier Top (5).jpg'
    ],
    isFeatured: true
  },
  {
    id: 'peasis-016',
    name: 'Black Off-Shoulder Ruffle Maxi Dress',
    slug: 'black-off-shoulder-ruffle-maxi-dress',
    collectionId: 'occasion-wear',
    price: 280000,
    description: 'A dramatic off-shoulder silhouette with cascading ruffle volume. Designed for evening presence and refined movement.',
    fabric: 'Premium structured crepe, internal support boning, hand-finished hem.',
    skyTimeline: '5–10 business days',
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'Custom Fit'],
    images: [
      '/images/black-off-shoulder-ruffle-maxi-dress-1.jpg',
      '/images/black-off-shoulder-ruffle-maxi-dress-2.jpg'
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
      '/images/Handkerchief hem dress (1).jpg',
      '/images/Handkerchief hem dress (2).jpg',
      '/images/Handkerchief hem dress (3).jpg',
      '/images/Handkerchief hem dress (4).jpg',
      '/images/Handkerchief hem dress (5).jpg',
      '/images/Handkerchief hem dress (6).jpg'
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
      '/images/lavender-beaded-bow-sleeve-occasion-dress.customer-in-event-jpg.jpg',
      '/images/lavender-beaded-bow-sleeve-occasion-dress.customer-in-event-2.jpg',
      '/images/lavender-beaded-bow-sleeve-occasion-dress-1.jpg',
      '/images/lavender-beaded-bow-sleeve-occasion-dress-2.jpg'
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
      '/images/emerald-green-beaded-illusion-gown-1.jpg',
      '/images/emerald-green-beaded-illusion-gown-2.jpg'
    ]
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
      '/images/ankara-tie-front-two-piece-set-1.jpg',
      '/images/ankara-tie-front-two-piece-set-2.jpg',
      '/images/ankara-tie-front-two-piece-set-3.jpg'
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
      '/images/burgundy-blouse-floral-maxi-skirt-set-1.jpg',
      '/images/burgundy-blouse-floral-maxi-skirt-set-2.jpg'
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
      '/images/white-lace-corset-bridal-gown-1.jpg',
      '/images/white-lace-corset-bridal-gown-2.jpg',
      '/images/white-lace-corset-bridal-gown-3.jpg',
      '/images/white-lace-corset-bridal-gown-4.jpg'
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
      '/images/emerald-green-beaded-illusion-gown-1.jpg',
      '/images/emerald-green-beaded-illusion-gown-2.jpg'
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
      '/images/white-lace-corset-bridal-gown-1.jpg',
      '/images/white-lace-corset-bridal-gown-2.jpg',
      '/images/white-lace-corset-bridal-gown-3.jpg',
      '/images/white-lace-corset-bridal-gown-4.jpg'
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
      '/images/lavender-beaded-bow-sleeve-occasion-dress-1.jpg',
      '/images/lavender-beaded-bow-sleeve-occasion-dress-2.jpg',
      '/images/lavender-beaded-bow-sleeve-occasion-dress-3.jpg',
      '/images/lavender-beaded-bow-sleeve-occasion-dress-4.jpg'
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "The gown fits as if it were sculpted onto my skin. I received hundreds of questions about who designed it at our event. PEASIS is Lagos haute couture at its absolute finest.",
    author: "Somto Okeke",
    city: "Lagos / London",
    garment: "Lavender Beaded Occasion Dress"
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
