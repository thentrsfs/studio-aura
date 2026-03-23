'use client";'
import Image from "next/image";

const Hero = () => {
  return (
    <div className="">
      
     <div className="relative w-full h-[80vh]">
       <div className="absolute z-10 top-1/2 left-8 md:left-36 -translate-y-1/2 text-white max-w-xl flex flex-col gap-5">

  <h3 className="text-sm md:text-lg font-medium text-white/80">
    Kadeřnictví v Pardubicích
  </h3>

  <h1 className="text-5xl md:text-7xl font-bold uppercase font-display leading-[1.1]">
    Studio Aura
  </h1>

  <p className="text-white/70 text-base md:text-lg max-w-md">
    Moderní střihy, barvení a individuální péče
  </p>

  <div className="flex gap-4 mt-10">
    <button className="py-2.5 px-10 rounded-lg bg-primary font-medium hover:bg-primary-hover transition cursor-pointer">
      Objednat se
    </button>

    <button className="py-2.5 px-10 rounded-lg bg-background text-black font-medium hover:bg-background-hover transition cursor-pointer">
      Zavolat
    </button>
  </div>

</div>
     <Image src={'/images/barber-hero.jpg'} alt="Man haircut" fill className="object-cover" loading="eager" />
     <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#000000]/75 to-[#000000]/10"/>
     <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-[#000000]/30 to-transparent"/>
     <div className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-b from-transparent to-background/60"/>
     </div>
     </div>
  )
}

export default Hero