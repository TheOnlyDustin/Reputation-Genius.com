import React from 'react';
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
  Filter
} from 'lucide-react';

export default function CRMPage() {
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
      <section className="bg-white section-container !pt-24 !pb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Complete CRM Solution
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Grow Your Audience & Track Every Lead
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background-alt section-container">
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
      </section>

      {/* Dashboard Preview Section */}
      <section className="bg-white section-container">
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
      </section>

      {/* Lead Tracking Capabilities Section */}
      <section className="bg-background-alt section-container">
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
      </section>

      {/* Availability Section */}
      <section className="bg-white section-container">
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
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-white section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Audience?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start tracking leads and building relationships with our complete CRM solution.
          </p>
          <Link
            href="/pricing"
            className="btn-cta !bg-white !text-primary !hover:bg-gray-100 inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}