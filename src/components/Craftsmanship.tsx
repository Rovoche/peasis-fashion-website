/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Craftsmanship() {
  const details = [
    {
      title: 'COUTURE EMBROIDERY',
      subtitle: 'Emerald Lace Detail',
      image: '/images/emerald-beaded-net-lace-detail.jpg',
      description: 'Meticulous embroidery layered onto fine netting, drafted and hand-placed in our Lagos atelier.'
    },
    {
      title: 'BESPOKE BEADWORK',
      subtitle: 'Intricate Caviar net',
      image: '/images/emerald-beaded-net-lace-detail(1).jpg',
      description: 'Hours of careful beadwork using premium glass bugle beads and crystals, bringing unmatched texture.'
    },
    {
      title: 'LACE ARCHITECTURE',
      subtitle: 'Lavender Lace Artistry',
      image: '/images/lavender-beaded-lace-detail.jpg',
      description: 'Fine floral outlines accented with lavender seed pearls, created for delicate and confident presence.'
    }
  ];

  return (
    <section id="craftsmanship" className="py-32 md:py-48 bg-[#0F0F0F] text-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Block */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[10px] tracking-[0.45em] text-[#B89B5E] block mb-3 uppercase font-sans">
            Artisanal Philosophy
          </span>
          <h2 className="font-serif-editorial text-4xl md:text-6xl font-light text-white tracking-wide mb-6">
            Every Detail Matters.
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed tracking-widest">
            Every PEASIS garment is designed with precision, finished with care, and created to be worn long after trends fade.
          </p>
        </div>

        {/* Dynamic Detail Bento/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          {details.map((item, idx) => (
            <div
              key={item.title}
              className="group flex flex-col justify-start transition-all duration-500"
            >
              <div>
                <span className="font-mono text-[9px] text-[#B89B5E] mb-2 block">{`0${idx + 1} // FOCUS`}</span>
                <h3 className="font-serif-editorial text-xl text-white tracking-widest uppercase mb-1 font-normal">
                  {item.title}
                </h3>
                <span className="block text-[9px] text-gray-500 tracking-[0.2em] mb-6 uppercase font-sans">
                  {item.subtitle}
                </span>

                {/* Larger Image - Borderless */}
                <div className="relative aspect-[4/5.2] overflow-hidden mb-6 bg-gray-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center opacity-85 transition-transform duration-1000 ease-out group-hover:opacity-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                </div>
              </div>

              <p className="font-sans text-xs text-gray-400 font-light leading-relaxed tracking-wider mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
