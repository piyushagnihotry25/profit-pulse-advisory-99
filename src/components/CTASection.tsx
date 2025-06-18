
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Mail, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center text-white mb-16">
          <Badge className="mb-8 bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-sm px-4 py-2">
            Strategic Partnership
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-light mb-8 tracking-tight">
            Begin Your Financial
            <span className="block font-bold">Transformation</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
            Join leading organizations that have achieved sustainable growth through our institutional-grade fractional CFO services. 
            Schedule your strategic consultation today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Strategic Assessment Card */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="pb-6">
              <div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-slate-900" />
              </div>
              <CardTitle className="text-2xl text-white font-semibold">Strategic Financial Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-8 font-light leading-relaxed">
                Comprehensive evaluation of your financial infrastructure with institutional-grade analysis and custom strategic roadmap development.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-4" />
                  <span className="text-slate-300 font-light">Cash flow optimization analysis</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-4" />
                  <span className="text-slate-300 font-light">Performance benchmarking report</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-4" />
                  <span className="text-slate-300 font-light">Growth opportunity identification</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-4" />
                  <span className="text-slate-300 font-light">Strategic implementation roadmap</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 py-4 font-semibold rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                Schedule Strategic Assessment
              </Button>
            </CardContent>
          </Card>

          {/* Executive Consultation Card */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="pb-6">
              <div className="w-16 h-16 bg-slate-700 rounded-sm flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white font-semibold">Executive Strategy Session</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-8 font-light leading-relaxed">
                Focused consultation to address immediate financial challenges and strategic opportunities with senior-level expertise.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-4" />
                  <span className="text-slate-300 font-light">Strategic challenge assessment</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-4" />
                  <span className="text-slate-300 font-light">Service alignment evaluation</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-4" />
                  <span className="text-slate-300 font-light">Implementation planning</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-4" />
                  <span className="text-slate-300 font-light">No-obligation consultation</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 py-4 font-semibold rounded-sm backdrop-blur-sm">
                Book Executive Session
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6 font-light text-lg">
            <strong>Institutional-Grade Excellence for Growing Organizations</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400 font-light">
            <span>✓ Flexible engagement models</span>
            <span>✓ Scalable service delivery</span>
            <span>✓ Results-driven methodology</span>
            <span>✓ Industry specialization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
