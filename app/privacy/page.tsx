import React from 'react';

export default function PrivacyPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-white section-container !pt-24 !pb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
          <div className="mt-8 text-text-secondary">
            <p><strong>Effective Date:</strong> November 11, 2025</p>
            <p><strong>Last Updated:</strong> November 11, 2025</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-background-alt section-container">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none text-text-secondary">
          <h2 className="text-3xl font-bold mb-6 text-text-primary">Introduction</h2>
          <p className="mb-6">
            Reputation Genius, LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at reputation-genius.com or use our SaaS platform for review management, messaging, CRM, and related services.
          </p>
          <p className="mb-6">
            By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-text-primary">What Information We Collect</h2>
          <h3 className="text-2xl font-semibold mb-4 text-text-primary">Personal Data</h3>
          <p className="mb-4">We may collect the following personal information:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Name, email address, phone number, and business information when you register for an account</li>
            <li>Payment information processed through secure third-party payment processors</li>
            <li>Communication data from integrated platforms (Facebook Messenger, Google Business Messages, SMS, email)</li>
            <li>Customer review data and responses managed through our platform</li>
            <li>Lead and contact information imported or created in our CRM system</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-text-primary">Usage Data</h3>
          <p className="mb-4">We automatically collect certain information when you use our services:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>IP address, browser type, operating system, and device information</li>
            <li>Pages visited, time spent on pages, and click-through data</li>
            <li>Platform usage statistics and feature interaction data</li>
            <li>Log data for security and troubleshooting purposes</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-text-primary">Cookies and Tracking Technologies</h3>
          <p className="mb-4">We use cookies and similar technologies to enhance your experience. Specifically, we utilize the following tools:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Google Tag Manager & Analytics:</strong> To understand website traffic and user behavior.</li>
            <li><strong>Facebook Pixel:</strong> To measure the effectiveness of our advertising.</li>
            <li><strong>Bing Webmaster Tools:</strong> To monitor and maintain our site's presence in Bing search results.</li>
            <li><strong>Microsoft Clarity:</strong> To understand how users interact with our website through heatmaps and session recordings.</li>
          </ul>
          <p className="mb-6">
            You can control cookie preferences through your browser settings, though disabling certain cookies may affect platform functionality.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-text-primary">How We Use Your Information</h2>
          <p className="mb-4">We use collected information for the following purposes:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide, maintain, and improve our review management, messaging, CRM, and AI marketing services</li>
            <li>Process payments and manage subscriptions</li>
            <li>Send service-related communications, updates, and support messages</li>
            <li>Analyze usage patterns to enhance user experience and develop new features</li>
            <li>Ensure platform security and prevent fraud</li>
            <li>Comply with legal obligations and enforce our terms of service</li>
            <li>Send marketing communications (with your consent where required)</li>
          </ul>
          <p className="mb-6">
            <strong>Important:</strong> We don't sell, share, or do anything with the data other than review it for breaks in our site, and seeing how we can improve the user experience.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-text-primary">Information Sharing and Disclosure</h2>
          <p className="mb-4">We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Third-Party Integrations:</strong> With services like GoHighLevel, Google, Facebook, QuickBooks, Clio, and Zapier as necessary for platform functionality</li>
            <li><strong>Payment Processors:</strong> Secure payment information is shared with certified payment processors for transaction processing</li>
            <li><strong>Service Providers:</strong> With trusted vendors who assist in operating our platform (under strict confidentiality agreements)</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
          <p className="mb-6">
            We do not sell your personal information to third parties for marketing purposes.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-text-primary">Data Retention</h2>
          <p className="mb-6">
            The data expires and is removed in accordance with our third-party providers (Google, Facebook, Microsoft). We do not adjust the duration of time the data is retained from the default setting to ensure compliancy.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-text-primary">Data Security</h2>
          <p className="mb-6">
            We implement industry-standard security measures to protect your information, including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Access controls and employee training on data protection</li>
            <li>SOC 2 Type II compliance and regular penetration testing</li>
            <li>Secure data centers with redundant backups</li>
          </ul>
          <p className="mb-6">
            While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-text-primary">Your Privacy Rights</h2>
          <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
            <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
            <li><strong>Opt-out:</strong> Opt-out of marketing communications or certain data processing</li>
            <li><strong>Restriction:</strong> Request limitation of how we process your information</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-text-primary">GDPR Rights (EU Residents)</h3>
          <p className="mb-6">
            If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with your local data protection authority.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-text-primary">CCPA Rights (California Residents)</h3>
          <p className="mb-6">
            California residents have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and the right to request deletion of your information.
          </p>

          <p className="mb-6">
            To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-text-primary">Third-Party Services</h2>
          <p className="mb-4">Our platform integrates with various third-party services:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>GoHighLevel:</strong> CRM and marketing automation platform</li>
            <li><strong>Payment Processors:</strong> Secure payment processing services</li>
            <li><strong>Communication Platforms:</strong> Facebook Messenger, Google Business Messages, SMS providers</li>
            <li><strong>Business Tools:</strong> QuickBooks, Clio, Zapier, and other integrations</li>
            <li><strong>Analytics & Tracking:</strong> Google Analytics, Google Tag Manager, Facebook Pixel, Bing Webmaster Tools, Microsoft Clarity</li>
          </ul>
          <p className="mb-6">
            These third parties have their own privacy policies, and we encourage you to review them. We only share necessary information for service functionality.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-text-primary">Children's Privacy</h2>
          <p className="mb-6">
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-text-primary">Changes to Privacy Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We will also send you an email notification for material changes. Your continued use of our services after any changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-text-primary">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-white p-6 rounded-lg border border-border">
            <p className="mb-2"><strong>Reputation Genius, LLC</strong></p>
            <p className="mb-2">Email: privacy@reputation-genius.com</p>
            <p className="mb-2">Website: reputation-genius.com</p>
            <p className="mb-2">Phone: (413) 314-2553</p>
            <p>Address: West Springfield, MA</p>
          </div>
          <p className="mt-6">
            We are committed to addressing your privacy concerns and will respond to inquiries within a reasonable timeframe.
          </p>
        </div>
      </section>
    </>
  );
}