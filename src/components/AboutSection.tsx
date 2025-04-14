
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">About <span className="highlight">Me</span></h2>
            <p className="text-gray-700 mb-6">
              I'm a passionate web developer with over 5 years of experience in creating modern, 
              responsive websites and applications. My journey in web development started when I was 
              in college and has evolved into a fulfilling career.
            </p>
            <p className="text-gray-700 mb-6">
              I specialize in frontend development with React, TypeScript and Tailwind CSS, but I'm 
              also comfortable working with backend technologies. I believe in writing clean, 
              maintainable code and creating intuitive user experiences.
            </p>
            <p className="text-gray-700 mb-8">
              When I'm not coding, you can find me hiking, reading fantasy novels, or experimenting 
              with new recipes in the kitchen.
            </p>
            
            <Button 
              variant="outline" 
              className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-lightPurple flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </Button>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="bg-portfolio-lightPurple h-[450px] w-full rounded-lg overflow-hidden shadow-lg relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-portfolio-purple/10 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-portfolio-purple/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
