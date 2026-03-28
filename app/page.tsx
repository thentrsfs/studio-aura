'use client';
import Hero from "@/components/sections/Hero";
import Nav from "@/components/ui/Nav";
import Služby from "@/components/sections/Služby";
import Pricing from "@/components/sections/Pricing";
import SnapScroll from "@/components/ui/SnapScroll";

export default function Home() {

  return (
    <div className="bg-background min-h-screen flex flex-col">
     <Nav/>
     <Hero />
     <Služby/>
     <Pricing/>
     <SnapScroll/>
    </div>
  );
}
