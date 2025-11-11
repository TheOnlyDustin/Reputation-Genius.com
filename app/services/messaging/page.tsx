import React from 'react';
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
  Shield
} from 'lucide-react';

export default function MessagingPage() {
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
      <section className="bg-white section-container !pt-24 !pb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Unified Communication Platform
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Never Miss a Customer Message Again
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background-alt section-container">
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
      </section>

      {/* Integration Showcase */}
      <section className="bg-white section-container">
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
      </section>

      {/* Use Cases Section */}
      <section className="bg-background-alt section-container">
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
      </section>

      {/* Availability Section */}
      <section className="bg-white section-container">
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
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-white section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Unify Your Customer Communications?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            See how our unified communication platform can transform the way you connect with customers. Book a demo to get started.
          </p>
          <Link href="/demo" className="btn-cta !bg-white !text-primary !hover:bg-gray-100">
            Book a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}