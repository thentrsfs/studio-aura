'use client'
import Logo from "./Logo"
import {useEffect } from "react"
import { IoClose } from "react-icons/io5";
import CustomButton from "./CustomButton";

const Nav = ({active, theme, isMenuOpen, setIsMenuOpen} : {active: number, theme: string, isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
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
    <div className="w-full pt-10 lg:px-36 px-6 flex items-center justify-between absolute top-0 z-26 text-white font-sora text-sm uppercase ">
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
<CustomButton className="max-lg:hidden"/>
<button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`text-lg ${isMenuOpen ? 'text-black pr-3' : 'text-white'} font-medium lg:hidden font-sora z-26`}>{isMenuOpen ? <IoClose className="text-3xl" /> : 'Menu'}</button>

<button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`text-lg ${isMenuOpen && 'text-black'} font-medium ${active === 0 ? 'opacity-0' :'opacity-100'} ${theme === 'dark' ? 'text-white' : 'text-black'} fixed right-6 top-10 lg:hidden font-sora z-26 transition-all duration-300`}>Menu</button>
    </div>
  )
}

export default Nav