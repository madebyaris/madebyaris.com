'use client';

import * as React from "react";
import { Code, Laptop, MessageCircle, DollarSign, Timer } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

interface VibeCodeFAQProps {
  className?: string;
  timestamp?: string;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How does Vibe Code Friend work?",
    answer: "Vibe Code Friend is an AI-powered coding assistant that helps you write, debug, and optimize your code. Simply share your code or describe what you're trying to build, and our AI will provide suggestions, fix errors, and help you implement best practices.",
    icon: <MessageCircle className="h-5 w-5 text-primary" />,
  },
  {
    id: 2,
    question: "What programming languages and technologies are supported?",
    answer: "We support a wide range of languages including JavaScript, TypeScript, Python, Java, C#, Ruby, Go, PHP, and more. Our service also covers frameworks like React, Vue, Angular, Next.js, Express, Django, and many others. If you're working with a specific technology, just ask and we'll let you know if we can help!",
    icon: <Code className="h-5 w-5 text-primary" />,
  },
  {
    id: 3,
    question: "What are the pricing options for Vibe Code Friend?",
    answer: "We offer flexible pricing plans to suit different needs. Our Free tier gives you 50 queries per month. The Pro plan ($19/month) includes 500 queries and priority support. For teams, our Enterprise plan offers unlimited queries, custom integrations, and dedicated support. All paid plans come with a 14-day free trial.",
    icon: <DollarSign className="h-5 w-5 text-primary" />,
  },
  {
    id: 4,
    question: "Is Vibe Code Friend available 24/7?",
    answer: "Yes! Our service is available around the clock, so you can get coding help whenever inspiration strikes. Whether you're coding late at night or early in the morning, Vibe Code Friend is ready to assist you with your programming challenges.",
    icon: <Timer className="h-5 w-5 text-primary" />,
  },
  {
    id: 5,
    question: "Can Vibe Code Friend help with my specific project?",
    answer: "Absolutely! Whether you're building a web app, mobile application, data analysis tool, or any other software project, Vibe Code Friend can help. Our AI is trained on a diverse range of projects and can adapt to your specific needs. Just describe your project requirements, and we'll provide tailored assistance.",
    icon: <Laptop className="h-5 w-5 text-primary" />,
  },
];

export function VibeCodeFAQ({
  className,
  timestamp = "Last updated: June 2024",
}: VibeCodeFAQProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="flex gap-8 flex-col">
            <div>
              <Badge variant="outline" className="px-4 py-1.5">FAQ</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h2 className="text-3xl md:text-4xl tracking-tight max-w-xl font-semibold">
                Frequently Asked Questions
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
                Everything you need to know about Vibe Code Friend. Can&apos;t find the answer you&apos;re looking for? Feel free to <a href="/contact" className="text-primary hover:underline">contact our support team</a>.
              </p>
            </div>
            {timestamp && (
              <div className="text-sm text-muted-foreground/70 flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                {timestamp}
              </div>
            )}
          </div>
          
          <Accordion
            type="single"
            collapsible
            value={openItem || ""}
            onValueChange={(value) => setOpenItem(value)}
            className={`bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-sm ${className}`}
          >
            {faqData.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id.toString()}
                className="border-b border-border/50 last:border-0"
              >
                <AccordionTrigger className="py-5 flex items-center gap-3 hover:no-underline">
                  {item.icon && <span className="flex-shrink-0 bg-primary/10 p-2 rounded-full">{item.icon}</span>}
                  <span className="font-medium text-left">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-4 pt-1 text-muted-foreground pl-11">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 