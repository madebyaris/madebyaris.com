'use client'

import React from "react";
import { Code, Terminal, Server, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
}

function Hero({
  title = "Your AI-Powered Coding Companion",
  description = "Get expert help with AI tools, code fixes, server setup, and infrastructure architecture. Elevate your development workflow with personalized guidance.",
  ctaText = "Get Started",
  ctaUrl = "#",
}: HeroProps) {
  return (
    <div className="w-full py-20 lg:py-40 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline" className="text-sm">AI Development Partner</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                {title}
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                {description}
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href={ctaUrl}>
                  {ctaText} <MoveRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted rounded-md aspect-square flex items-center justify-center">
              <Code className="w-12 h-12 text-primary" />
            </div>
            <div className="bg-muted rounded-md row-span-2 flex items-center justify-center">
              <Terminal className="w-16 h-16 text-primary" />
            </div>
            <div className="bg-muted rounded-md aspect-square flex items-center justify-center">
              <Server className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VibeCodeFriendHero() {
  return (
    <Hero
      title="Vibe Code Friend"
      description="Your AI-powered coding companion. We help developers master AI tools like Cursor, fix stubborn bugs, set up reliable servers, and architect scalable infrastructure."
      ctaText="Boost Your Dev Skills"
      ctaUrl="/contact"
    />
  );
} 