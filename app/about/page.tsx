import React from 'react';
import Link from 'next/link';
import {
  Target,
  Users,
  Award,
  Shield,
  CheckCircle,
  Star,
  TrendingUp,
  Heart,
  Zap,
  Globe,
  Clock,
  MessageSquare
} from 'lucide-react';

export default function AboutPage() {
  const valueProps = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Automated Review Management",
      description: "Never miss a review opportunity with our intelligent automation that captures and responds to reviews across all platforms."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Unified Communication",
      description: "Streamline all customer interactions into one powerful inbox, from Facebook Messenger to email and SMS."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "AI-Powered Automation",
      description: "Leverage cutting-edge AI to automate follow-ups, nurture leads, and grow your business while you focus on what matters."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Proven Results",
      description: "Join thousands of businesses that have transformed their online reputation and grown their revenue with Reputation Genius."
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Easy to Use",
      description: "Intuitive dashboard designed for busy business owners, not tech experts."
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and GDPR-ready data protection."
    },
    {
      icon: <Clock className="h-6 w-6 text-green-500" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support from real humans who understand your business."
    },
    {
      icon: <Globe className="h-6 w-6 text-green-500" />,
      title: "Multi-Platform Integration",
      description: "Works seamlessly with Google, Facebook, QuickBooks, Clio, and 50+ other business tools."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former Google product manager with 10+ years in SaaS and AI automation.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Ex-Microsoft engineer specializing in machine learning and scalable systems.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      bio: "Customer experience expert with a passion for helping businesses grow.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Full-stack engineering leader with experience at top-tier tech companies.",
      image: "/api/placeholder/150/150"
    }
  ];

  const stats = [
    {
      number: "10,000+",
      label: "Businesses Served",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      number: "500K+",
      label: "Reviews Managed",
      icon: <Star className="h-8 w-8 text-primary" />
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: <TrendingUp className="h-8 w-8 text-primary" />
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: <Heart className="h-8 w-8 text-primary" />
    }
  ];

  const certifications = [
    "SOC 2 Type II Certified",
    "GDPR Compliant",
    "HIPAA Ready",
    "ISO 27001",
    "PCI DSS Level 1"
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-white section-container !pt-24 !pb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            About Reputation Genius
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Building the future of reputation management with AI-powered automation
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-background-alt section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            We're on a mission to build a better future where technology reviews good jobs for everyone.
          </p>
          <p className="text-lg text-text-secondary mt-6 max-w-3xl mx-auto">
            Every business deserves the chance to shine online. We're democratizing reputation management by making powerful AI tools accessible to businesses of all sizes, ensuring no customer interaction goes unanswered and no opportunity is missed.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-text-primary">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-text-secondary">
            <p className="text-lg leading-relaxed mb-6">
              Founded in 2020, Reputation Genius was born from a simple observation: too many businesses were losing customers because they couldn't keep up with online reviews and communications.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our founders, having worked at top tech companies like Google and Microsoft, saw an opportunity to apply cutting-edge AI and automation to solve this universal business problem. What started as a small team of engineers has grown into a comprehensive platform trusted by thousands of businesses worldwide.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we're proud to be the leading AI-powered reputation management platform, helping businesses not just survive, but thrive in the digital age. We're on a mission to build a better future where technology reviews good jobs for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-background-alt section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Why Businesses Choose Reputation Genius
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Transform your business operations with our comprehensive suite of AI-powered tools
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {valueProps.map((prop, index) => (
            <div key={index} className="card text-center">
              <div className="flex justify-center mb-4">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary">
                {prop.title}
              </h3>
              <p className="text-text-secondary">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Why Choose Us
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            What sets Reputation Genius apart from the competition
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {whyChooseUs.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-text-primary">
                  {reason.title}
                </h3>
                <p className="text-text-secondary">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background-alt section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Meet Our Team
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The passionate experts behind Reputation Genius
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="card text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-text-primary">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-3">
                {member.role}
              </p>
              <p className="text-sm text-text-secondary">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-white section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Our Impact
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real numbers that showcase our commitment to excellence
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-lg font-medium text-text-primary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-background-alt section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Trusted & Certified
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Your data security and privacy are our top priorities
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-md border border-border">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-medium text-text-primary">{cert}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTAs Section */}
      <section className="bg-primary text-white section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of businesses that have already discovered the power of AI-driven reputation management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-cta !bg-white !text-primary !hover:bg-gray-100">
              See How We Can Help
            </Link>
            <Link href="/demo" className="btn-secondary !bg-transparent !text-white !border-white !hover:bg-white !hover:text-primary">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="bg-white py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary">
            Copyright Reputation Genius, LLC 2025 — All Rights Reserved | We're on a mission to build a better future where technology reviews good jobs for everyone.
          </p>
        </div>
      </section>
    </>
  );
}