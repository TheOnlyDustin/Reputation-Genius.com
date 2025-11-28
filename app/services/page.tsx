'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Star,
  MessageSquare,
  Phone,
  Users,
  Zap,
  ArrowRight,
  DollarSign,
  X,
  Globe
} from 'lucide-react';
import WebchatForm from '@/components/WebchatForm';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: 'Review Management',
      description: 'Automatically collect, respond to, and showcase 5-star reviews across all platforms. Never lose another customer to poor reviews.',
      href: '/services/review-management',
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: 'Social Media Planner',
      description: 'Plan and schedule posts effortlessly across all major platforms to keep your business active.',
      href: '/services/social-media-planner',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: 'Messaging & Communication',
      description: 'Unified communication platform that brings all customer conversations into one inbox. Facebook Messenger, email, SMS, and more.',
      href: '/services/messaging',
    },
    {
      icon: <Phone className="h-8 w-8 text-accent" />,
      title: 'Webchat Solutions',
      description: 'Convert website visitors into customers with intelligent webchat that engages instantly and captures leads automatically.',
      href: '/services/webchat',
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'CRM & Lead Management',
      description: 'Complete customer relationship management with unlimited leads, automated follow-ups, and powerful lead tracking.',
      href: '/services/crm',
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: 'AI Marketing Automation',
      description: 'AI-powered marketing automation that nurtures leads, reduces costs, and ensures you never lose another customer.',
      href: '/services/ai-marketing',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-white !pt-24 !pb-12">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive reputation management solutions that protect and grow your business. From automated reviews to AI-powered customer engagement.
          </p>
          <div className="flex flex-col gap-3 justify-center items-center lg:flex-row mt-8">
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
      </section>

      {/* Services Cards Section */}
      <section className="">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="card group hover:shadow-xl transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {service.description}
                </p>
                <div className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="section-container relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Not sure which services you need?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Book a personalized demo and let our experts help you choose the perfect services for your business needs.
          </p>
          <div className="flex flex-col gap-3 justify-center items-center lg:flex-row">
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