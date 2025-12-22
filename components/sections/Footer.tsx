import { SectionProps } from '../types';

export function Footer({ onOpenContact }: SectionProps) {
    return (
        <footer className="footer-section w-full border-t border-[#555] bg-black pt-16 pb-8 px-6 md:px-12 max-w-[1440px] mx-auto opacity-0">
            
            
            <div className=" border-[#333] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <span className="text-white text-[16px] font-['Clash_Display_Variable:Medium',sans-serif] hidden md:block">
                    SUDO-DETAILS © 2026
                </span>
                <div className="flex flex-wrap justify-center gap-8 text-white text-[16px] font-['Clash_Display_Variable:Medium',sans-serif]">
                    <a href="/terms&condition" className="hover:text-[#ccc]">Terms of service</a>
                    <a href="/policy" className="hover:text-[#ccc]">Privacy policy</a>
                </div>
            </div>
        </footer>
    );
}