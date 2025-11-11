'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const solutions = [
    { name: 'Free Online Reputation Report', href: '/free-reputation-report' },
    { name: 'Reputation Management', href: '/reputation-management' },
    { name: 'AI Employee Systems', href: '/ai-employee-systems' },
    { name: 'Website Chatbot', href: '/website-chatbot' },
    { name: 'AI Follow-Up Automation', href: '/ai-follow-up' },
    { name: 'Social Media Planner', href: '/social-media-planner' },
    { name: 'Listings Management', href: '/listings-management' },
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Help Center', href: '/help' },
    { name: 'Industry Guides', href: '/guides' },
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
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-text-secondary hover:text-primary font-medium transition-colors"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {solutionsOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-border py-2"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  {solutions.map((item) => (
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

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-text-secondary hover:text-primary font-medium transition-colors"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {resourcesOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-border py-2"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  {resources.map((item) => (
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
              href="/about"
              className="text-text-secondary hover:text-primary font-medium transition-colors"
            >
              About
            </Link>

            {/* CTA Button */}
            <Link
              href="/free-reputation-report"
              className="btn-cta !px-6 !py-2.5 !text-base"
            >
              Get Free Report
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
              <div>
                <button
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="flex items-center justify-between w-full text-text-secondary font-medium py-2"
                >
                  Solutions
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      solutionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {solutionsOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {solutions.map((item) => (
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

              <div>
                <button
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="flex items-center justify-between w-full text-text-secondary font-medium py-2"
                >
                  Resources
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      resourcesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {resourcesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {resources.map((item) => (
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
                href="/about"
                className="block text-text-secondary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/free-reputation-report"
                className="block btn-cta text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Report
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
