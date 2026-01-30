import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const faqs = [
  {
    question: "¿Cuánto cuesta y hay compromiso de permanencia?",
    answer:
      "SmartFit tiene planes desde €29.99/mes. No hay compromiso de permanencia: puedes cancelar cuando quieras sin penalización. Además, ofrecemos 14 días de garantía de devolución si no estás satisfecho.",
  },
  {
    question: "¿Realmente funciona si tengo poco tiempo?",
    answer:
      "Absolutamente. Nuestros entrenamientos están diseñados específicamente para personas ocupadas. Con solo 45 minutos, 3 veces por semana, puedes ver resultados significativos. Además, tu plan se adapta a tu horario, no al revés.",
  },
  {
    question: "¿Necesito ir a un gimnasio o tener equipamiento?",
    answer:
      "No es necesario. Ofrecemos opciones de entrenamiento en casa con peso corporal o equipamiento básico (mancuernas, bandas). Si prefieres gimnasio, también tenemos rutinas para máquinas. Tú eliges.",
  },
  {
    question: "¿Qué pasa si no veo resultados?",
    answer:
      "Tenemos una tasa de éxito del 90%, pero si después de 30 días de seguir el programa al pie de la letra no ves mejoras, te devolvemos tu dinero. Sin preguntas. Tu éxito es nuestra prioridad.",
  },
];

export function FAQ() {
  const handleContact = () => {
    openWhatsApp(
      "¡Hola! Tengo algunas preguntas sobre SmartFit que no encontré en la web. ¿Me pueden ayudar?"
    );
  };

  return (
    <section id="faq" className="w-full bg-white py-20 md:py-28">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-[#FF6B00] font-semibold text-sm uppercase tracking-wider mb-4">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Resolvemos tus dudas
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              Todo lo que necesitas saber antes de empezar tu transformación
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#F8F8F8] rounded-[8px] border border-[#E5E5E5] px-6 data-[state=open]:border-[#FF6B00] transition-colors duration-200"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[#1A1A1A] hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#4A4A4A] pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-[#4A4A4A] mb-4">
              ¿Tienes más preguntas? Estamos aquí para ayudarte.
            </p>
            <Button
              onClick={handleContact}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8 py-3 rounded-[8px] transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2 fill-current" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
