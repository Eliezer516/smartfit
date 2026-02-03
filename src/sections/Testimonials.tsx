import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const testimonials = [
  {
    name: "María González",
    age: 34,
    before: "82 kg - Sin energía",
    after: "70 kg - Llena de vida",
    quote:
      "Después de dos embarazos pensé que nunca recuperaría mi figura. SmartFit me demostró que estaba equivocada. En 3 meses perdí 12 kg y gané confianza que no tenía desde los 20.",
    rating: 5,
    image: "https://placehold.co/80x80/FF6B00/FFFFFF?text=MG",
  },
  {
    name: "Carlos Mendoza",
    age: 42,
    before: "Sedentario - Dolor de espalda",
    after: "Activo - Sin dolor",
    quote:
      "Como programador, pasaba 10 horas sentado. Mi espalda me mataba y mi energía era nula. Los entrenamientos de 45 min de SmartFit cambiaron mi vida. Ahora tengo más energía que a los 30.",
    rating: 5,
    image: "https://placehold.co/80x80/1A1A1A/FFFFFF?text=CM",
  },
  {
    name: "Ana Rodríguez",
    age: 28,
    before: "Insegura - Sin rutina",
    after: "Confiada - Disciplinada",
    quote:
      "Siempre odié los gimnasios. Me sentía intimidada y perdida. SmartFit me dio un plan claro y un coach que me apoyó en cada paso. Ahora entreno 4 veces por semana y lo disfruto.",
    rating: 5,
    image: "https://placehold.co/80x80/FF6B00/FFFFFF?text=AR",
  },
];

export function Testimonials() {
  const handleContact = () => {
    openWhatsApp(
      "¡Hola! Vi los testimonios en su web y me gustaría saber si SmartFit también puede funcionar para mí. ¿Me pueden ayudar?"
    );
  };

  return (
    <section id="testimonios" className="w-full bg-[#F8F8F8] py-20 md:py-28">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-[#FF6B00] font-semibold text-sm uppercase tracking-wider mb-4">
              Testimonios
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Historias de transformación real
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Estas son personas como tú que decidieron dar el primer paso y
              nunca miraron atrás.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-[8px] p-8 shadow-sm border border-[#E5E5E5] hover:shadow-lg transition-shadow duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-[#FF6B00] opacity-30" />
                </div>

                {/* Quote Text */}
                <p className="text-[#1A1A1A] leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#FF6B00] fill-[#FF6B00]"
                    />
                  ))}
                </div>

                {/* Before/After */}
                <div className="bg-[#F8F8F8] rounded-[8px] p-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-[#4A4A4A] block text-xs uppercase tracking-wider mb-1">
                        Antes
                      </span>
                      <span className="text-[#1A1A1A] font-medium">
                        {testimonial.before}
                      </span>
                    </div>
                    <div className="text-[#FF6B00]">→</div>
                    <div className="text-right">
                      <span className="text-[#4A4A4A] block text-xs uppercase tracking-wider mb-1">
                        Después
                      </span>
                      <span className="text-[#FF6B00] font-bold">
                        {testimonial.after}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-[#1A1A1A]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[#4A4A4A]">
                      {testimonial.age} años
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="mt-16 bg-[#1A1A1A] rounded-[8px] p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-2">
                  10,000+
                </div>
                <div className="text-[#B0B0B0] text-sm">
                  transformaciones
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-2">
                  90%
                </div>
                <div className="text-[#B0B0B0] text-sm">
                  alcanzan su meta
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-2">
                  50+
                </div>
                <div className="text-[#B0B0B0] text-sm">
                  coaches expertos
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={handleContact}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-10 py-6 text-lg rounded-[8px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 mr-2 fill-current" />
              Quiero ser el próximo testimonio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
