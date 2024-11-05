import CategorySection from "./layout/CategorySection";
import { Footer } from "./layout/Footer";
import RecentsSection from "./layout/RecentsSection";
import StatisticSection from "./layout/StatisticSection";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center gap-10 py-20">
      <StatisticSection />
      <RecentsSection />
      <CategorySection />
      <Footer />
    </div>
  );
}
