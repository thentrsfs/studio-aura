
const Kontakt = () => {
  return (
    <section id="kontakt" data-theme="dark" className="min-h-dvh bg-primary text-white flex flex-col gap-10 relative pt-10">
        <div className="px-6 md:px-36">
        <h2 className="lg:text-4xl text-3xl font-sora font-semibold uppercase mb-6 after:content-[''] after:block after:w-12 after:h-1 after:bg-background after:mt-0.5">Kontakt</h2>
        <p className="lg:text-lg text-white/70">Rádi se o vás postaráme. Kontaktujte nás a domluvte si svůj termín.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center px-6 md:px-36">
<div>
   <div className="flex flex-col gap-4 mt-6 font-medium tracking-wide text-lg">

  <div className="flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur p-8 rounded-xl hover:shadow-2xl hover:scale-101 transition-all duration-300 shadow-lg">
    <span>📞</span>
    <a href="tel:+420123456789" className="hover:underline">
      +420 123 456 789
    </a>
  </div>

  <div className="flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur p-8 rounded-xl hover:shadow-2xl hover:scale-101 transition-all duration-300 shadow-lg">
    <span>📍</span>
    <p>Pardubice</p>
  </div>

  <div className="flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur p-8 rounded-xl hover:shadow-2xl hover:scale-101 transition-all duration-300 shadow-lg">
    <span>🕒</span>
    <p>Po–Pá: 9:00 – 18:00</p>
  </div>
</div>
</div>
    <iframe className="w-full lg:h-120 rounded-xl shadow-lg border-5 border-white/10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82007.52918847471!2d15.676048253770366!3d50.03505584517829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dc94b239307b5%3A0x12d59894ccf624ae!2z0J_QsNGA0LTRg9Cx0LjRhtC1!5e0!3m2!1ssr!2scz!4v1775219406732!5m2!1ssr!2scz" loading="lazy" ></iframe>
        </div>
        <footer className="w-full block mt-auto bg-background text-primary lg:py-3 py-5">
  <div className="w-full mx-auto px-6 flex max-lg:flex-col max-lg:gap-8 justify-between lg:items-center">
    <div className="flex max-lg:flex-col lg:gap-4 gap-2 lg:items-center">
      <a href="#hero" className="text-lg font-bold uppercase font-sora">Studio Aura</a>
      <p className="text-primary/70 text-sm font-medium">
        Vytváříme styl, který vám sedí.
      </p>
    </div>

    {/* NAV */}
    <div className="flex max-lg:flex-col lg:items-center lg:gap-3 gap-2">
      <h4 className="font-semibold font-sora">Navigace</h4>
      <div className="w-px h-4 bg-primary mt-0.5 lg:block hidden"/>
      <div className="flex items-center gap-4">
      <a href="#sluzby" className="hover:underline">Služby</a>
      <a href="#cenik" className="hover:underline">Ceník</a>
      <a href="#galerie" className="hover:underline">Galerie</a>
      <a href="#kontakt" className="hover:underline">Kontakt</a>
      </div>
    </div>

    {/* CONTACT */}
    <div className="flex max-lg:flex-col lg:items-center lg:gap-3 gap-2">
      <h4 className="font-semibold font-sora">Kontakt</h4>
        <div className="flex gap-3">
      <div className="w-px h-4 bg-primary mt-0.5 lg:block hidden"/>
      <a href="tel:+420123456789">+420 123 456 789</a>
      <p>Pardubice</p>
      </div>
    </div>

  <div className="text-center text-primary/50 text-xs font-medium block max-lg:mr-auto">
    © 2026 Studio Aura. Všechna práva vyhrazena.
  </div>
  </div>
</footer>
    </section>
  )
}

export default Kontakt