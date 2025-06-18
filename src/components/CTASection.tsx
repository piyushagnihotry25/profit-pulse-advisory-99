
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Mail, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white mb-12">
          <Badge className="mb-6 bg-blue-600/20 text-blue-200 hover:bg-blue-600/30 border-blue-400/30">
            Ready to Scale?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Your Financial Transformation Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 200+ successful businesses that have scaled with our fractional CFO services. 
            Get your complimentary financial assessment and discover opportunities for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Free Assessment Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-blue-400/30 text-white">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Free Financial Health Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 mb-6">
                Get a comprehensive review of your current financial position and receive a custom roadmap for improvement.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-blue-100">Cash flow analysis & recommendations</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-blue-100">KPI benchmarking report</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-blue-100">Growth opportunity identification</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-blue-100">Custom improvement roadmap</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Free Assessment
              </Button>
            </CardContent>
          </Card>

          {/* Quick Consultation Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 text-white">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">15-Minute Strategy Call</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-100 mb-6">
                Quick consultation to discuss your immediate financial challenges and how we can help solve them.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-purple-100">Immediate challenge assessment</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-purple-100">Service fit evaluation</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-purple-100">Next steps planning</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-purple-100">No obligation consultation</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-purple-300 text-purple-100 hover:bg-purple-600/20 py-3 font-semibold rounded-lg backdrop-blur-sm">
                Book Strategy Call
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-200 mb-4">
            <strong>Perfect for businesses ready to scale</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-300">
            <span>✓ No long-term contracts</span>
            <span>✓ Scalable engagement</span>
            <span>✓ Results-driven approach</span>
            <span>✓ Industry expertise</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
