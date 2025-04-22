"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Sun, 
  Heart, 
  ShoppingBag, 
  GraduationCap, 
  Briefcase,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendToWhatsApp } from "@/lib/form-handlers";

const services = [
  {
    icon: Building2,
    title: "Real Estate",
    description: "Generate qualified leads for residential and commercial properties. Our agents are trained in real estate terminology and objection handling.",
    color: "blue" as const
  },
  {
    icon: Sun,
    title: "Solar",
    description: "Connect with homeowners interested in solar installations. We pre-qualify leads based on your specific criteria.",
    color: "yellow" as const
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Book appointments for medical practices and healthcare services. HIPAA-compliant calling process.",
    color: "red" as const
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Drive sales for your retail business through targeted outbound calling campaigns.",
    color: "green" as const
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Reach potential students and parents for educational institutions and programs.",
    color: "purple" as const
  },
  {
    icon: Briefcase,
    title: "B2B",
    description: "Generate high-quality B2B leads and set appointments with decision-makers.",
    color: "orange" as const
  }
];

const colorVariants = {
  blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  yellow: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400",
  red: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
  green: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
  purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
  orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
} as const;

export function ServicesSection() {
  const handleContactClick = () => {
    sendToWhatsApp({ type: "Contact" });
  };

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-muted-foreground mb-4"
          >
            OUR EXPERTISE
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Industries We Serve
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Our specialized teams are trained in multiple industries, ensuring expert 
            communication and high conversion rates for your specific market.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-lg ${colorVariants[service.color]} flex items-center justify-center mb-4`}>
                <service.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <Button variant="ghost" size="sm" onClick={handleContactClick} className="group">
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={handleContactClick}>
            Get Started With Your Industry
          </Button>
        </div>
      </div>
    </section>
  );
}