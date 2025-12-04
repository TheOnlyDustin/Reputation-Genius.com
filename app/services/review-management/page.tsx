"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ErrorBoundary';
import {
  Star,
  MessageSquare,
  Share,
  CheckCircle,

  Zap,
  TrendingUp,
  Shield,
  Clock,
  Phone,


  DollarSign,
  X
} from 'lucide-react';

const WebchatForm = dynamic(() => import('@/components/WebchatForm'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-full rounded" />,
  ssr: false,
});

export default function ReviewManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: <Star className="icon-feature text-accent" />,
      title: 'Get New Reviews Automatically',
      description: 'Our system automatically requests reviews from satisfied customers after appointments or purchases, ensuring a steady stream of authentic feedback.'
    },
    {
      icon: <MessageSquare className="icon-feature text-accent" />,
      title: 'Auto-Request Reviews',
      description: 'Set up automated review requests via email, SMS, or direct messaging to capture feedback at the perfect moment when satisfaction is highest.'
    },
    {
      icon: <CheckCircle className="icon-feature text-accent" />,
      title: 'Respond To Reviews In One Place',
      description: 'Manage all your reviews from Google, Yelp, Facebook, and other platforms in a single, unified dashboard. Respond quickly and professionally to every review.'
    },
    {
      icon: <Share className="icon-feature text-accent" />,
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
      icon: <TrendingUp className="icon-feature text-accent" />,
      title: 'Boost Your Online Reputation',
      description: 'Maintain a strong online presence with consistent 5-star reviews that build trust and credibility with potential customers.'
    },
    {
      icon: <Clock className="icon-feature text-accent" />,
      title: 'Save Time & Resources',
      description: 'Automate the entire review process from collection to response, freeing up your team to focus on delivering excellent service.'
    },
    {
      icon: <Shield className="icon-feature text-accent" />,
      title: 'Protect Against Bad Reviews',
      description: 'Quick response times and proactive review management help mitigate the impact of negative feedback before it spreads.'
    },
    {
      icon: <Zap className="icon-feature text-accent" />,
      title: 'Increase Customer Retention',
      description: 'Show customers you value their feedback and are committed to excellence, leading to higher satisfaction and repeat business.'
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
                <Star className="icon-button mr-2 fill-current" />
                Trusted by 500+ Local Businesses
              </div>
              <h1 className="heading-hero">
                Automated Review <span className="text-gradient">Management</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-text-secondary leading-relaxed">
                Get More 5-Star Reviews Automatically.
              </p>
              <div className="relative lg:hidden mb-8">
                <div className="absolute -inset-3 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <ErrorBoundary>
                  <div className="relative w-full aspect-video rounded-2xl shadow-2xl border border-white/50 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      poster="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/67d6d81a1b97ac0f5100b017.jpeg"
                    >
                      <source src="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/69046074c3f8ca9596ad61f1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </ErrorBoundary>
              </div>
              <div className="flex flex-col gap-6 lg:gap-3 justify-center items-center lg:flex-row lg:justify-start">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary-gradient text-white font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
                >
                  See AI in Action
                  <MessageSquare className="ml-2 icon-button" />
                </button>
                <a
                  href="https://link.reputation-genius.com/widget/bookings/discovery-call-ai-agents?utm_source=website&utm_medium=cta&utm_campaign=review-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary hover:bg-gray-50 font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
                >
                  Book a Call
                  <Phone className="ml-2 icon-button" />
                </a>
                <Link href="/pricing" className="text-primary hover:bg-blue-50/50 font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 flex items-center justify-center whitespace-nowrap border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  View Pricing
                  <DollarSign className="ml-2 icon-button" />
                </Link>

              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <ErrorBoundary>
                <div className="relative w-full aspect-video rounded-2xl shadow-2xl border border-white/50 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/67d6d81a1b97ac0f5100b017.jpeg"
                  >
                    <source src="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/69046074c3f8ca9596ad61f1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-1">
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
            <h2 className="heading-1">
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
            <h2 className="heading-1">
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

      {/* Availability Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="text-center">
            <h2 className="heading-1">
              Available In All Plans
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Our automated review management system is included in every Reputation Genius plan, ensuring you can build trust and grow your business at any stage.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <CheckCircle className="icon-large text-green-500 mx-auto mb-2" />
                <p className="font-semibold">Essentials</p>
                <p className="text-sm text-text-secondary">$97/month</p>
                <p className="text-xs text-gray-500 mt-1">Included</p>
              </div>
              <div className="text-center">
                <CheckCircle className="icon-large text-green-500 mx-auto mb-2" />
                <p className="font-semibold">Professional</p>
                <p className="text-sm text-text-secondary">$297/month</p>
                <p className="text-xs text-green-600 font-medium mt-1">Included</p>
              </div>
              <div className="text-center">
                <CheckCircle className="icon-large text-green-500 mx-auto mb-2" />
                <p className="font-semibold">Platinum</p>
                <p className="text-sm text-text-secondary">$497/month</p>
                <p className="text-xs text-green-600 font-medium mt-1">Included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="section-container relative z-10 text-center text-white">
          <h2 className="heading-1">
            Ready to Automate Your Review Management?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join thousands of businesses using Reputation Genius to collect more reviews and build trust with customers.
          </p>
          <div className="flex flex-col gap-6 lg:gap-3 justify-center items-center lg:flex-row">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-primary hover:bg-blue-50 font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
            >
              See AI in Action
              <MessageSquare className="ml-2 icon-button" />
            </button>
            <a
              href="https://link.reputation-genius.com/widget/bookings/discovery-call-ai-agents?utm_source=website&utm_medium=cta&utm_campaign=review-management"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
            >
              Book a Call
              <Phone className="ml-2 icon-button" />
            </a>
            <Link href="/pricing" className="bg-[#0f52ba] text-blue-100 hover:text-white hover:bg-[#0f52ba]/90 font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 flex items-center justify-center whitespace-nowrap border border-white/30 shadow-sm hover:shadow-md hover:-translate-y-0.5">
              View Pricing
              <DollarSign className="ml-2 icon-button" />
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Webchat Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl sm:max-w-4xl h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-3 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full shadow-md transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
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