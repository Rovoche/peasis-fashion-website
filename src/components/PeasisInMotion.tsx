/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { YOUTUBE_VIDEOS } from '../data';

export default function PeasisInMotion() {
  return (
    <section id="peasis-in-motion" className="py-32 md:py-48 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-[10px] tracking-[0.45em] text-[#B89B5E] block mb-3 uppercase font-sans">
            Motion
          </span>
          <h2 className="font-serif-editorial text-4xl md:text-6xl font-light text-[#0F0F0F] tracking-wide leading-tight mb-6">
            PEASIS In Motion
          </h2>
          <p className="font-sans text-xs text-gray-500 font-light tracking-widest leading-relaxed">
            Luxury editorial fashion films — movement, silhouette, and the art of presence.
          </p>
        </div>

        {YOUTUBE_VIDEOS.length > 0 ? (
          <div className={`grid gap-10 md:gap-12 ${YOUTUBE_VIDEOS.length === 1 ? 'grid-cols-1 max-w-5xl' : 'grid-cols-1 lg:grid-cols-2'}`}>
            {YOUTUBE_VIDEOS.map((video) => (
              <article key={video.id} className="group">
                <div className="relative aspect-video overflow-hidden bg-[#0F0F0F] mb-5">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="font-serif-editorial text-2xl md:text-3xl font-light text-[#0F0F0F] tracking-wide italic">
                  {video.title}
                </h3>
              </article>
            ))}
          </div>
        ) : (
          <p className="font-sans text-xs text-gray-400 tracking-widest uppercase">
            Editorial films coming soon.
          </p>
        )}
      </div>
    </section>
  );
}
