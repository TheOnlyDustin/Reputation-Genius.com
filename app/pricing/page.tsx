"use client";

import { useState, Fragment } from 'react';
import Link from 'next/link';
import Modal from '@/components/Modal';
import WebchatForm from '@/components/WebchatForm';
import {
  CheckCircle,

  MessageSquare,
  Phone,

  ChevronDown,
  ChevronUp,
  DollarSign
} from 'lucide-react';

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    'Clio', 'Google', 'Zapier', 'Facebook Messenger', 'Quickbooks'
  ];

  const faqs = [
    {
      question: 'What is included in the free 14-day trial?',
      answer: 'Our free trial gives you full access to all features of your chosen plan. You can connect your accounts, set up automations, and start managing your reputation immediately.'
    },
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will reflect on the next billing cycle.'
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
      answer: 'The Essentials plan allows up to 3 team members. Professional and Platinum plans have unlimited team members. Each team member adds their own calendar and email for bookings and communications, so this limit ensures effective system usage.'
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
        { name: 'Complete & Unified Online Presence', essentials: false, professional: true, platinum: true }
      ]
    },
    {
      category: 'Social Media',
      features: [
        { name: 'Social Media Planner', essentials: false, professional: true, platinum: true },
        { name: 'Automated Social Media Posting', essentials: false, professional: false, platinum: true },
        { name: 'Social Media AI Responder/Booking Agent', essentials: false, professional: false, platinum: true },
        { name: 'AI Content Creator', essentials: false, professional: false, platinum: true }
      ]
    },
    {
      category: 'AI Features',
      features: [
        { name: 'AI Marketing Automation', essentials: false, professional: false, platinum: true },
        { name: 'AI Lead Follow-up', essentials: false, professional: true, platinum: true }
      ]
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

      {/* Pricing Overview Section */}
      <section className="section-container bg-neutral-900 text-white relative overflow-hidden rounded-3xl my-12 !py-24">
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
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
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
        <div className="w-full">
          <table className="w-full bg-white rounded-lg shadow-md table-fixed">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-2 md:p-6 font-semibold text-xs md:text-base w-[34%] md:w-auto">Features</th>
                <th className="text-center p-1 md:p-6 font-semibold text-xs md:text-base w-[22%] md:w-auto">Essentials</th>
                <th className="text-center p-1 md:p-6 font-semibold text-xs md:text-base w-[22%] md:w-auto">Professional</th>
                <th className="text-center p-1 md:p-6 font-semibold text-xs md:text-base w-[22%] md:w-auto">Platinum</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((category) => (
                <Fragment key={category.category}>
                  <tr className="border-b border-border bg-gray-50">
                    <td colSpan={4} className="p-2 md:p-4 font-semibold text-text-primary text-xs md:text-base">
                      {category.category}
                    </td>
                  </tr>
                  {category.features.map((feature, featureIndex) => (
                    <tr key={featureIndex} className="border-b border-border">
                      <td className="p-2 md:p-6 text-xs md:text-sm">{feature.name}</td>
                      <td className="p-1 md:p-6 text-center">
                        {typeof feature.essentials === 'boolean' ? (
                          feature.essentials ? <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mx-auto" /> : <span className="text-gray-400 text-xs md:text-base">—</span>
                        ) : (
                          <span className="text-[10px] md:text-sm font-medium block leading-tight">{feature.essentials}</span>
                        )}
                      </td>
                      <td className="p-1 md:p-6 text-center">
                        {typeof feature.professional === 'boolean' ? (
                          feature.professional ? <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mx-auto" /> : <span className="text-gray-400 text-xs md:text-base">—</span>
                        ) : (
                          <span className="text-[10px] md:text-sm font-medium block leading-tight">{feature.professional}</span>
                        )}
                      </td>
                      <td className="p-1 md:p-6 text-center">
                        {typeof feature.platinum === 'boolean' ? (
                          feature.platinum ? <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mx-auto" /> : <span className="text-gray-400 text-xs md:text-base">—</span>
                        ) : (
                          <span className="text-[10px] md:text-sm font-medium block leading-tight">{feature.platinum}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </Fragment>
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

      {/* CTAs Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="section-container relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join thousands of businesses that have already discovered the power of AI-driven reputation management.
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Experience Our AI Webchat"
      >
        <div className="w-full h-[600px] md:h-[500px]">
          <WebchatForm />
        </div>
      </Modal>
    </>
  );
}