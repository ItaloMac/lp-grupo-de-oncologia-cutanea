const PillarsSection = () => {
  const pillars = [
    {
      title: "Prevenção: a base de tudo.",
      description: "A prevenção é o primeiro passo essencial para um futuro saudável. Detectar mudanças na pele logo no início pode ser a chave para um tratamento mais eficaz e com resultados ainda melhores. Nossos exames de mapeamento corporal e dermatoscopia digital são ferramentas poderosas para realizar essa identificação precoce.",
      image: "Doctor 1 Placeholder"
    },
    {
      title: "Acompanhamento de perto.",
      description: "Cuidar da pele não é apenas sobre proteção solar, é importante fazer exames regulares e manter o acompanhamento médico para identificar qualquer alteração. Estamos aqui para acompanhar você, oferecendo consultas personalizadas e monitoramento constante.",
      image: "Doctor 2 Placeholder"
    },
    {
      title: "Diagnóstico Preciso.",
      description: "Com o avanço da tecnologia, hoje podemos realizar exames como ultrassonografia dermatológica e biópsias em diversas técnicas, proporcionando um diagnóstico rápido e de alta precisão. Nossa missão é garantir que você receba o melhor cuidado, com um diagnóstico claro para o tratamento adequado.",
      image: "Doctor 3 Placeholder"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-medical-orange/5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical-blue/5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-blue mb-6">
            Nossa Abordagem em Três Pilares
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos prevenção, acompanhamento contínuo e diagnóstico preciso para oferecer 
            o melhor cuidado em oncologia cutânea.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card-soft hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Doctor Image Placeholder */}
              <div className="w-32 h-32 bg-medical-blue/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-medical-orange/10 transition-colors duration-300">
                <span className="text-medical-blue text-sm text-center">{pillar.image}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-medical-blue mb-4 text-center">
                {pillar.title}
              </h3>
              
              <p className="text-muted-foreground text-center leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;