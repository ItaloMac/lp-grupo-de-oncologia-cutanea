const ServicesSection = () => {
  const services = [
    {
      image: <img src="/img/session3/1.png" alt="Dr. Carmine De Siervi"  />,
      title: "Consultas e Mapeamento Corporal",
      description: "Com uma consulta detalhada e um mapeamento corporal total, garantimos que sua pele seja cuidadosamente analisada. O serviço dispõe de um dos equipamentos mais modernos, um FotoFinder com torre automática, que realiza o mapeamento corporal total com imagens de alta resolução, permitindo a detecção precoce de alterações na pele e garantindo mais precisão e segurança no acompanhamento das lesões."
    },
    {
      image: <img src="/img/session3/2.png" alt="Dr. Carmine De Siervi"  />,
      title: "Diagnóstico de Alta Precisão",
      description: "Nosso diagnóstico é realizado com técnicas de ponta, como dermatoscopia. biopsias e ultrassonografia dermatológica de alta resolução, para oferecer um diagnóstico claro e preciso, resultando em tratamentos eficazes."
    },
    {
      image: <img src="/img/session3/3.png" alt="Dr. Carmine De Siervi"  />,
      title: "Tratamento Completo e Cirurgias Avançadas",
      description: <p>Do tratamento clínico ao cirúrgico, oferecemos soluções para todos os tipos de câncer de pele, inclusive a <strong>Cirurgia de Mohs</strong> é uma técnica avançada que permite a remoção precisa de tumores, com mínimo impacto estético.`</p>
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
          Aqui no <strong>Grupo de Oncologia Cutânea</strong>, oferecemos uma abordagem integrada que cuida da sua pele desde a prevenção até o tratamento. Estamos comprometidos com a saúde da sua pele e com o seu bem-estar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 shadow-card-soft hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="max-w-max bg-medical-blue/10 mx-auto mb-6 flex items-center justify-center group-hover:bg-medical-orange/10 transition-colors duration-300">
                <span className="text-medical-blue text-sm text-center">{service.image}</span>
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