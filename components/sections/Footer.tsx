import { SectionProps } from '../types';

export function Footer({ onOpenContact }: SectionProps) {
    return (
        <footer className="footer-section w-full border-t border-[#555] bg-black pt-16 pb-8 px-6 md:px-12 max-w-[1440px] mx-auto opacity-0">
            <div className="flex flex-col md:flex-row justify-between gap-6 pb-6 border-b border-[#333]">
                <div className="text-white text-[16px] font-['Clash_Display_Variable:Medium',sans-serif] space-y-2">
                    <p className="text-[#ccc] uppercase tracking-[0.2em] text-[12px]">Visit us</p>
                    <p>Shaheed Rupen Katyal Marg, HSIDC, Sector 18, Gurugram, 122015, Haryana, India.</p>
                </div>
                <div className="text-white text-[16px] font-['Clash_Display_Variable:Medium',sans-serif] space-y-2">
                    <p className="text-[#ccc] uppercase tracking-[0.2em] text-[12px]">Call us</p>
                    <a href="tel:+917988116056" className="hover:text-[#ccc]">+91 79881 16056</a>
                    <a href="mailto:sudodetailing@gmail.com" className="hover:text-[#ccc] block">sudodetailing@gmail.com</a>
                </div>
            </div>
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