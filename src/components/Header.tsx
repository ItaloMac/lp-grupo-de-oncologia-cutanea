import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border shadow-card-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Logo placeholder */}
          <div className="w-12 h-12 bg-medical-orange rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-background rounded"></div>
          </div>
          <div>
            <h1 className="font-bold text-lg text-medical-blue">Grupo de Oncologia Cutânea</h1>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#sobre" className="text-muted-foreground hover:text-medical-blue transition-colors">Sobre</a>
          <a href="#servicos" className="text-muted-foreground hover:text-medical-blue transition-colors">Serviços</a>
          <a href="#equipe" className="text-muted-foreground hover:text-medical-blue transition-colors">Equipe</a>
          <a href="#contato" className="text-muted-foreground hover:text-medical-blue transition-colors">Contato</a>
          <Button variant="medical" size="sm">
            Agendar Consulta
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;