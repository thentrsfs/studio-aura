import Hero from "@/components/sections/Hero";
import Nav from "@/components/ui/Nav";
export default function Home() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
     <Nav/>
     <Hero />
    </div>
  );
}
