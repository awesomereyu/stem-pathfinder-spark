import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import QuizSection from "@/components/QuizSection";
import ResultsSection from "@/components/ResultsSection";
import CareerDetail from "@/components/CareerDetail";
import type { InterestTag } from "@/data/careers";

type View = "home" | "quiz" | "results" | "detail";

const Index = () => {
  const [view, setView] = useState<View>("home");
  const [tags, setTags] = useState<InterestTag[]>([]);
  const [selectedCareer, setSelectedCareer] = useState<string>("");

  const handleQuizComplete = (resultTags: InterestTag[]) => {
    setTags(resultTags);
    setView("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewCareer = (careerId: string) => {
    setSelectedCareer(careerId);
    setView("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetake = () => {
    setTags([]);
    setView("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {view === "home" && <HeroSection onStartQuiz={() => setView("quiz")} />}
      {view === "quiz" && <QuizSection onComplete={handleQuizComplete} onBack={() => setView("home")} />}
      {view === "results" && (
        <ResultsSection tags={tags} onViewCareer={handleViewCareer} onRetake={handleRetake} />
      )}
      {view === "detail" && (
        <CareerDetail careerId={selectedCareer} onBack={() => setView("results")} />
      )}
    </main>
  );
};

export default Index;
