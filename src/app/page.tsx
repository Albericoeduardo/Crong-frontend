import CategoryCard from "./components/CategoryCard";
import OngCard from "./components/OngCard";
import RecentCard from "./components/RecentsCard";
import StatisticCard from "./components/StatisticCard";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center gap-10 py-20">
      <StatisticCard 
        imageSrc="/140x140.svg"
        title="76 ONGs"
        description="São 76 ONGs por todo o Brasil cadastradas na nossa plataforma"
      />
      <RecentCard
        imageSrc="/360x240.svg"
        title="Title DescriçãoDescrição Descrição Descrição"
        description="Descrição DescriçãoDescriçãoDescrição DescriçãoDescrição DescriçãoDescriçãoDescrição"
      />
      <CategoryCard
        imageSrc="/100x100.svg"
        category="category"
        subCategory="subCategory"
      />
      <OngCard
        backgroundImage="/400x620.svg"
        title="Titulo"
        location="Palmas - TO"
      />
    </div>
  );
}
