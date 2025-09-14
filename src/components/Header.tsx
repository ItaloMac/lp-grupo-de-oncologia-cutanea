import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border shadow-card-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Logo placeholder */}
          <div className="w-32 me-5 flex items-center justify-center">
            <img src="/img/logotipo.png"/>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#sobre" className="text-muted-foreground hover:text-medical-blue transition-colors">Sobre</a>
          <a href="#servicos" className="text-muted-foreground hover:text-medical-blue transition-colors">Serviços</a>
          <a href="#equipe" className="text-muted-foreground hover:text-medical-blue transition-colors">Equipe</a>
          <a href="#contato" className="text-muted-foreground hover:text-medical-blue transition-colors">Contato</a>
          <Button
            onClick={() => window.open("https://wa.me/557140205599?text=Ol%C3%A1%2C%20encontrei%20o%20Grupo%20de%20Oncologia%20Cut%C3%A2nea%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20consulta", "_blank")}
            variant="medical"
            size="sm"
          >
            Agendar Consulta
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;