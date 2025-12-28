import { Check, Award, Clock, Heart } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Industry Leading Quality",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
  },
  {
    icon: Clock,
    title: "Fast & Reliable Delivery",
    description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
  {
    icon: Heart,
    title: "Customer-First Approach",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.",
  },
];

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "5 Years", label: "In Business" },
  { value: "24/7", label: "Support" },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary text-muted-foreground rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built on trust, driven by passion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-background rounded-2xl shadow-soft">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="relative p-8 bg-background rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {reason.description}
              </p>
              <ul className="space-y-2">
                {["Feature one", "Feature two", "Feature three"].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
