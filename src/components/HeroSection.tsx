import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onStartQuiz: () => void;
}

const HeroSection = ({ onStartQuiz }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in">
          <Compass className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary-foreground/80">NJ TSA 2026 Coding Challenge</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-heading text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Discover Your <br />
          <span className="text-gradient">STEM Pathway</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Take a quick interactive quiz to explore STEM careers matched to your interests and strengths. See your personalized roadmap from high school to your dream job.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" onClick={onStartQuiz} className="text-lg px-8 py-6">
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {[
            { num: "6+", label: "STEM Careers" },
            { num: "6", label: "Quiz Questions" },
            { num: "∞", label: "Possibilities" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground font-heading">{stat.num}</div>
              <div className="text-xs md:text-sm text-primary-foreground/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
