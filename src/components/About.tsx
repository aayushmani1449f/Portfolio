import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, JavaScript, HTML5, CSS3, Tailwind CSS"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Node.js, Express.js, REST APIs, WebSocket"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Databases & Cloud",
      description: "MySQL, MongoDB, Firebase, AWS"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile & Tools",
      description: "React Native, Git, Docker, Agile Methodology"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer pursuing B.Tech in Computer Science at SRM Institute of Science and Technology, Chennai.
            With a strong foundation in modern web technologies and a keen interest in creating efficient, scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Current Academic Journey</h3>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center p-4 border-l-4 border-primary bg-muted/50 rounded-r-lg">
              <div>
                <h4 className="font-semibold text-lg">B.Tech Computer Science & Engineering</h4>
                <p className="text-muted-foreground">SRM Institute of Science and Technology, Chennai</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="font-semibold">CGPA: 8.93</p>
                <p className="text-muted-foreground">July 2022 - May 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;