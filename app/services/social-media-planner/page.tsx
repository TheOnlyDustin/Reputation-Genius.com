'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    Share2,
    BarChart,
    Target,
    CheckCircle,
    ArrowRight,
    MessageSquare,
    Phone,
    DollarSign,
    X
} from 'lucide-react';
import WebchatForm from '@/components/WebchatForm';
import BookDemoButton from '@/components/BookDemoButton';

export default function SocialMediaPlannerPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const features = [
        {
            icon: <Calendar className="h-8 w-8 text-primary" />,
            title: "Automated Scheduling",
            description: "Plan and schedule posts effortlessly across Google My Business, Instagram, Facebook, and YouTube to keep your business active online."
        },
        {
            icon: <Clock className="h-8 w-8 text-primary" />,
            title: "Smart Timing",
            description: "Our intelligent scheduler analyzes engagement patterns to automatically post when your local audience is most active."
        },
        {
            icon: <Share2 className="h-8 w-8 text-primary" />,
            title: "Multi-Platform Publishing",
            description: "Manage your entire social media presence from one dashboard. Schedule engaging, high-impact posts across all major platforms."
        },
        {
            icon: <Target className="h-8 w-8 text-primary" />,
            title: "Brand Consistency",
            description: "Ensure every post maintains your unique colors, fonts, and imagery automatically. Build brand recognition without manual design work."
        },
        {
            icon: <BarChart className="h-8 w-8 text-primary" />,
            title: "Engagement Tracking",
            description: "Convert social media engagement into foot traffic. Track how your posts drive real-world store visits and customer relationships."
        },
        {
            icon: <CheckCircle className="h-8 w-8 text-primary" />,
            title: "Content Creation",
            description: "Use our AI tools to generate engaging content that resonates with your audience and reflects your unique brand identity."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-hero-gradient pt-24 pb-32">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="section-container relative z-10 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-primary font-medium text-sm mb-6 border border-blue-100">
                        <Calendar className="h-4 w-4 mr-2 fill-current" />
                        Social Media Planner
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-text-primary">
                        Keep Your Business <span className="text-gradient">Top-of-Mind</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-text-secondary leading-relaxed max-w-3xl mx-auto">
                        Maintain consistent online presence without the daily hassle. Automate your social media posting to attract more local customers.
                    </p>
                    <div className="flex flex-col gap-6 lg:gap-3 justify-center items-center lg:flex-row">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-primary-gradient text-white font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
                        >
                            See AI in Action
                            <MessageSquare className="ml-2 h-4 w-4" />
                        </button>
                        <a
                            href="https://link.reputation-genius.com/widget/bookings/discovery-call-ai-agents"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary hover:bg-gray-50 font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
                        >
                            Book a Call
                            <Phone className="ml-2 h-4 w-4" />
                        </a>
                        <Link href="/pricing" className="text-primary hover:bg-blue-50/50 font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 flex items-center justify-center whitespace-nowrap border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                            View Pricing
                            <DollarSign className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Feature Section */}
            <section className="bg-white">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-text-primary">
                                Post When Your Customers Are Most Active Online
                            </h2>
                            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                                Our intelligent scheduler analyzes engagement patterns to automatically post when your local audience is most active and ready to take action. Maximize reach and engagement without guessing the best times to post.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Automated posting schedule optimization',
                                    'Cross-platform synchronization',
                                    'Engagement analytics and insights',
                                    'Time-saving bulk scheduling'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-lg text-text-secondary">
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl opacity-30"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                                <img
                                    src="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/67d6d81a1b97ac0f5100b017.jpeg"
                                    alt="Social Media Scheduler Interface"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="bg-background-alt">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            Everything You Need to Grow Socially
                        </h2>
                        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                            Comprehensive tools to manage your social media presence and drive real-world results.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="card group hover:shadow-xl transition-all duration-300">
                                <div className="mb-6 p-4 bg-blue-50 rounded-xl inline-block group-hover:bg-primary group-hover:text-white transition-colors">
                                    {React.cloneElement(feature.icon as React.ReactElement, { className: "h-8 w-8" })}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-text-primary">
                                    {feature.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-white">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                            Drive More Foot Traffic By Staying Active Where Your Customers Scroll
                        </h2>
                        <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                            Schedule engaging, high-impact posts across Google and top social platforms during peak engagement times to consistently turn online attention into real-world store visits and lasting customer relationships.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 bg-neutral-50 rounded-xl border border-border">
                                <div className="text-4xl font-bold text-primary mb-2">3x</div>
                                <div className="font-medium text-text-primary">More Engagement</div>
                            </div>
                            <div className="p-6 bg-neutral-50 rounded-xl border border-border">
                                <div className="text-4xl font-bold text-primary mb-2">5hrs</div>
                                <div className="font-medium text-text-primary">Saved Weekly</div>
                            </div>
                            <div className="p-6 bg-neutral-50 rounded-xl border border-border">
                                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                                <div className="font-medium text-text-primary">Active Presence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-primary-gradient opacity-95"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="section-container relative z-10 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                        Ready to Automate Your Social Media?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                        Join hundreds of businesses growing their audience and driving foot traffic with our Social Media Planner.
                    </p>
                    <div className="flex flex-col gap-6 lg:gap-3 justify-center items-center lg:flex-row">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white text-primary hover:bg-blue-50 font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
                        >
                            See AI in Action
                            <MessageSquare className="ml-2 h-4 w-4" />
                        </button>
                        <a
                            href="https://link.reputation-genius.com/widget/bookings/discovery-call-ai-agents"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
                        >
                            Book a Call
                            <Phone className="ml-2 h-4 w-4" />
                        </a>
                        <Link href="/pricing" className="bg-[#0f52ba] text-blue-100 hover:text-white hover:bg-[#0f52ba]/90 font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 flex items-center justify-center whitespace-nowrap border border-white/30 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                            View Pricing
                            <DollarSign className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
            {/* Custom Webchat Modal */}
            {
                isModalOpen && (
                    <div
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div
                            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 z-50 p-2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full shadow-md transition-all duration-200"
                                aria-label="Close modal"
                            >
                                <X className="h-6 w-6" />
                            </button>
                            <div className="w-full h-full">
                                <WebchatForm />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
