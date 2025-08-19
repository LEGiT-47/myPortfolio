import { useEffect, useState } from "react";
// Added 'Award' icon for the new section
import { ChevronDown, Github, Linkedin, Mail, Phone, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollIndicator from "@/components/ScrollIndicator";
import StartupLoader from "@/components/StartupLoader";

// Data for the new Certifications section
const certifications = [
  {
    title: "AWS APAC – Solutions Architecture Job Simulation",
    issued: "Jan 2025",
    platform: "Forage",
  },
  {
    title: "Deloitte Australia – Technology Job Simulation",
    issued: "Jan 2025",
    platform: "Forage",
  },
  {
    title: "JPMorgan Chase & Co – Software Engineering Job Simulation",
    issued: "Jan 2025",
    platform: "Forage",
    skills: ["Java", "Spring Boot", "REST APIs", "Kafka", "H2"],
  },
  {
    title: "Walmart USA – Advanced Software Engineering Job Simulation",
    issued: "Jan 2025",
    platform: "Forage",
    skills: ["Java"],
  },
  {
    title: "Google AI Essentials",
    issued: "Aug 2024",
    platform: "Coursera",
  },
  {
    title: "Google Cybersecurity Certificate",
    issued: "Apr 2024",
    platform: "Coursera",
  },
];

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
      setTimeout(() => setIsVisible(true), 100);
    }, 300);
  };

  if (isLoading) {
    return <StartupLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showContent && (
        <>
          <Navigation />
          
          {/* Animated Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), 
                            radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%), 
                            radial-gradient(circle at 40% 80%, #ec4899 0%, transparent 50%)`,
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            />
            
            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hero Section */}
          <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center z-10">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight tracking-tight">
                  Hi, I'm{" "}
                  <span className="text-gradient font-display">Viraj Prabhu</span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4 font-body leading-relaxed">
                  Computer Engineering Student & Full-Stack Developer specializing in 
                  <span className="text-primary font-semibold font-mono"> Python, Java, Django & Spring Boot</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection("projects")}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow group font-fun text-lg"
                  >
                    🎮 View My Work
                    <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-fun text-lg"
                  >
                    💫 Get In Touch
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://www.linkedin.com/in/viraj-prabhu-281597305/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-effect hover:scale-110 transition-all duration-300 hover:neon-glow group"
                  >
                    <Linkedin className="w-6 h-6 text-primary group-hover:animate-bounce" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-full glass-effect hover:scale-110 transition-all duration-300 hover:neon-glow group"
                  >
                    <Github className="w-6 h-6 text-primary group-hover:animate-spin" />
                  </a>
                  <a 
                    href="mailto:virajprabhu47@gmail.com"
                    className="p-3 rounded-full glass-effect hover:scale-110 transition-all duration-300 hover:neon-glow group"
                  >
                    <Mail className="w-6 h-6 text-primary group-hover:animate-pulse" />
                  </a>
                  <a 
                    href="tel:9004041406"
                    className="p-3 rounded-full glass-effect hover:scale-110 transition-all duration-300 hover:neon-glow group"
                  >
                    <Phone className="w-6 h-6 text-primary group-hover:animate-bounce" />
                  </a>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <ScrollIndicator />
          </section>

          {/* About Section */}
          <section id="about" className="py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                    About <span className="text-gradient font-fun">Me</span> 🌟
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                    A passionate Computer Engineering student at St. Francis Institute of Technology 
                    with a stellar 9.9/10.0 CGPA, specializing in AI/ML honors.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                <ScrollReveal direction="left" delay={0.2}>
                  <div className="flex flex-col h-full space-y-6">
                    <div className="glass-effect p-6 md:p-8 rounded-2xl hover:scale-105 transition-transform duration-300 h-[280px] flex flex-col">
                      <h3 className="text-2xl font-display font-bold mb-4 text-primary tracking-wide">🎓 Education</h3>
                      <div className="space-y-3 flex-1">
                        <h4 className="text-lg font-body font-semibold">B.E. in Computer Engineering (Honors in AI/ML)</h4>
                        <p className="text-muted-foreground font-body">St. Francis Institute Of Technology</p>
                        <p className="text-sm text-muted-foreground font-mono">June 2023 – June 2027</p>
                        <div className="flex items-center gap-2 mt-auto">
                          <span className="font-body font-semibold">CGPA:</span>
                          <span className="text-primary font-display font-bold text-xl animate-pulse">9.9/10.0</span>
                        </div>
                      </div>
                    </div>

                    <div className="glass-effect p-6 md:p-8 rounded-2xl hover:scale-105 transition-transform duration-300 h-[280px] flex flex-col">
                      <h3 className="text-2xl font-display font-bold mb-4 text-primary tracking-wide">💼 Current Role</h3>
                      <div className="space-y-3 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-lg font-body font-semibold">Webmaster (Full-time)</h4>
                          <p className="text-muted-foreground font-body">IEEE SFIT Student Branch</p>
                          <p className="text-sm text-muted-foreground font-mono">June 2025 – Present</p>
                        </div>
                        <div className="text-sm text-muted-foreground font-body mt-4">
                          <p>Managing web development, front-end and back-end development, secure authentication, and database management for the IEEE student branch.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.4}>
                  <div className="flex flex-col h-full space-y-6">
                    <div className="glass-effect p-6 md:p-8 rounded-2xl hover:scale-105 transition-transform duration-300 h-[280px] flex flex-col">
                      <h3 className="text-2xl font-display font-bold mb-4 text-primary tracking-wide">📍 Location</h3>
                      <div className="flex-1 flex flex-col justify-between">
                        <p className="text-muted-foreground font-mono text-lg">Mumbai, Maharashtra 400063</p>
                        <div className="text-sm text-muted-foreground font-body mt-4">
                          <p>Based in the financial capital of India, with access to a thriving tech ecosystem and numerous opportunities for growth and collaboration.</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-effect p-6 md:p-8 rounded-2xl hover:scale-105 transition-transform duration-300 h-[280px] flex flex-col">
                      <h3 className="text-2xl font-display font-bold mb-4 text-primary tracking-wide">🎯 Focus Areas</h3>
                      <ul className="space-y-3 text-muted-foreground font-body flex-1">
                        <li className="flex items-center hover:text-primary transition-colors"><span className="text-primary mr-3 font-display animate-pulse">→</span> Full-Stack Web Development</li>
                        <li className="flex items-center hover:text-primary transition-colors"><span className="text-primary mr-3 font-display animate-pulse">→</span> AI/ML Applications</li>
                        <li className="flex items-center hover:text-primary transition-colors"><span className="text-primary mr-3 font-display animate-pulse">→</span> System Design & Architecture</li>
                        <li className="flex items-center hover:text-primary transition-colors"><span className="text-primary mr-3 font-display animate-pulse">→</span> API Integration & Development</li>
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20 px-4 sm:px-6 bg-card/20">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                    My <span className="text-gradient font-fun">Experience</span> 💼
                  </h2>
                </div>
              </ScrollReveal>

              <div className="space-y-8">
                {/* Experience Timeline */}
                <div className="relative">
                  <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                  
                  {/* Current Experience - Webmaster */}
                  <ScrollReveal delay={0.1}>
                    <div className="relative flex items-start space-x-4 md:space-x-8 mb-12">
                      <div className="flex-shrink-0 w-8 h-8 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center neon-glow animate-pulse">
                        <div className="w-4 h-4 md:w-8 md:h-8 bg-background rounded-full"></div>
                      </div>
                      <div className="glass-effect p-6 md:p-8 rounded-2xl flex-1 hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-display font-bold tracking-wide">🌐 Webmaster (Full-time)</h3>
                          <span className="text-primary text-sm font-mono font-semibold bg-primary/20 px-2 py-1 rounded-full">June 2025 – Present</span>
                        </div>
                        <h4 className="text-lg text-primary mb-2 font-body font-semibold">IEEE SFIT Student Branch – Mumbai, India</h4>
                        <ul className="text-muted-foreground space-y-2 font-body">
                          <li className="flex items-start"><span className="text-primary mr-2 mt-1">▸</span> Web Maintenance and optimization for IEEE SFIT branch website</li>
                          <li className="flex items-start"><span className="text-primary mr-2 mt-1">▸</span> Front-End and Back-End Web Development using modern technologies</li>
                          <li className="flex items-start"><span className="text-primary mr-2 mt-1">▸</span> Implemented Secure Authentication systems and Database management</li>
                          <li className="flex items-start"><span className="text-primary mr-2 mt-1">▸</span> Managing technical infrastructure and web-based solutions</li>
                        </ul>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Internship Experience */}
                  <ScrollReveal delay={0.2}>
                    <div className="relative flex items-start space-x-4 md:space-x-8 mb-12">
                      <div className="flex-shrink-0 w-8 h-8 md:w-16 md:h-16 bg-secondary rounded-full flex items-center justify-center hover:animate-bounce">
                        <div className="w-4 h-4 md:w-8 md:h-8 bg-background rounded-full"></div>
                      </div>
                      <div className="glass-effect p-6 md:p-8 rounded-2xl flex-1 hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-display font-bold tracking-wide">🎯 Internship Student</h3>
                          <span className="text-primary text-sm font-mono font-semibold">January 2025 – March 2025</span>
                        </div>
                        <h4 className="text-lg text-primary mb-2 font-body font-semibold">Suvidha Foundation – Mumbai, India</h4>
                        <ul className="text-muted-foreground space-y-2 font-body">
                          <li className="flex items-start"><span className="text-primary mr-2 mt-1">▸</span> Worked well in a team environment as well as independently</li>
                          <li className="flex items-start"><span className="text-primary mr-2 mt-1">▸</span> Secured funding for community-related fundraising campaigns</li>
                        </ul>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Technical Executive */}
                  <ScrollReveal delay={0.3}>
                    <div className="relative flex items-start space-x-4 md:space-x-8 mb-12">
                      <div className="flex-shrink-0 w-8 h-8 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center hover:animate-spin">
                        <div className="w-4 h-4 md:w-8 md:h-8 bg-background rounded-full"></div>
                      </div>
                      <div className="glass-effect p-6 md:p-8 rounded-2xl flex-1 hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-display font-bold tracking-wide">⚡ Technical Executive</h3>
                          <span className="text-primary text-sm font-mono font-semibold">July 2024 – July 2025</span>
                        </div>
                        <h4 className="text-lg text-primary mb-2 font-body font-semibold">Computer Society Of India (CSI) – Mumbai, India</h4>
                        <ul className="text-muted-foreground space-y-2 font-body">
                          <li className="flex items-start"><span className="text-primary mr-2 mt-1">▸</span> Worked with cross-functional teams to achieve goals</li>
                          <li className="flex items-start"><span className="text-primary mr-2 mt-1">▸</span> Utilized advanced technical skills and expertise to troubleshoot complex problems and implement solutions</li>
                        </ul>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Volunteer */}
                  <ScrollReveal delay={0.4}>
                    <div className="relative flex items-start space-x-4 md:space-x-8">
                      <div className="flex-shrink-0 w-8 h-8 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center hover:animate-bounce">
                        <div className="w-4 h-4 md:w-8 md:h-8 bg-background rounded-full"></div>
                      </div>
                      <div className="glass-effect p-6 md:p-8 rounded-2xl flex-1 hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-display font-bold tracking-wide">🤝 Volunteer</h3>
                          <span className="text-primary text-sm font-mono font-semibold">July 2024 – July 2026</span>
                        </div>
                        <h4 className="text-lg text-primary mb-2 font-body font-semibold">National Service Scheme (NSS) – Mumbai, India</h4>
                        <ul className="text-muted-foreground space-y-2 font-body">
                          <li className="flex items-start"><span className="text-primary mr-2 mt-1">▸</span> Participated in team building exercises to strengthen relationships among volunteers</li>
                          <li className="flex items-start"><span className="text-primary mr-2 mt-1">▸</span> Collaborated with others by contributing time, effort, and skills to achieve the organization's goals</li>
                        </ul>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                    Featured <span className="text-gradient font-fun">Projects</span> 🚀
                  </h2>
                  <p className="text-xl text-muted-foreground font-body">
                    Some of my recent work that showcases my skills and experience
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* GameHeaven Project */}
                <ScrollReveal delay={0.1}>
                  <div className="glass-effect p-6 md:p-8 rounded-2xl hover:scale-105 transition-all duration-300 group h-[320px] flex flex-col">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                      <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors tracking-wide">🎮 GameHeaven</h3>
                      <div className="flex space-x-2 flex-shrink-0">
                        <Button size="sm" variant="outline" asChild className="font-mono hover:animate-pulse">
                          <a href="https://github.com/LEGiT-47/GameHeaven" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild className="font-mono hover:animate-bounce">
                          <a href="https://gamingshop.onrender.com/" target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 font-body leading-relaxed flex-1">
                      Developed a one-stop-shop platform for users to browse and purchase gaming products. Features include user authentication, product catalog, shopping cart, and secure payment processing.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-mono hover:animate-pulse">Django</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-mono hover:animate-pulse">Python</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-mono hover:animate-pulse">HTML</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-mono hover:animate-pulse">CSS</span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* RedRespond Project */}
                <ScrollReveal delay={0.2}>
                  <div className="glass-effect p-6 md:p-8 rounded-2xl hover:scale-105 transition-all duration-300 group h-[320px] flex flex-col">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                      <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors tracking-wide">🩸 RedRespond</h3>
                      <div className="flex space-x-2 flex-shrink-0">
                        <Button size="sm" variant="outline" asChild className="font-mono hover:animate-pulse">
                          <a href="https://github.com/LEGiT-47/RedRespond" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 font-body leading-relaxed flex-1">
                      Enables individuals to register and manage their donation details while facilitating communication
                      through Telegram notifications and location-based alerts using Leaflet.js. Includes automated task scheduling with Celery.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-mono hover:animate-pulse">Django</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-mono hover:animate-pulse">Python</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-mono hover:animate-pulse">Celery</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-mono hover:animate-pulse">JavaScript</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 px-4 sm:px-6 bg-card/20">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                    Skills & <span className="text-gradient font-fun">Technologies</span> 💪
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8 items-stretch">
                {/* Languages */}
                <ScrollReveal delay={0.1}>
                  <div className="glass-effect p-6 md:p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 h-[500px] flex flex-col">
                    <h3 className="text-2xl font-display font-bold mb-6 text-primary tracking-wide">💻 Languages</h3>
                    <div className="space-y-3 flex-1 flex flex-col justify-center">
                      {['Python', 'Java', 'C', 'JavaScript', 'SQL', 'HTML', 'CSS'].map((skill) => (
                        <div key={skill} className="py-3 px-4 bg-primary/10 rounded-lg hover:bg-primary/20 hover:scale-105 transition-all duration-300 font-mono font-medium tracking-wide cursor-pointer">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Frameworks */}
                <ScrollReveal delay={0.2}>
                  <div className="glass-effect p-6 md:p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 h-[500px] flex flex-col">
                    <h3 className="text-2xl font-display font-bold mb-6 text-primary tracking-wide">🛠️ Frameworks</h3>
                    <div className="space-y-3 flex-1 flex flex-col justify-center">
                      {['Django', 'Spring Boot', 'JavaFX'].map((skill) => (
                        <div key={skill} className="py-3 px-4 bg-primary/10 rounded-lg hover:bg-primary/20 hover:scale-105 transition-all duration-300 font-mono font-medium tracking-wide cursor-pointer">
                          {skill}
                        </div>
                      ))}
                      {/* Add placeholder items to match height */}
                      {[...Array(4)].map((_, i) => (
                        <div key={`placeholder-${i}`} className="py-3 px-4 bg-transparent rounded-lg">
                          <span className="opacity-0">Placeholder</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Tools */}
                <ScrollReveal delay={0.3}>
                  <div className="glass-effect p-6 md:p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 h-[500px] flex flex-col">
                    <h3 className="text-2xl font-display font-bold mb-6 text-primary tracking-wide">⚙️ Tools & Skills</h3>
                    <div className="space-y-3 flex-1 flex flex-col justify-center">
                      {['VS Code', 'IntelliJ', 'Postman', 'Git', 'System Design', 'API Integration'].map((skill) => (
                        <div key={skill} className="py-3 px-4 bg-primary/10 rounded-lg hover:bg-primary/20 hover:scale-105 transition-all duration-300 font-mono font-medium tracking-wide cursor-pointer">
                          {skill}
                        </div>
                      ))}
                      {/* Add placeholder item to match height */}
                      <div className="py-3 px-4 bg-transparent rounded-lg">
                        <span className="opacity-0">Placeholder</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Certifications Section - NEW */}
          <section id="certifications" className="py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                    My <span className="text-gradient font-fun">Certifications</span> 📜
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                    <div className="glass-effect p-6 rounded-2xl h-full flex flex-col hover:scale-105 transition-transform duration-300 group">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 pt-1">
                          <Award className="w-6 h-6 text-primary group-hover:animate-pulse transition-all" />
                        </div>
                        <h3 className="text-lg font-display font-bold group-hover:text-primary transition-colors tracking-wide leading-tight">
                          {cert.title}
                        </h3>
                      </div>
                      <div className="text-sm text-muted-foreground font-mono mb-4 pl-10">
                        <p>Issued: {cert.issued}</p>
                        <p>Platform: {cert.platform}</p>
                      </div>
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto pl-10">
                          {cert.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                  Let's <span className="text-gradient font-fun">Connect</span> 🤝
                </h2>
                <p className="text-xl text-muted-foreground mb-12 font-body">
                  Always open to discussing new opportunities and interesting projects
                </p>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <ScrollReveal delay={0.1}>
                  <div className="glass-effect p-6 md:p-8 rounded-2xl hover:scale-105 transition-transform duration-300 h-[200px] flex flex-col justify-center text-center">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce" />
                    <h3 className="text-xl font-display font-bold mb-2">📧 Email</h3>
                    <a href="mailto:virajprabhu47@gmail.com" className="text-primary hover:underline font-mono">
                      virajprabhu47@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2 font-body">
                      Best way to reach me for professional inquiries
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="glass-effect p-6 md:p-8 rounded-2xl hover:scale-105 transition-transform duration-300 h-[200px] flex flex-col justify-center text-center">
                    <Phone className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
                    <h3 className="text-xl font-display font-bold mb-2">📱 Phone</h3>
                    <a href="tel:9004041406" className="text-primary hover:underline font-mono">
                      +91 9004041406
                    </a>
                    <p className="text-sm text-muted-foreground mt-2 font-body">
                      Available for calls during business hours
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button size="lg" asChild className="neon-glow font-fun text-lg hover:animate-bounce">
                    <a href="https://www.linkedin.com/in/viraj-prabhu-281597305/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      🔗 LinkedIn
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="font-fun text-lg hover:animate-pulse">
                    <a href="mailto:virajprabhu47@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      ✉️ Email Me
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-4 sm:px-6 border-t border-border">
            <div className="max-w-6xl mx-auto text-center text-muted-foreground">
              <p className="font-fun">&copy; 2025 Viraj Prabhu. Built with React, TypeScript, and Tailwind CSS. Made with 💙</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}