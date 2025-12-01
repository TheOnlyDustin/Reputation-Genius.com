'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  Inbox,
  Zap,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Phone,
  DollarSign,
  X
} from 'lucide-react';
import WebchatForm from '@/components/WebchatForm';
import BookDemoButton from '@/components/BookDemoButton';

export default function MessagingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    {
      icon: <Inbox className="h-8 w-8 text-accent" />,
      title: 'Streamline Communication Into 1 Inbox',
      description: 'Consolidate all customer messages from Facebook Messenger, Email, SMS, Webchat, and Google Business Messages into a single, unified inbox for efficient management.'
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: 'Automate Conversations & Reply To Leads & Customers With Inbox',
      description: 'Set up automated responses and workflows to handle common inquiries, qualify leads, and ensure no customer message goes unanswered.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: 'Chat In Real Time With Livechat',
      description: 'Engage with customers instantly through live chat on your website, providing immediate support and building stronger relationships.'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-accent" />,
      title: 'Mobile App For Easier Communication On The Go',
      description: 'Access your unified inbox from anywhere with our mobile app, ensuring you can respond to customer messages and manage communications while on the move.'
    }
  ];

  const integrations = [
    { name: 'Facebook Messenger', logo: '📘' },
    { name: 'Email', logo: '✉️' },
    { name: 'SMS', logo: '📱' },
    { name: 'Webchat', logo: '💬' },
    { name: 'Google Business Messages', logo: '🔍' }
  ];

  const useCases = [
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Customer Support Teams',
      description: 'Handle customer inquiries across multiple channels from one dashboard, reducing response times and improving customer satisfaction.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: 'Sales & Lead Generation',
      description: 'Capture and nurture leads from various sources, automating initial responses and qualifying prospects before human follow-up.'
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: 'Appointment Scheduling',
      description: 'Allow customers to book appointments through chat, SMS, or email, with automated confirmations and reminders.'
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: 'Emergency Communications',
      description: 'Send urgent notifications and updates to customers via multiple channels, ensuring critical information reaches everyone.'
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-white !pt-24 !pb-12">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Unified Communication Platform
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Never Miss a Customer Message Again
          </p>
          <div className="flex flex-col gap-6 lg:gap-3 justify-center items-center lg:flex-row mt-8">
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

      {/* Features Section */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Communication Features
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Everything you need to manage customer communications across all channels in one powerful platform.
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

      {/* Integration Showcase */}
      <section className="bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect All Your Communication Channels
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Integrate with popular messaging platforms and communication tools to centralize your customer conversations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{integration.logo}</div>
                <p className="font-semibold text-text-primary">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect For Every Business Need
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Discover how businesses across industries leverage our unified communication platform to improve customer engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="card">
                <div className="mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {useCase.title}
                </h3>
                <p className="text-text-secondary">
                  {useCase.description}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available In All Plans
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Our unified communication platform is included in every Reputation Genius plan, ensuring you have the tools to connect with customers regardless of your subscription level.
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                <p className="font-semibold">Essentials</p>
                <p className="text-sm text-text-secondary">$97/month</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                <p className="font-semibold">Professional</p>
                <p className="text-sm text-text-secondary">$297/month</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                <p className="font-semibold">Platinum</p>
                <p className="text-sm text-text-secondary">$497/month</p>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Unify Your Customer Communications?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            See how our unified communication platform can transform the way you connect with customers. Book a demo to get started.
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