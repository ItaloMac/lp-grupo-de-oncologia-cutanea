const SurgerySection = () => {
  return (
    <section className="py-20">
      {/* Mohs Surgery Section */}
      <div className="bg-gradient-to-r from-medical-blue via-medical-blue-dark to-primary-dark py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-medical-orange/20 rounded-full translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-background/10 rounded-full -translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 text-background">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Cirurgia Micrográfica de Mohs
              </h2>
              
              <p className="text-xl leading-relaxed opacity-90">
              A Cirurgia de Mohs é um dos tratamentos mais eficazes para o câncer de pele, permitindo a remoção precisa do tecido cancerígeno, camada por camada. Este procedimento oferece uma alta taxa de cura e garante que o mínimo de pele saudável seja removido.
              </p>
            </div>
            
            {/* Advantages Box */}
            <div className="bg-background rounded-2xl p-8 shadow-medical">
              <h3 className="text-2xl font-bold text-medical-blue mb-6">Vantagens</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-medical-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                  Alta taxa de sucesso, com até 99% de cura para alguns tipos de câncer de pele.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-medical-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                  Remoção precisa, preservando a maior quantidade possível de pele saudável.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-medical-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                  Ideal para tumores localizados em áreas de risco estético, como rosto e orelhas.
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-medical-blue mt-4 mb-4">Quando é indicada</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-medical-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                  Carcinoma basocelular, carcinoma escamocelular, dermatofibrossarcoma
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-medical-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                  Tumores recorrentes ou difíceis de tratar.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Other Surgeries Section */}
      <div className="bg-gradient-to-r from-medical-orange via-accent-hover to-medical-orange-light py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-background/10 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-medical-blue/20 rounded-full translate-x-32 translate-y-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-background">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Outras Cirurgias Oncológicas
              </h2>
              
              <p className="text-xl leading-relaxed opacity-90">
              Além da Cirurgia de Mohs, contamos com outras técnicas cirúrgicas para tratar o câncer de pele, todas com alta eficácia e com um cuidado estético aprofundado.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 shadow-medical">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-medical-blue mb-3">Ressecção Local Ampliada:</h3>
                  <p className="text-muted-foreground">
                    Quando o tumor é maior, removemos uma área maior de tecido para garantir a 
                    completa remoção das células cancerígenas.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-medical-blue mb-3">Cirurgia Convencional:</h3>
                  <p className="text-muted-foreground">
                    Em casos em que o tumor é menor ou está em áreas de fácil acesso, podemos 
                    realizar a remoção com suturas estéticas para um resultado final mais suave.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-white py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-background/10 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-medical-blue/20 rounded-full translate-x-32 translate-y-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-background">
              <h2 className="text-4xl lg:text-5xl text-medical-blue font-bold">
                Tratamento para doença avançada
              </h2>
              <p className="text-xl leading-relaxed text-medical-blue opacity-90">
              Quando a doença fica mais avançada é preciso lançar mão de tratamentos antineoplásicos adicionais.
              </p>
              <img src="/img/driuri.png" alt="Dr. Iuri" className="max-w-lg shadow-lg" />
            </div>
            
            <div className="bg-background rounded-2xl p-8 shadow-medical">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-medical-blue mb-3">Radioterapia:</h3>
                  <p className="text-muted-foreground">
                  A radioterapia é uma modalidade de tratamento local que pode substituir uma cirurgia quando esta não for possível ou mesmo complementar o tratamento cirúrgico.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-medical-blue mb-3">Tratamentos sistêmicos:</h3>
                  <p className="text-muted-foreground">
                  São as terapia medicamentosos utilizados para fazer o controle da doença mais avançada, seja aumentando as chances de cura antes ou depois da cirurgia, ou como base do tratamento da doença metastática. Utilizamos tratamentos de última geração tais como terapia alvo e diversas modalidades de imunoterapia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurgerySection;
