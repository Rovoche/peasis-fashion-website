/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export default function BrandLogo({
  className = 'h-11 md:h-14',
  showText = true,
  variant = 'dark',
}: BrandLogoProps) {
  const textPrimary = variant === 'light' ? 'text-white' : 'text-[#0F0F0F]';

  return (
    <div className="flex items-center space-x-4">
      <img
        src="/images/Peasis-logo-nav.png"
        alt="PEASIS Brand Logo"
        className={`${className} object-contain max-h-16 transition-all duration-300`}
        referrerPolicy="no-referrer"
      />

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-serif-editorial text-2xl md:text-3xl font-bold tracking-[0.2em] ${textPrimary}`}>
            PEASIS
          </span>
          <span className="block text-[8px] tracking-[0.45em] text-[#B89B5E] uppercase mt-0.5 font-sans">
            Lagos • Haute Couture
          </span>
        </div>
      )}
    </div>
  );
}
