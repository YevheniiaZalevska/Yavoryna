import { useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Order from "./sections/Order";
import Gallery from "./sections/Gallery";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import OrderModal from "./components/OrderModal";

export default function App() {
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
        <Hero onOpenOrder={openOrder} onNavigate={scrollTo} />
        <About />
        <Services onOpenOrder={openOrder} />
        <Order />
        <Gallery />
        <FAQ />
        <Footer />
      </main>

      <OrderModal
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
        service={orderService}
      />
    </div>
  );
}
