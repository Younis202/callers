"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Calendar, 
  LineChart, 
  Headphones, 
  Shield, 
  Clock,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendToWhatsApp } from "@/lib/form-handlers";

const benefits = [
  {
    icon: Users,
    title: "Fluent English Speakers",
    description: "Native-level English proficiency ensures clear, professional communication with your prospects.",
    features: [
      "Native-level English proficiency",
      "Clear pronunciation and communication",
      "Professional phone etiquette"
    ]
  },
  {
    icon: Calendar,
    title: "Appointment Setting",
    description: "Our team expertly qualifies leads and sets appointments with decision-makers.",
    features: [
      "Calendar integration",
      "Real-time appointment booking",
      "Follow-up reminders"
    ]
  },
  {
    icon: LineChart,
    title: "Performance Tracking",
    description: "Detailed analytics and reporting to measure campaign success and ROI.",
    features: [
      "Real-time performance metrics",
      "Conversion tracking",
      "Call recording and analysis"
    ]
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Your personal account manager ensures smooth operations and campaign success.",
    features: [
      "24/7 account management",
      "Campaign optimization",
      "Regular performance reviews"
    ]
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control and call monitoring to maintain high standards.",
    features: [
      "Call quality monitoring",
      "Regular agent training",
      "Performance feedback"
    ]
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Scale your calling team up or down based on your needs, with no long-term contracts.",
    features: [
      "Flexible hours",
      "No minimum commitments",
      "Easy team scaling"
    ]
  }
];

export function BenefitsSection() {
  const handleContactClick = () => {
    sendToWhatsApp({ type: "Contact" });
  };

  return (
    <section id="benefits" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-muted-foreground mb-4"
          >
            WHY CHOOSE US
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Benefits of Working With Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Get a professional cold calling team that delivers results and scales with your business
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground mb-4">{benefit.description}</p>
              
              <div className="space-y-2">
                {benefit.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={handleContactClick} className="bg-primary hover:bg-primary/90">
            Start Your Risk-Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}