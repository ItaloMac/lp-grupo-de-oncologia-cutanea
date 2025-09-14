import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-medical-blue via-medical-blue-dark to-primary-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-medical-orange/20 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-background/10 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Images Placeholder */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-64 bg-background/10 rounded-2xl border-2 border-background/20 flex items-center justify-center">
                <span className="text-background/60 text-sm"><img className="rounded-2xl" src="/img/contato/2.png"/></span>
              </div>
              <div className="w-full h-64 bg-background/10 rounded-2xl border-2 border-background/20 flex items-center justify-center">
                <span className="text-background/60 text-sm"><img className="rounded-2xl" src="/img/contato/1.png"/></span>
              </div>
            </div>
            
            {/* Logo overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-background rounded-2xl p-4 shadow-medical">
                <div className="w-32 flex items-center justify-center">
                  <img src="/img/logotipo.png"/>
                </div>
                <p className="text-sm text-medical-blue font-medium mt-2 text-center">
                  GRUPO DE<br/>ONCOLOGIA<br/>CUTÂNEA
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Content */}
          <div className="space-y-8 text-background">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Entre em Contato Conosco
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Quer saber mais ou agendar uma consulta? Estamos prontos para ajudar você.
              </p>
              <p className="text-lg opacity-80 mt-4">
                Preencha o formulário abaixo e nossa equipe entrará em contato.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-medical-orange rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-background" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Endereço:</p>
                  <p className="opacity-90">Praça Colombo, 4 - Rio Vermelho, Salvador - BA, 41940-396</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-medical-orange rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-background" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Telefone:</p>
                  <p className="opacity-90">(71) 4020-5599</p>
                </div>
              </div>
            </div>
            
            <Button onClick={() => window.open("https://wa.me/557140205599?text=Ol%C3%A1%2C%20encontrei%20o%20Grupo%20de%20Oncologia%20Cut%C3%A2nea%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20consulta", "_blank")} variant="hero" size="lg" className="bg-medical-orange hover:bg-medical-orange-hover">
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;