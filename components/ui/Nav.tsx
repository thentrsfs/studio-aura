'use client'
import Logo from "./Logo"
import { useState, useEffect } from "react"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if(!isMenuOpen) return;
    document.body.style.position = "fixed";

    return () => {
  document.body.style.position = "";
    };
  }
  , [isMenuOpen]);

  return (
    <div className="w-full pt-10 lg:px-36 px-6 flex items-center justify-between absolute top-0 z-20 text-white font-sora text-sm uppercase ">
<Logo isMenuOpen={isMenuOpen}/>
      <div className="lg:flex items-center gap-12 tracking-wide hidden">
        <div className="group flex flex-col">
<a href="#sluzby">Služby</a>
<span className="group-hover:w-full w-0 h-px bg-white transition-all duration-300 "></span>
</div>
<div className="group flex flex-col">
<a href="#cenik">Cenik</a>
<span className="group-hover:w-full w-0 h-px bg-white transition-all duration-300 "></span>
</div>
<div className="group flex flex-col">
<a href="">Galerie</a>
<span className="group-hover:w-full w-0 h-px bg-white transition-all duration-300 "></span>
</div>
<div className="group flex flex-col">
<a href="">Kontakt</a>
<span className="group-hover:w-full w-0 h-px bg-white transition-all duration-300 "></span>
</div>
</div>
<button className="text-white py-2.5 px-9 cursor-pointer bg-primary rounded-lg font-medium hover:bg-primary-hover transition max-lg:hidden">Objednat se</button>
<button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`text-lg ${isMenuOpen ? 'text-black' : 'text-white'} font-medium lg:hidden font-sora z-20`}>Menu</button>
<div className={`absolute inset-0 bg-background ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300 flex flex-col items-center justify-center gap-8 text-xl uppercase font-sora text-black z-10 h-dvh`}>
<a onClick={() => setIsMenuOpen(false)} href="#sluzby">Služby</a>
<a onClick={() => setIsMenuOpen(false)} href="#cenik">Cenik</a>
<a onClick={() => setIsMenuOpen(false)} href="">Galerie</a>
<a onClick={() => setIsMenuOpen(false)} href="">Kontakt</a>
</div>
    </div>
  )
}

export default Nav