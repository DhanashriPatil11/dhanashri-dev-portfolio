import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-pink/5 via-transparent to-primary/5"></div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-purple-pink bg-clip-text text-transparent animate-fade-in">
          Education & Academic Excellence
        </h2>
        
        <Card className="bg-card/80 backdrop-blur-sm border border-pink/20 shadow-intense hover:shadow-glow transition-all duration-500 animate-fade-in group">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-purple-pink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-pink-glow transition-colors duration-300">
                    BTech in Artificial Intelligence & Machine Learning
                  </h3>
                  <Badge 
                    variant="outline" 
                    className="border-pink text-pink bg-pink/10 group-hover:bg-pink/20 transition-colors duration-300"
                  >
                    <Award className="w-3 h-3 mr-1" />
                    Final Year
                  </Badge>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>R C Patel Institute of Technology, Shirpur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Class of 2026</span>
                  </div>
                </div>
                
                <p className="text-foreground/90 leading-relaxed mb-6">
                  Specializing in cutting-edge AI and ML technologies with a strong foundation in 
                  mathematics, algorithms, and practical implementation. Focused on bridging 
                  theoretical knowledge with real-world applications in data science and engineering.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-skill p-4 rounded-lg border border-border/50">
                    <h4 className="font-semibold text-pink-glow mb-2">Core Specializations</h4>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Machine Learning & Deep Learning</li>
                      <li>• Natural Language Processing</li>
                      <li>• Data Science & Analytics</li>
                      <li>• Computer Vision</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-skill p-4 rounded-lg border border-border/50">
                    <h4 className="font-semibold text-primary-glow mb-2">Technical Focus</h4>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Full Stack Development</li>
                      <li>• Cloud Computing (Azure)</li>
                      <li>• Data Engineering</li>
                      <li>• Software Engineering</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;