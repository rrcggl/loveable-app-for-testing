import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import ErrorButton from "@/components/ErrorButton";
import Team from "@/components/Team";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Product />
        <ErrorButton />
        <Team />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
