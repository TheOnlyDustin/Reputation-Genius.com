'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  TrendingUp,
  Upload,
  Download,
  BarChart3,
  Target,
  ArrowRight,
  CheckCircle,
  Database,
  Eye,
  Filter,
  MessageSquare,
  Phone,
  DollarSign,
  X
} from 'lucide-react';
import WebchatForm from '@/components/WebchatForm';
import BookDemoButton from '@/components/BookDemoButton';

export default function CRMPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: 'Grow Your Audience & Track Lead Sources',
      description: 'Know exactly where your new leads are coming from with comprehensive tracking. Monitor lead generation across all channels including webchat, reviews, messaging, and more.'
    },
    {
      icon: <Upload className="h-8 w-8 text-accent" />,
      title: 'Easily Import/Export Leads',
      description: 'Seamlessly import existing contacts from CSV files or export your lead data for backup and analysis. Full data portability with no vendor lock-in.'
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: 'UNLIMITED Leads/Contacts',
      description: 'Store unlimited leads and contacts in Professional and Platinum plans. Never worry about hitting contact limits as your business grows.'
    }
  ];

  const capabilities = [
    {
      icon: <BarChart3 className="h-8 w-8 text-accent" />,
      title: 'Advanced Lead Analytics',
      description: 'Track lead conversion rates, source attribution, and customer journey analytics to optimize your marketing efforts.'
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: 'Lead Scoring & Segmentation',
      description: 'Automatically score leads based on engagement and behavior. Create targeted segments for personalized follow-up.'
    },
    {
      icon: <Eye className="h-8 w-8 text-accent" />,
      title: 'Lead Activity Monitoring',
      description: 'Monitor all lead interactions across channels. See who opened emails, clicked links, or engaged with your content.'
    },
    {
      icon: <Filter className="h-8 w-8 text-accent" />,
      title: 'Smart Lead Filtering',
      description: 'Filter and search leads by multiple criteria including source, engagement level, location, and custom tags.'
    }
  ];

  const DashboardPreview = () => (
    <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg max-w-4xl mx-auto overflow-hidden">
      <div className="bg-primary text-white p-4">
        <h3 className="font-semibold">CRM Dashboard</h3>
        <p className="text-sm opacity-90">Lead Management Overview</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-primary">1,247</div>
            <div className="text-sm text-gray-600">Total Leads</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">89</div>
            <div className="text-sm text-gray-600">New This Week</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">23%</div>
            <div className="text-sm text-gray-600">Conversion Rate</div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Recent Leads</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <div>
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-sm text-gray-600">Webchat - 2 hours ago</div>
              </div>
              <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Hot Lead</div>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <div>
                <div className="font-medium">Mike Chen</div>
                <div className="text-sm text-gray-600">Google Review - 1 day ago</div>
              </div>
              <div className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">New</div>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <div className="font-medium">Lisa Rodriguez</div>
                <div className="text-sm text-gray-600">Facebook Messenger - 3 days ago</div>
              </div>
              <div className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Follow Up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Header Section */}
      <section className="bg-white !pt-24 !pb-12">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Complete CRM Solution
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Grow Your Audience & Track Every Lead
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

      {/* Features Section */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful CRM Features
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Everything you need to manage, track, and convert leads into loyal customers.
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-lg text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See Your Leads In Action
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Get a complete view of your lead pipeline with our intuitive CRM dashboard.
            </p>
          </div>
          <div className="flex justify-center">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* Lead Tracking Capabilities Section */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Lead Tracking
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Never lose track of a potential customer with comprehensive lead monitoring and analytics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="card">
                <div className="mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {capability.title}
                </h3>
                <p className="text-text-secondary">
                  {capability.description}
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
              Our complete CRM solution is included in every Reputation Genius plan, with unlimited contacts in Professional and Platinum tiers.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                <p className="font-semibold">Essentials</p>
                <p className="text-sm text-text-secondary">$97/month</p>
                <p className="text-xs text-gray-500 mt-1">CRM Included</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                <p className="font-semibold">Professional</p>
                <p className="text-sm text-text-secondary">$297/month</p>
                <p className="text-xs text-green-600 font-medium mt-1">UNLIMITED Contacts</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                <p className="font-semibold">Platinum</p>
                <p className="text-sm text-text-secondary">$497/month</p>
                <p className="text-xs text-green-600 font-medium mt-1">UNLIMITED Contacts</p>
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
            Ready to Grow Your Audience?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Start tracking leads and building relationships with our complete CRM solution.
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