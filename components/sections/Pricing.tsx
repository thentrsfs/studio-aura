import { prices } from "@/data/prices"

const Pricing = () => {
  return (
    <section data-theme="dark" id="cenik" className="py-16 px-6 md:px-36 text-white min-h-dvh bg-primary" >
        <h2 className="lg:text-4xl text-3xl font-sora font-semibold uppercase mb-6">Ceník</h2>
        <p className="lg:text-lg mb-8 text-white/70">Přehled našich služeb a orientačních cen.</p>
        <div className="grid lg:grid-cols-3 gap-8 mt-10">
            {prices.map((category) => (
                <div key={category.id} className="flex flex-col gap-8 bg-white/10 hover:shadow-2xl hover:scale-101 transition-all duration-300 backdrop-blur p-10 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold border-b border-background/50 pb-4 font-sora text-background">{category.title}</h3>
                    <ul className="text-lg text-white flex flex-col gap-3">
                        {category.services.map((service) => (
                            <li key={service.id} className="flex justify-between items-center">
                                {service.name} <span className="font-semibold text-background">{service.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
<p className="text-white/70 text-sm mt-4">*Ceny se mohou lišit podle délky a hustoty vlasů.</p>
    </section>
  )
}

export default Pricing