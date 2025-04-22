"use client";

import { motion } from "framer-motion";
import { Phone, Headset, FileCheck, BarChart as ChartBar, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      icon: Phone,
      title: "Initial Consultation",
      description: "We discuss your business goals and design a customized cold calling strategy.",
      colorClass: "teal",
      badge: "Step 1",
      benefits: ["Strategy planning", "Target analysis", "Script development"],
      details: "Our team works closely with you to understand your business objectives, target audience, and desired outcomes. We develop customized call scripts and strategies tailored to your industry."
    },
    {
      icon: Headset,
      title: "Team Assignment",
      description: "Your dedicated team of professional cold callers is assigned and trained.",
      colorClass: "yellow",
      badge: "Step 2",
      benefits: ["Dedicated team", "Industry training", "Quality assurance"],
      details: "We assign and train your dedicated team of fluent English-speaking cold callers, ensuring they understand your industry, products, and communication requirements."
    },
    {
      icon: FileCheck,
      title: "Campaign Launch",
      description: "Your cold calling campaign begins with real-time monitoring and optimization.",
      colorClass: "teal",
      badge: "Step 3",
      benefits: ["Real-time tracking", "Performance monitoring", "Daily reporting"],
      details: "We launch your campaign with comprehensive tracking and monitoring systems in place. You receive detailed reports and insights about campaign performance."
    },
    {
      icon: ChartBar,
      title: "Optimization & Growth",
      description: "Continuous improvement through data analysis and strategy refinement.",
      colorClass: "yellow",
      badge: "Step 4",
      benefits: ["Data analysis", "Strategy refinement", "Scale up"],
      details: "We continuously analyze campaign data to optimize performance and scale your results. Regular strategy reviews ensure maximum ROI."
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="badge-yellow mb-4">HOW IT WORKS</Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Our Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-400">Process</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with professional cold calling services in four easy steps
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className={cn(
                "bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full transition-all duration-500",
                "hover:shadow-xl relative overflow-hidden group",
                "before:absolute before:inset-0 before:bg-gradient-to-b",
                step.colorClass === "teal" 
                  ? "before:from-teal-50/0 before:to-teal-50/50 hover:border-teal-200/50" 
                  : "before:from-yellow-50/0 before:to-yellow-50/50 hover:border-yellow-200/50",
                "before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
              )}>
                {/* Step badge */}
                <div className="absolute -top-0 -right-0 w-24 h-24">
                  <div className={cn(
                    "absolute top-0 right-0 w-full h-full transform rotate-45 translate-x-8 -translate-y-8 transition-all duration-500",
                    step.colorClass === "teal" 
                      ? "bg-teal-100/50 group-hover:bg-teal-100/80" 
                      : "bg-yellow-100/50 group-hover:bg-yellow-100/80"
                  )} />
                  <div className="absolute top-4 right-4 text-xs font-bold text-gray-600">
                    {step.badge}
                  </div>
                </div>
                
                {/* Icon */}
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-500",
                  step.colorClass === "teal" 
                    ? "bg-teal-100/70 text-teal-600 group-hover:bg-teal-200 group-hover:text-teal-700" 
                    : "bg-yellow-100/70 text-yellow-600 group-hover:bg-yellow-200 group-hover:text-yellow-700"
                )}>
                  <step.icon className="h-5 w-5" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                
                {/* Benefits */}
                <ul className="space-y-2 mb-4">
                  {step.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className={cn(
                        "h-4 w-4 mr-2 flex-shrink-0",
                        step.colorClass === 'teal' 
                          ? "text-teal-500" 
                          : "text-yellow-500"
                      )} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                {/* Expandable details */}
                <div className={cn(
                  "overflow-hidden transition-all duration-500",
                  activeStep === index 
                    ? "max-h-40 opacity-100 mt-2" 
                    : "max-h-0 opacity-0"
                )}>
                  <div className="text-sm text-gray-500 pt-3 border-t border-gray-100">
                    {step.details}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
            <span className="relative z-10">Start Your Cold Calling Campaign</span>
            <ChevronRight className="ml-2 h-5 w-5 relative z-10" />
            <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          <p className="mt-4 text-gray-500 text-sm">Join hundreds of businesses that trust us with their cold calling needs</p>
        </motion.div>
      </div>
      
      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .badge-yellow {
          background: linear-gradient(to right, rgba(234, 179, 8, 0.1), rgba(245, 158, 11, 0.1));
          color: #d97706;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid rgba(234, 179, 8, 0.2);
        }
      `}</style>
    </section>
  );
}