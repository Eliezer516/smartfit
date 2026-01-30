import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export function Hero() {
  const handleStartTransformation = () => {
    openWhatsApp(
      "¡Hola! Quiero empezar mi transformación con SmartFit. ¿Me pueden dar más información sobre los planes disponibles?"
    );
  };

  const handleViewPlans = () => {
    openWhatsApp(
      "¡Hola! Me gustaría conocer los planes y precios de SmartFit. ¿Me pueden enviar más información?"
    );
  };

  return (
    <section className="relative w-full bg-white overflow-hidden pt-20 md:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FFF3E6] px-4 py-2 rounded-[8px] mb-6">
                <Star className="w-4 h-4 text-[#FF6B00] fill-[#FF6B00]" />
                <span className="text-sm font-medium text-[#1A1A1A]">
                  #1 en resultados garantizados
                </span>
              </div>

              {/* H1 - Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                Transforma tu cuerpo en{" "}
                <span className="text-[#FF6B00]">90 días</span> sin dietas
                extremas ni horas interminables de gimnasio
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-[#4A4A4A] mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                SmartFit combina entrenamiento personalizado + nutrición
                inteligente + seguimiento en tiempo real. Diseñado para personas
                ocupadas que quieren resultados reales sin sacrificar su vida.
              </p>

              {/* CTA Primary */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  size="lg"
                  onClick={handleStartTransformation}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8 py-6 text-lg rounded-[8px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 mr-2 fill-current" />
                  Empezar por WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleViewPlans}
                  className="border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-semibold px-8 py-6 text-lg rounded-[8px] transition-all duration-200"
                >
                  Ver planes
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8">
                {/* Avatar Stack */}
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white bg-[#F0F0F0] overflow-hidden"
                      >
                        <img
                          src={`https://placehold.co/40x40/FF6B00/FFFFFF?text=U${i}`}
                          alt={`Usuario ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text */}
                <div className="flex items-center gap-2 text-[#4A4A4A]">
                  <Users className="w-5 h-5 text-[#FF6B00]" />
                  <span className="font-medium">
                    Únete a +10,000 personas que ya transformaron su cuerpo
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[#E5E5E5]">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[#FF6B00]">
                    90%
                  </div>
                  <div className="text-sm text-[#4A4A4A]">
                    logran su meta
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[#FF6B00]">
                    45min
                  </div>
                  <div className="text-sm text-[#4A4A4A]">
                    entrenamientos
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[#FF6B00]">
                    24/7
                  </div>
                  <div className="text-sm text-[#4A4A4A]">
                    soporte
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10 rounded-[8px] overflow-hidden shadow-2xl">
                  <img
                    src="https://placehold.co/600x700/1A1A1A/FF6B00?text=Transformación+SmartFit"
                    alt="Transformación SmartFit"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating Card - Results */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-white rounded-[8px] shadow-xl p-4 border border-[#E5E5E5]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FF6B00] rounded-[8px] flex items-center justify-center">
                      <span className="text-white font-bold text-lg">-12</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">kg perdidos</div>
                      <div className="text-sm text-[#4A4A4A]">María, 34 años</div>
                    </div>
                  </div>
                </div>

                {/* Floating Card - Time */}
                <div className="absolute -top-4 -right-4 z-20 bg-[#1A1A1A] rounded-[8px] shadow-xl p-4">
                  <div className="text-white font-semibold">Solo 45 min/día</div>
                  <div className="text-sm text-[#999]">3 veces por semana</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
