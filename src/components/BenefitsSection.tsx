
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartLine, Shield, Users, Clock } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: ChartLine,
      title: "Accelerated Performance",
      description: "Our systematic approach typically delivers 25-40% improvement in cash flow efficiency and 15-30% reduction in operational costs within the first two quarters.",
      metric: "25-40% Cash Flow Improvement"
    },
    {
      icon: Shield,
      title: "Risk Management Excellence",
      description: "Enterprise-grade financial controls and compliance frameworks protect your organization from costly errors and regulatory exposure.",
      metric: "99.9% Compliance Achievement"
    },
    {
      icon: Users,
      title: "C-Suite Expertise Access",
      description: "Direct access to senior-level financial leadership without the full-time executive investment. Strategic insights when you need them most.",
      metric: "60% Cost Efficiency vs. Full-time CFO"
    },
    {
      icon: Clock,
      title: "Executive Time Optimization",
      description: "Focus on core business strategy while we manage financial complexity. Our systematic approach typically frees 15-20 hours weekly for strategic initiatives.",
      metric: "15-20 Hours Saved Weekly"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-slate-700 text-white hover:bg-slate-800 px-4 py-2">
            Quantifiable Impact
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-light text-slate-900 mb-8 tracking-tight">
            Institutional-Grade
            <span className="block font-bold">Results</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Our fractional CFO services deliver measurable business impact through proven methodologies and systematic execution excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center group hover:shadow-xl transition-all duration-500 border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-slate-100 rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-900 transition-all duration-300 group-hover:scale-110">
                  <benefit.icon className="w-10 h-10 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900 mb-4 leading-tight">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 mb-6 leading-relaxed font-light">
                  {benefit.description}
                </p>
                <div className="bg-slate-100 rounded-sm p-4">
                  <p className="text-slate-800 font-semibold text-sm">
                    {benefit.metric}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Executive Testimonial */}
        <div className="mt-20 bg-white rounded-sm shadow-xl p-12 max-w-5xl mx-auto border border-slate-200">
          <div className="text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-slate-900 rounded-full mr-1"></div>
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl text-slate-700 mb-8 font-light italic leading-relaxed">
                "The level of financial rigor and strategic insight provided transformed our organization. We achieved successful Series B funding of $15M within 10 months, with institutional-grade financial systems that impressed our investors."
              </blockquote>
              <div className="flex items-center justify-center">
                <div>
                  <p className="font-semibold text-slate-900 text-lg">Michael Chen</p>
                  <p className="text-slate-600 font-light">Chief Executive Officer</p>
                  <p className="text-sm text-slate-500 font-light">Enterprise Technology Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
