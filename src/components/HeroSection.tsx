
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-portfolio-lightPurple/30 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-portfolio-purple/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-portfolio-purple/5 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <p className="text-portfolio-purple font-medium mb-4 animate-fade-in">Welcome to my portfolio</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A passionate web developer crafting beautiful and functional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              className="bg-portfolio-purple hover:bg-portfolio-darkPurple text-white font-medium px-8 py-6"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-lightPurple px-8 py-6"
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-portfolio-purple hover:text-portfolio-darkPurple transition-colors"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-10 h-10 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
