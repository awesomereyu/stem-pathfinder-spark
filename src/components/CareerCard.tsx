import { type Career } from "@/data/careers";
import { BarChart3, HeartPulse, Shield, Leaf, Bot, Rocket } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
};

interface CareerCardProps {
  career: Career;
  percentage: number;
  rank: number;
  onClick: () => void;
}

const CareerCard = ({ career, percentage, rank, onClick }: CareerCardProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-6 rounded-2xl border border-border bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${career.colorKey}/10 text-${career.colorKey}`}>
          {iconMap[career.icon]}
        </div>
        <div className="flex items-center gap-2">
          {rank <= 3 && (
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
              rank === 1 ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}>
              #{rank}
            </span>
          )}
        </div>
      </div>

      <h3 className="text-lg font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
        {career.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {career.description}
      </p>

      {/* Match bar */}
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-muted-foreground">Match</span>
          <span className="font-semibold text-foreground">{percentage}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full gradient-primary rounded-full transition-all duration-700 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </button>
  );
};

export default CareerCard;
