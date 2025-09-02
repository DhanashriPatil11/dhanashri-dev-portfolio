import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  Globe, 
  GitBranch, 
  Container, 
  Zap,
  FileCode,
  Settings,
  Cpu,
  Monitor
} from "lucide-react";

interface SkillCardProps {
  skill: string;
  index: number;
}

const getSkillIcon = (skill: string) => {
  const iconMap: { [key: string]: JSX.Element } = {
    "Java": <Code className="w-4 h-4" />,
    "Python": <FileCode className="w-4 h-4" />,
    "AI & ML": <Brain className="w-4 h-4" />,
    "Docker": <Container className="w-4 h-4" />,
    "Langchain": <Zap className="w-4 h-4" />,
    "Git": <GitBranch className="w-4 h-4" />,
    "GitHub": <GitBranch className="w-4 h-4" />,
    "Langflow": <Settings className="w-4 h-4" />,
    "React.js": <Globe className="w-4 h-4" />,
    "Node.js": <Cpu className="w-4 h-4" />,
    "MongoDB": <Database className="w-4 h-4" />,
    "JWT": <Settings className="w-4 h-4" />,
    "Redux": <Settings className="w-4 h-4" />,
    "Data Engineering": <Database className="w-4 h-4" />,
    "SQL": <Database className="w-4 h-4" />,
    "NoSQL": <Database className="w-4 h-4" />,
    "NLP": <Brain className="w-4 h-4" />,
    "Azure": <Cloud className="w-4 h-4" />
  };

  return iconMap[skill] || <Monitor className="w-4 h-4" />;
};

const getSkillCategory = (skill: string) => {
  const categories = {
    "AI & ML": ["AI & ML", "NLP", "Python", "Langchain", "Langflow"],
    "Backend": ["Java", "Node.js", "JWT", "Python"],
    "Frontend": ["React.js", "Redux"],
    "Database": ["MongoDB", "SQL", "NoSQL", "Data Engineering"],
    "DevOps": ["Docker", "Git", "GitHub", "Azure"],
    "Cloud": ["Azure"]
  };

  for (const [category, skills] of Object.entries(categories)) {
    if (skills.includes(skill)) {
      return category;
    }
  }
  return "Technology";
};

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const category = getSkillCategory(skill);
  const isHighPriority = ["AI & ML", "Python", "React.js", "Azure", "Docker"].includes(skill);

  return (
    <Badge
      variant="secondary"
      className={`
        group relative px-4 py-3 text-sm font-medium 
        bg-gradient-skill backdrop-blur-sm border
        hover:scale-105 hover:shadow-glow transition-all duration-300 
        animate-fade-in cursor-pointer overflow-hidden
        ${isHighPriority 
          ? 'border-pink hover:border-pink-glow hover:bg-pink/20' 
          : 'border-border hover:border-primary hover:bg-primary/20'
        }
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-purple-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative flex items-center gap-2">
        <span className={`transition-colors duration-300 ${
          isHighPriority 
            ? 'text-pink group-hover:text-pink-glow' 
            : 'text-primary group-hover:text-primary-glow'
        }`}>
          {getSkillIcon(skill)}
        </span>
        <span className="text-foreground group-hover:text-foreground/90 transition-colors duration-300">
          {skill}
        </span>
        
        {/* Category indicator */}
        {isHighPriority && (
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-glow rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-purple-pink opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
    </Badge>
  );
};

export default SkillCard;