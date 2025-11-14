"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Guidehuman",
    position: "Senior Software Engineer",
    period: "2022 - Present",
    description: "Leading development of AI-powered features and iOS applications. Architecting scalable solutions and mentoring junior developers.",
    achievements: [
      "Built and launched 3 major iOS features increasing user engagement by 40%",
      "Implemented ML-based recommendation system improving conversion by 25%",
      "Led team of 4 engineers in migrating legacy codebase to modern architecture",
    ],
  },
  {
    company: "Fidelity",
    position: "Software Engineer",
    period: "2020 - 2022",
    description: "Developed high-performance financial applications with focus on security and reliability. Collaborated with cross-functional teams to deliver complex features.",
    achievements: [
      "Designed and implemented secure authentication system for mobile banking",
      "Optimized app performance reducing load times by 50%",
      "Contributed to open-source projects used by thousands of developers",
    ],
  },
  {
    company: "Voatz",
    position: "iOS Developer",
    period: "2018 - 2020",
    description: "Built secure voting platform using blockchain technology. Ensured accessibility and security across diverse user base.",
    achievements: [
      "Developed biometric authentication system with 99.9% accuracy",
      "Implemented end-to-end encryption for secure vote transmission",
      "Achieved WCAG 2.1 AA accessibility compliance",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey building impactful products and leading teams.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-fuchsia-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                }`}
              >
                <div
                  className={`flex items-start gap-4 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-violet-600 border-4 border-background flex items-center justify-center glow">
                      <Briefcase size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-16 md:ml-0 flex-1 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 glow-hover">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {exp.position}
                        </h3>
                        <span className="text-sm text-violet-400 font-mono">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-lg text-violet-300 mb-3">
                        {exp.company}
                      </p>

                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-violet-500 mt-1">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
