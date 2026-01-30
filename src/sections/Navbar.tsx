import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "34600000000"; // Número de ejemplo - cambiar por el real
const WHATSAPP_MESSAGE = encodeURIComponent(
  "¡Hola! Vi su página web y me interesa conocer más sobre SmartFit. ¿Podrían ayudarme?"
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Cómo funciona", id: "solucion" },
    { label: "Testimonios", id: "testimonios" },
    { label: "Preguntas", id: "faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E5E5E5]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="text-xl md:text-2xl font-bold text-[#1A1A1A]"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Smart<span className="text-[#FF6B00]">Fit</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[#4A4A4A] hover:text-[#FF6B00] font-medium transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button - WhatsApp */}
            <div className="hidden md:block">
              <Button
                onClick={openWhatsApp}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-6 py-2.5 rounded-[8px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 mr-2 fill-current" />
                Contactar por WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#1A1A1A]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#E5E5E5] shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="w-full px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-[#1A1A1A] hover:text-[#FF6B00] font-medium py-2 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <hr className="border-[#E5E5E5] my-2" />
            <Button
              onClick={openWhatsApp}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-6 py-3 rounded-[8px] w-full transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2 fill-current" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
