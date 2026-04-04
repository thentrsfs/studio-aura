import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Logo from "./Logo";

gsap.registerPlugin(useGSAP);

const SplashScreen = () => {

    const splashScreen = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(logoRef.current,{
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.6,
            ease: "power3.inOut",
            delay: 0.2
        })

        tl.to(splashScreen.current, {
            y: "-100%",
            duration: 0.6,
            ease: "power3.inOut",
        })
    })

  return (
    <div ref={splashScreen} className="fixed inset-0 z-999 flex items-center justify-center bg-primary">
        <div ref={logoRef}>
<Logo isMenuOpen={false} />
        </div>
    </div>
  )
}

export default SplashScreen