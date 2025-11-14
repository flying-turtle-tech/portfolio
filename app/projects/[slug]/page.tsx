import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// This would typically come from a database or CMS
// For now, we'll use static data
const projects = {
  "ai-powered-ios-app": {
    title: "AI-Powered iOS App",
    description: "An intelligent iOS application that leverages machine learning",
    date: "2024",
  },
  "collaboration-platform": {
    title: "Real-Time Collaboration Platform",
    description: "A modern web application enabling seamless real-time collaboration",
    date: "2023",
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link href="/#projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" size={16} />
            Back to Projects
          </Button>
        </Link>

        <article className="prose prose-invert prose-violet max-w-none">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            {project.description}
          </p>

          <div className="rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 aspect-video mb-8 flex items-center justify-center">
            <div className="text-6xl font-bold text-white/10">Preview</div>
          </div>

          <div className="space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p>
              This project demonstrates the integration of cutting-edge AI
              technologies with modern iOS development practices. Built with
              Swift and SwiftUI, it showcases best practices in mobile
              architecture and user experience design.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
            <ul>
              <li>Machine learning-powered recommendations</li>
              <li>Intuitive and accessible user interface</li>
              <li>Real-time data synchronization</li>
              <li>Offline-first architecture</li>
              <li>Advanced analytics and insights</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground">
              Technical Implementation
            </h2>
            <p>
              The application is built using a modular architecture with clear
              separation of concerns. Core ML models are integrated for on-device
              inference, ensuring user privacy while maintaining high performance.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Challenges</h2>
            <p>
              One of the main challenges was optimizing the ML models for
              on-device inference without compromising accuracy. We implemented
              model quantization and pruning techniques to reduce the model size
              by 70% while maintaining 95% of the original accuracy.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Results</h2>
            <p>
              The application achieved exceptional user satisfaction scores and
              was featured in the App Store. It demonstrates how AI can enhance
              mobile experiences while respecting user privacy and device
              resources.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
