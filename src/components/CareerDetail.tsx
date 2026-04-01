import { type Career, careers } from "@/data/careers";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  ExternalLink,
  GraduationCap,
  Lightbulb,
  TrendingUp,
  DollarSign,
  BarChart3,
  HeartPulse,
  Shield,
  Leaf,
  Bot,
  Rocket,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="w-8 h-8" />,
  HeartPulse: <HeartPulse className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Leaf: <Leaf className="w-8 h-8" />,
  Bot: <Bot className="w-8 h-8" />,
  Rocket: <Rocket className="w-8 h-8" />,
};

interface CareerDetailProps {
  careerId: string;
  onBack: () => void;
}

const RoadmapStep = ({
  step,
  title,
  items,
  icon,
  isLast,
}: {
  step: number;
  title: string;
  items: string[];
  icon: React.ReactNode;
  isLast?: boolean;
}) => (
  <div className="flex gap-4 animate-slide-in" style={{ animationDelay: `${step * 0.15}s` }}>
    {/* Timeline line */}
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 text-primary-foreground">
        {icon}
      </div>
      {!isLast && <div className="w-0.5 flex-1 bg-border my-2" />}
    </div>

    {/* Content */}
    <div className="pb-8">
      <h3 className="text-lg font-bold font-heading text-foreground mb-2">{title}</h3>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const CareerDetail = ({ careerId, onBack }: CareerDetailProps) => {
  const career = careers.find((c) => c.id === careerId);
  if (!career) return null;

  return (
    <section className="min-h-screen bg-background py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <Button variant="ghost" onClick={onBack} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Results
        </Button>

        <div className="animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center gradient-primary text-primary-foreground`}>
              {iconMap[career.icon]}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                {career.title}
              </h1>
              <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" />
                  {career.salaryRange}
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {career.growthOutlook}
                </span>
              </div>
            </div>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            {career.description}
          </p>
        </div>

        {/* Roadmap */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
            <span className="text-gradient">Your Pathway Roadmap</span>
          </h2>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
            <RoadmapStep
              step={0}
              title="🎓 High School Preparation"
              items={career.highSchoolPrep}
              icon={<BookOpen className="w-5 h-5" />}
            />
            <RoadmapStep
              step={1}
              title="🏆 Extracurricular Activities"
              items={career.extracurriculars}
              icon={<Lightbulb className="w-5 h-5" />}
            />
            <RoadmapStep
              step={2}
              title="🛠 Professional Skills to Develop"
              items={career.professionalSkills}
              icon={<GraduationCap className="w-5 h-5" />}
            />
            <RoadmapStep
              step={3}
              title="🎯 Post-Secondary Education"
              items={career.educationLinks.map((l) => l.label)}
              icon={<GraduationCap className="w-5 h-5" />}
            />
            <RoadmapStep
              step={4}
              title="💼 Entry-Level Positions"
              items={career.entryLevelJobs}
              icon={<Briefcase className="w-5 h-5" />}
              isLast
            />
          </div>
        </div>

        {/* Education links */}
        <div>
          <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
            📚 Education & Certification Links
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {career.educationLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:shadow-card hover:border-primary/30 transition-all group"
              >
                <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerDetail;
