import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin,ExternalLink, Star, FileText } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import EducationSection from "./EducationSection";

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    "Java", "Python", "AI & ML", "Docker", "Langchain", "Git", "GitHub",
    "Langflow", "React.js", "Node.js", "MongoDB", "JWT", "Redux",
    "Data Engineering", "SQL", "NoSQL", "NLP", "Azure"
  ];

  const projects = [
    {
      title: "Online Charity System",
      description: "A comprehensive charity management platform with donation tracking and user management.",
      tech: ["Java Servlets", "XAMPP", "JDBC"],
      link: "#",
      github: "https://github.com/DhanashriPatil11/online-charity-system",
      live: "https://online-charity-system-demo.com",
      image: "https://media.licdn.com/dms/image/v2/D5612AQGVmlA3yXZjmQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1693454997012?e=2147483647&v=beta&t=izdBLaBRxrnlbxtFYiGBQ-NQ997aMMTy_08mocy2G8k"
    },
    {
      title: "Agrigenie",
      description: "AI-powered agricultural assistant developed using AWS PartyRock for smart farming solutions.",
      tech: ["AWS PartyRock", "AI/ML"],
      link: "#",
      awsPartyRock: "https://partyrock.aws/u/Gracygrace369/UlH_1ATHG/AgriGenie",
      live: "https://agrigenie-demo.com",
      image: "https://agfundernews.com/wp-content/uploads/2024/07/Precision-agriculture-istock-ChatkarenStudio-1.jpg"
    },
    {
      title: "File Transfer Application",
      description: "Real-time file sharing application with secure transfer capabilities.",
      tech: ["React", "Vite", "Socket.io"],
      link: "#",
      github: "https://github.com/DhanashriPatil11/file_transfer_application",
      live: "https://file-transfer-app-demo.com",
      image: "https://www.kiteworks.com/wp-content/uploads/2022/06/Top-Secure-File-Transfer-Software-Solutions.webp"
    },
    {
      title: "Bail Reckoner",
      description: "Legal aid tool for undertrial prisoners with risk prediction and bail eligibility using CatBoost and NLP.",
      tech: ["React","Flask", "CatBoost", "NLP"],
      link: "#",
      github: "https://github.com/DhanashriPatil11/Major-Project",
     // live: "https://file-transfer-app-demo.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QZhCax0S62uAnNKpZAKPAJ1S0KtgnbBRCA&s"
    },

    {
      title: "Retail Multiagent System",
      description: "A retail multiagent system leveraging Ollama for intelligent agent collaboration, automating retail operations and enhancing customer experience.",
      tech: ["Ollama", "Multiagent Systems", "AI", "Python"],
      link: "#",
      github: "https://github.com/DhanashriPatil11/retail-multiagent-ollama",
      //live: "https://retail-multiagent-demo.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8hFifOn1yVFOH7KyHBcHsoFX4du5dVwZQ-w&s"
    },
     {
      title: "Image Captioning using CNN and RNN",
      description: "Image captioning application that generates descriptive captions for images using Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN).",
      tech: ["Python", "TensorFlow", "Keras", "CNN", "RNN"],
      link: "#",
      github: "https://github.com/DhanashriPatil11/Image_Captioning_using_CNN_and_RNN",
     // live: "https://ecommerce-store-demo.com",
      image: "https://av-eks-lekhak.s3.amazonaws.com/media/__sized__/article_images/494205_1_En_7_Fig1_HTML-thumbnail_webp-600x300.webp"
    }
  ];

  // Floating particles data
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 20,
    duration: Math.random() * 10 + 15
  }));

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic Background with Lighting Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Animated radial gradients */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial opacity-30 animate-glow-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial opacity-20 animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-mesh opacity-10 animate-float"></div>
        
        {/* Mouse spotlight effect */}
        <div 
          className="absolute w-full h-full bg-gradient-spotlight pointer-events-none"
          style={{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`
          } as React.CSSProperties}
        ></div>
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary rounded-full animate-drift opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          ></div>
        ))}
        
        {/* Sparkle effects */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-glow rounded-full animate-sparkle"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary-glow rounded-full animate-sparkle" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/30"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto mb-6 relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-40 animate-glow-pulse"></div>
              <img
                src={profileImage}
                alt="Dhanashri Patil"
                className="w-full h-full rounded-full object-cover border-4 border-primary shadow-intense relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-purple-pink bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Dhanashri Patil
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-xl text-muted-foreground">
                AI & Machine Learning Engineer
              </p>
              <Star className="w-5 h-5 text-pink-glow" />
              <Badge variant="outline" className="border-pink text-pink bg-pink/10">
                Final Year Student
              </Badge>
            </div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Final Year BTech in Artificial Intelligence & Machine Learning '2026<br />
              R C Patel Institute of Technology, Shirpur
            </p>
          </div>
          
        {/*  <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
             <a href="mailto:patil.dhanashrik@gmail.com" target="_blank" rel="noopener noreferrer"></a>
            <Button variant="default" size="lg" className="bg-gradient-purple-pink hover:shadow-intense transition-all duration-300 border-0">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" className="border-pink text-pink hover:bg-pink/20 hover:shadow-glow transition-all duration-300">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>


        */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
  {/* Contact Me */}
  <a href="mailto:patil.dhanashrik@gmail.com" target="_blank" rel="noopener noreferrer">
    <Button
      variant="default"
      size="lg"
      className="bg-gradient-purple-pink hover:shadow-intense transition-all duration-300 border-0"
    >
      <Mail className="mr-2 h-5 w-5" />
      Contact Me
    </Button>
  </a>

  {/* GitHub */}
  
  <a href="https://github.com/DhanashriPatil11" target="_blank" rel="noopener noreferrer">
    <Button
      variant="outline"
      size="lg"
      className="border-pink text-pink hover:bg-pink/20 hover:shadow-glow transition-all duration-300"
    >
      <Github className="mr-2 h-5 w-5" />
      GitHub
    </Button>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/dhanashri-patil11/" target="_blank" rel="noopener noreferrer">
    <Button
      variant="outline"
      size="lg"
      className="border-pink text-pink hover:bg-pink/20 hover:shadow-glow transition-all duration-300"
      //"border-pink-600 text-blue-600 hover:bg-blue-70 hover:shadow-glow transition-all duration-300"
    >
      <Linkedin className="mr-2 h-5 w-5" />
      LinkedIn
    </Button>
  </a>

  {/* Resume Download */}
  <a href="https://drive.google.com/file/d/1-47KeBfVxMHyaaU2J9iO_lh9qjWBJP6s/view?usp=drive_link" >
    <Button
      variant="outline"
      size="lg"
      className="border-pink text-pink hover:bg-pink/20 hover:shadow-glow transition-all duration-300"
      //"border-green-600 text-green-600 hover:bg-green-100 hover:shadow-glow transition-all duration-300"
    >
      <FileText className="mr-2 h-5 w-5" />
      Resume
    </Button>
  </a>
  </div>
  </div>
  </section>

      {/* Education Section */}
      <EducationSection />

      {/* About Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-purple-pink bg-clip-text text-transparent animate-fade-in">
            About Me
          </h2>
          <Card className="bg-card/80 backdrop-blur-sm border border-pink/20 shadow-intense hover:shadow-glow transition-all duration-500 animate-fade-in group">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                    I'm a passionate final-year student pursuing BTech in Artificial Intelligence and Machine Learning 
                    at R C Patel Institute of Technology, Shirpur. My keen interests lie in AI, ML, and Full Stack Development, 
                    with a particular passion for Data Science and Data Engineering using Azure.
                  </p>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    I believe in the transformative power of technology and am constantly exploring ways to leverage 
                    AI and ML to solve real-world problems. My journey includes hands-on experience with various 
                    technologies and frameworks, building projects that showcase my skills and creativity.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-skill p-4 rounded-lg border border-border/50 group-hover:border-pink/30 transition-colors duration-300">
                    <h4 className="font-semibold text-pink-glow mb-2">Current Focus</h4>
                    <p className="text-sm text-foreground/80">Building innovative AI solutions and expanding expertise in cloud technologies</p>
                  </div>
                  
                  <div className="bg-gradient-skill p-4 rounded-lg border border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                    <h4 className="font-semibold text-primary-glow mb-2">Career Goal</h4>
                    <p className="text-sm text-foreground/80">Becoming a leading AI/ML engineer contributing to next-gen technology solutions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-l from-pink/10 via-transparent to-primary/10"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-purple-pink bg-clip-text text-transparent animate-fade-in">
            Skills & Technologies
          </h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive technical expertise across modern development stack
          </p>
          
          <div className="grid gap-8">
            {/* High Priority Skills */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold text-pink-glow mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {["AI & ML", "Python", "React.js", "Azure", "Docker"].map((skill, index) => (
                  <SkillCard key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
            
            {/* All Skills */}
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-lg font-semibold text-primary-glow mb-4">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.filter(skill => !["AI & ML", "Python", "React.js", "Azure", "Docker"].includes(skill)).map((skill, index) => (
                  <SkillCard key={skill} skill={skill} index={index + 5} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-purple-pink bg-clip-text text-transparent animate-fade-in">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
  <Card
    key={index}
    className="bg-card/70 backdrop-blur-sm border border-pink/20 shadow-card hover:shadow-intense hover:bg-card/90 hover:border-pink/40 transition-all duration-500 group animate-fade-in"
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    <CardContent className="p-6">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-4 border border-pink/20"
      />

      {/* Project Title */}
      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-pink-glow transition-colors duration-300">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, techIndex) => (
          <Badge
            key={techIndex}
            variant="outline"
            className="text-xs border-pink/30 text-pink hover:border-pink hover:bg-pink/10 transition-all duration-300"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* Buttons: GitHub + Live Demo */}
      <div className="flex gap-2">
        {/* GitHub Link */}
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-pink hover:bg-pink/20 hover:shadow-glow transition-all duration-300"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub Repo
          </Button>
        </a>

        {/* Live Demo Link */}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-pink hover:bg-pink/20 hover:shadow-glow transition-all duration-300"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </a>
        )}
      </div>
    </CardContent>
  </Card>
))}

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/20"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-purple-pink bg-clip-text text-transparent animate-fade-in">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I'm always open to discussing new opportunities and exciting projects!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="mailto:dhanashri@example.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 hover:shadow-glow">
              <Mail className="h-5 w-5" />
              <span>patil.dhanashrik@gmail.com</span>
            </a>
            <a href="tel:+91xxxxxxxxxx" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300">
              <Phone className="h-5 w-5" />
              <span>+91 9511207619</span>
            </a>
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="h-5 w-5" />
              <span>Shirpur, Maharashtra</span>
            </div>
          </div>

         <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
  
  {/* GitHub */}
  <a href="https://github.com/DhanashriPatil11" target="_blank" rel="noopener noreferrer">
    <Button
      variant="outline"
      size="lg"
      className="border-pink text-pink hover:bg-pink/20 hover:shadow-glow transition-all duration-300"
    >
      <Github className="mr-2 h-5 w-5" />
      GitHub
    </Button>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/dhanashri-patil11/" target="_blank" rel="noopener noreferrer">
    <Button
      variant="outline"
      size="lg"
      className="border-pink text-pink hover:bg-pink/20 hover:shadow-glow transition-all duration-300"
      //"border-primary text-primary hover:bg-primary/20 hover:shadow-glow transition-all duration-300"
    >
      <Linkedin className="mr-2 h-5 w-5" />
      LinkedIn
    </Button>
  </a>

</div>
</div>
      </section>
    </div>
  );
};

export default Portfolio;