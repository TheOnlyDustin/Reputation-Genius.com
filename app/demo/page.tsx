'use client';

import React from 'react';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Bot,
  Clock
} from 'lucide-react';
import BookDemoButton from '@/components/BookDemoButton';

export default function DemoPage() {
  const benefits = [
    'Personalized walkthrough of features',
    'Answers to your specific questions',
    'Custom implementation recommendations',
    'No commitment required'
  ];

  const handleAIDemo = () => {
    window.location.href = 'tel:14133142553';
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-white">
        <div className="section-container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-text-primary">
              See Reputation Genius In Action
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-text-secondary">
              Book a 15-minute personalized demo
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center bg-background-alt rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-text-secondary">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Demo Call Section */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-primary">
              <div className="text-center mb-6">
                <Bot className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">AI Demo Call Line</h2>
                <p className="text-text-secondary mb-4">Experience our AI voice capabilities instantly.</p>
                <div className="flex items-center justify-center text-sm text-green-600 mb-6">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Available 24/7 - No Waiting!</span>
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={handleAIDemo}
                  className="btn-cta !bg-primary hover:!bg-primary-dark mb-4 flex items-center justify-center mx-auto"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call 1-413-314-2553
                </button>
                <p className="text-sm text-text-secondary">
                  Or schedule a personalized demo with our expert team below
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Link Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-bold mb-6">Ready to Schedule?</h2>
              <p className="text-xl text-text-secondary mb-8">
                Book a time directly on our calendar to speak with a reputation specialist.
              </p>
              <BookDemoButton
                text="Book Your Demo Now"
                icon={<Clock className="ml-2 h-5 w-5" />}
                className="btn-cta text-lg px-8 py-4 items-center"
              />
            </div>

            {/* Alternative CTA */}
            <div className="text-center mt-8 pt-8">
              <p className="text-text-secondary mb-4">Not ready to book? Check out our pricing instead.</p>
              <Link href="/pricing" className="btn-secondary">
                View Pricing Instead
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}