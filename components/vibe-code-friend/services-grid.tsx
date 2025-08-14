'use client'

import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { ArrowRight, Code, Database, FileCode, Server, Wrench, Mail, ExternalLink } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  hasDetailPage?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, hasDetailPage }) => {
  return (
    <Card className="group relative overflow-hidden border-border/40 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-3 relative">
        <CardDecorator>{icon}</CardDecorator>
        <h3 className="mt-6 font-medium text-xl">{title}</h3>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex pt-6 mt-auto">
        {hasDetailPage ? (
          <Button className="w-full justify-between group-hover:translate-y-[-2px] transition-transform" asChild>
            <Link href={link}>
              <span className="flex items-center"><ExternalLink className="mr-2 h-4 w-4" /> View Full Details</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        ) : (
          <Button className="w-full justify-between group-hover:translate-y-[-2px] transition-transform" asChild>
            <Link href={link}>
              <span className="flex items-center"><Mail className="mr-2 h-4 w-4" /> Request Service</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        )}
      </CardFooter>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
    </Card>
  );
};

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden="true"
    className="relative mx-auto w-14 h-14 mb-2 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:8px_8px] opacity-10" />
    <div className="bg-background absolute inset-0 m-auto flex w-10 h-10 items-center justify-center border-t border-l text-primary">
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
      icon: <Code className="size-6" aria-hidden="true" />,
      title: "AI IDE Tutoring",
      description: "Get real-time guidance and explanations as you code, with personalized assistance directly in your IDE.",
      link: "/services/vibe-code-friend/ai-ide-tutoring",
      hasDetailPage: true
    },
    {
      icon: <Wrench className="size-6" aria-hidden="true" />,
      title: "Code Fixing",
      description: "Quick and efficient debugging and error resolution for your code, with clear explanations of the solutions.",
      link: "/services/vibe-code-friend/code-fixing",
      hasDetailPage: true
    },
    {
      icon: <Server className="size-6" aria-hidden="true" />,
      title: "Server Setup",
      description: "Expert configuration and deployment of servers, ensuring optimal performance and security for your applications.",
      link: "/contact?service=server-setup",
      hasDetailPage: false
    },
    {
      icon: <FileCode className="size-6" aria-hidden="true" />,
      title: "Project Restructuring",
      description: "Comprehensive reorganization of your codebase for improved maintainability, scalability, and developer experience.",
      link: "/contact?service=project-restructuring",
      hasDetailPage: false
    },
    {
      icon: <Database className="size-6" aria-hidden="true" />,
      title: "Infrastructure Architecture",
      description: "Strategic design and implementation of robust, scalable infrastructure tailored to your project requirements.",
      link: "/contact?service=infrastructure-architecture",
      hasDetailPage: false
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1.5">Our Services</Badge>
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">{description}</p>
          <Button size="lg" className="gap-2 mt-2" asChild>
            <Link href="/contact">
              Get Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={`service-${service.title.replace(/\s+/g, '-').toLowerCase()}`}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              hasDetailPage={service.hasDetailPage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 