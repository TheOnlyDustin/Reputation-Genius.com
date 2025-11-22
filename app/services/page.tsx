import React from 'react';
import Link from 'next/link';
import {
  Star,
  MessageSquare,
  Phone,
  Users,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: 'Review Management',
      description: 'Automatically collect, respond to, and showcase 5-star reviews across all platforms. Never lose another customer to poor reviews.',
      href: '/services/review-management',
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
          <Link href="https://link.reputation-genius.com/widget/booking/tzA2IS1l19is03M4ufft" className="bg-white text-primary hover:bg-blue-50 font-bold px-10 py-5 rounded-xl text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block">
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  );
}