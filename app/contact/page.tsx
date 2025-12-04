

import Script from 'next/script';
import ErrorBoundary from '@/components/ErrorBoundary';

import {
  Mail,
  Phone,
  Clock,
  MapPin,

  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

export default function ContactPage() {


  const contactInfo = [
    {
      icon: <Mail className="icon-small text-accent" />,
      label: 'Email',
      value: 'contact@reputation-genius.com',
      href: 'mailto:contact@reputation-genius.com'
    },
    {
      icon: <Phone className="icon-small text-accent" />,
      label: 'Phone',
      value: '1-413-798-8836',
      href: 'tel:14137988836'
    },
    {
      icon: <Clock className="icon-small text-accent" />,
      label: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM PST',
      href: null
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="icon-mini" />, href: 'https://www.facebook.com/reputationgenius', label: 'Facebook' },
    { icon: <Twitter className="icon-mini" />, href: 'https://www.facebook.com/reputationgenius', label: 'Twitter' },
    { icon: <Linkedin className="icon-mini" />, href: 'https://www.facebook.com/reputationgenius', label: 'LinkedIn' },
    { icon: <Instagram className="icon-mini" />, href: 'https://www.facebook.com/reputationgenius', label: 'Instagram' }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-white !pt-24 !pb-12">
        <div className="section-container text-center">
          <h1 className="heading-1">
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
          <div className="flex flex-col gap-12">
            {/* Contact Form */}
            <div className="w-full">
              <div className="card">
                <h2 className="heading-2">Ready to see how an AI Employee can work in your business—today?</h2>

                <div className="prose prose-lg text-text-secondary mb-8">
                  <p className="mb-4">
                    This 30–45 minute call is for business owners and teams who want to explore real implementation of AI in their business. You’ll meet with a reputation specialist to map your use cases, review best-fit workflows, and outline a fast path to launch.
                  </p>

                  <h3 className="heading-3">What we’ll cover</h3>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Your goals, call volume, and lead flow</li>
                    <li>How the AI Employee answers, qualifies, and books on your behalf</li>
                    <li>Integration options (phone numbers, calendars, CRM, pipelines)</li>
                    <li>Knowledge Base setup for your niche (we have prebuilt FAQs for 12+ industries)</li>
                    <li>Pricing, timeline, and rollout plan</li>
                  </ul>
                </div>

                <ErrorBoundary>
                  <div className="w-full h-[800px] border-none overflow-hidden">
                    <iframe
                      src="https://link.reputation-genius.com/widget/booking/jBgO8Co4QAp0N8m1PW0i"
                      className="w-full border-none overflow-hidden"
                      scrolling="no"
                      id="rFzMVQiEGHyQG6Q9jIJK_1764281000534"
                    ></iframe>
                    <br />
                    <Script src="https://link.reputation-genius.com/js/form_embed.js" strategy="lazyOnload" />
                  </div>
                </ErrorBoundary>
              </div>
            </div>

            {/* Contact Information Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contact Info */}
              <div className="card h-full">
                <h3 className="heading-3 mb-6">Contact Information</h3>
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
              <div className="card h-full">
                <h3 className="heading-3 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-colors"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Location Info */}
              <div className="card h-full">
                <h3 className="heading-3 mb-6">Our Location</h3>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <MapPin className="icon-feature text-primary" />
                  </div>
                  <h4 className="heading-4">
                    Headquarters
                  </h4>
                  <p className="text-text-secondary max-w-xs mx-auto">
                    Based in West Springfield, MA, we serve clients across the entire United States.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}