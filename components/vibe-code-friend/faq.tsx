'use client';

import * as React from "react";
import { Code, Laptop, MessageCircle, DollarSign, Clock } from "lucide-react";
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
    icon: <Clock className="h-5 w-5 text-primary" />,
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
  timestamp = "Last updated: June 2023",
}: VibeCodeFAQProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <section className="w-full py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-bold">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  Everything you need to know about Vibe Code Friend. Can&apos;t find the answer you&apos;re looking for? Feel free to contact our support team.
                </p>
              </div>
              {timestamp && (
                <div className="text-sm text-muted-foreground">{timestamp}</div>
              )}
            </div>
          </div>
          
          <Accordion
            type="single"
            collapsible
            value={openItem || ""}
            onValueChange={(value) => setOpenItem(value)}
            className={className}
          >
            {faqData.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id.toString()}
                className="border-b border-border"
              >
                <AccordionTrigger className="py-6 flex items-center gap-3">
                  {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                  <span className="font-medium text-left">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-4 pt-2 text-muted-foreground">
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