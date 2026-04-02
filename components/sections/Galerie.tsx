import Image from "next/image"

const images = [
    {src: '/images/galerie/galerie1.jpg', alt: 'Image 1'},
    {src: '/images/galerie/galerie2.jpg', alt: 'Image 2'},
    {src: '/images/galerie/galerie3.jpg', alt: 'Image 3'},
    {src: '/images/galerie/galerie4.jpg', alt: 'Image 4'},
    {src: '/images/galerie/galerie5.jpg', alt: 'Image 5'},
    {src: '/images/galerie/galerie6.jpg', alt: 'Image 6'},
]

const Galerie = () => {
  return (
    <section data-theme="light" id="galerie" className="min-h-dvh bg-background px-6 md:px-36 flex flex-col gap-10 relative py-10">
        <div>
            <h2 className="lg:text-4xl text-3xl text-black font-sora font-bold uppercase mb-4 after:content-[''] after:block after:w-12 after:h-1 after:bg-primary after:mt-0.5">Galerie</h2>
            <p className="lg:text-lg text-black/60 max-w-md">Ukázky naší práce.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg cursor-pointer w-full lg:h-80">
                    <Image src={image.src} alt={image.alt} fill sizes="100%" className="object-cover"  />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
    <span className="text-white text-sm">Zobrazit</span>
  </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Galerie