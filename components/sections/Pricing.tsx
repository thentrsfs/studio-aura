'use client';
import { prices } from "@/data/prices"
import Image from "next/image"
import { useRef } from "react";
import MobileMenuBtn from "../ui/MobileMenuBtn"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Pricing = ({theme, isMenuOpen, setIsMenuOpen} : {theme: string, isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center"
            }
        });

        tl.fromTo('.price-item', {
            y: 100,
            opacity: 0,
        }, {
           y: 0,
              opacity: 1,
              stagger: 0.2,
              ease: "power3.out",
              duration: 0.6,
              delay: 0.2
        })
    })

  return (
    <section ref={containerRef} data-theme="dark" id="cenik" className="py-10 px-6 lg:px-36 text-white min-h-dvh bg-primary flex flex-col gap-10 relative" >
        <div>
        <h2 className="lg:text-4xl text-3xl font-sora font-semibold uppercase mb-6 after:content-[''] after:block after:w-12 after:h-1 after:bg-background after:mt-0.5">Ceník</h2>
        <p className="lg:text-lg text-white/70">Přehled našich služeb a orientačních cen.</p>
        </div>
         <div className="lg:hidden absolute top-10 right-6">
        <MobileMenuBtn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} theme={theme}/>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
            {prices.map((category) => (
                <div key={category.id} className="price-item flex flex-col gap-8 bg-white/10 border border-white/10 hover:shadow-2xl hover:scale-101 backdrop-blur p-6 rounded-lg shadow-lg">
                    <div className="flex gap-3 ">
                     <Image src={category.icon} alt={category.title} width={20} height={20} className="h-8 w-8" />
                    <h3 className="text-2xl font-semibold pb-4 font-sora text-background">{category.title}</h3>
                    </div>
                    <ul className="lg:text-lg text-white flex flex-col gap-3 ">
                        {category.services.map((service) => (
                            <li key={service.id} className="grid grid-cols-2 border-b border-background/40">
                                {service.name} <span className="font-semibold text-background ml-auto mt-auto">{service.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
<p className="text-white/70 text-xs">*Ceny se mohou lišit podle délky a hustoty vlasů.</p>
    </section>
  )
}

export default Pricing