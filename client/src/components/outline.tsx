import { motion } from "framer-motion";
import { Database, Shield, Settings } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Outline() {
  return (
    <section id="outline" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Why Server-Side Engineering?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Server-side engineering forms the backbone of modern web applications. 
            Master these fundamentals to build scalable, secure, and efficient systems.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="text-center p-8 rounded-xl bg-slate-50 border border-slate-200"
            variants={fadeInUp}
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Database className="text-white text-2xl" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Data Management</h3>
            <p className="text-slate-600">Learn to design, implement, and optimize databases and data flows for robust applications.</p>
          </motion.div>
          
          <motion.div
            className="text-center p-8 rounded-xl bg-slate-50 border border-slate-200"
            variants={fadeInUp}
          >
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-white text-2xl" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Security</h3>
            <p className="text-slate-600">Understand authentication, authorization, and protection against common vulnerabilities.</p>
          </motion.div>
          
          <motion.div
            className="text-center p-8 rounded-xl bg-slate-50 border border-slate-200"
            variants={fadeInUp}
          >
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="text-white text-2xl" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Architecture</h3>
            <p className="text-slate-600">Design scalable systems using microservices, APIs, and modern deployment strategies.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
