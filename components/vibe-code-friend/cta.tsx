'use client'

import React from "react";
import { MoveRight, PhoneCall, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface VibeCodeCtaProps {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
      icon?: React.ReactNode;
    };
    secondary?: {
      text: string;
      url: string;
      icon?: React.ReactNode;
    };
  };
}

export function VibeCodeCta({
  heading = "Get in Touch with Vibe Code Friend",
  description = "Discover how our service can help you build better code, faster. Our team of experts is ready to assist with your development needs.",
  buttons = {
    primary: {
      text: "Book a Consultation",
      url: "/contact",
      icon: <MoveRight className="w-4 h-4" />,
    },
    secondary: {
      text: "Contact Us",
      url: "/contact",
      icon: <PhoneCall className="w-4 h-4" />,
    },
  },
}: VibeCodeCtaProps) {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-lg p-6 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Vibe Code Friend</Badge>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl md:text-5xl tracking-tighter font-semibold max-w-2xl mx-auto">
              {heading}
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            {buttons.secondary && (
              <Button className="gap-2" variant="outline" asChild>
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text} {buttons.secondary.icon}
                </a>
              </Button>
            )}
            {buttons.primary && (
              <Button className="gap-2" asChild>
                <a href={buttons.primary.url}>
                  {buttons.primary.text} {buttons.primary.icon}
                </a>
              </Button>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MessageSquare className="w-4 h-4" />
            <span>Usually responds within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
} 