import { ArrowIconWrapper } from '../shared';
import { SectionProps } from '../types';

export function CTA({ onOpenContact }: SectionProps) {
    return (
        <section className="cta-section w-full px-6 md:px-12 max-w-[1440px] mx-auto py-20">
             <div className="cta-container opacity-0 translate-y-[50px] relative rounded-[16px] overflow-hidden min-h-[500px] flex flex-col md:flex-row items-center">
                 {/* Background Image Wrapper */}
                 <div className="absolute inset-0 z-0">
                     <img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=500&fit=crop" alt="Background" className="w-full h-full object-cover opacity-60" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent md:bg-gradient-to-r" />
                 </div>

                 <div className="relative z-10 w-full md:w-1/2 p-8 md:p-16 flex flex-col gap-8 items-start">
                     <h2 className="text-white text-4xl md:text-[48px] leading-tight font-['Clash_Display_Variable:Medium',sans-serif]">
                         Book your car detailing<br/> service today
                     </h2>
                     <p className="text-[#ccc] text-[16px] leading-[24px] font-['Clash_Display_Variable:Medium',sans-serif] max-w-sm">
                         Give your car the care it deserves!
                     </p>
                     
                     <button 
                        onClick={onOpenContact}
                        className="flex items-center gap-4 text-white hover:scale-105 transition-transform"
                     >
                         <span className="font-['Clash_Display_Variable:Medium',sans-serif] text-[20px]">Get a quote now</span>
                         <ArrowIconWrapper />
                     </button>
                 </div>
             </div>
        </section>
    );
}