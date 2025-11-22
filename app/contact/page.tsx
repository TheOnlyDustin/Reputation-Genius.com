'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      // For now, just log the form data and show success
      console.log('Contact form submitted:', formData);

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      label: 'Email',
      value: 'contact@reputation-genius.com',
      href: 'mailto:contact@reputation-genius.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      label: 'Phone',
      value: '1-413-798-8836',
      href: 'tel:14137988836'
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      label: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM PST',
      href: null
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-white !pt-24 !pb-12">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Ready to transform your business reputation? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Ready to see how an AI Employee can work in your business—today?</h2>

                <div className="prose prose-lg text-text-secondary mb-8">
                  <p className="mb-4">
                    This 30–45 minute call is for business owners and teams who want to explore real implementation of AI in their business. You’ll meet with a reputation specialist to map your use cases, review best-fit workflows, and outline a fast path to launch.
                  </p>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">What we’ll cover</h3>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Your goals, call volume, and lead flow</li>
                    <li>How the AI Employee answers, qualifies, and books on your behalf</li>
                    <li>Integration options (phone numbers, calendars, CRM, pipelines)</li>
                    <li>Knowledge Base setup for your niche (we have prebuilt FAQs for 12+ industries)</li>
                    <li>Pricing, timeline, and rollout plan</li>
                  </ul>
                </div>

                <div className="w-full h-[800px] border-none overflow-hidden">
                  <iframe
                    src="https://link.reputation-genius.com/widget/booking/tzA2IS1l19is03M4ufft"
                    style={{ width: '100%', height: '100%', border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    id="rFzMVQiEGHyQG6Q9jIJK_1763711799835"
                    title="Book a Call"
                  ></iframe>
                  <script src="https://link.reputation-genius.com/js/form_embed.js" type="text/javascript"></script>
                </div>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="card">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">{item.icon}</div>
                      <div>
                        <p className="font-medium text-text-primary">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-primary hover:text-primary-dark transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-text-secondary">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div className="card">
                <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card">
                <h3 className="text-xl font-semibold mb-6">Our Location</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-text-secondary">Interactive map coming soon</p>
                    <p className="text-sm text-text-secondary mt-1">
                      Serving businesses nationwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}