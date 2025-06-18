
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartLine, Shield, Users, Clock } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: ChartLine,
      title: "Accelerated Growth",
      description: "Our clients typically see 25-40% improvement in cash flow management and 15-30% reduction in operational costs within the first 6 months.",
      metric: "25-40% Cash Flow Improvement"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Professional financial controls and compliance management protect your business from costly mistakes and regulatory issues.",
      metric: "99.9% Compliance Rate"
    },
    {
      icon: Users,
      title: "Expert Leadership",
      description: "Access to senior-level financial expertise without the full-time executive cost. Get the strategic insights you need when you need them.",
      metric: "60% Cost Savings vs Full-time CFO"
    },
    {
      icon: Clock,
      title: "Time Freedom",
      description: "Focus on what you do best while we handle the financial complexity. Our systematic approach frees up 15-20 hours per week for strategic activities.",
      metric: "15-20 Hours Saved Weekly"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Measurable Business Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our fractional CFO services deliver tangible results that directly impact your bottom line and business growth trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300 bg-white/70 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="bg-blue-100 rounded-lg p-3">
                  <p className="text-blue-800 font-semibold text-sm">
                    {benefit.metric}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full mr-1"></div>
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 italic mb-6">
                "Working with this fractional CFO service transformed our business. We went from struggling with cash flow to securing a $2M funding round in just 8 months. The financial insights and strategic guidance were invaluable."
              </blockquote>
              <div className="flex items-center justify-center">
                <div>
                  <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                  <p className="text-gray-600">CEO, TechScale Solutions</p>
                  <p className="text-sm text-blue-600">$1.2M Annual Revenue</p>
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
