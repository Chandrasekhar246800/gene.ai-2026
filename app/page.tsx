import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sessions from "@/components/Sessions";
import Organizers from "@/components/Organizers";
import Speakers from "@/components/Speakers";
import Registration from "@/components/Registration";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy relative">
      <Navbar />
      <Hero />
      <About />
      <Sessions />
      <Organizers />
      <Speakers />
      <Registration />
      <Contact />
    </main>
  );
}
