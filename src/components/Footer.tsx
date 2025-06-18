
import { Badge } from "@/components/ui/badge";
import { Mail, ChartLine } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <ChartLine className="w-8 h-8 text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold">Financial Growth Partners</h3>
          </div>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Empowering growing businesses to achieve sustainable growth through strategic financial leadership and expert CFO services.
          </p>
          
          <div className="flex justify-center items-center space-x-6 mb-8">
            <Badge className="bg-blue-600 text-white">
              <Mail className="w-4 h-4 mr-2" />
              hello@financialgrowthpartners.com
            </Badge>
            <Badge className="bg-gray-700 text-gray-300">
              Available for Consultation
            </Badge>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Financial Growth Partners. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
