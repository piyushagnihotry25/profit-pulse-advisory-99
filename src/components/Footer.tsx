
import { Badge } from "@/components/ui/badge";
import { Mail, ChartLine } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <ChartLine className="w-10 h-10 text-white mr-4" />
            <h3 className="text-2xl font-light">Financial Growth Partners</h3>
          </div>
          
          <p className="text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed text-lg">
            Delivering institutional-grade financial leadership to growing organizations. Transform your business with strategic CFO expertise and proven methodologies.
          </p>
          
          <div className="flex justify-center items-center space-x-8 mb-12">
            <Badge className="bg-white text-slate-900 hover:bg-slate-100 px-4 py-2">
              <Mail className="w-4 h-4 mr-2" />
              partners@financialgrowth.com
            </Badge>
            <Badge className="bg-slate-800 text-slate-300 hover:bg-slate-700 px-4 py-2">
              Available for Strategic Consultation
            </Badge>
          </div>
          
          <div className="border-t border-slate-800 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-500 text-sm mb-4 md:mb-0 font-light">
                © 2024 Financial Growth Partners. All rights reserved.
              </p>
              <div className="flex space-x-8 text-sm text-slate-500 font-light">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
