'use client'

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Code, Database, FileCode, Server, Wrench } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <Card className="group shadow-black-950/5 transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-3">
        <CardDecorator>{icon}</CardDecorator>
        <h3 className="mt-6 font-medium">{title}</h3>
      </CardHeader>
      <CardContent className="flex flex-col h-full">
        <p className="text-sm text-muted-foreground flex-grow">{description}</p>
        <div className="mt-4 text-sm font-medium flex items-center text-primary">
          <a href={link} className="inline-flex items-center">
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">
      {children}
    </div>
  </div>
);

interface ServiceGridProps {
  title?: string;
  description?: string;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  title = "Vibe Code Friend Services",
  description = "Expert assistance to help you code better, faster, and with confidence",
}) => {
  const services: ServiceCardProps[] = [
    {
      icon: <Code className="size-6" aria-hidden />,
      title: "AI IDE Tutoring",
      description: "Get real-time guidance and explanations as you code, with personalized assistance directly in your IDE.",
      link: "/services/vibe-code-friend/ai-ide-tutoring",
    },
    {
      icon: <Wrench className="size-6" aria-hidden />,
      title: "Code Fixing",
      description: "Quick and efficient debugging and error resolution for your code, with clear explanations of the solutions.",
      link: "/services/vibe-code-friend/code-fixing",
    },
    {
      icon: <Server className="size-6" aria-hidden />,
      title: "Server Setup",
      description: "Expert configuration and deployment of servers, ensuring optimal performance and security for your applications.",
      link: "/services/vibe-code-friend/server-setup",
    },
    {
      icon: <FileCode className="size-6" aria-hidden />,
      title: "Project Restructuring",
      description: "Comprehensive reorganization of your codebase for improved maintainability, scalability, and developer experience.",
      link: "/services/vibe-code-friend/project-restructuring",
    },
    {
      icon: <Database className="size-6" aria-hidden />,
      title: "Infrastructure Architecture",
      description: "Strategic design and implementation of robust, scalable infrastructure tailored to your project requirements.",
      link: "/services/vibe-code-friend/infrastructure-architecture",
    },
  ];

  return (
    <section className="bg-muted/50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{title}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>
        <div className="@min-4xl:grid-cols-3 @md:grid-cols-2 mx-auto mt-8 grid gap-6 md:mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 