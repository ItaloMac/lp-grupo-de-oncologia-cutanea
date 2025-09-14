const CancerTypesSection = () => {
  const cancerTypes = [
    {
      title: "Carcinoma Basocelular:",
      description: "O mais frequente, aparece como pequenas manchas ou nódulos na pele, especialmente nas áreas expostas ao sol.",
      images: [<img src="/img/tiposcancer/1.png"/>, <img src="/img/tiposcancer/2.png"/>, <img src="/img/tiposcancer/3.png"/>]
    },
    {
      title: "Carcinoma Espinocelular:",
      description: "Menos comum, mas mais agressivo, pode surgir como lesões duras e vermelhas, com a tendência de sangrar.",
      images: [<img src="/img/tiposcancer/4.png"/>, <img src="/img/tiposcancer/5.png"/>, <img src="/img/tiposcancer/6.png"/>]
    },
    {
      title: "Melanoma:",
      description: "O tipo mais agressivo. Na maioria das vezes as lesões apresentam características do que chamamos a regra do ABCDE. A detecção precoce é fundamental para um tratamento bem-sucedido.",
      images: [<img src="/img/tiposcancer/9.png"/>, <img src="/img/tiposcancer/10.png"/>, <img src="/img/tiposcancer/11.png"/>]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-blue mb-6">
            Câncer de Pele: Conheça os Tipos Mais Comuns
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          O câncer de pele é o tipo mais comum no Brasil e no mundo, mas a boa notícia é que, com diagnóstico precoce, ele tem alto percentual de cura. Conheça os tipos mais comuns:
          </p>
        </div>

        <div className="space-y-16">
          {cancerTypes.map((type, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-3xl font-bold text-medical-blue">
                  {type.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </div>
              
              {/* Images */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="grid grid-cols-3 gap-4">
                  {type.images.map((image, imgIndex) => (
                    <div 
                      key={imgIndex}
                      className="aspect-square bg-muted rounded-xl flex items-center justify-center shadow-card-soft hover:shadow-card-hover transition-shadow duration-300"
                    >
                      <span className="text-muted-foreground text-sm text-center">
                        {image}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Imagens por: Universidade Federal do Espírito Santo (UFES)<br/>
                  licenciada sob CC BY 4.0 https://creativecommons.org/licenses/by/4.0/
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CancerTypesSection;