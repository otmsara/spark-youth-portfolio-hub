
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js and MongoDB. Includes user authentication, product management, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application that helps users organize tasks, set priorities, and track progress. Features include drag-and-drop interfaces, reminders, and team collaboration tools.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills. Built with modern web technologies and featuring smooth animations and intuitive navigation.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">My <span className="highlight">Projects</span></h2>
        <p className="section-subtitle max-w-2xl mb-12">
          Here are some of my recent projects. Each one was built to solve a specific problem or achieve a particular goal.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-portfolio-lightPurple text-portfolio-darkPurple text-xs font-medium px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-lightPurple flex items-center gap-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center gap-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
