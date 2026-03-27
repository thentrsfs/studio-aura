

const Pricing = () => {
  return (
    <div id="cenik" className="py-16 px-6 md:px-36 text-black" >
        <h2 className="lg:text-4xl text-3xl text-black font-sora font-semibold uppercase mb-6">Ceník</h2>
        <p className="lg:text-lg mb-8 text-black/70">Přehled našich služeb a orientačních cen.</p>
        <div className="grid lg:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col gap-8 bg-white/50 hover:shadow-xl transition-all duration-300 backdrop-blur-lg p-10 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold border-b border-black/15 pb-4 font-sora">Střihy</h3>
            <ul className="text-lg text-black/80 flex flex-col gap-3">
                <li className="flex justify-between items-center">Pánský střih <span className="font-semibold text-primary">300 Kč</span></li>
                <li className="flex justify-between">Dámský střih  <span className="font-semibold text-primary">500 Kč</span></li>
                <li className="flex justify-between">Dětský střih <span className="font-semibold text-primary">250 Kč</span></li>
            </ul>
            </div>
            <div className="flex flex-col gap-8 bg-white/50 hover:shadow-xl transition-all duration-300 backdrop-blur-lg p-10 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold border-b border-black/15 pb-4 font-sora">Barvení</h3>
            <ul className="text-lg text-black/80 flex flex-col gap-3">
                <li className="flex justify-between items-center">Barvení krátké vlasy <span className="font-semibold text-primary">od 800 Kč</span></li>
                <li className="flex justify-between">Barvení dlouhé vlasy <span className="font-semibold text-primary">od 1200 Kč</span></li>
                <li className="flex justify-between">Melír <span className="font-semibold text-primary">od 1000 Kč</span></li>
            </ul>
            </div>
            <div className="flex flex-col gap-8 bg-white/50 hover:shadow-xl transition-all duration-300 backdrop-blur-lg p-10 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold border-b border-black/15 pb-4 font-sora">Péče o vlasy</h3>
            <ul className="text-lg text-black/80 flex flex-col gap-3">
                <li className="flex justify-between items-center">Melír <span className="font-semibold text-primary">od 1000 Kč</span></li>
                <li className="flex justify-between">Mytí + foukaná<span className="font-semibold text-primary">200 Kč</span></li>
                <li className="flex justify-between">Regenerace vlasů<span className="font-semibold text-primary">400 Kč</span></li>
            </ul>
            </div>
<p className="text-black text-sm">*Ceny se mohou lišit podle délky a hustoty vlasů.</p>
        </div>
    </div>
  )
}

export default Pricing