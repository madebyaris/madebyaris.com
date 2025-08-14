'use client'

import React from "react";
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating?: number;
  verified?: boolean;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  title = "Developers love Vibe Code Friend",
  subtitle = "See what our users have to say about their experience.",
  badgeText = "Testimonials",
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,119,198,0.1),transparent_60%)]"></div>
      <div className="absolute w-[800px] h-[800px] -left-40 top-[20%] bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1.5">{badgeText}</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3 md:grid-cols-2">
          {testimonials.map((t, i) => {
            const stars = typeof t.rating === "number" ? t.rating : 5;
            return (
              <Card key={`testimonial-${t.name.replace(/\s+/g, '-').toLowerCase()}-${i}`} className="flex flex-col h-full relative overflow-hidden backdrop-blur-sm bg-background/70 border-border/60 hover:shadow-lg transition-all duration-300">
                <div className="absolute right-6 top-6 text-4xl font-serif text-primary/10">
                  <Quote size={32} />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={`star-${t.name.replace(/\s+/g, '-').toLowerCase()}-${idx}`}
                          className={`h-4 w-4 ${
                            idx < stars
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground/30 fill-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-pretty relative z-10">{t.text}</p>
                </CardContent>
                <CardFooter className="border-t border-border/30 pt-4 mt-auto">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <p className="text-sm font-medium">{t.name}</p>
                        {t.verified && (
                          <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const vibeCodeTestimonials: Testimonial[] = [
  {
    name: "Alex Chen",
    role: "Senior Frontend Developer",
    text: "Vibe Code Friend has completely transformed my workflow. The AI suggestions are incredibly accurate and have helped me solve complex problems in a fraction of the time. It feels like having a senior developer looking over my shoulder at all times.",
    avatar: "https://i.pravatar.cc/150?u=alex",
    rating: 5,
    verified: true
  },
  {
    name: "Sarah Johnson",
    role: "Full Stack Engineer",
    text: "As someone who works with multiple languages daily, Vibe Code Friend has been a game-changer. It understands context across different files and provides suggestions that are actually helpful. The time I've saved on debugging alone has made it worth every penny.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    verified: true
  },
  {
    name: "Miguel Rodriguez",
    role: "Junior Developer",
    text: "Learning to code can be overwhelming, but Vibe Code Friend has made my journey so much smoother. It explains concepts clearly and helps me understand best practices. It's like having a mentor available 24/7.",
    avatar: "https://i.pravatar.cc/150?u=miguel",
    rating: 4,
    verified: true
  }
]; 