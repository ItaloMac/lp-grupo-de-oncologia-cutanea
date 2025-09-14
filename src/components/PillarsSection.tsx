const PillarsSection = () => {
  const pillars = [
    {
      title: "Prevenção: a base de tudo.",
      description: "A prevenção é base importante para uma pele saudável. O uso de protetor solar de forma constante e apropriada e as idas regulares ao dermatologista fazem parte dessa rotina de prevenção. Nossa equipe conta com dermatologistas que, além de orientar na saúde da pele, possuem um olhar direcionado aos potenciais riscos dos sinais de câncer melanoma e não melanoma.",
      image: <img src="/img/drcarmine.png" alt="Dr. Carmine De Siervi"  />
    },
    {
      title: "Diagnóstico preciso.",
      description: "Detectar mudanças na pele logo no início pode ser a chave para um tratamento mais eficaz e com resultados ainda melhores. Nossos exames de mapeamento corporal e dermatoscopia digital são ferramentas poderosas para realizar essa identificação precoce.",
      image: <img src="/img/dramaria.png" alt="Dra. Maria das Graças"  />
    },
    {
      title: "Exames avançados.",
      description: "Uma vez detectado potenciais riscos de um câncer de pele, uma investigação mais minuciosa pode ser feita pela nossa equipe, proporcionando um diagnóstico rápido e preciso para tratamento adequado.",
      image: <img src="/img/dralessio.png" alt="Dr. Alessio Brunn"  />
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
            Combinamos prevenção, diagnóstico preciso e exames avançados para oferecer 
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