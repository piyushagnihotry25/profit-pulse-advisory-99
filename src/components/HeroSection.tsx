
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ChartLine } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge className="mb-6 bg-blue-600/20 text-blue-200 hover:bg-blue-600/30 border-blue-400/30">
            <ChartLine className="w-4 h-4 mr-2" />
            Fractional CFO Services
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Scale Your Business with
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expert Financial Leadership
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your $500k+ business with professional CFO services. From cashflow optimization to funding preparation, we deliver the financial expertise you need to scale confidently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Your Free Financial Assessment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="border-blue-300 text-blue-100 hover:bg-blue-600/20 px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm"
            >
              View Our Services
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-blue-200">
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-green-400" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-green-400" />
              <span>$50M+ Managed</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-green-400" />
              <span>98% Client Retention</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-blue-300" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
