import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dra. Miguel Brandão",
      specialty: "Coordenador de Oncologia Cutânea na Clínica AMO e no Hospital Santo Antônio – Obras Assistenciais Irmã Dulce, ele também preside o Grupo Brasileiro de Melanoma e é membro titular de diversas sociedades renomadas, como a Sociedade Brasileira de Cirurgia Oncológica e o Colégio Brasileiro de Cirurgiões.Dr. Miguel também é Fellow do American College of Surgeons e da Society of Surgical Oncology, e membro ativo da American Society for Mohs Surgery. Sua expertise se estende ao papel de Diretor do Cancer Management Course e à contribuição na Câmara Técnica Cirurgia do CREMEB.",
      image: <img src="/img/equipe/miguel.png" alt="Dr. Miguel Brandão"  />    
    },
    {
      name: "Dr. Alessio Brunn",
      specialty: "Formado pela Universidade Federal da Bahia em 2006, o Dr. Alessio é um especialista apaixonado pela oncologia cutânea. Com formação em Cirurgia Oncológica e Geral, ele já passou por instituições renomadas como o Hospital Aristides Maltez e o Hospital Clériston Andrade.Além de ser membro titular da Sociedade Brasileira de Cirurgia Oncológica e associado à AMIB, o Dr. Alessio também foi Oficial Médico da Marinha do Brasil. Atualmente, ele é preceptor na Residência Médica de Cirurgia Geral e atua como Oncologista Cirúrgico na UNACON – Feira de Santana.",
      image: <img src="/img/equipe/alessio.png" alt="Dr. Alessio Brunn"  />     },
   
    {
      name: "Dr. Iuri Santana",
      specialty: "Dr. Iuri é oncologista clínico, formado pelo ICESP – Instituto do Câncer do Estado de São Paulo – USP. Ele é membro das principais sociedades nacionais e internacionais, como o comitê de tumores cutâneos da Sociedade Brasileira de Oncologia Clínica e a comissão científica do Grupo Brasileiro de Melanoma. Ele também integra a American Society of Clinical Oncology, a European Society of Medical Oncology e a Câmara Técnica de Oncologia Clínica do CREMEB.",
      image: <img src="/img/equipe/iuri.png" alt="Dr. Iuri Santana"  />     },

    {
      name: "Dra. Laryssa Faiçal",
      specialty: "Formada em medicina pela Universidade Federal de Juiz de Fora (MG), fez Residência Médica em Dermatologia na Escola Paulista de Medicina - UNIFESP, onde também concluiu Pós Graduação em Cirurgia Dermatológica. Dra. Laryssa é uma especialista dedicada a dermatologia geral e com um olhar apurado para a oncologia cutânea. Pós Graduada em Dermatologia Oncológica pelo Hospital Sírio e Libanês (SP), atua na prevenção, diagnóstico precoce (dermatoscopia e mapeamento corporal total) e tratamento clínico/cirúrgico do câncer de pele, além de cuidar de complicações decorrentes dos diversos tratamentos oncológicos na pele, cabelos e unhas.",
      image: <img src="/img/equipe/laryssa.png" alt="Dra. Laryssa Faiçal"  />     },

    {
      name: "Dra. Maria das Graças Leto",
      specialty: "Formada em Medicina pela UFBA, Dra. Gal possui residência em Clínica Médica; residência em Dermatologia e Mestrado pela UNIFESP. Toda essa trajetória lhe proporcionou uma vasta experiência. Ela também se especializou em Dermatologia Avançada em Imunossuprimidos e Transplantados e possui treinamento em Dermatoscopia e Mapeamento Corporal. Membro atuante de importantes entidades como Sociedade Brasileira de Dermatologia, Grupo Brasileiro de Melanoma, Sociedade Brasileira de Cirurgia Dermatológica e International Dermoscopy Society. Ela faz parte da equipe de oncologia cutânea do Hospital Santo Antônio - Obras Assistenciais de Irmã Dulce e é integrante da Câmara Técnica de Dermatologia do CREMEB.",
      image: <img src="/img/equipe/maria.png" alt="Dra. Maria das Graças Leto"  />     },

    {
      name: "Dr. Rafael Ribeiro",
      specialty: "Com uma trajetória brilhante e dedicação à saúde, o Dr. Rafael é especialista em Cirurgia Geral pelo Colégio Brasileiro de Cirurgiões e possui especialização em Cancerologia/Cirurgia Oncológica pela Sociedade Brasileira de Cancerologia. Rafael também especializou-se com residência médica em Cirurgia Geral na Santa Casa de Misericórdia de São Paulo e em Cancerologia Cirúrgica no Hospital A.C. Camargo (Fundação Antônio Prudente). ",
      image: <img src="/img/equipe/rafael.png" alt="Dr. Rafael Ribeiro"  />     },

    {
      name: "Dr. Victor Carmine De Siervi",
      specialty: "Graduado em Medicina pela Universidade Federal da Bahia e especialista em Cirurgia Oncológica pelo renomado AC Camargo Cancer Center, Dr. Carmine possui ampla experiência no tratamento do câncer de pele. Atualmente, é mestrando em Oncologia na Fundação Antônio Prudente, com foco no melanoma cutâneo. Com treinamento complementar em Cirurgia Micrográfica de Mohs, realizou um fellow com o Dr. Abel Gonzalez, em Buenos Aires, e participou de um treinamento avançado pela American Society for Mohs Surgery, em Houston, Texas.",
      image: <img src="/img/equipe/carmine.png" alt="Dr. Victor Carmine De Siervi"  />     }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const membersPerSlide = 3;
  const totalSlides = Math.ceil(teamMembers.length / membersPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000); 

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="equipe" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-medical-blue to-medical-orange"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-blue mb-6">
            Nossa equipe médica
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nosso time é composto por especialistas <strong>altamente qualificados</strong> e 
            comprometidos com a saúde da sua pele. Conheça um pouco mais sobre nossos profissionais:
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows - Positioned outside slides */}
          <button
            onClick={prevSlide}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-300 hover:scale-110"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-5 h-5 text-medical-blue" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-300 hover:scale-110"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-5 h-5 text-medical-blue" />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-3 gap-8 px-4">
                    {teamMembers
                      .slice(slideIndex * membersPerSlide, (slideIndex + 1) * membersPerSlide)
                      .map((member, index) => (
                        <div 
                          key={`${slideIndex}-${index}`}
                          className="group bg-background rounded-2xl p-8 shadow-card-soft hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
                        >
                          <div className="w-40 h-40 bg-medical-blue/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-medical-orange/10 transition-colors duration-300">
                            {member.image}
                          </div>
                          
                          <h3 className="text-2xl font-bold text-medical-blue mb-4 text-center">
                            {member.name}
                          </h3>
                          
                          <p className="text-muted-foreground text-center leading-relaxed">
                            {member.specialty}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-medical-blue scale-125' 
                    : 'bg-medical-blue/30 hover:bg-medical-blue/50'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;