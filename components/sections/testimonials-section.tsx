"use client";

import { motion } from "framer-motion";
import { Star, Building2, Phone, Target } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "Real Estate Agent",
    company: "Smith Properties",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: "The quality of leads we get from Elite Cold Callers is exceptional. Our conversion rates have increased by 40% since we started working with them.",
    rating: 5,
    stats: {
      calls: "500+",
      appointments: "50+",
      conversion: "40%"
    }
  },
  {
    name: "Sarah Johnson",
    role: "Sales Director",
    company: "SolarTech Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: "Their cold calling team is professional and well-trained. They represent our brand perfectly and have helped us scale our solar installations significantly.",
    rating: 5,
    stats: {
      calls: "1000+",
      appointments: "120+",
      conversion: "35%"
    }
  },
  {
    name: "Michael Chen",
    role: "Marketing Manager",
    company: "HealthCare Plus",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: "The attention to detail and HIPAA compliance of their healthcare calling team is impressive. They've helped us grow our patient base consistently.",
    rating: 5,
    stats: {
      calls: "750+",
      appointments: "80+",
      conversion: "38%"
    }
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-muted-foreground mb-4"
          >
            SUCCESS STORIES
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Real Results from Real Clients
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            See how our professional cold calling services have helped businesses grow
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6">
                "{testimonial.content}"
              </blockquote>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-sm font-medium text-primary mb-1">
                    <Phone className="h-4 w-4" />
                    <span>Calls</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{testimonial.stats.calls}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-sm font-medium text-primary mb-1">
                    <Building2 className="h-4 w-4" />
                    <span>Meetings</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{testimonial.stats.appointments}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-sm font-medium text-primary mb-1">
                    <Target className="h-4 w-4" />
                    <span>Conv. Rate</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{testimonial.stats.conversion}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}