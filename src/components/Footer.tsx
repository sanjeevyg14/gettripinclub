
import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Facebook, Instagram, Twitter, Youtube, Mountain, Compass, Backpack, Mail, Phone } from 'lucide-react';
import Image from 'next/image';


const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/gettripinclub' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'All Trips', href: '/trips' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-and-conditions' },
  { name: 'Disclaimer', href: '/disclaimer' },
];

const contactInfo = [
    { name: 'support@gettripin.club', icon: Mail, href: 'mailto:support@gettripin.club' },
    { name: '+91 91642 90929', icon: Phone, href: 'tel:+919164290929' },
]


export const Footer = () => {

  return (
    <footer className="bg-secondary text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Branding Section */}
            <div className='md:col-span-4 space-y-4'>
                 <Link href="/">
                    <Logo />
                </Link>
                <p className='text-muted-foreground'>Weekend • Road • Repeat</p>
                 <div className='flex items-center gap-2 text-sm text-muted-foreground font-semibold'>
                    <Mountain className='w-4 h-4 text-primary' />
                    <Compass className='w-4 h-4 text-primary' />
                    <Backpack className='w-4 h-4 text-primary' />
                </div>
            </div>

            {/* Quick Links Section */}
            <div className='md:col-span-2'>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                {quickLinks.map((link) => (
                    <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* Contact Section */}
            <div className='md:col-span-3'>
                 <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
                 <ul className="space-y-3">
                    {contactInfo.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                                <item.icon className='w-4 h-4' />
                                <span>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Social Media Section */}
            <div className='md:col-span-3'>
                 <h3 className="font-bold text-lg mb-4">Follow Our Adventures</h3>
                 <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <social.icon className="w-6 h-6" />
                        <span className="sr-only">{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        <Separator className="my-8 bg-foreground/10" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className='md:col-span-9 text-left text-sm text-muted-foreground'>
                <p>&copy; {new Date().getFullYear()} Getrippin.club. All rights reserved.</p>
                <p>Crafted with ❤️ for the love of road trips.</p>
            </div>
            {/* Travonex Branding */}
            <div className='md:col-span-3 text-right md:text-right space-y-2 self-end'>
                 <p className="text-sm font-semibold text-muted-foreground">Made for explorers. Backed by</p>
                 <a href="https://travonex.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Image src="/travonex-logo.png" alt="Travonex Logo" width={140} height={140} />
                 </a>
                 <p className="text-xs text-muted-foreground/80">Powered by Travonex — your weekend adventure partner.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};
