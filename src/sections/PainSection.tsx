import { Clock, Frown, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "No tienes tiempo para el gimnasio",
    description:
      "Trabajas 8+ horas al día, tienes responsabilidades familiares y cuando finally tienes un momento libre, lo último que quieres es pasar 2 horas en un gimnasio lleno de gente.",
  },
  {
    icon: TrendingDown,
    title: "Has probado todo y nada funciona",
    description:
      "Dietas restrictivas, suplementos caros, rutinas de YouTube que no entiendes... Y cada vez que fallas, te sientes peor contigo mismo y más lejos de tu meta.",
  },
  {
    icon: Frown,
    title: "Te sientes incómodo en los gimnasios tradicionales",
    description:
      "La intimidación de las máquinas complicadas, la presión social, y esa sensación de que todos te están juzgando mientras intentas entender qué hacer.",
  },
];

export function PainSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              ¿Te sientes identificado con esto?
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Si has llegado hasta aquí, probablemente estés cansado de...
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="relative bg-[#F8F8F8] rounded-[8px] p-8 border border-[#E5E5E5] hover:border-[#FF6B00] transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-white rounded-[8px] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#FF6B00] transition-colors duration-300">
                  <point.icon className="w-7 h-7 text-[#FF6B00] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                  {point.title}
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  {point.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#FF6B00] opacity-10 rounded-[4px]" />
              </div>
            ))}
          </div>

          {/* Empathy Statement */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-[#FFF3E6] rounded-[8px] px-8 py-6">
              <p className="text-lg text-[#1A1A1A] font-medium">
                "No es tu culpa. Los gimnasios tradicionales no están diseñados
                para personas reales con vidas ocupadas."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
