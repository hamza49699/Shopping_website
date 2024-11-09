import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Deals from "@/components/Deals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NewArrivals id="NewArrivals" />  
      <Deals id="Deals" />
      <Contact id="Contact" />
      <Footer />
    </main>
  );
}
