
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
      title: "Financial Infrastructure & Controls",
      description: "Institutional-grade financial cleanup, reconciliation, and process standardization to ensure audit-ready accuracy and strategic decision-making capability.",
      features: ["Monthly close optimization", "Historical data remediation", "SOX-compliant processes"]
    },
    {
      icon: Wallet,
      title: "Liquidity & Working Capital Management",
      description: "Sophisticated cash forecasting and working capital optimization using enterprise-level methodologies to ensure optimal financial positioning.",
      features: ["Rolling 13-week forecasts", "Working capital optimization", "Multi-scenario planning"]
    },
    {
      icon: Clock,
      title: "Revenue Cycle Optimization",
      description: "Systematic approach to accounts receivable management, eliminating payment delays and optimizing cash conversion cycles through proven methodologies.",
      features: ["Automated collections systems", "Credit risk modeling", "DSO optimization"]
    },
    {
      icon: ChartLine,
      title: "Strategic Market Intelligence",
      description: "Data-driven market and customer analytics to identify high-value opportunities and optimize resource allocation for maximum ROI.",
      features: ["Customer lifetime value analysis", "Market penetration modeling", "Portfolio optimization"]
    },
    {
      icon: Percent,
      title: "Profitability & Performance Analytics",
      description: "Comprehensive profitability analysis at product, customer, and segment levels to drive margin improvement and strategic decision-making.",
      features: ["Activity-based costing", "Margin waterfall analysis", "Performance benchmarking"]
    },
    {
      icon: Shield,
      title: "Capital Markets Readiness",
      description: "Investment-grade financial preparation including due diligence readiness, financial modeling, and investor presentation development.",
      features: ["Due diligence preparation", "Financial model development", "Investor relations support"]
    },
    {
      icon: Database,
      title: "Executive Reporting & KPI Management",
      description: "Real-time executive dashboards and performance management systems with industry benchmarking and variance analysis.",
      features: ["Executive dashboards", "KPI framework development", "Board reporting packages"]
    },
    {
      icon: HandCoins,
      title: "Government Relations & Incentives",
      description: "Strategic identification and securing of government grants, tax credits, and support programs to optimize cost structure and fund growth.",
      features: ["Grant opportunity assessment", "Application management", "Compliance monitoring"]
    },
    {
      icon: Search,
      title: "Tax Strategy & Optimization",
      description: "Proactive tax planning and structuring to minimize effective rates while ensuring compliance and identifying deferral opportunities.",
      features: ["Tax structure optimization", "Deferral strategies", "Multi-jurisdiction planning"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-slate-100 text-slate-700 hover:bg-slate-200 px-4 py-2">
            Service Capabilities
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-light text-slate-900 mb-8 tracking-tight">
            Comprehensive Financial
            <span className="block font-bold">Leadership</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            From operational excellence to strategic transformation, we deliver the full spectrum of CFO services with institutional rigor and proven methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-slate-200 hover:border-slate-300 bg-white">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-slate-800 transition-colors mb-3 leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed font-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                      <Check className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0" />
                      <span className="font-light">{feature}</span>
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
