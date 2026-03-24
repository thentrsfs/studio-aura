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
    <div className="py-16" >
        <h2 className="text-4xl text-black font-display font-semibold uppercase mb-6 md:px-36">Naše služby</h2>
        <p className="text-lg md:px-36 text-black/70">Moderní služby pro váš styl – od střihu až po kompletní péči o vlasy.</p>
     <Carousel className="mt-10 px-36 relative" opts={{
      loop: true
     }}>
  <CarouselContent>
    {services.map((service) => (
      <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
        <div className="relative h-100 md:h-125">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover rounded-lg"
          />

          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/40 backdrop-blur-xs p-6 flex flex-col rounded-b-lg justify-center gap-2">
            <h3 className="text-2xl text-white font-display font-semibold">
              {service.name}
            </h3>
            <p className="text-white/80">{service.description}</p>
          </div>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  <CarouselPrevious className="md:left-20" />
  <CarouselNext className="md:right-20" />
</Carousel>
    </div>
  )
}

export default Služby