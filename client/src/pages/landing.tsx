import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Outline from "@/components/outline";
import TopicsGrid from "@/components/topics-grid";
import Footer from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Outline />
      <TopicsGrid />
      <Footer />
    </div>
  );
}
