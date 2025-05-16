'use client'

import React from "react";
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating?: number;
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
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              {badgeText}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const stars = typeof t.rating === "number" ? t.rating : 5;
            return (
              <Card key={i} className="flex flex-col h-full relative overflow-hidden">
                <div className="absolute right-6 top-6 text-4xl font-serif text-muted-foreground/20">
                  <Quote size={32} />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
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
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{t.text}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
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
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Full Stack Engineer",
    text: "As someone who works with multiple languages daily, Vibe Code Friend has been a game-changer. It understands context across different files and provides suggestions that are actually helpful. The time I've saved on debugging alone has made it worth every penny.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5
  },
  {
    name: "Miguel Rodriguez",
    role: "Junior Developer",
    text: "Learning to code can be overwhelming, but Vibe Code Friend has made my journey so much smoother. It explains concepts clearly and helps me understand best practices. It's like having a mentor available 24/7.",
    avatar: "https://i.pravatar.cc/150?u=miguel",
    rating: 4
  }
]; 