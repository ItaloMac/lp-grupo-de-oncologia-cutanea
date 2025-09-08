import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-blue-dark text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-medical-orange rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Grupo de Oncologia Cutânea</h3>
              </div>
            </div>
            <p className="text-background/80 text-sm">
              Especialistas em diagnóstico, tratamento e prevenção do câncer de pele.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="text-background/80 hover:text-medical-orange transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-background/80 hover:text-medical-orange transition-colors">Serviços</a></li>
              <li><a href="#equipe" className="text-background/80 hover:text-medical-orange transition-colors">Equipe</a></li>
              <li><a href="#contato" className="text-background/80 hover:text-medical-orange transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-medical-orange" />
                <span className="text-background/80">(xx) xxxx-xxxx</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-medical-orange" />
                <span className="text-background/80">contato@exemplo.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-medical-orange mt-0.5" />
                <span className="text-background/80">Endereço completo</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Grupo de Oncologia Cutânea. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;