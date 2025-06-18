
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Wallet, 
  Clock, 
  ChartLine, 
  Percent, 
  Shield, 
  Database, 
  HandCoins, 
  Search,
  Check 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Financial Cleanup & Catch-up",
      description: "Comprehensive cleanup and reconciliation of your financial records to ensure accuracy and compliance for strategic decision-making.",
      features: ["Monthly reconciliations", "Historical data cleanup", "Process standardization"]
    },
    {
      icon: Wallet,
      title: "Strategic Cashflow Management",
      description: "Ensure your business always has cash on hand with sophisticated forecasting and cash optimization strategies.",
      features: ["13-week cash forecasts", "Working capital optimization", "Scenario planning"]
    },
    {
      icon: Clock,
      title: "Receivables Optimization",
      description: "Streamline your collections process to eliminate missed and delayed payments, improving your cash conversion cycle.",
      features: ["Automated invoicing", "Collections strategy", "Credit risk assessment"]
    },
    {
      icon: ChartLine,
      title: "Market Focus Analytics",
      description: "Data-driven insights to identify which products, customers, and markets deserve your strategic focus and investment.",
      features: ["Customer profitability analysis", "Market penetration studies", "Growth opportunity mapping"]
    },
    {
      icon: Percent,
      title: "Cost Optimization & Profitability",
      description: "Detailed per-product profitability analysis to identify cost-saving opportunities and margin improvement strategies.",
      features: ["Product line analysis", "Cost center optimization", "Margin improvement plans"]
    },
    {
      icon: Shield,
      title: "Funding Preparation",
      description: "Prepare your financial records and business metrics to be investor and bank-ready for funding opportunities.",
      features: ["Due diligence preparation", "Financial projections", "Investor deck support"]
    },
    {
      icon: Database,
      title: "Executive Dashboards",
      description: "Real-time dashboards for company health metrics, target setting, and historical benchmarking analysis.",
      features: ["KPI tracking", "Performance benchmarking", "Executive reporting"]
    },
    {
      icon: HandCoins,
      title: "Grant & Support Research",
      description: "Identify and secure applicable government grants and support programs to reduce costs and fund growth.",
      features: ["Grant opportunity identification", "Application support", "Compliance monitoring"]
    },
    {
      icon: Search,
      title: "Tax Strategy Optimization",
      description: "Proactive tax planning to identify deferral opportunities and implement saving strategies for maximum efficiency.",
      features: ["Tax planning", "Deferral strategies", "Compliance optimization"]
    },
    {
      icon: FileText,
      title: "ITC & GST Management",
      description: "Comprehensive record-keeping and filing management for Input Tax Credits and GST compliance.",
      features: ["ITC optimization", "GST compliance", "Audit preparation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Financial Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From day-to-day financial operations to strategic planning, we provide the full spectrum of CFO services to drive your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-gray-200 hover:border-blue-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
