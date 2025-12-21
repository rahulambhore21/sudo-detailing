import { ArrowIconWrapper } from '../shared';
import { SectionProps } from '../types';

export function Hero({ onOpenContact }: SectionProps) {
  return (
    <section className="hero-section relative w-full flex flex-col items-center pt-12 pb-24 px-4 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[909px] h-[425px] opacity-10 pointer-events-none">
             <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1909 1425">
                <g filter="url(#filter0_f_1_142)">
                  <ellipse cx="954.5" cy="712.5" fill="white" rx="454.5" ry="212.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1425" id="filter0_f_1_142" width="1909" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_142" stdDeviation="250" />
                  </filter>
                </defs>
            </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="hero-title opacity-0 translate-y-[30px] font-['Clash_Display_Variable:Medium',sans-serif] text-4xl md:text-6xl lg:text-[96px] leading-tight md:leading-[1.1] text-white mb-6">
                Luxury car detailing
            </h1>
            <div className="hero-subtitle opacity-0 translate-y-[20px] font-['Clash_Display_Variable:Regular',sans-serif] text-[#e1e1e1] text-lg md:text-[20px] leading-[30px] max-w-2xl mb-8">
                <p>Experience the prestige of a professionally detailed car,</p>
                <p>radiating elegance and refinement at every turn.</p>
            </div>
            
            <button 
                onClick={onOpenContact}
                className="hero-btn opacity-0 translate-y-[20px] flex items-center gap-4 text-white hover:opacity-80 transition-opacity group"
            >
                <span className="font-['Clash_Display_Variable:Medium',sans-serif] text-[20px]">Let's connect</span>
                <ArrowIconWrapper className="group-hover:translate-x-1 transition-transform"/>
            </button>
        </div>

        {/* Car Image */}
        <div className="hero-car opacity-0 scale-90 w-full max-w-[1400px] mt-12 md:mt-24 relative scale-125 md:scale-100 origin-center">
             <img src="/herocar.png" alt="Luxury Car" className="w-full h-auto object-contain" />
        </div>
    </section>
  );
}