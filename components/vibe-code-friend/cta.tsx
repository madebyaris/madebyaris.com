'use client'

import React from "react";
import { MessageSquare, ArrowRight, CalendarClock, CheckCircle } from "lucide-react";
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
  heading = "Ready to Transform Your Development Workflow?",
  description = "Join hundreds of developers who have accelerated their coding journey with AI-powered assistance. Get personalized guidance, real-time support, and expert mentorship.",
  buttons = {
    primary: {
      text: "Schedule Free Consultation",
      url: "/contact",
    },
    secondary: {
      text: "Explore Services",
      url: "/services",
    },
  },
}: VibeCodeCtaProps) {
  return (
    <div className="relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_70%)]"></div>
      <div className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-2xl p-8 lg:p-16 gap-8 items-center shadow-lg border border-border/30 backdrop-blur-sm">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/20 mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              Vibe Code Friend
            </Badge>
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold mb-6">
              {heading}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto justify-center mb-8">
            {buttons.secondary && (
              <Button size="lg" className="gap-2 text-base" variant="wp-secondary" asChild>
                <Link href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            )}
            {buttons.primary && (
              <Button size="lg" className="gap-2 text-base font-medium shadow-lg hover:shadow-xl" variant="wp-primary" asChild>
                <Link href={buttons.primary.url}>
                  <CalendarClock className="w-4 h-4" />
                  {buttons.primary.text}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Usually responds within 24 hours</span>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white/80 dark:bg-wp-navy/30 backdrop-blur-sm rounded-xl border border-wp-blue/20 hover:scale-105 transition-all duration-300">
              <span className="font-bold mb-1 text-2xl text-wp-blue">100%</span>
              <span className="text-muted-foreground text-sm text-center">Satisfaction Guarantee</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/80 dark:bg-wp-navy/30 backdrop-blur-sm rounded-xl border border-wp-sage/20 hover:scale-105 transition-all duration-300">
              <span className="font-bold mb-1 text-2xl text-wp-sage">24/7</span>
              <span className="text-muted-foreground text-sm text-center">Support Available</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/80 dark:bg-wp-navy/30 backdrop-blur-sm rounded-xl border border-wp-gold/20 hover:scale-105 transition-all duration-300">
              <span className="font-bold mb-1 text-2xl text-wp-gold">10+</span>
              <span className="text-muted-foreground text-sm text-center">Years Experience</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/80 dark:bg-wp-navy/30 backdrop-blur-sm rounded-xl border border-wp-navy/20 hover:scale-105 transition-all duration-300">
              <span className="font-bold mb-1 text-2xl text-wp-navy dark:text-wp-navy-foreground">500+</span>
              <span className="text-muted-foreground text-sm text-center">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 