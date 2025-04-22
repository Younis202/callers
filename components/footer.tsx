'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Building2,
  Users,
  Clock,
  BarChart,
  Headset,
  Globe,
  Star
} from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from './animations/fade-in';
import { Button } from './ui/button';
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-6">
        <Link href="/" className="text-xl overflow-hidden">
          <Image
            src="https://ik.imagekit.io/pcet3dvcu/dailHit/a-logo-design-showcasing-the-name-dialhi_MU7dTYG2RzeBEpYqZMCgsA_gAZqzYp5SEuadseNH6ZJmw-Photoroom.png?updatedAt=1744910756586"
            alt={''}
            width={200}
            height={200}
          />
        </Link>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="h-9 w-9 rounded-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-primary" />
                Industries
              </h4>
              <ul className="space-y-3">
                {[
                  'Real Estate',
                  'Solar',
                  'Healthcare',
                  'Retail',
                  'Education',
                  'B2B Services'
                ].map((service) => (
                  <li key={service} className="text-muted-foreground hover:text-primary transition-colors">
                    <Link href={`/industries/${service.toLowerCase().replace(' ', '-')}`}>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <Star className="w-5 h-5 mr-2 text-primary" />
                Features
              </h4>
              <ul className="space-y-3">
                {[
                  { icon: Users, label: 'Professional Callers' },
                  { icon: Headset, label: 'Dedicated Support' },
                  { icon: BarChart, label: 'Real-Time Analytics' },
                  { icon: Clock, label: 'Flexible Scheduling' },
                  { icon: Globe, label: 'Nationwide Coverage' }
                ].map((feature) => (
                  <li key={feature.label} className="flex items-center text-muted-foreground">
                    <feature.icon className="h-4 w-4 mr-2 text-primary" />
                    {feature.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  Cairo, Egypt
                </li>
                <li>
                  <a
                    href="tel:(323)794-7221"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    +201013476272
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@elitecoldcallers.com"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    info@dialhit.com
                  </a>
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-lg bg-primary/10">
                <h5 className="font-medium text-foreground mb-2">Start Today</h5>
                <p className="text-sm text-muted-foreground mb-3">Get your free consultation and custom quote</p>
                <Button className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                © {new Date().getFullYear()} DialHit Cold Callers. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { href: '/privacy', label: 'Privacy Policy' },
                  { href: '/terms', label: 'Terms of Service' },
                  { href: '/faq', label: 'FAQ' }
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
