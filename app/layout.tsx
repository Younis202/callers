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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
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
