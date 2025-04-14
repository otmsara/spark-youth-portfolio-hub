
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    category: "Frontend",
    techs: [
      { name: "HTML & CSS", proficiency: 95 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "React", proficiency: 90 },
      { name: "Tailwind CSS", proficiency: 88 },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", proficiency: 80 },
      { name: "Express", proficiency: 75 },
      { name: "MongoDB", proficiency: 70 },
      { name: "REST API", proficiency: 85 },
    ],
  },
  {
    category: "Tools & Others",
    techs: [
      { name: "Git & GitHub", proficiency: 90 },
      { name: "Figma", proficiency: 75 },
      { name: "Responsive Design", proficiency: 92 },
      { name: "Testing", proficiency: 65 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">My <span className="highlight">Skills</span></h2>
        <p className="section-subtitle max-w-2xl mb-12">
          I've acquired various technical skills throughout my journey. Here's a snapshot of my expertise and proficiency levels.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-center text-portfolio-darkPurple">{skill.category}</h3>
              <div className="space-y-6">
                {skill.techs.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{tech.name}</span>
                      <span className="text-portfolio-purple font-medium">{tech.proficiency}%</span>
                    </div>
                    <Progress 
                      value={tech.proficiency} 
                      className="h-2 bg-gray-200" 
                      indicatorClassName="bg-portfolio-purple"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-8 text-portfolio-darkPurple">Additional Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Webpack", "Redux", "Next.js", "GraphQL", "Firebase", 
              "Sass", "Docker", "Vercel", "Netlify", "Jest", "CI/CD"
            ].map((tool) => (
              <span 
                key={tool} 
                className="bg-portfolio-lightPurple text-portfolio-darkPurple px-4 py-2 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
