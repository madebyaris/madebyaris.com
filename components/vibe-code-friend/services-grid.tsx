'use client'

import React, { ReactNode } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Wrench, Server, FileCode, Database } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  hasDetailPage: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
  hasDetailPage,
}) => {
  return (
    <Card className="group relative overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            {icon}
          </div>
          {hasDetailPage && (
            <Badge variant="secondary" className="text-xs">
              Detailed Guide
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow pb-4">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0">
        {hasDetailPage ? (
          <Button asChild variant="default" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Link href={link}>
              Learn More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        ) : (
          <Button asChild variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
            <Link href={link}>
              Get Started
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

interface ServiceGridProps {
  title?: string;
  description?: string;
}

export const ServiceGrid: React.FC<ServiceGridProps> = () => {
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
      link: "/contact?service=infrastructure",
      hasDetailPage: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
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
  );
}; 