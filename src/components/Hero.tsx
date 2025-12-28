import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block px-4 py-2 bg-secondary text-muted-foreground rounded-full text-sm font-medium mb-6">
            Crafted with purpose since 2019
          </span>
        </div>
        
        <h1 
          className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Beautiful products,
          <br />
          <span className="text-primary">thoughtfully made</span>
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button variant="hero" size="xl">
            Explore Products
            <ArrowRight className="ml-2" />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
