
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  MessageSquare,
  Phone,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Shield,
  TrendingUp,
  Globe,
  DollarSign,
  X
} from 'lucide-react';

import WebchatForm from '@/components/WebchatForm';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    {
      icon: <Star className="h-6 w-6 text-white" />,
      title: 'Review Management',
      description: 'Automatically collect, respond to, and showcase 5-star reviews across all platforms.',
      href: '/services/review-management',
      color: 'bg-blue-500',
      colSpan: 'md:col-span-1',
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: 'Social Media Planner',
      description: 'Plan and schedule posts effortlessly across all major platforms to keep your business active.',
      href: '/services/social-media-planner',
      color: 'bg-teal-500',
      colSpan: 'md:col-span-1',
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: 'Unified Messaging',
      description: 'All your customer conversations in one inbox. Facebook, Web Chat, SMS, Email, and more.',
      href: '/services/messaging',
      color: 'bg-indigo-500',
      colSpan: 'md:col-span-1',
    },
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: 'Webchat',
      description: 'Convert visitors into leads instantly with intelligent webchat.',
      href: '/services/webchat',
      color: 'bg-purple-500',
      colSpan: 'md:col-span-1',
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: 'CRM & Leads',
      description: 'Track every lead and automate follow-ups to close more deals.',
      href: '/services/crm',
      color: 'bg-pink-500',
      colSpan: 'md:col-span-1',
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: 'AI Automation',
      description: 'Let AI handle your marketing and customer engagement 24/7.',
      href: '/services/ai-marketing',
      color: 'bg-orange-500',
      colSpan: 'md:col-span-1',
    },
  ];

  const stats = [
    { number: '10K+', label: '5-Star Reviews Generated', icon: <Star className="h-5 w-5 text-yellow-400" /> },
    { number: '500+', label: 'Businesses Protected', icon: <Shield className="h-5 w-5 text-blue-400" /> },
    { number: '99%', label: 'Customer Retention', icon: <Users className="h-5 w-5 text-green-400" /> },
    { number: '24/7', label: 'Automated Monitoring', icon: <Globe className="h-5 w-5 text-purple-400" /> },
  ];

  const howItWorks = [
    {
      number: '01',
      title: 'Connect',
      description: 'Link your Google, Facebook, and other accounts in seconds.',
      icon: <Globe className="h-8 w-8 text-primary" />,
    },
    {
      number: '02',
      title: 'Automate',
      description: 'Our AI starts monitoring, responding, and generating reviews.',
      icon: <Zap className="h-8 w-8 text-secondary" />,
    },
    {
      number: '03',
      title: 'Grow',
      description: 'Watch your reputation soar and new customers flood in.',
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
    },
  ];

  const pricingTiers = [
    {
      name: 'Essentials',
      price: '$97',
      period: '/month',
      tagline: 'For emerging businesses',
      features: [
        'Automated Review Collection',
        'Unified Messaging Inbox',
        'Webchat Widget',
        'CRM with Unlimited Leads',
        'Text-to-Pay Invoicing',
        'Up to 3 Team Members'
      ],
      cta: 'Start Free Trial',
      link: 'https://link.reputation-genius.com/payment-link/692013bb802b2c68d169a48f',
      highlight: false
    },
    {
      name: 'Professional',
      price: '$297',
      period: '/month',
      tagline: 'For growing businesses',
      badge: 'MOST POPULAR',
      features: [
        'All Essentials features',
        'Multi-Location Management',
        'Unlimited Team Members',
        'Advanced Analytics',
        'Priority Support',
        'Custom Integrations'
      ],
      cta: 'Start Free Trial',
      link: 'https://link.reputation-genius.com/payment-link/692013998b7f45678a9d8996',
      highlight: true
    },
    {
      name: 'Platinum',
      price: '$497',
      period: '/month',
      tagline: 'For scaling businesses',
      features: [
        'All Professional features',
        'AI Marketing Automation',
        'Advanced Lead Nurturing',
        'Custom AI Training',
        'White-label Solutions',
        'Dedicated Account Manager'
      ],
      cta: 'Start Free Trial',
      link: 'https://link.reputation-genius.com/payment-link/6920136b8b7f457b319d8936',
      highlight: false
    }
  ];

  const integrations = [
    'Clio', 'Google', 'Zapier', 'Facebook', 'Quickbooks'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient pt-12 md:pt-20 pb-8 md:pb-32">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="section-container relative z-10 !py-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-primary font-medium text-sm mb-3 md:mb-6 border border-blue-100">
                <Star className="h-4 w-4 mr-2 fill-current" />
                Trusted by 500+ Local Businesses
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-text-primary">
                Never Lose Another Customer to <span className="text-gradient">Bad Reviews</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-text-secondary leading-relaxed">
                Automate your reputation, dominate local search, and turn every customer interaction into a 5-star opportunity with AI.
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
              <div className="flex flex-col gap-4 justify-center items-center lg:flex-row lg:justify-start">
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

      {/* Social Proof/Stats Section */}
      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-neutral-50 transition-colors text-center md:text-left">
                <div className="mb-3 p-3 bg-neutral-100 rounded-full">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section (Bento Grid) */}
      <section className="section-container bg-background-alt py-12 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Everything You Need to <span className="text-primary">Dominate</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A complete suite of tools designed to protect your brand, engage customers, and grow your business automatically.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 p-8 border border-border overflow-hidden flex flex-col items-center text-center md:block md:text-left ${feature.colSpan}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500`}></div>
              <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {feature.description}
              </p>
              <Link
                href={feature.href}
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group-hover:translate-x-1 duration-300 self-start"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Three Steps to <span className="text-primary">Success</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We've simplified reputation management so you can focus on running your business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0"></div>

          {howItWorks.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full shadow-lg border-4 border-background-alt flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-primary/20">
                {step.icon}
              </div>
              <div className="text-6xl font-bold text-neutral-100 absolute -top-4 -right-4 -z-10 select-none">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Overview Section */}
      <section className="section-container bg-neutral-900 text-white relative overflow-hidden rounded-3xl my-12 !py-16 md:!py-24">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Choose the plan that fits your growth stage. No hidden fees.
            </p>
            <p className="text-center text-neutral-400 text-sm max-w-2xl mx-auto mt-4">
              We offer a 14-day free trial, but a credit card is required to activate it. We had to implement this measure once AI became so prevalent to prevent spam and AI-generated accounts. We apologize for this necessary step and appreciate your understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-6xl mx-auto px-4">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${tier.highlight
                  ? 'bg-white text-text-primary shadow-2xl scale-105 border-2 border-primary'
                  : 'bg-neutral-800/50 text-white border border-neutral-700 hover:bg-neutral-800'
                  }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg tracking-wide">
                    {tier.badge}
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className={`text-4xl font-bold ${tier.highlight ? 'text-primary' : 'text-white'}`}>{tier.price}</span>
                    <span className={`text-sm ${tier.highlight ? 'text-text-secondary' : 'text-neutral-400'}`}>{tier.period}</span>
                  </div>
                  <p className={`text-sm ${tier.highlight ? 'text-text-secondary' : 'text-neutral-400'}`}>{tier.tagline}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-primary' : 'text-secondary'}`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <a
                    href={tier.link}
                    className={`w-full block py-4 rounded-xl font-bold transition-all duration-300 ${tier.highlight
                      ? 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                      }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tier.cta}
                  </a>
                  <p className={`text-xs mt-3 ${tier.highlight ? 'text-text-secondary' : 'text-neutral-500'}`}>14-Day Free Trial Included</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-10 md:py-20 bg-white">
        <div className="section-container !py-0">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-text-primary">
              Seamless Integrations
            </h2>
            <p className="text-lg text-text-secondary">
              Connects with the tools you already use.
            </p>
          </div>

          {/* Mobile: Logos */}
          <div className="flex md:hidden flex-wrap justify-center items-center gap-8 opacity-70 grayscale transition-all duration-500">
            {/* Clio */}
            <div className="w-12 h-12 flex items-center justify-center" aria-label="Clio">
              <svg viewBox="0 0 32 32" className="w-full h-full fill-current text-[#0066CC]">
                <rect x="4" y="4" width="24" height="24" rx="4" ry="4" fill="currentColor" />
                <path d="M8 14l4 4 8-8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {/* Google */}
            <div className="w-10 h-10 flex items-center justify-center" aria-label="Google">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#4285F4]">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.013-1.147 8.027-3.24 2.053-2.08 2.667-5.013 2.667-7.467 0-.747-.053-1.467-.16-2.187h-10.53z" />
              </svg>
            </div>
            {/* Zapier */}
            <div className="w-10 h-10 flex items-center justify-center" aria-label="Zapier">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#FF4F00]">
                <path d="M4.19 17.51h4.64l-1.78 6.49 12.76-12.76h-5.83l2.19-6.49L3.41 17.51h.78z" />
              </svg>
            </div>
            {/* Facebook */}
            <div className="w-10 h-10 flex items-center justify-center" aria-label="Facebook">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#1877F2]">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            {/* QuickBooks */}
            <div className="w-10 h-10 flex items-center justify-center" aria-label="QuickBooks">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#2CA01C]">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.5-5h3v-2h-3v2zm0-4h3V7h-3v6z" />
              </svg>
            </div>
          </div>

          {/* Desktop: Text */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {['Clio', 'Google', 'Zapier', 'Facebook', 'Quickbooks'].map((integration, index) => (
              <div key={index} className="text-2xl md:text-3xl font-bold text-neutral-400 hover:text-primary transition-colors cursor-default">
                {integration}
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8">
            Ready to Transform Your Reputation?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
            Join hundreds of businesses protecting their brand and growing their revenue with Reputation Genius.
          </p>
          <div className="flex flex-col gap-6 lg:gap-3 justify-center items-center lg:flex-row">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-primary hover:bg-blue-50 font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
            >
              See AI in Action
              <MessageSquare className="ml-2 h-4 w-4" />
            </button>
            <a
              href="https://link.reputation-genius.com/widget/bookings/discovery-call-ai-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
            >
              Book a Call
              <Phone className="ml-2 h-4 w-4" />
            </a>
            <Link href="/pricing" className="bg-[#0f52ba] text-blue-100 hover:text-white hover:bg-[#0f52ba]/90 font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 flex items-center justify-center whitespace-nowrap border border-white/30 shadow-sm hover:shadow-md hover:-translate-y-0.5">
              View Pricing
              <DollarSign className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100 font-medium">
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
