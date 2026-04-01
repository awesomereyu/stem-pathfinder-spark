import { type InterestTag, scoreCarers } from "@/data/careers";
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCcw, Trophy } from "lucide-react";
import CareerCard from "./CareerCard";

interface ResultsSectionProps {
  tags: InterestTag[];
  onViewCareer: (careerId: string) => void;
  onRetake: () => void;
}

const ResultsSection = ({ tags, onViewCareer, onRetake }: ResultsSectionProps) => {
  const results = scoreCarers(tags);
  const topMatch = results[0];

  return (
    <section className="min-h-screen bg-background py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Top match highlight */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-primary mb-6">
            <Trophy className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-semibold text-primary-foreground">Your #1 Match</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
            {topMatch.career.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            Based on your interests and strengths, here are your personalized STEM career matches.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => onViewCareer(topMatch.career.id)}>
              Explore Top Match
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" onClick={onRetake}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Quiz
            </Button>
          </div>
        </div>

        {/* All results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, idx) => (
            <div
              key={result.career.id}
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CareerCard
                career={result.career}
                percentage={result.percentage}
                rank={idx + 1}
                onClick={() => onViewCareer(result.career.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
