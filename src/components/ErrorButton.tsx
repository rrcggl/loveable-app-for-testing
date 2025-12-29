import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Zap } from "lucide-react";

const ErrorButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    
    // Trigger a realistic runtime error - calling a method on undefined
    const userData = undefined as any;
    console.log("Attempting to access user data...");
    userData.profile.name.toUpperCase();
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 md:p-12">
          <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to get started?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join thousands 
            of satisfied customers today.
          </p>
          <Button 
            variant="accent" 
            size="xl" 
            onClick={handleClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              "Get Started Now"
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ErrorButton;
