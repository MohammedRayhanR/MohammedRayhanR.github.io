import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master Server-Side Engineering
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Comprehensive fundamentals covering everything from Git to microservices. 
            Build robust backend systems with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("topics")}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Explore Topics
            </button>
            <button
              onClick={() => scrollToSection("outline")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
