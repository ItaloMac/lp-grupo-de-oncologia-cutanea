const ServicesSection = () => {
  const services = [
    {
      title: "Consultas e Mapeamento Corporal",
      description: "Com uma consulta detalhada e um mapeamento corporal total, garantimos que sua pele seja cuidadosamente analisada, utilizando a dermatoscopia digital para detectar possíveis alterações antes que se tornem um problema maior."
    },
    {
      title: "Diagnóstico de Alta Precisão",
      description: "Nosso diagnóstico é realizado com técnicas de ponta, como biopsias e ultrassonografia dermatológica, para oferecer um diagnóstico claro e preciso, resultando em tratamentos eficazes."
    },
    {
      title: "Cirurgias Avançadas",
      description: "Do tratamento clínico ao cirúrgico, oferecemos soluções para todos os tipos de câncer de pele. Além disso, a Cirurgia de Mohs é uma técnica avançada que permite a remoção precisa de tumores, com mínimo impacto estético."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30 relative">
      {/* Background surgical image placeholder */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-medical-blue/20 to-medical-orange/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-blue mb-6">
            Como podemos cuidar de você e da sua pele
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Somos especialista no <strong>diagnóstico, tratamento e prevenção do câncer de pele</strong>. 
            Nosso compromisso é cuidar da sua saúde com uma abordagem multidisciplinar, reunindo 
            profissionais de excelência para garantir que você receba o melhor cuidado possível.
          </p>
          <p className="text-lg text-medical-blue font-semibold mt-4">
            Estamos aqui para te ajudar a cuidar de algo tão precioso quanto a sua pele.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 shadow-card-soft hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-medical-blue rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-background rounded"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-medical-blue mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;