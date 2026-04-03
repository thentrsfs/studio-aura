'use client";'
import Image from "next/image";
import CustomButton from "../ui/CustomButton";

const Hero = () => {
  return (
     <section id="hero" data-theme="dark" className="relative w-full h-dvh">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
<span className="text-sm text-white/70">Scroll</span>

<div className="w-6 h-8 border border-white/60 rounded-full flex items-start justify-center p-1">
  <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
</div>
      </div>
       <div className="absolute z-10 lg:top-1/2 lg:left-36 bottom-1/3 left-6 lg:-translate-y-1/2 text-white max-w-xl flex flex-col gap-5">

  <h3 className="text-sm lg:text-base font-medium text-background">
    Kadeřnictví v Pardubicích
  </h3>

  <h1 className="text-[40px] lg:text-7xl font-bold uppercase font-sora tracking-tight leading-[1.1]">
    Studio Aura
  </h1>

  <p className="text-white/70 text-base lg:text-lg lg:max-w-md">
    Moderní střihy, barvení a individuální péče
  </p>

  <div className="flex gap-4 mt-10">
    <CustomButton/>

    <button className="py-2.5 px-10 rounded-lg border border-background text-white bg-background/5 font-medium hover:bg-background/10 transition cursor-pointer">
      Zavolat
    </button>
  </div>

</div>
     <Image src={'/images/barber-hero.jpg'} alt="Man haircut" fill className="object-cover object-[80%]" loading="eager" />
     <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#000000]/90 to-[#000000]/10"/>
     <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-[#000000]/50 to-transparent"/>
     </section>
  )
}

export default Hero