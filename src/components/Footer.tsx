import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-blue-dark text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-32 flex items-center justify-center">
                <img src="/img/logobranco.png"/>
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
                <span className="text-background/80">(71) 4020-5599</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-medical-orange mt-0.5" />
                <span className="text-background/80">Praça Colombo, 4 - Rio Vermelho, Salvador - BA, 41940-396</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Grupo de Oncologia Cutânea. Desenvolvido por{" "}
            <a 
              href="https://wa.me/5571999341709?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20or%C3%A7amento%20de%20um%20site%2Fsistema."
              target="_blank"
              rel="noopener noreferrer"
              className="text-medical-orange hover:text-medical-orange/80 transition-colors cursor-pointer"
            >
              Ítalo Macedo
            </a>
            . Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;