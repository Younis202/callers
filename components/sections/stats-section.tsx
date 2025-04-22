"use client";

import { motion } from "framer-motion";
import { Users, PhoneCall, Building2, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Active Clients",
    description: "Trusted by businesses worldwide"
  },
  {
    icon: PhoneCall,
    value: "1M+",
    label: "Calls Made",
    description: "Successfully completed calls"
  },
  {
    icon: Building2,
    value: "15+",
    label: "Industries",
    description: "Specialized experience"
  },
  {
    icon: Star,
    value: "98%",
    label: "Satisfaction",
    description: "Client satisfaction rate"
  }
];

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              
              <div className="text-3xl font-bold mb-2 gradient-text">
                {stat.value}
              </div>
              
              <div className="text-lg font-medium mb-2">
                {stat.label}
              </div>
              
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}