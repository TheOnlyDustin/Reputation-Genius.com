import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy - Reputation Genius',
    description: 'Learn about how Reputation Genius uses cookies and tracking technologies to improve your experience.',
};

export default function CookiePolicyPage() {
    return (
        <>
            {/* Header Section */}
            <section className="bg-white section-container !pt-24 !pb-12">
                <div className="text-center">
                    <h1 className="heading-1">
                        Cookie Policy
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
                        Understanding how we use cookies and tracking technologies
                    </p>
                    <div className="mt-8 text-text-secondary">
                        <p><strong>Effective Date:</strong> December 1, 2025</p>
                        <p><strong>Last Updated:</strong> December 1, 2025</p>
                    </div>
                </div>
            </section>

            {/* Cookie Policy Content */}
            <section className="bg-background-alt section-container">
                <div className="max-w-4xl mx-auto prose prose-lg max-w-none text-text-secondary">
                    <h2 className="heading-2">What Are Cookies?</h2>
                    <p className="mb-6">
                        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site. We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                    </p>

                    <h2 className="heading-2">How We Use Cookies</h2>
                    <p className="mb-4">We use cookies for the following purposes:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                        <li><strong>Performance Cookies:</strong> To collect information about how visitors use our website.</li>
                        <li><strong>Functional Cookies:</strong> To remember your preferences and settings.</li>
                        <li><strong>Marketing Cookies:</strong> To deliver relevant advertisements and track ad performance.</li>
                    </ul>

                    <h2 className="heading-2">Specific Tracking Technologies</h2>

                    <h3 className="heading-3">Google Tag Manager & Analytics</h3>
                    <p className="mb-4">
                        We use Google Tag Manager to manage website tags and Google Analytics to understand how visitors interact with our site.
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Purpose:</strong> Traffic analysis, user behavior tracking, and site performance monitoring.</li>
                        <li><strong>Data Collected:</strong> IP address, browser type, pages visited, and session duration.</li>
                        <li><strong>Retention:</strong> Data is retained for 14 months by default.</li>
                    </ul>

                    <h3 className="heading-3">Facebook Pixel</h3>
                    <p className="mb-4">
                        We use the Facebook Pixel to measure the effectiveness of our advertising and to show you relevant ads on Facebook.
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Purpose:</strong> Ad conversion tracking, retargeting, and audience building.</li>
                        <li><strong>Data Collected:</strong> Actions taken on our site, device information, and Facebook user ID (hashed).</li>
                        <li><strong>Retention:</strong> Data is retained for up to 180 days.</li>
                    </ul>

                    <h3 className="heading-3">Bing Webmaster Tools</h3>
                    <p className="mb-4">
                        We use Bing Webmaster Tools to monitor our site's performance in Bing search results.
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Purpose:</strong> Search engine optimization and site health monitoring.</li>
                        <li><strong>Data Collected:</strong> Search queries, click-through rates, and crawl errors.</li>
                        <li><strong>Retention:</strong> Data is retained in accordance with Microsoft's privacy policy.</li>
                    </ul>

                    <h3 className="heading-3">Microsoft Clarity</h3>
                    <p className="mb-4">
                        We use Microsoft Clarity to understand how users interact with our website through heatmaps and session recordings.
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Purpose:</strong> User experience improvement and behavior analysis.</li>
                        <li><strong>Data Collected:</strong> Mouse movements, clicks, scrolls, and session replays.</li>
                        <li><strong>Retention:</strong> Data is retained for 30 days.</li>
                    </ul>

                    <h2 className="heading-2">Managing Your Preferences</h2>
                    <p className="mb-6">
                        Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
                    </p>
                    <p className="mb-6">
                        To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a>.
                    </p>

                    <h2 className="heading-2">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about our Cookie Policy, please contact us:
                    </p>
                    <div className="bg-white p-6 rounded-lg border border-border">
                        <p className="mb-2"><strong>Reputation Genius, LLC</strong></p>
                        <p className="mb-2">Email: privacy@reputation-genius.com</p>
                        <p className="mb-2">Website: reputation-genius.com</p>
                        <p className="mb-2">Phone: (413) 314-2553</p>
                        <p>Address: West Springfield, MA</p>
                    </div>
                </div>
            </section>
        </>
    );
}
