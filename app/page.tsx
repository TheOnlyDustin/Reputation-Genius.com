import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, 
  TrendingUp, 
  Users, 
  Shield, 
  Phone, 
  MessageSquare, 
  Calendar,
  BarChart3,
  CheckCircle,
  Zap
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: 'Reputation Management',
      description: 'Monitor and manage your online reviews across 50+ platforms. Turn negative feedback into opportunities and amplify positive reviews.',
      href: '/reputation-management',
    },
    {
      icon: <Phone className="h-8 w-8 text-accent" />,
      title: 'AI Employee Systems',
      description: 'Never miss a customer call. AI-powered virtual receptionist handles calls, captures leads, and schedules appointments 24/7.',
      href: '/ai-employee-systems',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: 'Website Chatbot',
      description: 'Engage visitors instantly with intelligent chatbots that answer questions, qualify leads, and book appointments automatically.',
      href: '/website-chatbot',
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: 'AI Follow-Up Automation',
      description: 'Automatically follow up with missed calls via text. Convert voicemails into conversations and capture leads you would have lost.',
      href: '/ai-follow-up',
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-accent" />,
      title: 'Social Media Planner',
      description: 'Plan, schedule, and post across all social platforms. Maintain consistent presence without the daily hassle.',
      href: '/social-media-planner',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: 'Listings Management',
      description: 'Ensure your business information is accurate across 50+ directories. Fix inconsistencies that cost you customers.',
      href: '/listings-management',
    },
  ];

  const stats = [
    { number: '50+', label: 'Directories Scanned' },
    { number: '34%', label: 'Fewer Missed Calls' },
    { number: '24/7', label: 'AI Availability' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  const steps = [
    {
      number: '01',
      title: 'Get Your Free Report',
      description: 'Enter your business details and receive a comprehensive audit of your online presence across 50+ platforms.',
    },
    {
      number: '02',
      title: 'Review Findings',
      description: 'Discover exactly where your business appears online, what information is incorrect, and how you rank in local search.',
    },
    {
      number: '03',
      title: 'Transform Your Reputation',
      description: 'Implement our AI-powered solutions to fix issues, capture more leads, and dominate your local market.',
    },
  ];

  const testimonials = [
    {
      quote: "Reputation Genius helped us go from barely visible online to dominating local search results. Our phone hasn't stopped ringing!",
      author: "Mike Thompson",
      business: "Thompson's Plumbing Services",
      rating: 5,
    },
    {
      quote: "The AI follow-up system is a game changer. We're converting 40% more leads just by responding to missed calls instantly.",
      author: "Sarah Martinez",
      business: "Elite HVAC Solutions",
      rating: 5,
    },
    {
      quote: "Finally, a reputation management solution that actually works. The free report showed us exactly what we needed to fix.",
      author: "James Wilson",
      business: "Wilson Construction Co.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="section-container py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Never Lose Another Lead Again
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                AI-powered reputation management and customer engagement for service businesses. 
                Capture every opportunity, automate follow-ups, and dominate local search.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/free-reputation-report" className="btn-cta">
                  Get Your Free Report
                </Link>
                <a 
                  href="tel:+14133142553" 
                  className="bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-md text-lg transition-colors shadow-lg text-center"
                >
                  Call AI Demo: (413) 314-2553
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/67a9038a6c0e130deda2c867.png"
                alt="Reputation Genius"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background-alt py-12">
        <div className="section-container !py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete AI-Powered Solutions for Local Businesses
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to manage your reputation, capture leads, and grow your service business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-text-secondary mb-4">
                {service.description}
              </p>
              <Link 
                href={service.href}
                className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center"
              >
                Learn More
                <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-background-alt section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get started in three simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-8 shadow-lg h-full">
                <div className="text-5xl font-bold text-accent/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-accent">
                  <span className="text-3xl">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real results from real service businesses
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-text-secondary mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-text-primary">
                  {testimonial.author}
                </p>
                <p className="text-sm text-text-secondary">
                  {testimonial.business}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Online Reputation?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your free comprehensive reputation report and discover exactly how to capture more leads, 
            improve your rankings, and dominate your local market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/free-reputation-report" className="btn-cta !bg-accent !hover:bg-accent-dark">
              Get Your Free Report Now
            </Link>
            <p className="text-blue-100">
              No credit card required • Takes 2 minutes • 50+ directories scanned
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>No commitment</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Instant results</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>100% free</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
