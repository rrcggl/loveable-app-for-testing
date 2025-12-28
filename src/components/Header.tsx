import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-xl">A</span>
          </div>
          <span className="font-heading text-xl font-semibold text-foreground">Artisan Co.</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#product" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Product
          </a>
          <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Team
          </a>
          <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Why Us
          </a>
        </nav>

        <Button variant="outline" size="sm">
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
