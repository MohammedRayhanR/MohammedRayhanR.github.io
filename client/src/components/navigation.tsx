import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Server, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-700"
          : "bg-slate-900 shadow-lg border-b border-slate-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Server className="text-primary text-2xl mr-3" />
            <span className="text-xl font-bold text-white">ServerEd</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-slate-300 hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("outline")}
              className="text-slate-300 hover:text-primary transition-colors duration-200"
            >
              Outline
            </button>
            <button
              onClick={() => scrollToSection("topics")}
              className="text-slate-300 hover:text-primary transition-colors duration-200"
            >
              Topics
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-700 bg-slate-900"
            >
              <div className="py-4 space-y-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-left px-4 py-2 text-slate-300 hover:text-primary hover:bg-slate-800 transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("outline")}
                  className="block w-full text-left px-4 py-2 text-slate-300 hover:text-primary hover:bg-slate-800 transition-colors duration-200"
                >
                  Outline
                </button>
                <button
                  onClick={() => scrollToSection("topics")}
                  className="block w-full text-left px-4 py-2 text-slate-300 hover:text-primary hover:bg-slate-800 transition-colors duration-200"
                >
                  Topics
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
