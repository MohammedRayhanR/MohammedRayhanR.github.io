import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { 
  GitBranch, Database, Terminal, Layers, Globe, Shuffle, 
  Shield, GitBranchPlus, Network, Infinity, Server, 
  Key, Boxes, Zap, ArrowRight
} from "lucide-react";
import { getAllTopics } from "@/lib/topic-data";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";

const iconMap = {
  "git-branch": GitBranch,
  "database": Database,
  "terminal": Terminal,
  "layers": Layers,
  "globe": Globe,
  "shuffle": Shuffle,
  "shield": Shield,
  "git-branch-plus": GitBranchPlus,
  "network": Network,
  "infinity": Infinity,
  "server": Server,
  "key": Key,
  "boxes": Boxes,
  "zap": Zap,
};

export default function TopicsGrid() {
  const [, setLocation] = useLocation();
  const topics = getAllTopics();

  const handleTopicClick = (topicId: string) => {
    setLocation(`/topic/${topicId}`);
  };

  return (
    <section id="topics" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-white mb-6">
            Complete Learning Path
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            14 comprehensive topics covering all aspects of server-side engineering fundamentals.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {topics.map((topic) => {
            const IconComponent = iconMap[topic.icon as keyof typeof iconMap] || GitBranch;
            
            return (
              <motion.div
                key={topic.id}
                className={`topic-card bg-slate-800 rounded-xl shadow-lg border p-6 cursor-pointer topic-${topic.id}`}
                variants={fadeInUp}
                {...scaleOnHover}
                onClick={() => handleTopicClick(topic.id)}
              >
                <div className={`w-12 h-12 ${topic.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className={`${topic.iconColor} text-2xl`} size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{topic.title}</h3>
                <p className="text-slate-300 mb-4">{topic.intro}</p>
                <div className="flex items-center text-primary font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2" size={16} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
