import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
  ];

  const services = [
    { name: 'Review Management', href: '/services/review-management' },
    { name: 'Messaging & Communication', href: '/services/messaging' },
    { name: 'Webchat Solutions', href: '/services/webchat' },
    { name: 'CRM & Lead Management', href: '/services/crm' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing' },
  ];

  const resources = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Book a Demo', href: '/demo' },
    { name: 'Help Center', href: '#' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Cookie Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo */}
        <div className="mb-12 text-center md:text-left">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/67a9038e4325e13c49599a50.png"
              alt="Reputation Genius"
              width={200}
              height={60}
              className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="flex items-center justify-center md:justify-start text-neutral-400 hover:text-secondary transition-colors mb-2">
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:14137988836" className="text-sm">1-413-798-8836</a>
          </div>
          <div className="flex items-center justify-center md:justify-start text-neutral-400 hover:text-secondary transition-colors">
            <Mail className="h-4 w-4 mr-2" />
            <a href="mailto:contact@reputation-genius.com" className="text-sm">contact@reputation-genius.com</a>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Company */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-secondary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-secondary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-secondary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-secondary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-neutral-500 mb-2">
                &copy; {new Date().getFullYear()} Reputation Genius, LLC. All Rights Reserved.
              </p>
              <p className="text-sm text-neutral-600 italic">
                We're on a mission to build a better future where technology reviews good jobs for everyone.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              {/* Social Media Icons */}
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/reputationgenius" className="text-neutral-400 hover:text-secondary transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/reputationgenius" className="text-neutral-400 hover:text-secondary transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/reputationgenius" className="text-neutral-400 hover:text-secondary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/reputationgenius" className="text-neutral-400 hover:text-secondary transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              {/* Integration Logos */}
              <div className="text-xs text-neutral-600 text-center md:text-left">
                Integrates with: Clio, Google, Zapier, Facebook Messenger, Quickbooks
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
