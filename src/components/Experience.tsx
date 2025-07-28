import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Web Developer (Virtual Internship)",
      company: "Eduatellite",
      location: "Online",
      duration: "Oct 2024 - Dec 2024",
      type: "Internship",
      description: [
        "Completed hands-on training in HTML, CSS, JavaScript, React, Node.js, Express and MongoDB, building 5+ full stack web applications.",
        "Collaborated on real-world development workflows using Git, RESTful APIs and modern frameworks to boost performance.",
        "Improved code efficiency by 30% through optimization techniques and implemented responsive UI designs across all major screen sizes."
      ],
      skills: ["React", "Node.js", "MongoDB", "JavaScript", "Git"]
    },
    {
      title: "Video Editor Intern",
      company: "Clothmeds",
      location: "Tamil Nadu",
      duration: "May 2025 - July 2025",
      type: "Internship",
      description: [
        "Edited and enhanced product and promotional videos using Adobe Premiere Pro and After Effects, boosting social media engagement by 20%.",
        "Collaborated with the marketing team on 4+ campaigns, creating tailored video content that aligned with brand aesthetics and increased reach.",
        "Optimized video formats for Instagram, Facebook, and YouTube, resulting in a 35% improvement in view-through rates across platforms."
      ],
      skills: ["Adobe Premiere Pro", "After Effects", "Social Media", "Marketing"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Experience</h2>
          <p className="text-xl text-muted-foreground">
            Building expertise through hands-on projects and real-world applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                      <Badge variant="secondary" className="ml-2">{exp.type}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;