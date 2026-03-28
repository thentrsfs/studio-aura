'use client';
import Hero from "@/components/sections/Hero";
import Nav from "@/components/ui/Nav";
import Služby from "@/components/sections/Služby";
import Pricing from "@/components/sections/Pricing";
import {gsap} from "gsap";
import { useEffect } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function Home() {

  useEffect(() => {
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    effects: true,
  });

  return () => {
    smoother.kill();
  }
}, [])

  return (
    <div id="smooth-wrapper" className="bg-background min-h-screen">
      <div id="smooth-content" className="flex flex-col">
     <Nav/>
     <Hero />
     <Služby/>
     <Pricing/>
     </div>
    </div>
  );
}
