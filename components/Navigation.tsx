'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'Review Management', href: '/services/review-management' },
    { name: 'Social Media Planner', href: '/services/social-media-planner' },
    { name: 'Messaging & Communication', href: '/services/messaging' },
    { name: 'Webchat Solutions', href: '/services/webchat' },
    { name: 'CRM & Lead Management', href: '/services/crm' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing' },
    { name: 'View All Services', href: '/services' },
  ];

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/67a9038a6c0e130deda2c867.png"
              alt="Reputation Genius"
              width={180}
              height={50}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-text-secondary hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center text-text-secondary hover:text-primary font-medium transition-colors py-2"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute left-0 top-full w-72 bg-white rounded-xl shadow-xl border border-border py-3 transition-all duration-200 origin-top-left ${servicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}
              >
                {services.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-3 text-sm text-text-secondary hover:bg-primary-50 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/pricing"
              className="text-text-secondary hover:text-primary font-medium transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className="text-text-secondary hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/about"
              className="text-text-secondary hover:text-primary font-medium transition-colors"
            >
              About Us
            </Link>

            {/* CTA Button */}
            <a
              href="https://link.reputation-genius.com/widget/bookings/discovery-call-ai-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta !px-6 !py-2.5 !text-base !bg-primary-gradient hover:!shadow-glow inline-flex items-center justify-center"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-text-primary hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-border space-y-4">
            <Link
              href="/"
              className="block text-text-secondary font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-text-secondary font-medium py-2 hover:text-primary transition-colors"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>
              <div className={`pl-4 space-y-2 mt-2 overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                {services.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-sm text-text-secondary hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/pricing"
              className="block text-text-secondary font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className="block text-text-secondary font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/about"
              className="block text-text-secondary font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <a
              href="https://link.reputation-genius.com/widget/bookings/discovery-call-ai-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-center !w-full mt-4 inline-flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
