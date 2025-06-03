'use client'

import React from "react";
import { Code, Terminal, Server, Sparkles, MousePointer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  title: string;
  description: string;
}

function Hero({
  title = "Your AI-Powered Coding Companion",
  description = "Get expert help with AI tools, code fixes, server setup, and infrastructure architecture. Elevate your development workflow with personalized guidance.",
}: HeroProps) {
  return (
    <div className="w-full py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.1),transparent_60%)]"></div>
      <div className="absolute w-[800px] h-[800px] -right-40 -top-40 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute w-[600px] h-[600px] -left-20 -bottom-20 bg-emerald-200/10 dark:bg-emerald-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          <div className="flex gap-8 flex-col">
            <div>
              <Badge variant="outline" className="text-sm font-medium px-4 py-1.5 border-primary/20">AI Development Partner</Badge>
            </div>
            <div className="flex gap-6 flex-col">
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                {title}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-md">
                {description}
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Get Started
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="#services">
                    View Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 md:gap-8 h-full relative">
            <div className="col-span-1 space-y-4 mt-12 relative z-10">
              <div className="bg-muted/80 shadow-lg rounded-xl aspect-square flex items-center justify-center transform transition-transform hover:scale-105 duration-300 border border-border/50 backdrop-blur-sm">
                <Code className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-muted/80 shadow-lg rounded-xl aspect-square flex items-center justify-center transform transition-transform hover:scale-105 duration-300 border border-border/50 backdrop-blur-sm">
                <MousePointer className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="col-span-1 space-y-4 relative z-10">
              <div className="bg-muted/80 shadow-lg rounded-xl h-full flex items-center justify-center transform transition-transform hover:scale-105 duration-300 border border-border/50 backdrop-blur-sm">
                <Terminal className="w-14 h-14 text-primary" />
              </div>
            </div>
            <div className="col-span-1 space-y-4 mt-20 relative z-10">
              <div className="bg-muted/80 shadow-lg rounded-xl aspect-square flex items-center justify-center transform transition-transform hover:scale-105 duration-300 border border-border/50 backdrop-blur-sm">
                <Server className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-muted/80 shadow-lg rounded-xl aspect-square flex items-center justify-center transform transition-transform hover:scale-105 duration-300 border border-border/50 backdrop-blur-sm">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl transform rotate-12 scale-110"></div>
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
    />
  );
} 