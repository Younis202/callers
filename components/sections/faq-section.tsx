"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does your service cost?",
    answer: "Our service starts at $4 per hour for our Starter plan. We offer flexible pricing based on your needs and volume. There are no hidden fees or long-term contracts required."
  },
  {
    question: "What industries do you serve?",
    answer: "We specialize in multiple industries including real estate, solar, healthcare, retail, education, and B2B services. Our agents are trained specifically for your industry's terminology and requirements."
  },
  {
    question: "How do you ensure call quality?",
    answer: "We maintain high standards through rigorous training, call monitoring, regular quality assessments, and detailed performance analytics. All our agents are fluent English speakers with professional phone etiquette."
  },
  {
    question: "Can I scale my calling team up or down?",
    answer: "Yes! Our service is completely flexible. You can adjust your calling team size based on your needs, with no minimum commitment required. This makes it perfect for seasonal campaigns or varying call volumes."
  },
  {
    question: "How do you handle lead data and reporting?",
    answer: "We provide detailed daily reports of all calling activities, including number of calls made, conversations had, and appointments set. We can integrate with your CRM system and ensure all data handling is secure and compliant."
  },
  {
    question: "What kind of support do you provide?",
    answer: "Each client is assigned a dedicated account manager who oversees your campaign and provides regular updates. We offer email and phone support, with priority support available for Professional and Enterprise plans."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-muted-foreground mb-4"
          >
            FAQ
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about our cold calling services
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}