import { Users, Wrench, Search, Award } from 'lucide-react';
import { ArrowIconWrapper } from '../shared';
import { SectionProps } from '../types';

export function Features({ onOpenContact }: SectionProps) {
    return (
        <section className="features-section w-full px-6 md:px-12 max-w-[1440px] mx-auto py-20 flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
             <div className="features-left opacity-0 translate-x-[-30px] flex-1 w-full lg:w-auto">
                 <h2 className="text-white text-4xl md:text-[48px] leading-tight font-['Clash_Display_Variable:Medium',sans-serif] mb-12">
                     Why Choose Us?
                 </h2>
                 <div className="rounded-[8px] overflow-hidden h-[300px] md:h-[341px] w-full md:w-[448px]">
                     <img src="/why.png" alt="Car Detail" className="w-full h-full object-cover" />
                 </div>
             </div>
             
             <div className="features-right flex-1 flex flex-col relative w-full lg:w-auto">
                {/* Vertical Divider for desktop */}
                <div className="hidden lg:block absolute -left-16 top-0 bottom-0 w-px bg-white/25"></div>

                 <div className="flex flex-col gap-10 p-6 md:p-10 bg-white/5 backdrop-blur-md rounded-[16px] border border-white/10 lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:p-0">
                     
                     <div className="feature-item opacity-0 translate-x-[20px] flex flex-col gap-4">
                         <div className="flex items-center gap-4 text-white">
                             <Users className="w-6 h-6" />
                             <h3 className="text-[24px] font-['Clash_Display_Variable:Medium',sans-serif]">Professional technicians</h3>
                         </div>
                     </div>
                     
                     <div className="feature-item opacity-0 translate-x-[20px] h-px w-full bg-white/25" />

                     <div className="feature-item opacity-0 translate-x-[20px] flex flex-col gap-4">
                         <div className="flex items-center gap-4 text-white">
                             <Wrench className="w-6 h-6" />
                             <h3 className="text-[24px] font-['Clash_Display_Variable:Medium',sans-serif]">Premium products & tools</h3>
                         </div>
                     </div>

                     <div className="feature-item opacity-0 translate-x-[20px] h-px w-full bg-white/25" />

                     <div className="feature-item opacity-0 translate-x-[20px] flex flex-col gap-4">
                         <div className="flex items-center gap-4 text-white">
                             <Search className="w-6 h-6" />
                             <h3 className="text-[24px] font-['Clash_Display_Variable:Medium',sans-serif]">Attention to detail</h3>
                         </div>
                     </div>

                     <div className="feature-item opacity-0 translate-x-[20px] h-px w-full bg-white/25" />

                     <div className="feature-item opacity-0 translate-x-[20px] flex flex-col gap-4">
                         <div className="flex items-center gap-4 text-white">
                             <Award className="w-6 h-6" />
                             <h3 className="text-[24px] font-['Clash_Display_Variable:Medium',sans-serif]">Customer satisfaction guaranteed</h3>
                         </div>
                     </div>

                     <div className="feature-item opacity-0 translate-x-[20px] pt-4">
                         <button 
                            onClick={onOpenContact}
                            className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity"
                         >
                             <span className="font-['Clash_Display_Variable:Medium',sans-serif] text-[20px]">Get a quote now</span>
                             <ArrowIconWrapper />
                         </button>
                     </div>
                 </div>
             </div>
        </section>
    );
}