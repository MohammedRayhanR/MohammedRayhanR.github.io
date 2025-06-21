import { Server, Twitter, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Server className="text-primary text-2xl mr-3" />
              <span className="text-2xl font-bold">ServerEd</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Master server-side engineering fundamentals with our comprehensive learning platform. 
              Build the skills you need for modern backend development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="text-slate-400 mr-3" size={16} />
                <span className="text-slate-300">support@servered.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-slate-400 mr-3" size={16} />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-slate-400 mr-3" size={16} />
                <span className="text-slate-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">Documentation</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">Community</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">Blog</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 ServerEd. All rights reserved. Built for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}
