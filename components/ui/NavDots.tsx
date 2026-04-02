

const NavDots = ({active, theme} : {active: number, theme: string}) => {
  return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-50">
  {[0,1,2,3].map((i) => (
    <button
      key={i}
      onClick={() => {
        document.querySelectorAll("section")[i]
          .scrollIntoView({ behavior: "smooth" });
      }}
      className={`w-3 h-3 rounded-full transition-all duration-300
   ${
    active === i
      ? theme === "dark" 
      ? "bg-background scale-110" 
      : "bg-primary scale-110" 
      : theme === "dark"
      ? "bg-white/50 hover:bg-white"
      : "bg-black/40 hover:bg-black"
  }
`}
    />
  ))}
</div>
  )
}

export default NavDots