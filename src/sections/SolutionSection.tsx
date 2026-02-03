import { Zap, Calendar, UserCheck, LineChart } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Entrenamientos de 45 minutos",
    description:
      "Rutinas de alta intensidad diseñadas para quemar grasa y ganar músculo en la mitad de tiempo. Sin horas perdidas en el gimnasio.",
  },
  {
    icon: Calendar,
    title: "Planificación inteligente",
    description:
      "Tu plan se adapta a TU horario. Entrena cuando puedas, donde puedas. Con o sin equipamiento. Sin excusas.",
  },
  {
    icon: UserCheck,
    title: "Coach personal 24/7",
    description:
      "Un entrenador real que te guía, responde tus dudas y ajusta tu plan semana a semana. No estás solo en esto.",
  },
  {
    icon: LineChart,
    title: "Resultados medibles",
    description:
      "Seguimiento de progreso con fotos, medidas y análisis de composición corporal. Ve tu transformación en tiempo real.",
  },
];

export function SolutionSection() {

  return (
    <section id="solucion" className="w-full bg-[#1A1A1A] py-20 md:py-28">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-[#FF6B00] font-semibold text-sm uppercase tracking-wider mb-4">
              La solución
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Presentamos <span className="text-[#FF6B00]">SmartFit</span>
            </h2>
            <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto">
              El sistema de transformación física que ha ayudado a más de 10,000
              personas a lograr el cuerpo que siempre quisieron, sin sacrificar
              su vida social ni su salud mental.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] rounded-[8px] p-6 border border-[#3A3A3A] hover:border-[#FF6B00] transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#FF6B00] rounded-[8px] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#B0B0B0] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">
              Cómo funciona en <span className="text-[#FF6B00]">3 pasos</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Evaluación personalizada",
                  description:
                    "Completa nuestro cuestionario de 5 minutos sobre tu historial, metas y estilo de vida.",
                },
                {
                  step: "02",
                  title: "Recibe tu plan único",
                  description:
                    "Nuestros expertos diseñan tu plan de entrenamiento y nutrición específico para ti.",
                },
                {
                  step: "03",
                  title: "Transformación guiada",
                  description:
                    "Sigue tu plan con el apoyo de tu coach personal y la comunidad SmartFit.",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-5xl font-bold text-[#FF6B00] opacity-20 mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[#B0B0B0]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
