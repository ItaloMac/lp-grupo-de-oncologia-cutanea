import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-medical-blue via-medical-blue-dark to-primary-dark">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up mt-12 ">
            
            <h1 className="text-4xl   lg:text-6xl font-bold text-background leading-tight">
              Bem-vindo ao Grupo de Oncologia Cutânea!
            </h1>
            <p className="text-xl text-background/90 leading-relaxed max-w-lg">
              Aqui, oferecemos um atendimento integral no combate ao câncer de pele, desde a prevenção até o diagnóstico e tratamento. Nosso compromisso é cuidar da sua saúde com uma abordagem multidisciplinar, unindo especialistas experientes que se dedicam a proporcionar um olhar sistêmico para o melhor cuidado.         
              <br />
              <br />
              Sabemos que a sua pele é um bem precioso, e estamos prontos para te apoiar em cada passo dessa jornada, com tecnologia avançada, ambiente acolhedor e os profissionais certos. 
               
            </p>            
            <Button onClick={() => window.open("https://wa.me/557140205599?text=Ol%C3%A1%2C%20encontrei%20o%20Grupo%20de%20Oncologia%20Cut%C3%A2nea%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20consulta", "_blank")} variant="hero" size="lg" className="text-lg px-8 py-4">
              Agenda uma consulta
            </Button>
          </div>
          
          <div className="relative mb-12" >
            <div className="w-full h-[500px]  rounded-2xl border-2 border-background/20 flex items-center justify-center">
             <img  src="/img/equipe.png" 
                alt="Equipe do Grupo de Oncologia Cutânea" 
                className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;