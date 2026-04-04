import { services } from "@/data/services";
import Image from "next/image";
import MobileMenuBtn from "../ui/MobileMenuBtn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Služby = ({theme, isMenuOpen, setIsMenuOpen} : {theme: string, isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <section data-theme="light" id="sluzby" className="px-6 lg:px-36 min-h-dvh flex flex-col py-10 gap-10 relative " >
      <div>
        <h2 className="lg:text-4xl text-3xl text-black font-sora font-bold uppercase mb-4 after:content-[''] after:block after:w-12 after:h-1 after:bg-primary after:mt-0.5">Naše <span className="text-primary">služby</span>
        </h2>
        <p className="lg:text-lg text-black/60 max-w-md">Vytváříme styl, který vám sedí – od střihu až po kompletní péči o vlasy.</p>
        </div>
        <div className="lg:hidden absolute top-10 right-6">
        <MobileMenuBtn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} theme={theme}/>
        </div>
     <Carousel className="mt-10 relative">
  <CarouselContent className="cursor-grab active:cursor-grabbing">
    {services.map((service) => (
      <CarouselItem key={service.id} className=" lg:basis-1/3 ">
        <div className="relative h-100 lg:h-125 overflow-hidden rounded-lg group ">
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="100%"
            className="object-cover rounded-lg group-hover:scale-105 transition-all duration-300 hover:brightness-85"
          />
          <div className="absolute bottom-0 left-0 w-full h-35 bg-black/40 group-hover:bg-black/60 backdrop-blur-xs p-6 flex flex-col rounded-b-lg justify-center gap-2 transition-all duration-300 select-none ">
            <h3 className="lg:text-2xl text-xl text-white font-sora font-semibold">
              {service.name}
            </h3>
            <p className="text-white/80 lg:text-base text-sm">{service.description}</p>
          </div>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  <CarouselPrevious className="p-5 cursor-pointer hover:scale-110 border-0 text-white left-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-hover shadow-md transition-all duration-300 disabled:opacity-0 opacity-100 " />
  <CarouselNext className="p-5 cursor-pointer hover:scale-110 border-0 text-white right-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-hover shadow-md transition-all duration-300 disabled:opacity-0 opacity-100 " />
</Carousel>
    </section>
  )
}

export default Služby