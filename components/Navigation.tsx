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
    { name: 'Messaging & Communication', href: '/services/messaging' },
    { name: 'Webchat Solutions', href: '/services/webchat' },
    { name: 'CRM & Lead Management', href: '/services/crm' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing' },
    { name: 'View All Services', href: '/services' },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/677859c851e7485209666846.png"
              alt="Reputation Genius"
              width={180}
              height={50}
              className="h-12 w-auto"
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
                className="flex items-center text-text-secondary hover:text-primary font-medium transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-border py-2"
                >
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-text-secondary hover:bg-background-alt hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
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
            <Link
              href="/demo"
              className="btn-cta !px-6 !py-2.5 !text-base"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-text-secondary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-text-secondary font-medium py-2"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-sm text-text-secondary hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className="block text-text-secondary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              <Link
                href="/contact"
                className="block text-text-secondary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/about"
                className="block text-text-secondary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/demo"
                className="block btn-cta text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
