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
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">{subtopic.title}</h2>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X size={20} />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-800">Overview</h3>
                <p className="text-slate-600 leading-relaxed">{subtopic.content}</p>
              </div>

              {subtopic.examples && subtopic.examples.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-800">Key Examples</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {subtopic.examples.map((example, index) => (
                      <div
                        key={index}
                        className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center"
                      >
                        <code className="text-sm font-mono text-slate-700">{example}</code>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {subtopic.codeExample && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-800">Code Example</h3>
                  <div className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm font-mono whitespace-pre-wrap">
                      <code>{subtopic.codeExample}</code>
                    </pre>
                  </div>
                </div>
              )}

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-yellow-800 mb-3 flex items-center">
                  <Lightbulb className="mr-2" size={20} />
                  Memory Aid
                </h3>
                <p className="text-yellow-700 italic text-lg">{subtopic.mnemonic}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
