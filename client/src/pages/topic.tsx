import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Info, Star, Rocket, Lightbulb, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TopicModal from "@/components/topic-modal";
import { getTopicById, TopicSubtopic } from "@/lib/topic-data";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";

export default function Topic() {
  const params = useParams();
  const topicId = params.topicId;
  const topic = topicId ? getTopicById(topicId) : null;
  
  const [selectedSubtopic, setSelectedSubtopic] = useState<TopicSubtopic | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top when component mounts or topicId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId]);

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-slate-800 mb-4">Topic Not Found</h1>
              <p className="text-slate-600 mb-6">The requested topic could not be found.</p>
              <Link href="/">
                <Button>
                  <ArrowLeft className="mr-2" size={16} />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSubtopicClick = (subtopic: TopicSubtopic) => {
    setSelectedSubtopic(subtopic);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubtopic(null);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <motion.div className="mb-8" {...fadeInUp}>
            <Link href="/">
              <Button variant="outline" className="mb-4 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                <ArrowLeft className="mr-2" size={16} />
                Back to Topics
              </Button>
            </Link>
          </motion.div>

          {/* Topic Header */}
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h1 className="text-5xl font-bold text-white mb-6">{topic.title}</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {topic.intro}
            </p>
          </motion.div>

          {/* Topic Overview Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="bg-blue-900/20 p-8 rounded-xl border border-blue-600/30"
              variants={fadeInUp}
            >
              <h3 className="font-semibold text-blue-400 mb-4 flex items-center text-lg">
                <Info className="mr-3" size={24} />
                What is it?
              </h3>
              <p className="text-blue-300 leading-relaxed">{topic.intro}</p>
            </motion.div>

            <motion.div
              className="bg-green-900/20 p-8 rounded-xl border border-green-600/30"
              variants={fadeInUp}
            >
              <h3 className="font-semibold text-green-400 mb-4 flex items-center text-lg">
                <Star className="mr-3" size={24} />
                Why important?
              </h3>
              <p className="text-green-300 leading-relaxed">{topic.importance}</p>
            </motion.div>

            <motion.div
              className="bg-purple-900/20 p-8 rounded-xl border border-purple-600/30"
              variants={fadeInUp}
            >
              <h3 className="font-semibold text-purple-400 mb-4 flex items-center text-lg">
                <Rocket className="mr-3" size={24} />
                Where used?
              </h3>
              <p className="text-purple-300 leading-relaxed">{topic.usage}</p>
            </motion.div>
          </motion.div>

          {/* Subtopics */}
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
              Key Subtopics
            </h2>
            
            <motion.div
              className="grid gap-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {topic.subtopics.map((subtopic, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-slate-600"
                  variants={fadeInUp}
                  {...scaleOnHover}
                  onClick={() => handleSubtopicClick(subtopic)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-xl text-white">
                      {index + 1}. {subtopic.title}
                    </h3>
                    <ChevronRight className="text-primary flex-shrink-0 ml-4" size={24} />
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {subtopic.content}
                  </p>
                  
                  <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-400 mb-2 flex items-center">
                      <Lightbulb className="mr-2" size={16} />
                      Memory Aid
                    </h4>
                    <p className="text-yellow-300 italic">{subtopic.mnemonic}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <TopicModal
        isOpen={isModalOpen}
        onClose={closeModal}
        subtopic={selectedSubtopic}
      />

      <Footer />
    </div>
  );
}
