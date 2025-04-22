'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { sendToWhatsApp } from '@/lib/form-handlers';

export function HeroSection() {
  const handleContactClick = () => {
    sendToWhatsApp({ type: 'Contact' });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">
                Starting at just $4/hr
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional <span className="gradient-text">Cold Calling</span>{' '}
              Team At Your Service
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Boost your sales with our expert team of fluent English-speaking
              cold callers. Specialized in real estate, solar, healthcare, and
              more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                onClick={handleContactClick}
                className="text-lg"
              >
                <Phone className="mr-2 h-5 w-5" /> Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleContactClick}
                className="text-lg"
              >
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-4">
              {[
                'Fluent English-Speaking Agents',
                'Dedicated Account Manager',
                'No Long-Term Contracts',
                'Pay Only for Active Calling Time',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3]">
                <img
                  src="https://voiso.com/wp-content/uploads/2025/03/sales-contact-center-hero.png"
                  alt="Professional call center team"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold gradient-text">98%</div>
                    <div className="text-sm text-muted-foreground">
                      Contact Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">15+</div>
                    <div className="text-sm text-muted-foreground">
                      Industries
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-float" />
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-float"
              style={{ animationDelay: '1s' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
