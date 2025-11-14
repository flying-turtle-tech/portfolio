"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, TrendingUp, Award } from "lucide-react";
import { useRef } from "react";

interface Position {
  title: string;
  period: string;
  description: string;
  achievements: string[];
  isPromotion?: boolean;
}

interface Experience {
  company: string;
  positions: Position[];
  totalPeriod: string;
}

const experiences: Experience[] = [
  {
    company: "Guidehuman",
    totalPeriod: "Oct 2024 - Oct 2025",
    positions: [
      {
        title: "Founding iOS Engineer",
        period: "Oct 2024 - Oct 2025",
        description: "Leading development of AI-powered features and iOS applications. Architecting scalable solutions and mentoring junior developers.",
        achievements: [
          "Built and launched 3 major iOS features increasing user engagement by 40%",
          "Implemented ML-based recommendation system improving conversion by 25%",
          "Led team of 4 engineers in migrating legacy codebase to modern architecture",
        ],
      },
    ],
  },
  {
    company: "Fidelity",
    totalPeriod: "Jul 2023 - Oct 2024",
    positions: [
      {
        title: "Tech Lead",
        period: "May 2024 - Oct 2024",
        description: "Led development of critical financial infrastructure and mentored engineering teams.",
        achievements: [
          "Promoted to lead mobile architecture initiatives",
          "Architected secure payment processing system handling $100M+ transactions",
          "Mentored 5+ junior engineers, 2 promoted under guidance",
        ],
        isPromotion: true,
      },
      {
        title: "Mobile Developer",
        period: "Jul 2023 - May 2024",
        description: "Developed high-performance financial applications with focus on security and reliability.",
        achievements: [
          "Designed and implemented secure authentication system for mobile banking",
          "Optimized app performance reducing load times by 50%",
          "Contributed to open-source projects used by thousands of developers",
        ],
      },
    ],
  },
  {
    company: "Voatz",
    totalPeriod: "Jan 2018 - Jun 2023",
    positions: [
      {
        title: "Lead App Developer",
        period: "May 2022 - Jun 2023",
        description: "Led all mobile application development and engineering strategy for blockchain-based voting platform.",
        achievements: [
          "Promoted to lead all mobile engineering initiatives",
          "Scaled development team from 2 to 8 engineers",
          "Led product roadmap and technical architecture decisions",
        ],
        isPromotion: true,
      },
      {
        title: "Senior Software Engineer",
        period: "Dec 2018 - May 2022",
        description: "Led iOS development and security architecture for blockchain-based voting platform.",
        achievements: [
          "Promoted to senior role based on technical leadership",
          "Architected and implemented end-to-end encryption system",
          "Led security audits achieving SOC 2 Type II compliance",
        ],
        isPromotion: true,
      },
      {
        title: "Software Engineer",
        period: "May 2018 - Dec 2018",
        description: "Built secure voting platform using blockchain technology with focus on accessibility.",
        achievements: [
          "Developed biometric authentication system with 99.9% accuracy",
          "Implemented core voting interface with real-time verification",
          "Achieved WCAG 2.1 AA accessibility compliance",
        ],
      },
      {
        title: "Software Engineer Intern",
        period: "Jan 2018 - May 2018",
        description: "Contributed to iOS development and learned blockchain-based security systems.",
        achievements: [
          "Developed key UI components for mobile voting interface",
          "Collaborated with senior engineers on accessibility features",
          "Contributed to codebase achieving 90%+ test coverage",
        ],
      },
    ],
  },
];

const PromotionBadge = () => (
  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.3,
    }}
    className="absolute -top-3 -right-3 z-10"
  >
    <div className="relative">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 flex items-center justify-center shadow-lg"
      >
        <TrendingUp size={20} className="text-white" />
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-pink-500 blur-md"
      />
    </div>
  </motion.div>
);

const PositionCard = ({
  position,
  index,
  companyIndex,
  isLatest,
}: {
  position: Position;
  index: number;
  companyIndex: number;
  isLatest: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={`relative ${index > 0 ? "mt-4" : ""}`}
    >
      {position.isPromotion && <PromotionBadge />}

      <div
        className={`relative bg-card/50 backdrop-blur border rounded-2xl p-6 transition-all duration-500 ${
          position.isPromotion
            ? "border-amber-500/50 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:border-amber-500/70"
            : "border-border/50 hover:border-violet-500/50 glow-hover"
        }`}
      >
        {position.isPromotion && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 rounded-t-2xl"
          />
        )}

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div className="flex items-start gap-3">
            {position.isPromotion && (
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.4,
                }}
                className="mt-1"
              >
                <Award size={20} className="text-amber-400" />
              </motion.div>
            )}
            <div>
              <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                {position.title}
              </h4>
              {position.isPromotion && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2 py-1 rounded-full inline-block mt-1"
                >
                  Promoted
                </motion.span>
              )}
            </div>
          </div>
          <span className="text-sm text-violet-400 font-mono whitespace-nowrap">
            {position.period}
          </span>
        </div>

        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {position.description}
        </p>

        <ul className="space-y-2">
          {position.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  delay: 0.1 * i + 0.2,
                }}
                className={`mt-1 ${position.isPromotion ? "text-amber-400" : "text-violet-500"}`}
              >
                ▹
              </motion.span>
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Connector line for multiple positions */}
      {!isLatest && (
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "1.5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-violet-500/50 to-transparent"
          style={{ top: "100%", zIndex: -1 }}
        />
      )}
    </motion.div>
  );
};

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

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main timeline line */}
            <div className="absolute left-0 md:left-8 h-full w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-fuchsia-500" />

            {experiences.map((company, companyIndex) => (
              <motion.div
                key={company.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: companyIndex * 0.2 }}
                className="relative mb-16 last:mb-0"
              >
                {/* Company header with timeline dot */}
                <div className="flex items-start gap-6 mb-6">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: companyIndex * 0.2 + 0.3,
                    }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 border-4 border-background flex items-center justify-center glow shadow-lg shadow-violet-500/20">
                      <Briefcase size={24} className="text-white" />
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      className="absolute inset-0 rounded-full bg-violet-500 blur-md"
                    />
                  </motion.div>

                  <div className="flex-1 pt-2">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: companyIndex * 0.2 + 0.4 }}
                      className="text-3xl font-bold text-violet-300 mb-1"
                    >
                      {company.company}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: companyIndex * 0.2 + 0.5 }}
                      className="text-sm text-muted-foreground font-mono"
                    >
                      {company.totalPeriod}
                    </motion.p>
                  </div>
                </div>

                {/* Positions */}
                <div className="ml-0 md:ml-24 space-y-0">
                  {company.positions.map((position, posIndex) => (
                    <PositionCard
                      key={posIndex}
                      position={position}
                      index={posIndex}
                      companyIndex={companyIndex}
                      isLatest={posIndex === company.positions.length - 1}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
