import { services } from "@/data/services";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Služby = () => {
  return (
    <div className="py-16 px-6 md:px-36" >
        <h2 className="text-4xl text-black font-sora font-semibold uppercase mb-6">Naše služby</h2>
        <p className="text-lg text-black/70">Vytváříme styl, který vám sedí – od střihu až po kompletní péči o vlasy.</p>
     <Carousel className="mt-10 relative">
  <CarouselContent className="cursor-grab active:cursor-grabbing">
    {services.map((service) => (
      <CarouselItem key={service.id} className=" lg:basis-1/3">
        <div className="relative h-100 md:h-125 overflow-hidden rounded-lg group">
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="100%"
            className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 "
          />

          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/40 group-hover:bg-black/60 backdrop-blur-xs p-6 flex flex-col rounded-b-lg justify-center gap-2 transition-all duration-300 select-none">
            <h3 className="text-2xl text-white font-sora font-semibold">
              {service.name}
            </h3>
            <p className="text-white/80">{service.description}</p>
          </div>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  <CarouselPrevious className="p-5 lg:-left-20 left-2 cursor-pointer hover:bg-black/5 bg-background transition-all duration-300 disabled:opacity-0 opacity-100 " />
  <CarouselNext className="p-5 lg:-right-20 right-2 cursor-pointer hover:bg-black/5 bg-background transition-all duration-300 disabled:opacity-0 opacity-100 " />
</Carousel>
    </div>
  )
}

export default Služby