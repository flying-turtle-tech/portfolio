"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const skills = [
  {
    category: "iOS Development",
    items: ["Swift", "SwiftUI", "UIKit", "Combine", "CoreML", "ARKit"],
  },
  {
    category: "Web Development",
    items: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    category: "AI & Machine Learning",
    items: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "Firebase", "PostgreSQL", "Redis"],
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating elegant solutions to complex problems.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50 h-full">
                {/* Portrait Placeholder */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{siteConfig.name}</h3>
                <p className="text-violet-400 mb-4">Software Engineer</p>
                <p className="text-muted-foreground text-sm">
                  Based in Boston, MA
                </p>
              </Card>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50 h-full">
                <h3 className="text-2xl font-bold mb-4">My Story</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I&apos;m a passionate software engineer with a focus on building
                    innovative iOS applications and AI-powered solutions. With over
                    5 years of experience in the tech industry, I&apos;ve had the
                    privilege of working with amazing teams at companies like
                    Guidehuman, Fidelity, and Voatz.
                  </p>
                  <p>
                    My journey into software development began with a curiosity
                    about how technology could solve real-world problems. Today,
                    I specialize in creating intuitive mobile experiences and
                    integrating cutting-edge AI technologies to build products
                    that users love.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring the latest
                    advancements in AI, contributing to open-source projects, or
                    mentoring aspiring developers. I believe in continuous learning
                    and sharing knowledge with the community.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillSet, index) => (
                <motion.div
                  key={skillSet.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur border-border/50 h-full hover:border-violet-500/50 transition-all duration-300 glow-hover">
                    <h4 className="text-lg font-semibold mb-4 text-violet-300">
                      {skillSet.category}
                    </h4>
                    <ul className="space-y-2">
                      {skillSet.items.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
