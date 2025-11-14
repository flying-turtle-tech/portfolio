"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "AI-Powered iOS App",
    description: "An intelligent iOS application that leverages machine learning to provide personalized recommendations and insights.",
    tech: ["Swift", "SwiftUI", "CoreML", "Python"],
    image: "/projects/project-1.jpg",
    github: "https://github.com/yourusername/project-1",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Real-Time Collaboration Platform",
    description: "A modern web application enabling seamless real-time collaboration with advanced features like live editing and presence indicators.",
    tech: ["React", "Next.js", "TypeScript", "WebSocket"],
    image: "/projects/project-2.jpg",
    github: "https://github.com/yourusername/project-2",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Mobile Banking Dashboard",
    description: "Intuitive mobile banking interface with advanced analytics, budgeting tools, and secure transaction management.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Redis"],
    image: "/projects/project-3.jpg",
    github: "https://github.com/yourusername/project-3",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Smart Home IoT System",
    description: "Comprehensive IoT platform for managing smart home devices with AI-driven automation and energy optimization.",
    tech: ["Swift", "Combine", "MQTT", "AWS IoT"],
    image: "/projects/project-4.jpg",
    github: "https://github.com/yourusername/project-4",
    demo: "https://demo.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in building
            innovative solutions across various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 overflow-hidden group hover:border-violet-500/50 transition-all duration-300 glow-hover">
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                      0{project.id}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-violet-500/50 hover:bg-violet-500/10"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-violet-600 hover:bg-violet-700"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
