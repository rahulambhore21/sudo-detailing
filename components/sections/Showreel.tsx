import { PlayButtonArrowhead } from '../shared';

export function Showreel() {
    return (
        <section className="showreel-section w-full px-4 md:px-12 max-w-[1440px] mx-auto pb-24">
            <div className="showreel-container opacity-0 scale-95 relative w-full aspect-video md:aspect-[1120/600] rounded-[8px] overflow-hidden">
                 <iframe 
                    src="https://www.youtube.com/embed/eMBlkjCA298"
                    title="Showreel"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                 />
            </div>
        </section>
    );
}