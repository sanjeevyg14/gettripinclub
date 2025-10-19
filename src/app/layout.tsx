
import type { Metadata } from 'next';
import { Bebas_Neue, Montserrat } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';
import ClientOnly from '@/components/ClientOnly';
import { cn } from '@/lib/utils';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';

export const metadata: Metadata = {
  title: 'GetrippinClub - Weekend. Road. Repeat.',
  description: 'Curated weekend getaways from Bangalore. Every Friday night, we hit the road — beaches, treks, waterfalls & good vibes.',
};

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-headline',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn("font-body bg-background text-foreground antialiased", bebasNeue.variable, montserrat.variable)}>
        <ClientOnly>
          <CustomCursor />
        </ClientOnly>
        {children}
        <WhatsAppFAB phoneNumber="919164290929" />
        <Toaster />
      </body>
    </html>
  );
}
