import Navbar from "./components/Navbar";
import CategorySection from "./layout/CategorySection";
import { Footer } from "./layout/Footer";
import HeroSection from "./layout/HeroSection";
import RecentsSection from "./layout/RecentsSection";
import StatisticSection from "./layout/StatisticSection";


export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center gap-10">
      <Navbar />
      <HeroSection />
      <StatisticSection />
      <RecentsSection />
      <CategorySection />
      <Footer />
    </div>
  );
}
