import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-medical-blue via-medical-blue-dark to-primary-dark">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo placeholder */}
              <div className="w-16 h-16 bg-medical-orange rounded-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-background rounded"></div>
              </div>
              <span className="text-background/80 font-medium">GRUPO DE ONCOLOGIA CUTÂNEA</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-background leading-tight">
              Grupo de Oncologia Cutânea
            </h1>
            
            <p className="text-xl text-background/90 leading-relaxed max-w-lg">
              Somos especialista no diagnóstico, tratamento e prevenção do câncer de pele. 
              Nosso compromisso é cuidar da sua saúde com uma abordagem multidisciplinar, 
              reunindo profissionais de excelência para garantir que você receba o melhor 
              cuidado possível. Estamos aqui para te ajudar a cuidar de algo tão precioso quanto a sua pele.
            </p>
            
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Agenda uma consulta
            </Button>
          </div>
          
          {/* Team Image Placeholder */}
          <div className="relative">
            <div className="w-full h-[500px] bg-background/10 rounded-2xl border-2 border-background/20 flex items-center justify-center">
              <span className="text-background/60 text-lg font-medium">Team Photo Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;