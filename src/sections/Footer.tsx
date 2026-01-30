import { Instagram, Facebook, Youtube, Twitter, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export function Footer() {
  const handleWhatsAppClick = () => {
    openWhatsApp(
      "¡Hola! Tengo una consulta sobre SmartFit. ¿Me pueden ayudar?"
    );
  };

  return (
    <footer className="w-full bg-white border-t border-[#E5E5E5]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Smart<span className="text-[#FF6B00]">Fit</span>
              </div>
              <p className="text-[#4A4A4A] max-w-sm mb-6">
                Transformando vidas a través de entrenamiento inteligente,
                nutrición personalizada y acompañamiento profesional.
              </p>
              
              {/* WhatsApp CTA */}
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-5 py-3 rounded-[8px] transition-colors duration-200 mb-6"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Escríbenos por WhatsApp
              </button>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#F8F8F8] rounded-[8px] flex items-center justify-center text-[#4A4A4A] hover:bg-[#FF6B00] hover:text-white transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#F8F8F8] rounded-[8px] flex items-center justify-center text-[#4A4A4A] hover:bg-[#FF6B00] hover:text-white transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#F8F8F8] rounded-[8px] flex items-center justify-center text-[#4A4A4A] hover:bg-[#FF6B00] hover:text-white transition-colors duration-200"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#F8F8F8] rounded-[8px] flex items-center justify-center text-[#4A4A4A] hover:bg-[#FF6B00] hover:text-white transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-[#1A1A1A] mb-4">SmartFit</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#solucion"
                    className="text-[#4A4A4A] hover:text-[#FF6B00] transition-colors duration-200"
                  >
                    Cómo funciona
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonios"
                    className="text-[#4A4A4A] hover:text-[#FF6B00] transition-colors duration-200"
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-[#4A4A4A] hover:text-[#FF6B00] transition-colors duration-200"
                  >
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-[#4A4A4A] hover:text-[#25D366] transition-colors duration-200"
                  >
                    Contactar
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-[#1A1A1A] mb-4">Soporte</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-[#4A4A4A] hover:text-[#25D366] transition-colors duration-200"
                  >
                    Centro de ayuda
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-[#4A4A4A] hover:text-[#25D366] transition-colors duration-200"
                  >
                    Contacto
                  </button>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-[#4A4A4A] hover:text-[#FF6B00] transition-colors duration-200"
                  >
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#4A4A4A]">
              © 2024 SmartFit. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-[#4A4A4A] hover:text-[#FF6B00] transition-colors duration-200"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-sm text-[#4A4A4A] hover:text-[#FF6B00] transition-colors duration-200"
              >
                Términos de servicio
              </a>
              <a
                href="#"
                className="text-sm text-[#4A4A4A] hover:text-[#FF6B00] transition-colors duration-200"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
