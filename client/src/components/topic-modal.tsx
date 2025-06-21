import { motion, AnimatePresence } from "framer-motion";
import { X, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopicSubtopic } from "@/lib/topic-data";

interface TopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  subtopic: TopicSubtopic | null;
}

export default function TopicModal({ isOpen, onClose, subtopic }: TopicModalProps) {
  if (!subtopic) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 modal-backdrop z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{subtopic.title}</h2>
              <Button variant="ghost" size="sm" onClick={onClose} className="text-slate-400 hover:text-white">
                <X size={20} />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Overview</h3>
                <p className="text-slate-300 leading-relaxed">{subtopic.content}</p>
              </div>

              {subtopic.examples && subtopic.examples.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Key Examples</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {subtopic.examples.map((example, index) => (
                      <div
                        key={index}
                        className="bg-slate-700 border border-slate-600 rounded-lg p-3 text-center"
                      >
                        <code className="text-sm font-mono text-slate-200">{example}</code>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {subtopic.codeExample && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Code Example</h3>
                  <div className="bg-slate-950 text-slate-100 rounded-lg p-4 overflow-x-auto border border-slate-700">
                    <pre className="text-sm font-mono whitespace-pre-wrap">
                      <code>{subtopic.codeExample}</code>
                    </pre>
                  </div>
                </div>
              )}

              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6">
                <h3 className="font-semibold text-yellow-400 mb-3 flex items-center">
                  <Lightbulb className="mr-2" size={20} />
                  Memory Aid
                </h3>
                <p className="text-yellow-300 italic text-lg">{subtopic.mnemonic}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
