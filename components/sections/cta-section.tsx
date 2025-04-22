"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Headset, BarChart as ChartBar, Clock, ArrowRight } from "lucide-react";
import { sendToWhatsApp } from "@/lib/form-handlers";

export function CtaSection() {
  const handleContactClick = () => {
    sendToWhatsApp({ type: "Contact" });
  };

  const features = [
    {
      icon: Phone,
      title: "Professional Callers",
      description: "Native English-speaking agents trained in your industry"
    },
    {
      icon: Headset,
      title: "Dedicated Support",
      description: "Your personal account manager ensures campaign success"
    },
    {
      icon: ChartBar,
      title: "Real-Time Analytics",
      description: "Detailed reporting and performance tracking"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Scale your team up or down as needed"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Ready to Boost Your Sales with Professional Cold Calling?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get started today with our risk-free trial and see how our expert cold calling team can help grow your business.
                </p>

                <div className="space-y-6 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  onClick={handleContactClick}
                  className="w-full sm:w-auto text-lg group"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                  alt="Professional call center team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm opacity-80">Support</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">98%</div>
                        <div className="text-sm opacity-80">Satisfaction</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">$4/hr</div>
                        <div className="text-sm opacity-80">Starting at</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}