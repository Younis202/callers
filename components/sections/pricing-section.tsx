"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react";
import { sendToWhatsApp } from "@/lib/form-handlers";

const plans = [
  {
    name: "Starter",
    price: "$4",
    unit: "per hour",
    description: "Perfect for small businesses looking to test cold calling",
    features: [
      "Fluent English-Speaking Agents",
      "Basic Call Scripts",
      "Lead List Management",
      "Daily Reporting",
      "Email Support",
    ],
    notIncluded: [
      "Dedicated Account Manager",
      "Custom CRM Integration",
      "Call Recording",
      "Advanced Analytics"
    ]
  },
  {
    name: "Professional",
    price: "$6",
    unit: "per hour",
    description: "Ideal for growing businesses needing dedicated support",
    features: [
      "Everything in Starter, plus:",
      "Dedicated Account Manager",
      "Custom Call Scripts",
      "Call Recording",
      "CRM Integration",
      "Priority Support",
      "Weekly Strategy Calls",
      "Performance Analytics"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "pricing",
    description: "For large-scale operations requiring full customization",
    features: [
      "Everything in Professional, plus:",
      "Multiple Dedicated Teams",
      "Custom Reporting Dashboard",
      "API Integration",
      "24/7 Priority Support",
      "Monthly Strategy Review",
      "Custom Training Programs",
      "White-Label Options"
    ]
  }
];

export function PricingSection() {
  const handleContactClick = () => {
    sendToWhatsApp({ type: "Contact" });
  };

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-muted-foreground mb-4"
          >
            PRICING
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Simple, Transparent Pricing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            No hidden fees or long-term contracts. Pay only for the hours worked.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card rounded-xl p-8 ${
                plan.highlighted 
                  ? "ring-2 ring-primary shadow-lg scale-105 md:scale-110" 
                  : "shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded?.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-muted-foreground">
                    <X className="h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full" 
                variant={plan.highlighted ? "default" : "outline"}
                onClick={handleContactClick}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}