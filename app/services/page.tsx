import React from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  BarChart,
  MessageCircle,
  Share2,
  Users,
  Bot,
  ArrowRight,
  CheckCircle,
  Phone,
  DollarSign
} from 'lucide-react';
import WebchatDemo from '@/components/WebchatDemo';


export default function ServicesPage() {
  const services = [
    {
      icon: <MessageCircle className="h-12 w-12 text-accent" />,
      title: 'Review Management',
      description: 'Automate review requests, monitor feedback across platforms, and showcase your best reviews to build trust.',
      link: '/services/review-management'
    },
    {
      icon: <Share2 className="h-12 w-12 text-accent" />,
      title: 'Social Media Planner',
      description: 'Schedule posts, track engagement, and manage all your social accounts from a single dashboard.',
      link: '/services/social-media-planner'
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: 'Unified Messaging',
      description: 'Consolidate emails, SMS, and social messages into one inbox for faster response times.',
      link: '/services/messaging'
    },
    {
      icon: <BarChart className="h-12 w-12 text-accent" />,
      title: 'CRM & Lead Management',
      description: 'Track leads, manage customer relationships, and automate follow-ups to close more deals.',
      link: '/services/crm'
    },
    {
      icon: <Bot className="h-12 w-12 text-accent" />,
      title: 'AI Marketing',
      description: 'Leverage AI to optimize your marketing campaigns and generate high-quality content.',
      link: '/services/ai-marketing'
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-accent" />,
      title: 'Webchat',
      description: 'Convert website visitors into leads with an AI-powered chat widget that works 24/7.',
      link: '/services/webchat'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white !pt-24 !pb-12">
        <div className="section-container text-center">
          <h1 className="heading-1">
            Comprehensive Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to grow your online presence and manage your reputation in one place.
          </p>
          <div className="flex flex-col gap-6 lg:gap-3 justify-center items-center lg:flex-row mt-8">
            <WebchatDemo />
            <a
              href="https://link.reputation-genius.com/widget/bookings/discovery-call-ai-agents?utm_source=website&utm_medium=cta&utm_campaign=services"
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

      {/* Services Grid */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-2">
              Why Choose Reputation Genius?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We provide the tools and support you need to succeed in the digital landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">All-in-One Platform</h3>
              <p className="text-text-secondary">
                Manage reviews, social media, messaging, and more from a single dashboard.
              </p>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-text-secondary">
                Leverage advanced AI to automate tasks and generate high-quality content.
              </p>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-text-secondary">
                Our team of experts is dedicated to helping you achieve your business goals.
              </p>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join thousands of businesses using Reputation Genius to grow their online presence.
          </p>
          <div className="flex flex-col gap-6 lg:gap-3 justify-center items-center lg:flex-row">
            <WebchatDemo className="bg-white text-primary hover:bg-blue-50" />
            <a
              href="https://link.reputation-genius.com/widget/bookings/discovery-call-ai-agents?utm_source=website&utm_medium=cta&utm_campaign=services"
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
    </>
  );
}