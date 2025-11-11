'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle,
  Calendar,
  Phone,
  MessageSquare,
  Bot,
  ArrowRight,
  Clock
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  locations: string;
  demoTime: string;
  contactMethod: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  demoTime?: string;
}

export default function DemoPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    locations: '',
    demoTime: '',
    contactMethod: 'Phone',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const benefits = [
    'Personalized walkthrough of features',
    'Answers to your specific questions',
    'Custom implementation recommendations',
    'No commitment required'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.demoTime) newErrors.demoTime = 'Please select a demo time';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Placeholder for GoHighLevel integration
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // Here you would integrate with GoHighLevel calendar and send confirmation email
    }
  };

  const handleAIDemo = () => {
    // Placeholder for AI demo integration
    alert('AI Demo Call feature coming soon! For now, please schedule a demo with our team.');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4 text-text-primary">
              Demo Scheduled Successfully!
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Thank you for your interest in Reputation Genius. We've received your demo request and will be in touch shortly to confirm your appointment.
            </p>
            <p className="text-lg text-text-secondary mb-8">
              A confirmation email has been sent to {formData.email}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-cta">
                Return Home
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                <p className="text-text-secondary mb-4">Most Popular: AI-powered demo available 24/7</p>
                <div className="flex items-center justify-center text-sm text-green-600 mb-6">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Instant AI Demo - No Waiting!</span>
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={handleAIDemo}
                  className="btn-cta !bg-primary hover:!bg-primary-dark mb-4"
                >
                  Start AI Demo Now
                </button>
                <p className="text-sm text-text-secondary">
                  Or schedule a personalized demo with our expert team below
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Schedule Your Demo</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                {/* Locations */}
                <div>
                  <label htmlFor="locations" className="block text-sm font-medium text-text-primary mb-2">
                    Current # of Locations
                  </label>
                  <input
                    type="number"
                    id="locations"
                    name="locations"
                    value={formData.locations}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="1"
                    min="1"
                  />
                </div>

                {/* Demo Time */}
                <div>
                  <label htmlFor="demoTime" className="block text-sm font-medium text-text-primary mb-2">
                    Best Time for Demo *
                  </label>
                  <input
                    type="datetime-local"
                    id="demoTime"
                    name="demoTime"
                    value={formData.demoTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.demoTime && <p className="text-red-500 text-sm mt-1">{errors.demoTime}</p>}
                </div>

                {/* Contact Method */}
                <div>
                  <label htmlFor="contactMethod" className="block text-sm font-medium text-text-primary mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Phone">Phone Call</option>
                    <option value="Video">Video Call</option>
                    <option value="AI Call">AI Call</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-text-primary mb-2">
                    Notes/Questions
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Any specific questions or topics you'd like to cover..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn-cta w-full">
                    Schedule Demo
                  </button>
                </div>
              </form>

              {/* Alternative CTA */}
              <div className="text-center mt-8 pt-8 border-t border-border">
                <p className="text-text-secondary mb-4">Not ready to book? Check out our pricing instead.</p>
                <Link href="/pricing" className="btn-secondary">
                  View Pricing Instead
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}