
import Logo from "./Logo"

const Nav = () => {
  return (
    <div className="w-full pt-10 lg:px-36 px-6 flex items-center justify-between absolute top-0 z-20 text-white font-sora text-sm uppercase">
<Logo />
      <div className="lg:flex items-center gap-12 tracking-wide hidden">
        <div className="group flex flex-col">
<a href="#sluzby">Služby</a>
<span className="group-hover:w-full w-0 h-px bg-white transition-all duration-300 "></span>
</div>
<div className="group flex flex-col">
<a href="">Cenik</a>
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
<button className="text-lg text-white font-medium lg:hidden font-sora">Menu</button>
    </div>
  )
}

export default Nav