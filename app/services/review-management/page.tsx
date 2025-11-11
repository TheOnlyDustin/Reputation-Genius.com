import React from 'react';
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
  Clock
} from 'lucide-react';

export default function ReviewManagementPage() {
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-white section-container !pt-24 !pb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Automated Review Management
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Get More 5-Star Reviews Automatically
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background-alt section-container">
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
      </section>

      {/* How It Works Section */}
      <section className="bg-white section-container">
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
      </section>

      {/* Benefits Section */}
      <section className="bg-background-alt section-container">
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
      </section>

      {/* Pricing Tiers Section */}
      <section className="bg-white section-container">
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
              <div className="mb-8">
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
              <div className="text-center">
                <Link href="/pricing" className="btn-cta w-full text-center block">
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-white section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Review Management?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of businesses using Reputation Genius to collect more reviews and build trust with customers.
          </p>
          <Link href="/pricing" className="btn-cta !bg-white !text-primary !hover:bg-gray-100">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}