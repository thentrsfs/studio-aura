'use client'
import Logo from "./Logo"
import {useEffect } from "react"
import { IoClose } from "react-icons/io5";
import CustomButton from "./CustomButton";
import { HiOutlineMenu } from "react-icons/hi";

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
    <div className='w-full pt-10 lg:px-36 px-6 flex items-center justify-between absolute top-0 z-26 text-white font-sora text-sm uppercase' >
<Logo isMenuOpen={isMenuOpen} className={active !== 0 ? 'opacity-0' : 'opacity-100'}/>
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
<a href="#galerie">Galerie</a>
<span className="group-hover:w-full w-0 h-px bg-white transition-all duration-300 "></span>
</div>
<div className="group flex flex-col">
<a href="#kontakt">Kontakt</a>
<span className="group-hover:w-full w-0 h-px bg-white transition-all duration-300 "></span>
</div>
</div>
<CustomButton className="max-lg:hidden normal-case" href="#kontakt"/>
<button onClick={() => setIsMenuOpen(!isMenuOpen)} className='font-medium lg:hidden font-sora z-26'>{isMenuOpen ? <IoClose className="text-3xl text-black" /> : <HiOutlineMenu className={`text-3xl ${theme === 'dark' ? 'text-white' : 'text-primary'}`} />}</button>

    </div>
  )
}

export default Nav