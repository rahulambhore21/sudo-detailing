import { SectionProps } from '../types';

export function Navbar({ onOpenContact }: SectionProps) {
  return (
    <nav className="navbar relative z-50 w-full px-6 py-6 md:px-12 md:py-8 flex items-center justify-between max-w-[1440px] mx-auto opacity-0 translate-y-[-20px]">
        {/* Logo */}
        <div className="flex items-center">
            <img 
                src="/logo.png" 
                alt="LuxureDetails" 
                className="h-8 md:h-16 w-auto"
            />
        </div>

        {/* CTA Button */}
        <button 
            onClick={onOpenContact}
            className="flex items-center justify-center px-[10px] py-[10px] border border-white rounded-[8px] text-white font-['Clash_Display_Variable:Medium',sans-serif] text-[16px] hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
            Get a quote
        </button>
    </nav>
  );
}