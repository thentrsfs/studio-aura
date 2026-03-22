
import Logo from "./Logo"

const Nav = () => {
  return (
    <div className="w-full pt-10 lg:px-36 flex items-center justify-between absolute top-0 z-20 text-white font-medium font-display uppercase">
<Logo />
      <div className="flex items-center gap-12 tracking-wide">
<a href="">Služby</a>
<a href="">Cenik</a>
<a href="">Galerie</a>
<a href="">Kontakt</a>
</div>
<button className="text-white py-2.5 px-9 cursor-pointer bg-primary rounded-lg hover:bg-primary-hover transition">Objednat se</button>
    </div>
  )
}

export default Nav