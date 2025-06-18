
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ChartLine, Check } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-95"></div>
      
      {/* Premium grid pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center text-white">
          <Badge className="mb-8 bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-sm px-4 py-2">
            <ChartLine className="w-4 h-4 mr-2" />
            Strategic Financial Leadership
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-light mb-8 leading-tight tracking-tight">
            Executive-Level
            <span className="block font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              CFO Expertise
            </span>
            <span className="block text-4xl lg:text-5xl font-light text-slate-300 mt-4">
              Without the Executive Cost
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Deliver institutional-grade financial strategy and operations excellence. Our fractional CFO services provide Fortune 500-level insights and systematic rigor to accelerate your growth trajectory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 text-lg font-medium rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
            >
              Schedule Strategic Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-medium rounded-sm backdrop-blur-sm"
            >
              Our Capabilities
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-slate-300">
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-3 text-white" />
              <span className="font-light">Big 4 Experience</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-3 text-white" />
              <span className="font-light">$100M+ Transactions</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-3 text-white" />
              <span className="font-light">Fortune 500 Methodology</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
