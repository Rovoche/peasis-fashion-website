/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function CoutureExperience() {
  const steps = [
    {
      nr: '01',
      title: 'Consultation',
      description: 'Share your occasion, silhouette preferences, and sizing. We confirm scope, timeline, and fabric direction.',
    },
    {
      nr: '02',
      title: 'Design & Measurements',
      description: 'Your piece is drafted to your measurements with fabric and embellishment selections confirmed.',
    },
    {
      nr: '03',
      title: 'Atelier Production',
      description: 'Our Lagos atelier constructs your garment with couture finishing, structure, and hand-detailed refinement.',
    },
    {
      nr: '04',
      title: 'Fitting & Delivery',
      description: 'Final adjustments are made for flawless fit. Your finished piece is prepared for your event.',
    },
  ];

  return (
    <section id="ordering-process" className="py-32 md:py-48 bg-[#0F0F0F] text-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl mb-20 md:mb-28">
          <span className="text-[10px] tracking-[0.45em] text-[#B89B5E] block mb-3 uppercase font-sans">
            How To Order
          </span>
          <h2 className="font-serif-editorial text-4xl md:text-6xl font-light tracking-wide leading-tight mb-6">
            Ordering Process
          </h2>
          <p className="font-sans text-xs text-gray-400 font-light tracking-widest leading-relaxed">
            A refined path from inquiry to finished garment — focused on quality, clarity, and client results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {steps.map((step) => (
            <div key={step.nr} className="border-t border-white/10 pt-8">
              <span className="font-serif-editorial text-3xl text-[#B89B5E] italic block mb-4">
                {step.nr}
              </span>
              <h3 className="font-serif-editorial text-2xl md:text-3xl font-light tracking-wide mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-xs text-gray-400 font-light leading-relaxed tracking-widest">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
