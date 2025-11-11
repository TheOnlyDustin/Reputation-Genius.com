import React from 'react';
import Link from 'next/link';
import {
  CheckCircle,
  Star,
  MessageSquare,
  Phone,
  Users,
  Zap,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Essentials',
      price: '$97',
      period: '/month',
      tagline: 'for emerging businesses just getting started',
      features: [
        {
          category: 'Reviews',
          items: [
            'Get New Reviews Automatically',
            'Auto-Request Reviews',
            'Respond To Reviews In One Place',
            'Review Sharing On Social Sites'
          ]
        },
        {
          category: 'Messaging',
          items: [
            'Full unified inbox'
          ]
        },
        {
          category: 'Webchat',
          items: [
            'Webchat'
          ]
        },
        {
          category: 'Auto Missed Call Text Back',
          items: [
            'Auto Missed Call Text Back'
          ]
        },
        {
          category: 'CRM',
          items: [
            'Grow audience',
            'Import/Export',
            'UNLIMITED Leads/Contacts'
          ]
        },
        {
          category: 'Payments',
          items: [
            'Easy Text 2 Pay Client Invoicing'
          ]
        },
        {
          category: 'Team',
          items: [
            'Up to 3 Team Members'
          ]
        }
      ],
      cta: 'START NOW',
      link: 'https://link.reputation-genius.com/payment-link/687053f5ddc6a608bcc5293d',
      trial: 'Free 14-Day Trial'
    },
    {
      name: 'Professional',
      price: '$297',
      period: '/month',
      tagline: 'for established businesses looking to grow',
      badge: 'MOST POPULAR',
      features: [
        {
          category: 'All Essentials features',
          items: [
            'All Essentials features'
          ]
        },
        {
          category: 'Listings',
          items: [
            'Manage, update, and track info for multiple locations with the ease of a single dashboard'
          ]
        },
        {
          category: 'Team',
          items: [
            'UNLIMITED Team Members'
          ]
        }
      ],
      cta: 'START NOW',
      link: 'https://link.reputation-genius.com/payment-link/6870552eddc6a60a71c5294b',
      trial: 'Free 14-Day Trial'
    },
    {
      name: 'Platinum',
      price: '$497',
      period: '/month',
      tagline: 'for emerging businesses just getting started',
      features: [
        {
          category: 'All Professional features',
          items: [
            'All Professional features'
          ]
        },
        {
          category: 'AI Marketing Automation',
          items: [
            'Never Lose Another Lead Or Customer Again',
            'Reduce cost with AI follow up for all contacts'
          ]
        }
      ],
      cta: 'START NOW',
      link: 'https://link.reputation-genius.com/payment-link/6870559fddc6a62dcac5294d',
      trial: 'Free 14-Day Trial'
    }
  ];

  const integrations = [
    'Clio', 'Google', 'Zapier', 'Facebook Messenger', 'Quickbooks'
  ];

  const faqs = [
    {
      question: 'What is included in the free 14-day trial?',
      answer: 'Our free trial gives you full access to all features of your chosen plan. You can connect your accounts, set up automations, and start managing your reputation immediately. No credit card required to start.'
    },
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover) and PayPal. All payments are processed securely through our payment partners.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees for any of our plans. You only pay the monthly subscription fee.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with our service within the first 30 days, we\'ll refund your payment in full.'
    },
    {
      question: 'How does the team member limit work?',
      answer: 'The Essentials plan allows up to 3 team members. Professional and Platinum plans have unlimited team members. Each team member gets their own login and can be assigned specific permissions.'
    },
    {
      question: 'What integrations are available?',
      answer: 'We integrate with Clio, Google Business Profile, Zapier, Facebook Messenger, QuickBooks, and many other popular business tools. More integrations are added regularly.'
    }
  ];

  const comparisonFeatures = [
    {
      category: 'Reviews',
      features: [
        { name: 'Automated Review Collection', essentials: true, professional: true, platinum: true },
        { name: 'Auto-Request Reviews', essentials: true, professional: true, platinum: true },
        { name: 'Review Response Management', essentials: true, professional: true, platinum: true },
        { name: 'Social Media Review Sharing', essentials: true, professional: true, platinum: true }
      ]
    },
    {
      category: 'Messaging',
      features: [
        { name: 'Unified Inbox', essentials: true, professional: true, platinum: true },
        { name: 'Multi-Channel Support', essentials: true, professional: true, platinum: true }
      ]
    },
    {
      category: 'Webchat',
      features: [
        { name: 'Website Chat Widget', essentials: true, professional: true, platinum: true },
        { name: 'Lead Capture Integration', essentials: true, professional: true, platinum: true }
      ]
    },
    {
      category: 'CRM',
      features: [
        { name: 'Lead Management', essentials: true, professional: true, platinum: true },
        { name: 'Contact Import/Export', essentials: true, professional: true, platinum: true },
        { name: 'Unlimited Contacts', essentials: true, professional: true, platinum: true }
      ]
    },
    {
      category: 'Payments',
      features: [
        { name: 'Text-to-Pay Invoicing', essentials: true, professional: true, platinum: true }
      ]
    },
    {
      category: 'Team Management',
      features: [
        { name: 'Team Members', essentials: 'Up to 3', professional: 'Unlimited', platinum: 'Unlimited' }
      ]
    },
    {
      category: 'Listings',
      features: [
        { name: 'Multi-Location Management', essentials: false, professional: true, platinum: true }
      ]
    },
    {
      category: 'AI Features',
      features: [
        { name: 'AI Marketing Automation', essentials: false, professional: false, platinum: true },
        { name: 'AI Lead Follow-up', essentials: false, professional: false, platinum: true }
      ]
    }
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-white section-container !pt-24 !pb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Plans & Pricing
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Choose the perfect plan for your business
          </p>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="bg-background-alt section-container !py-12">
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
              <div className="space-y-4 mb-8">
                {tier.features.map((featureGroup, groupIndex) => (
                  <div key={groupIndex}>
                    <h4 className="font-semibold text-text-primary mb-2">{featureGroup.category}</h4>
                    <ul className="space-y-2">
                      {featureGroup.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="text-center space-y-3">
                <a
                  href={tier.link}
                  className="btn-cta w-full text-center block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tier.cta}
                </a>
                <p className="text-sm text-text-secondary">{tier.trial}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="bg-white section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Easily Integrates With Leading Apps
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Connect Reputation Genius with your existing tools for seamless workflow automation.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="text-2xl font-bold text-gray-600 hover:text-primary transition-colors">
              {integration}
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-background-alt section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compare Plans
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See exactly what's included in each plan
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-6 font-semibold">Features</th>
                <th className="text-center p-6 font-semibold">Essentials</th>
                <th className="text-center p-6 font-semibold">Professional</th>
                <th className="text-center p-6 font-semibold">Platinum</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="border-b border-border bg-gray-50">
                    <td colSpan={4} className="p-4 font-semibold text-text-primary">
                      {category.category}
                    </td>
                  </tr>
                  {category.features.map((feature, featureIndex) => (
                    <tr key={featureIndex} className="border-b border-border">
                      <td className="p-6 text-sm">{feature.name}</td>
                      <td className="p-6 text-center">
                        {typeof feature.essentials === 'boolean' ? (
                          feature.essentials ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-sm font-medium">{feature.essentials}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof feature.professional === 'boolean' ? (
                          feature.professional ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-sm font-medium">{feature.professional}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof feature.platinum === 'boolean' ? (
                          feature.platinum ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-sm font-medium">{feature.platinum}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to know about our pricing and plans
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left flex justify-between items-center p-6 focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-text-primary">
                  {faq.question}
                </h3>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-text-secondary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-text-secondary" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-text-secondary">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="bg-primary text-white section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not sure which plan is right for you?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a personalized demo and let our experts help you choose the perfect plan for your business needs.
          </p>
          <Link href="/demo" className="btn-cta !bg-white !text-primary !hover:bg-gray-100">
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  );
}