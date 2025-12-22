import Image from 'next/image';
import { Arrow } from '../shared';

export function Services() {
    const services = [
        {
            title: "Ceramic Coating",
            description: "Long-lasting protection with a glossy finish that repels dirt, water, and UV rays.",
            image: "/ceramiccoating.png"
        },
        {
            title: "Deep Cleaning & Dry Cleaning",
            description: "Complete interior and exterior cleaning for a fresh, showroom feel.",
            image: "/deepcleaning.png"
        },
        {
            title: "PPF (Paint Protection Film)",
            description: "Invisible shield to protect your car from scratches, chips, and road damage.",
            image: "/ppf.png"
        },
        {
            title: "Rubbing & Polishing",
            description: "Restores shine, removes swirl marks, and enhances paint clarity.",
            image: "/polishing.png"
        },
        {
            title: "Car Wrapping",
            description: "Customize your car's look with high-quality vinyl wraps in various colors and finishes.",
            image: "/carwrapping.png"
        }
    ];

    return (
        <section className="services-section w-full bg-black py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
            <div className="services-header border-t border-[#999] pt-12 mb-16 opacity-0 translate-y-[30px]">
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="block text-[#999] text-[20px] mb-2 font-['Clash_Display_Variable:Medium',sans-serif]">Our Services</span>
                        <h2 className="text-white text-3xl md:text-[48px] leading-tight font-['Clash_Display_Variable:Medium',sans-serif]">Love in Every Detail</h2>
                    </div>
                    <p className="text-[#999] text-lg md:text-[20px] leading-[30px] max-w-lg font-['Clash_Display_Variable:Regular',sans-serif]">
                        Immerse yourself in luxury with our bespoke detailing packages tailored to your car's unique needs.
                    </p>
                 </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-8 md:gap-y-12">
                {services.map((service, index) => (
                    <div key={index} className="service-card opacity-0 translate-y-[30px] flex flex-col gap-3 md:gap-6 group">
                         <div className="aspect-[352/352] w-full relative rounded-[8px] overflow-hidden bg-gray-900">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 320px"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                         </div>
                         <div className="flex flex-col gap-2 md:gap-3">
                            <h3 className="text-white text-[16px] md:text-[24px] font-['Clash_Display_Variable:Medium',sans-serif] leading-tight">{service.title}</h3>
                            <p className="text-[#999] text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] font-['Clash_Display_Variable:Regular',sans-serif]">{service.description}</p>
                         </div>
                    </div>
                ))}
            </div>
        </section>
    );
}