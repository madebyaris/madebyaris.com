'use client'

import React from "react";
import { MessageSquare, ArrowRight, CalendarClock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface VibeCodeCtaProps {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

export function VibeCodeCta({
  heading = "Get in Touch with Vibe Code Friend",
  description = "Discover how our service can help you build better code, faster. Our team of experts is ready to assist with your development needs.",
  buttons = {
    primary: {
      text: "Schedule Free Consultation",
      url: "/contact",
    },
    secondary: {
      text: "Send Email Inquiry",
      url: "/contact",
    },
  },
}: VibeCodeCtaProps) {
  return (
    <section id="contact" className="w-full py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_70%)]"></div>
      <div className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="flex flex-col text-center bg-gradient-to-br from-background to-muted/50 rounded-2xl p-8 lg:p-16 gap-8 items-center shadow-lg border border-border/30 backdrop-blur-sm">
          <div>
            <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/20">Vibe Code Friend</Badge>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold max-w-2xl mx-auto">
              {heading}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto justify-center">
            {buttons.secondary && (
              <Button size="lg" className="gap-2 text-base" variant="outline" asChild>
                <Link href={buttons.secondary.url}>
                  {buttons.secondary.text}
                </Link>
              </Button>
            )}
            {buttons.primary && (
              <Button size="lg" className="gap-2 text-base font-medium shadow-sm" asChild>
                <Link href={buttons.primary.url}>
                  <CalendarClock className="mr-2 h-4 w-4" />
                  {buttons.primary.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span>Usually responds within 24 hours</span>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mx-auto mt-4">
            <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg border border-border/30">
              <span className="font-semibold mb-1 text-xl">100%</span>
              <span className="text-muted-foreground text-sm">Satisfaction Guarantee</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg border border-border/30">
              <span className="font-semibold mb-1 text-xl">24/7</span>
              <span className="text-muted-foreground text-sm">Support Available</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg border border-border/30">
              <span className="font-semibold mb-1 text-xl">10+</span>
              <span className="text-muted-foreground text-sm">Years Experience</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg border border-border/30">
              <span className="font-semibold mb-1 text-xl">500+</span>
              <span className="text-muted-foreground text-sm">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 