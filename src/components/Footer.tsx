
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { Instagram, Youtube, Linkedin, Mountain, Compass, Backpack, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import * as Icons from '@/components/icons';

const socialLinks = [
  { href: '#', label: 'Instagram', icon: Icons.Instagram },
  { href: '#', label: 'YouTube', icon: Icons.Youtube },
  { href: '#', label: 'LinkedIn', icon: Icons.Linkedin },
];

const mainLinks = [
  { href: '/trips', label: 'Trips' },
  { href: '/#why-us', label: 'About Us' },
  { href: '/#booking', label: 'Contact Us' },
];

const legalLinks = [
    { href: '/terms-and-conditions', label: 'Terms & Conditions' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
]

const WhatsAppIcon = ({className}: {className?: string}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn("text-white", className)}>
       <path d="M16.75 13.96c.25.13.43.2.5.25.13.06.16.19.12.31-.03.13-.25.44-.5.75-.25.31-.5.56-.88.75-.38.19-.75.25-1.19.12-.44-.13-1.5-.56-2.69-1.69-1.19-1.12-1.94-2.5-2.19-2.94-.25-.44-.06-.75.12-1 .13-.19.31-.25.44-.25.13 0 .25-.06.38.19.12.25.43.88.5.94.06.06.12.13.03.25-.09.12-.13.19-.25.31-.12.13-.25.25-.19.44.06.19.31.56.81 1.06.5.5 1.13.81 1.31.88.19.06.31.03.44-.09.13-.12.25-.25.31-.31.06-.06.13-.13.25-.06Z M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm0 18.13a8.13 8.13 0 1 1 8.13-8.13A8.14 8.14 0 0 1 12 20.13Z"/>
    </svg>
)

export const Footer = () => {

  return (
    <footer className="bg-secondary text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Branding Section */}
            <div className='md:col-span-4 space-y-4'>
                 <Link href="/">
                    <Logo className="h-8 w-auto" />
                </Link>
                <p className='text-muted-foreground'>Weekend • Road • Repeat</p>
                 <div className='flex items-center gap-2 text-sm text-muted-foreground font-semibold'>
                    <Mountain className='w-4 h-4 text-primary' />
                    <Compass className='w-4 h-4 text-primary' />
                    <Backpack className='w-4 h-4 text-primary' />
                </div>
            </div>

            {/* Quick Links */}
            <div className='md:col-span-2'>
                <h3 className="font-headline text-lg uppercase tracking-wider">Quick Links</h3>
                 <ul className="mt-4 space-y-2">
                    {mainLinks.map((link) => (
                        <li key={link.label}>
                        <Link
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Social & Contact */}
            <div className='md:col-span-3'>
                 <h3 className="font-headline text-lg uppercase tracking-wider">Get in Touch</h3>
                 <ul className="mt-4 space-y-2">
                    <li>
                        <a
                        href="mailto:Contact@getrippinclub.com"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                        >
                         <Send className="w-4 h-4" /> Contact@getrippinclub.com
                        </a>
                    </li>
                    <li>
                         <a
                        href="https://wa.me/919164290929"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                        >
                        <WhatsAppIcon className="w-4 h-4 text-primary" /> +91 9164290929
                        </a>
                    </li>
                 </ul>
                 <div className="flex gap-1 mt-4">
                    {socialLinks.map((link) => (
                        <Button
                        key={link.label}
                        asChild
                        variant="ghost"
                        size="icon"
                        className='text-muted-foreground hover:bg-accent/20 hover:text-accent transform hover:-translate-y-1 transition-all duration-300'
                        >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                        >
                            <link.icon className="h-5 w-5" />
                        </a>
                        </Button>
                    ))}
                </div>
            </div>

            {/* Travonex Branding */}
            <div className='md:col-span-3 text-right md:text-right space-y-2 self-end'>
                 <p className="text-sm font-semibold text-muted-foreground">Made for explorers. Backed by</p>
                 <a href="https://travonex.com" target="_blank" rel="noopener noreferrer" className="font-headline text-2xl tracking-wider hover:text-primary transition-colors duration-300">Travonex 🧭</a>
                 <p className="text-xs text-muted-foreground/80">An initiative by Travonex — your weekend adventure partner.</p>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className='flex flex-wrap justify-center gap-x-4 gap-y-2 footer-links'>
            <Link href="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">Terms & Conditions</Link>
            <span className="text-muted-foreground hidden md:inline">|</span>
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">Privacy Policy</Link>
            <span className="text-muted-foreground hidden md:inline">|</span>
            <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">Disclaimer</Link>
            <span className="text-muted-foreground hidden md:inline">|</span>
            <a href="mailto:hello@getrippinclub.com" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
