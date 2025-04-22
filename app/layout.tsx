import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'DialHit Cold Callers | Professional Outbound Sales Team',
  description: 'Professional cold calling services with fluent English-speaking agents. Specializing in real estate, solar, healthcare and more. Starting at $4/hr.',
  keywords: [
    'cold calling service',
    'outbound sales',
    'appointment setting',
    'lead generation',
    'real estate cold calling',
    'solar sales',
    'healthcare lead generation',
    'sales outsourcing',
    'virtual sales team',
    'professional cold callers'
  ],
  icons: {
    icon: 'https://ik.imagekit.io/pcet3dvcu/dailHit/a-modern-logo-design-featuring-the-text-_PpHAfluVTK6ttq1rjT5ysg_HneMdcufRqm8zIlSeB2jmg.jpeg?updatedAt=1744910602841',
    shortcut: 'https://ik.imagekit.io/pcet3dvcu/dailHit/a-modern-logo-design-featuring-the-text-_PpHAfluVTK6ttq1rjT5ysg_HneMdcufRqm8zIlSeB2jmg.jpeg?updatedAt=1744910602841',
    apple: 'https://ik.imagekit.io/pcet3dvcu/dailHit/a-modern-logo-design-featuring-the-text-_PpHAfluVTK6ttq1rjT5ysg_HneMdcufRqm8zIlSeB2jmg.jpeg?updatedAt=1744910602841',
    other: {
      rel: 'apple-touch-icon',
      url: 'https://ik.imagekit.io/pcet3dvcu/dailHit/a-modern-logo-design-featuring-the-text-_PpHAfluVTK6ttq1rjT5ysg_HneMdcufRqm8zIlSeB2jmg.jpeg?updatedAt=1744910602841',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://ik.imagekit.io/pcet3dvcu/dailHit/favicon.ico?updatedAt=1745365989867" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
