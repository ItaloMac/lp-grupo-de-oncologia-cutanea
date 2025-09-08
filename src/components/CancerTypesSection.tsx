const CancerTypesSection = () => {
  const cancerTypes = [
    {
      title: "Carcinoma Basocelular:",
      description: "O mais frequente, aparece como pequenas manchas ou nódulos na pele, especialmente nas áreas expostas ao sol.",
      images: ["Image 1", "Image 2", "Image 3"]
    },
    {
      title: "Carcinoma Espinocelular:",
      description: "Menos comum, mas mais agressivo, pode surgir como lesões duras e vermelhas, com a tendência de sangrar.",
      images: ["Image 4", "Image 5", "Image 6"]
    },
    {
      title: "Melanoma:",
      description: "O tipo mais grave, que aparece como mudanças em pintas ou manchas já existentes na pele. A detecção precoce é fundamental para um tratamento bem-sucedido.",
      images: ["Image 7", "Image 8", "Image 9"]
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
            O câncer de pele é o tipo mais comum no Brasil, mas a boa notícia é que, com diagnóstico precoce, ele é tratável.
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            Conheça os tipos mais comuns:
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