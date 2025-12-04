import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Help Center - Reputation Genius',
    description: 'Find answers to common questions about Reputation Genius services, pricing, and features.',
};

export default function HelpCenterPage() {
    const faqCategories = [
        {
            title: 'Getting Started',
            questions: [
                {
                    q: 'How do I sign up for Reputation Genius?',
                    a: (
                        <>
                            Signing up is easy! Simply visit our <Link href="/pricing" className="text-primary hover:underline">pricing page</Link>, choose the plan that fits your needs, and follow the prompts to create your account.
                        </>
                    ),
                },
                {
                    q: 'Is there an onboarding process?',
                    a: 'Yes, once you sign up, you will be guided through a setup wizard to connect your accounts (Google, Facebook, etc.) and configure your preferences. Our support team is also available to assist you.',
                },
            ],
        },
        {
            title: 'Pricing & Plans',
            questions: [
                {
                    q: 'How much does Reputation Genius cost?',
                    a: (
                        <>
                            We offer three main plans: Essentials ($97/mo), Professional ($297/mo), and Platinum ($497/mo). For a detailed breakdown of features, please visit our <Link href="/pricing" className="text-primary hover:underline">pricing page</Link>.
                        </>
                    ),
                },
                {
                    q: 'Can I change my plan later?',
                    a: 'Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Changes will take effect at the start of your next billing cycle.',
                },
            ],
        },
        {
            title: 'Review Management',
            questions: [
                {
                    q: 'How does the review management feature work?',
                    a: (
                        <>
                            Our platform aggregates reviews from major sites like Google and Facebook into a single dashboard. You can respond to reviews directly, request new reviews via SMS/email, and monitor your reputation. Learn more on our <Link href="/services/review-management" className="text-primary hover:underline">Review Management page</Link>.
                        </>
                    ),
                },
                {
                    q: 'Which platforms do you support?',
                    a: 'We support direct integration with Google Business Profile and Facebook. We can also monitor reviews on many other industry-specific sites.',
                },
            ],
        },
        {
            title: 'Webchat',
            questions: [
                {
                    q: 'How do I install the webchat widget?',
                    a: (
                        <>
                            Installing the webchat widget is simple. We provide a small snippet of code that you add to your website's header or footer. If you need help, check out our <Link href="/services/webchat" className="text-primary hover:underline">Webchat service page</Link> or contact support.
                        </>
                    ),
                },
                {
                    q: 'Can I customize the chat widget?',
                    a: 'Yes, you can customize the colors, welcome message, and avatar to match your brand identity.',
                },
            ],
        },
        {
            title: 'Social Media Planner',
            questions: [
                {
                    q: 'What features does the Social Media Planner have?',
                    a: (
                        <>
                            Our Social Media Planner allows you to schedule posts, manage content across multiple platforms, and analyze engagement. See more details on the <Link href="/services/social-media-planner" className="text-primary hover:underline">Social Media Planner page</Link>.
                        </>
                    ),
                },
            ],
        },
        {
            title: 'AI Phone Agent',
            questions: [
                {
                    q: 'What can the AI Phone Agent do?',
                    a: (
                        <>
                            The AI Phone Agent can answer calls, book appointments, answer FAQs, and route calls to the right person. It works 24/7 to ensure you never miss a lead. Visit the <Link href="/services/ai-phone-agent" className="text-primary hover:underline">AI Phone Agent page</Link> for more info.
                        </>
                    ),
                },
            ],
        },
        {
            title: 'Technical Support',
            questions: [
                {
                    q: 'How can I contact support?',
                    a: (
                        <>
                            You can reach our support team via the chat widget in your dashboard, by emailing <a href="mailto:contact@reputation-genius.com" className="text-primary hover:underline">contact@reputation-genius.com</a>, or by visiting our <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
                        </>
                    ),
                },
            ],
        },
    ];

    return (
        <>
            {/* Header Section */}
            <section className="bg-white section-container !pt-24 !pb-12">
                <div className="text-center">
                    <h1 className="heading-1">
                        Help Center
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
                        Frequently asked questions and support resources
                    </p>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="bg-background-alt section-container">
                <div className="max-w-4xl mx-auto">
                    {faqCategories.map((category, index) => (
                        <div key={index} className="mb-12">
                            <h2 className="heading-2 border-b border-gray-200 pb-2">
                                {category.title}
                            </h2>
                            <div className="space-y-4">
                                {category.questions.map((item, qIndex) => (
                                    <details
                                        key={qIndex}
                                        className="group bg-white rounded-lg border border-border overflow-hidden"
                                    >
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-text-primary hover:bg-gray-50 transition-colors">
                                            <span>{item.q}</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <div className="text-text-secondary p-6 pt-0 leading-relaxed">
                                            {item.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="mt-12 text-center bg-white p-8 rounded-xl border border-border shadow-sm">
                        <h3 className="heading-3 mb-4 text-text-primary">Still have questions?</h3>
                        <p className="text-text-secondary mb-6">
                            Can't find the answer you're looking for? Our team is here to help.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
