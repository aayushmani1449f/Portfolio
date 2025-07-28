import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, MessageSquare, Users, Film } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MyChatApp",
      description: "Real-time chat and forum messaging app with Firebase backend featuring live messaging across 5 categories using Firebase and Front-end.",
      features: [
        "Delivered responsive UI and media sharing using UI/UX laws to improve usability and accessibility.",
        "Real-time messaging functionality",
        "Firebase integration for backend services",
        "Responsive design with Tailwind CSS"
      ],
      technologies: ["Firebase", "JavaScript", "Tailwind CSS"],
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Womenality App",
      description: "Progressive web app with live location, emergency contact alerts and geolocation tracking.",
      features: [
        "Developed an SOS web app with live location, emergency contact alerts and geolocation tracking.",
        "Applied TDD methodology to reduce emergency response time by ~70%.",
        "Geolocation API integration",
        "Emergency alert system"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Geolocation API"],
      icon: <Users className="w-6 h-6" />,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "MovieVault with Quiz",
      description: "Cinema review quiz platform featuring 20+ films and 10 question quizzes per title.",
      features: [
        "Created movie review quiz platform featuring 20+ films and 10 question quizzes per title.",
        "Used modular JSON and Agile Kanban to achieve 95% code reuse and cut UI load time by 30%.",
        "Interactive quiz functionality",
        "Movie database integration"
      ],
      technologies: ["JavaScript", "JSON", "Firebase"],
      icon: <Film className="w-6 h-6" />,
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Showcasing my technical expertise through innovative web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-muted-foreground">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
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

export default Projects;