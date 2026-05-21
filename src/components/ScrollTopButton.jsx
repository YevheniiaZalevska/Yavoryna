import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scrollTopBtn ${visible ? "show" : ""}`}
      onClick={scrollTop}
      aria-label="Повернутися вгору"
    >
      <ArrowUp size={20} />
    </button>
  );
}