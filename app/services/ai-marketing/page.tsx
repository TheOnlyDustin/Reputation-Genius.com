import React from 'react';
import Link from 'next/link';
import {

  DollarSign,
  Clock,
  Target,
  TrendingUp,
  Crown,
  ArrowRight,

  Calculator,
  Users,
  BarChart3,
  CheckCircle
} from 'lucide-react';

export default function AIMarketingPage() {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: 'Never Lose Another Lead Or Customer Again',
      description: 'AI-powered follow-up ensures every lead receives personalized attention. Automated sequences keep prospects engaged and moving through your sales funnel.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-accent" />,
      title: 'Reduce Cost with AI Follow Up for All Contacts',
      description: 'Cut marketing costs by up to 60% with intelligent automation that handles routine follow-ups, freeing your team to focus on high-value activities.'
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: 'Automated Follow-up Sequences',
      description: 'Create sophisticated drip campaigns that adapt based on prospect behavior. Send the right message at the right time automatically.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: 'Smart Lead Nurturing',
      description: 'AI analyzes lead behavior and engagement patterns to deliver hyper-personalized content that converts prospects into customers.'
    }
  ];

  const roiBenefits = [
    {
      icon: <BarChart3 className="h-6 w-6 text-green-600" />,
      title: '40% Higher Conversion Rates',
      description: 'AI-powered nurturing increases lead-to-customer conversion by an average of 40%.'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: '10+ Hours Saved Weekly',
      description: 'Automate routine follow-ups and free up your team for strategic work.'
    },
    {
      icon: <DollarSign className="h-6 w-6 text-purple-600" />,
      title: '$50K+ Annual Savings',
      description: 'Reduce marketing costs while increasing revenue through better lead management.'
    },
    {
      icon: <Users className="h-6 w-6 text-orange-600" />,
      title: '300% More Qualified Leads',
      description: 'AI identifies and nurtures high-potential prospects for better sales outcomes.'
    }
  ];

  const ROICalculator = () => (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">AI Marketing ROI Calculator</h3>
        <p className="text-text-secondary">See the potential impact on your business</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Current Manual Process</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Lead follow-up time:</span>
                <span className="font-medium">15 hours/week</span>
              </div>
              <div className="flex justify-between">
                <span>Conversion rate:</span>
                <span className="font-medium">12%</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly marketing cost:</span>
                <span className="font-medium">$2,500</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">With AI Automation</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Lead follow-up time:</span>
                <span className="font-medium text-green-600">2 hours/week</span>
              </div>
              <div className="flex justify-between">
                <span>Conversion rate:</span>
                <span className="font-medium text-green-600">50%</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly marketing cost:</span>
                <span className="font-medium text-green-600">$1,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="font-semibold mb-4 text-center">Your Potential Savings</h4>
          <div className="space-y-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">$13,200</div>
              <div className="text-sm text-green-700">Annual Cost Savings</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">38%</div>
              <div className="text-sm text-blue-700">Higher Conversion Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">13 hrs</div>
              <div className="text-sm text-purple-700">Time Saved Weekly</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient pt-20 pb-24">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="section-container relative z-10 !py-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Crown className="icon-button mr-2" />
                Platinum Exclusive Feature
              </div>
              <h1 className="heading-hero">
                AI-Powered Marketing Automation
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto lg:mx-0">
                Never Lose Another Lead Or Customer Again
              </p>
            </div>
            <div className="relative block">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full aspect-video rounded-2xl shadow-2xl border border-white/50 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/69216cca090c4ac2d2260476.jpg"
                >
                  <source src="https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/690460a03469600110654def.mp4" type="video/mp4" />
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
            <h2 className="heading-1">
              Enterprise-Level AI Marketing
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Advanced artificial intelligence that transforms how you nurture leads and grow your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-1">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See how AI marketing automation can transform your business metrics and bottom line.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-1">
              Proven Results & Benefits
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Join leading businesses already using AI to revolutionize their marketing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {roiBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold ml-3">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm">
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
            <h2 className="heading-1">
              Exclusive to Platinum Tier
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              This premium AI marketing automation feature is available exclusively in our Platinum plan, designed for businesses serious about growth.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center opacity-50">
                <div className="text-2xl mb-2">🚫</div>
                <p className="font-semibold">Essentials</p>
                <p className="text-sm text-text-secondary">$97/month</p>
                <p className="text-xs text-gray-500 mt-1">Not Available</p>
              </div>
              <div className="text-center opacity-50">
                <div className="text-2xl mb-2">🚫</div>
                <p className="font-semibold">Professional</p>
                <p className="text-sm text-text-secondary">$297/month</p>
                <p className="text-xs text-gray-500 mt-1">Not Available</p>
              </div>
              <div className="text-center">
                <CheckCircle className="icon-small text-green-500 mr-4 flex-shrink-0" />
                <p className="font-semibold text-primary">Platinum</p>
                <p className="text-sm text-text-secondary">$497/month</p>
                <p className="text-xs text-primary font-medium mt-1">✓ AI Marketing Included</p>
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
          <Crown className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="heading-1">
            Ready to Unlock AI-Powered Growth?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join the elite businesses using AI marketing automation to dominate their markets.
          </p>
          <Link
            href="https://link.reputation-genius.com/payment-link/6870559fddc6a62dcac5294d?utm_source=website&utm_medium=cta&utm_campaign=ai-marketing"
            className="bg-white text-primary hover:bg-blue-50 font-bold px-10 py-5 rounded-xl text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center text-lg"
          >
            Upgrade to Platinum
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
          <p className="text-sm mt-4 text-blue-200">
            Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
