
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from './ui/separator';

const navLinks = [
  { href: '/trips', label: 'Trips' },
  { href: '/#why-us', label: 'Why Us' },
  { href: '/#testimonials', label: 'Reviews' },
];

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className='sticky top-0 z-50 bg-background shadow-md'
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="GetrippinClub Home">
            <Logo className="h-8 w-auto text-foreground" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='font-semibold text-sm transition-colors duration-300 hover:text-primary text-foreground'
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/#booking">Book Now</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className='text-foreground'>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                   <Link href="/" aria-label="GetrippinClub Home" onClick={() => setMobileMenuOpen(false)}>
                      <Logo className="h-8 w-auto" />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-semibold text-lg hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Separator />
                   <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold w-full" onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/#booking">Book Now</Link>
                  </Button>
                </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
