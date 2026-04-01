import { useState } from "react";
import { quizQuestions, type InterestTag } from "@/data/careers";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

interface QuizSectionProps {
  onComplete: (tags: InterestTag[]) => void;
  onBack: () => void;
}

const QuizSection = ({ onComplete, onBack }: QuizSectionProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const question = quizQuestions[currentQ];
  const total = quizQuestions.length;
  const progress = ((currentQ + (answers[question.id] !== undefined ? 1 : 0)) / total) * 100;

  const selectOption = (idx: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: idx }));
  };

  const goNext = () => {
    if (currentQ < total - 1) {
      setCurrentQ((p) => p + 1);
    } else {
      // Collect all tags
      const allTags: InterestTag[] = [];
      quizQuestions.forEach((q) => {
        const chosen = answers[q.id];
        if (chosen !== undefined) {
          allTags.push(...q.options[chosen].tags);
        }
      });
      onComplete(allTags);
    }
  };

  const goPrev = () => {
    if (currentQ > 0) setCurrentQ((p) => p - 1);
    else onBack();
  };

  const selected = answers[question.id];

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-16 px-6">
      <div className="w-full max-w-2xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQ + 1} of {total}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full gradient-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="animate-fade-in" key={question.id}>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-8">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => selectOption(idx)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 group ${
                  selected === idx
                    ? "border-primary bg-primary/5 shadow-card"
                    : "border-border hover:border-primary/40 hover:shadow-card bg-card"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      selected === idx
                        ? "gradient-primary"
                        : "bg-muted group-hover:bg-primary/10"
                    }`}
                  >
                    {selected === idx ? (
                      <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                    ) : (
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                        {String.fromCharCode(65 + idx)}
                      </span>
                    )}
                  </div>
                  <span className={`text-base font-medium ${selected === idx ? "text-primary" : "text-foreground"}`}>
                    {opt.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          <Button variant="outline" onClick={goPrev}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={goNext}
            disabled={selected === undefined}
            variant="default"
          >
            {currentQ === total - 1 ? "See Results" : "Next"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
