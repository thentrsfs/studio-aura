

const Pricing = () => {
  return (
    <section id="cenik" className="py-16 px-6 md:px-36 text-white min-h-screen bg-primary" >
        <h2 className="lg:text-4xl text-3xl font-sora font-semibold uppercase mb-6">Ceník</h2>
        <p className="lg:text-lg mb-8 text-white/70">Přehled našich služeb a orientačních cen.</p>
        <div className="grid lg:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col gap-8 bg-white/10 hover:shadow-2xl hover:scale-101 transition-all duration-300 backdrop-blur p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold border-b border-background/50 pb-4 font-sora text-background">Střihy</h3>
            <ul className="text-lg text-white flex flex-col gap-3">
                <li className="flex justify-between items-center">Pánský střih <span className="font-semibold text-background">300 Kč</span></li>
                <li className="flex justify-between">Dámský střih  <span className="font-semibold text-background">500 Kč</span></li>
                <li className="flex justify-between">Dětský střih <span className="font-semibold text-background">250 Kč</span></li>
            </ul>
            </div>
            <div className="flex flex-col gap-8 bg-white/10 hover:shadow-2xl hover:scale-102 transition-all duration-300 backdrop-blur p-10 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold border-b border-background/50 pb-4 font-sora text-background">Barvení</h3>
            <ul className="text-lg text-white flex flex-col gap-3">
                <li className="flex justify-between items-center">Barvení krátké vlasy <span className="font-semibold text-background">od 800 Kč</span></li>
                <li className="flex justify-between">Barvení dlouhé vlasy <span className="font-semibold text-background">od 1200 Kč</span></li>
                <li className="flex justify-between">Melír <span className="font-semibold text-background">od 1000 Kč</span></li>
            </ul>
            </div>
            <div className="flex flex-col gap-8 bg-white/10 hover:shadow-2xl hover:scale-102 transition-all duration-300 backdrop-blur p-10 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold border-b border-background/50 pb-4 font-sora text-background">Péče o vlasy</h3>
            <ul className="text-lg text-white flex flex-col gap-3">
                <li className="flex justify-between items-center">Melír <span className="font-semibold text-background">od 1000 Kč</span></li>
                <li className="flex justify-between">Mytí + foukaná<span className="font-semibold text-background">200 Kč</span></li>
                <li className="flex justify-between">Regenerace vlasů<span className="font-semibold text-background">400 Kč</span></li>
            </ul>
            </div>
<p className="text-white/70 text-sm">*Ceny se mohou lišit podle délky a hustoty vlasů.</p>
        </div>
    </section>
  )
}

export default Pricing