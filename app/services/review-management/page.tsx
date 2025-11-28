"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Star,
  MessageSquare,
  Share,
  CheckCircle,
  ArrowRight,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Phone,
  Users,
  Globe,
  DollarSign,
  X
} from 'lucide-react';
import BookDemoButton from '@/components/BookDemoButton';
import WebchatForm from '@/components/WebchatForm';

export default function ReviewManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: 'Get New Reviews Automatically',
      description: 'Our system automatically requests reviews from satisfied customers after appointments or purchases, ensuring a steady stream of authentic feedback.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: 'Auto-Request Reviews',
      description: 'Set up automated review requests via email, SMS, or direct messaging to capture feedback at the perfect moment when satisfaction is highest.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: 'Respond To Reviews In One Place',
      description: 'Manage all your reviews from Google, Yelp, Facebook, and other platforms in a single, unified dashboard. Respond quickly and professionally to every review.'
    },
    {
      icon: <Share className="h-8 w-8 text-accent" />,
      title: 'Review Sharing On Social Sites',
      description: 'Automatically share your best reviews across your social media platforms to showcase your excellent service and attract new customers.'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Connect Your Platforms',
      description: 'Link your Google Business Profile, Yelp, Facebook, and other review platforms to our unified dashboard in minutes.'
    },
    {
      step: '2',
      title: 'Automate Review Collection',
      description: 'Set up automated review requests that trigger after positive customer interactions, ensuring you never miss an opportunity.'
    },
    {
      step: '3',
      title: 'Respond & Showcase',
      description: 'Respond to reviews instantly and share your best feedback across social media to build trust and attract new customers.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: 'Boost Your Online Reputation',
      description: 'Maintain a strong online presence with consistent 5-star reviews that build trust and credibility with potential customers.'
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: 'Save Time & Resources',
      description: 'Automate the entire review process from collection to response, freeing up your team to focus on delivering excellent service.'
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: 'Protect Against Bad Reviews',
      description: 'Quick response times and proactive review management help mitigate the impact of negative feedback before it spreads.'
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: 'Increase Customer Retention',
      description: 'Show customers you value their feedback and are committed to excellence, leading to higher satisfaction and repeat business.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Essentials',
      price: '$97',
      period: '/month',
      tagline: 'for emerging businesses just getting started',
      reviewFeatures: [
        'Get New Reviews Automatically',
        'Auto-Request Reviews',
        'Respond To Reviews In One Place',
        'Review Sharing On Social Sites'
      ],
      link: 'https://link.reputation-genius.com/payment-link/692013bb802b2c68d169a48f'
    },
    {
      name: 'Professional',
      price: '$297',
      period: '/month',
      tagline: 'for established businesses looking to grow',
      badge: 'MOST POPULAR',
      reviewFeatures: [
        'All Essentials Review Features',
        'Advanced Analytics & Reporting',
        'Priority Review Response Alerts',
        'Custom Review Request Templates'
      ],
      link: 'https://link.reputation-genius.com/payment-link/692013998b7f45678a9d8996'
    },
    {
      name: 'Platinum',
      price: '$497',
      period: '/month',
      tagline: 'for businesses scaling rapidly',
      reviewFeatures: [
        'All Professional Review Features',
        'AI-Powered Review Insights',
        'Automated Review Translation',
        'Competitor Review Monitoring'
      ],
      link: 'https://link.reputation-genius.com/payment-link/6920136b8b7f457b319d8936'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient pt-12 md:pt-20 pb-16 md:pb-32">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="section-container relative z-10 !py-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-primary font-medium text-sm mb-3 md:mb-6 border border-blue-100">
                <Star className="h-4 w-4 mr-2 fill-current" />
                Trusted by 500+ Local Businesses
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-text-primary">
                Automated Review <span className="text-gradient">Management</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-text-secondary leading-relaxed">
                Get More 5-Star Reviews Automatically.
              </p>
              <div className="relative lg:hidden mb-8">
                <div className="absolute -inset-3 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/50 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/67d6d81a1b97ac0f5100b017.jpeg"
                  >
                    <source src="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/69046074c3f8ca9596ad61f1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center lg:flex-row lg:justify-start">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary-gradient text-white font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
                >
                  See AI in Action
                  <MessageSquare className="ml-2 h-4 w-4" />
                </button>
                <a
                  href="https://link.reputation-genius.com/widget/bookings/discovery-call-ai-agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary hover:bg-gray-50 font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
                >
                  Book a Call
                  <Phone className="ml-2 h-4 w-4" />
                </a>
                <Link href="/pricing" className="text-primary hover:bg-blue-50/50 font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 flex items-center justify-center whitespace-nowrap border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  View Pricing
                  <DollarSign className="ml-2 h-4 w-4" />
                </Link>

              </div>
              <div className="mt-4 md:mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-text-secondary">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  14-day free trial
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/50 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/67d6d81a1b97ac0f5100b017.jpeg"
                >
                  <source src="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/69046074c3f8ca9596ad61f1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Review Management Features
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Everything you need to collect, manage, and showcase customer reviews across all platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Get started with automated review management in three simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Automated Review Management?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Transform your online reputation and grow your business with intelligent review automation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Review Management Included In All Plans
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include powerful review management features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`card flex flex-col h-full relative ${tier.badge ? 'border-2 border-primary' : ''}`}>
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
                <div className="mb-8 flex-grow">
                  <h4 className="font-semibold text-text-primary mb-4">Review Management Features:</h4>
                  <ul className="space-y-3">
                    {tier.reviewFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center mt-auto">
                  <a
                    href={tier.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta w-full text-center block"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="section-container relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Automate Your Review Management?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join thousands of businesses using Reputation Genius to collect more reviews and build trust with customers.
          </p>
          <BookDemoButton
            className="bg-white text-primary hover:bg-blue-50 font-bold px-10 py-5 rounded-xl text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 items-center"
            icon={<ArrowRight className="ml-2 h-5 w-5" />}
          />
        </div>
      </section>

      {/* Custom Webchat Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full shadow-md transition-all duration-200"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="w-full h-full">
              <WebchatForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}