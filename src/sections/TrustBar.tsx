export function TrustBar() {
  const logos = [
    { name: "Forbes", label: "FORBES" },
    { name: "Men's Health", label: "MEN'S HEALTH" },
    { name: "Women's Health", label: "WOMEN'S HEALTH" },
    { name: "GQ", label: "GQ" },
    { name: "El País", label: "EL PAÍS" },
  ];

  return (
    <section className="w-full bg-[#F8F8F8] py-10 border-y border-[#E5E5E5]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Label */}
          <p className="text-center text-sm text-[#4A4A4A] mb-8 uppercase tracking-wider font-medium">
            Destacado en los principales medios
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="text-xl md:text-2xl font-bold text-[#1A1A1A] tracking-tight">
                  {logo.label}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-[#E5E5E5]">
            <div className="flex items-center gap-2 text-sm text-[#4A4A4A]">
              <div className="w-6 h-6 bg-[#1A1A1A] rounded-[4px] flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <span>Certificado ISSA</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#4A4A4A]">
              <div className="w-6 h-6 bg-[#1A1A1A] rounded-[4px] flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              <span>Nutricionistas certificados</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#4A4A4A]">
              <div className="w-6 h-6 bg-[#1A1A1A] rounded-[4px] flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <span>App Store 4.9★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
