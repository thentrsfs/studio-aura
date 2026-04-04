'use client'
import Image from "next/image"
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import MobileMenuBtn from "../ui/MobileMenuBtn";

export const images = [
    {src: '/images/galerie/galerie1.jpg', alt: 'Image 1'},
    {src: '/images/galerie/galerie2.jpg', alt: 'Image 2'},
    {src: '/images/galerie/galerie3.jpg', alt: 'Image 3'},
    {src: '/images/galerie/galerie4.jpg', alt: 'Image 4'},
    {src: '/images/galerie/galerie5.jpg', alt: 'Image 5'},
    {src: '/images/galerie/galerie6.jpg', alt: 'Image 6'},
]

const Galerie = ({theme, isMenuOpen, setIsMenuOpen} : {theme: string, isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<number | undefined>(undefined);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        setLightboxOpen(true);
    }

  return (
    <section data-theme="light" id="galerie" className="min-h-dvh bg-background px-6 lg:px-36 flex flex-col gap-10 relative py-10">
        <div>
            <h2 className="lg:text-4xl text-3xl text-black font-sora font-bold uppercase mb-4 after:content-[''] after:block after:w-12 after:h-1 after:bg-primary after:mt-0.5">Galerie</h2>
            <p className="lg:text-lg text-black/60 max-w-md">Ukázky naší práce.</p>
        </div>
 <div className="lg:hidden absolute top-10 right-6">
        <MobileMenuBtn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} theme={theme}/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div onClick={() => openLightbox(index)} key={index} className="relative group overflow-hidden rounded-lg cursor-pointer w-full h-60 lg:h-80">
                    <Image src={image.src} alt={image.alt} fill sizes="100%" className="object-cover group-hover:scale-105 transition-all duration-300"  />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
    <span className="text-white text-sm border border-white/70 px-4 py-2 rounded-full bg-black/50">Zobrazit</span>
  </div>
                </div>
            ))}
        </div>
            <Lightbox slides={images} open={lightboxOpen} close={() => setLightboxOpen(false)} index={selectedImage} styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" }, slide: {
      borderRadius: "16px",
      overflow: "hidden",
    },}} />
    </section>
  )
}

export default Galerie