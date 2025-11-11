import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  MessageSquare,
  Phone,
  Users,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: 'Reviews',
      description: 'Automatically collect, respond to, and showcase 5-star reviews across all platforms. Never lose another customer to poor reviews.',
      href: '/services/review-management',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: 'Messaging',
      description: 'Unified communication platform that brings all customer conversations into one inbox. Facebook Messenger, email, SMS, and more.',
      href: '/services/messaging',
    },
    {
      icon: <Phone className="h-8 w-8 text-accent" />,
      title: 'Webchat',
      description: 'Convert website visitors into customers with intelligent webchat that engages instantly and captures leads automatically.',
      href: '/services/webchat',
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'CRM',
      description: 'Complete customer relationship management with unlimited leads, automated follow-ups, and powerful lead tracking.',
      href: '/services/crm',
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: 'AI Automation',
      description: 'AI-powered marketing automation that nurtures leads, reduces costs, and ensures you never lose another customer.',
      href: '/services/ai-marketing',
    },
  ];

  const stats = [
    { number: '10K+', label: '5-Star Reviews Generated' },
    { number: '500+', label: 'Businesses Protected' },
    { number: '99%', label: 'Customer Retention' },
    { number: '24/7', label: 'Automated Monitoring' },
  ];

  const howItWorks = [
    {
      number: '01',
      title: 'Connect Your Accounts',
      description: 'Link your Google, Facebook, Yelp, and other review platforms. Our system automatically monitors and manages your reputation across all channels.',
    },
    {
      number: '02',
      title: 'Automate Review Management',
      description: 'AI-powered responses to reviews, automated follow-ups with customers, and intelligent lead nurturing that works around the clock.',
    },
    {
      number: '03',
      title: 'Build Unstoppable Reputation',
      description: 'Watch your ratings improve, customer loyalty grow, and new business flood in as you dominate your local market with 5-star reviews.',
    },
  ];

  const pricingTiers = [
    {
      name: 'Essentials',
      price: '$97',
      period: '/month',
      tagline: 'for emerging businesses just getting started',
      features: [
        'Automated Review Collection',
        'Unified Messaging Inbox',
        'Webchat Widget',
        'CRM with Unlimited Leads',
        'Text-to-Pay Invoicing',
        'Up to 3 Team Members'
      ],
      cta: 'START NOW',
      link: 'https://link.reputation-genius.com/payment-link/687053f5ddc6a608bcc5293d'
    },
    {
      name: 'Professional',
      price: '$297',
      period: '/month',
      tagline: 'for established businesses looking to grow',
      badge: 'MOST POPULAR',
      features: [
        'All Essentials features',
        'Multi-Location Management',
        'Unlimited Team Members',
        'Advanced Analytics',
        'Priority Support',
        'Custom Integrations'
      ],
      cta: 'START NOW',
      link: 'https://link.reputation-genius.com/payment-link/6870552eddc6a60a71c5294b'
    },
    {
      name: 'Platinum',
      price: '$497',
      period: '/month',
      tagline: 'for scaling businesses needing everything',
      features: [
        'All Professional features',
        'AI Marketing Automation',
        'Advanced Lead Nurturing',
        'Custom AI Training',
        'White-label Solutions',
        'Dedicated Account Manager'
      ],
      cta: 'START NOW',
      link: 'https://link.reputation-genius.com/payment-link/6870559fddc6a62dcac5294d'
    }
  ];

  const integrations = [
    'Clio', 'Google', 'Zapier', 'Facebook Messenger', 'Quickbooks'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="section-container py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-text-primary">
                Never Lose Another Customer to Bad Reviews
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-text-secondary">
                Automated review management and reputation building that protects your business and drives growth.
                Turn every customer interaction into a 5-star opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="btn-cta">
                  Book a Demo
                </Link>
                <Link href="/pricing" className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors shadow-lg text-center">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/67a9038a6c0e130deda2c867.png"
                alt="Reputation Genius Dashboard"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof/Stats Section */}
      <section className="bg-background-alt py-12">
        <div className="section-container !py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Reputation Management Solution
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to protect and grow your online reputation. From automated reviews to AI-powered customer engagement.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-secondary mb-4">
                {feature.description}
              </p>
              <Link
                href={feature.href}
                className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-background-alt section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Transform your reputation in three simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {howItWorks.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-8 shadow-lg h-full">
                <div className="text-5xl font-bold text-accent/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary">
                  {step.description}
                </p>
              </div>
              {index < howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-accent">
                  <ArrowRight className="h-8 w-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Overview Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Start protecting your reputation today. All plans include our core review management features.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`card relative ${tier.badge ? 'border-2 border-primary' : ''}`}>
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {tier.badge}
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-primary mb-1">
                  {tier.price}<span className="text-lg font-normal text-text-secondary">{tier.period}</span>
                </div>
                <p className="text-sm text-text-secondary">{tier.tagline}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <a
                  href={tier.link}
                  className="btn-cta w-full text-center block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tier.cta}
                </a>
                <p className="text-xs text-text-secondary mt-2">Free 14-Day Trial Included</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="bg-background-alt py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Easily Integrates With Leading Apps
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Connect Reputation Genius with your existing tools for seamless workflow automation.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="text-2xl font-bold text-gray-600 hover:text-primary transition-colors">
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-white section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Never Lose Another Customer?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of businesses protecting their reputation and growing their customer base with automated review management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/demo" className="btn-cta !bg-white !text-primary !hover:bg-gray-100">
              Book a Demo
            </Link>
            <a
              href="https://link.reputation-genius.com/payment-link/6870552eddc6a60a71c5294b"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-md text-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Trial
            </a>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>14-day free trial</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
