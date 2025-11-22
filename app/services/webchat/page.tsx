import React from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  Users,
  TrendingUp,
  Zap,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Globe
} from 'lucide-react';

export default function WebchatPage() {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: 'Increase Website Conversions',
      description: 'Transform website visitors into customers with an on-site widget that seamlessly moves conversations from browsing to text-based engagement, capturing leads before they leave.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: 'Higher Conversion Rates',
      description: 'Convert more website visitors into paying customers by providing instant, personalized communication options.'
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Real-Time Customer Engagement',
      description: 'Engage with potential customers instantly, answer questions, and guide them through your sales funnel.'
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: 'Reduce Cart Abandonment',
      description: 'Help customers complete purchases by addressing concerns and providing support during the buying process.'
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: '24/7 Lead Capture',
      description: 'Never miss a potential customer with round-the-clock chat availability and automated lead qualification.'
    }
  ];

  const WebchatDemo = () => (
    <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="bg-primary text-white p-4 rounded-t-lg">
        <h3 className="font-semibold">Live Chat Demo</h3>
        <p className="text-sm opacity-90">How can we help you today?</p>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex justify-start">
          <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
            <p className="text-sm">Hi! I'm interested in your webchat solution.</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-primary text-white rounded-lg p-3 max-w-xs">
            <p className="text-sm">Great! Our webchat converts visitors to customers. Would you like a demo?</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
            <p className="text-sm">Yes, that sounds perfect!</p>
          </div>
        </div>
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold">
            Send
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Header Section */}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient pt-20 pb-32">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="section-container relative z-10 !py-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-text-primary">
                Webchat That <span className="text-gradient">Converts</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-text-secondary leading-relaxed">
                Turn Website Visitors Into Customers with an intelligent on-site widget.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/50 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/67755c99119936bc92c72176.webp"
                >
                  <source src="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/690460b77bdc53997da4e084.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conversion-Focused Webchat
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our intelligent webchat widget doesn't just chat—it converts browsers into buyers.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Experience how our webchat widget engages visitors and drives conversions in real-time.
            </p>
          </div>
          <div className="flex justify-center max-w-6xl mx-auto">
            <WebchatDemo />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Webchat Drives Conversions
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Discover the powerful benefits of implementing conversion-focused webchat on your website.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary">
                  {benefit.description}
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
              Our conversion-focused webchat is included in every Reputation Genius plan, giving you the tools to turn visitors into customers at any level.
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
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="section-container relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Convert More Visitors?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Start your free trial of our Professional plan and see how webchat can transform your website conversions.
          </p>
          <a
            href="https://link.reputation-genius.com/payment-link/6870552eddc6a60a71c5294b"
            className="bg-white text-primary hover:bg-blue-50 font-bold px-10 py-5 rounded-xl text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try It Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}