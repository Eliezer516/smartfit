import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Gift, Shield, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export function FooterHero() {
  const handleStartTransformation = () => {
    openWhatsApp(
      "¡Hola! Quiero aprovechar la oferta del 50% de descuento y empezar mi transformación con SmartFit. ¿Me pueden ayudar?"
    );
  };

  return (
    <section className="w-full bg-[#1A1A1A] py-20 md:py-28">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF6B00] px-4 py-2 rounded-[8px] mb-8">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">
              Oferta limitada: 50% de descuento solo hoy
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Qué pasará si no tomas acción hoy?
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#B0B0B0] mb-8 max-w-2xl mx-auto leading-relaxed">
            En 90 días podrías estar viendo un cuerpo completamente nuevo en el
            espejo. O podrías estar exactamente donde estás ahora, con los
            mismos kilos de más, la misma falta de energía y las mismas
            excusas.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-[#B0B0B0]">
              <Shield className="w-5 h-5 text-[#FF6B00]" />
              <span className="text-sm">14 días de garantía</span>
            </div>
            <div className="flex items-center gap-2 text-[#B0B0B0]">
              <Gift className="w-5 h-5 text-[#FF6B00]" />
              <span className="text-sm">Plan de nutrición incluido</span>
            </div>
            <div className="flex items-center gap-2 text-[#B0B0B0]">
              <Clock className="w-5 h-5 text-[#FF6B00]" />
              <span className="text-sm">Acceso inmediato</span>
            </div>
          </div>

          {/* CTA Final */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              onClick={handleStartTransformation}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-10 py-7 text-lg rounded-[8px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 mr-2 fill-current" />
              Quiero empezar mi transformación
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Price Comparison */}
          <div className="inline-block bg-[#2A2A2A] rounded-[8px] px-8 py-4">
            <div className="flex items-center gap-4">
              <span className="text-[#4A4A4A] line-through text-lg">
                €59.99/mes
              </span>
              <span className="text-[#FF6B00] font-bold text-2xl">
                €29.99/mes
              </span>
              <span className="bg-[#FF6B00] text-white text-xs font-bold px-2 py-1 rounded-[4px]">
                -50%
              </span>
            </div>
          </div>

          {/* Risk Reversal */}
          <p className="mt-6 text-sm text-[#4A4A4A]">
            Sin compromiso de permanencia. Cancela cuando quieras.
          </p>

          {/* WhatsApp Note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-[#25D366]">
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="text-sm font-medium">
              Contacto directo por WhatsApp - Respuesta en menos de 5 minutos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
