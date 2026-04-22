import { useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Footer from "./sections/Footer";
import OrderModal from "./components/OrderModal";
import Awards from "./sections/Awards";
import Stats from "./sections/Stats";

export default function App() {
  const base = import.meta.env.BASE_URL; 

  const [orderOpen, setOrderOpen] = useState(false);
  const [orderService, setOrderService] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openOrder = (service) => {
    setOrderService(service || null);
    setOrderOpen(true);
  };

  return (
    <div className="app">
      <div className="bgFx" />

      <Header onNavigate={scrollTo} onOpenOrder={openOrder} />

      <main>
        <Stats onOpenOrder={openOrder} onNavigate={scrollTo} />
        <Hero/>
        <Services onOpenOrder={openOrder} />
        <Gallery />
        < Awards />
        <Footer />
      </main>

      <OrderModal
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
      />
    </div>
  );
}
