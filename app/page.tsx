"use client";

import React, { useState } from 'react';
import { 
  Search, CheckCircle2, Shield, Zap, Server, 
  Globe, Headphones, ArrowRight, Menu, PlayCircle,
  Cloud, Cpu, RefreshCw, Lock, ChevronRight, Star,
  DownloadCloud, UploadCloud, Activity,
  Compass, Database, Code, ShoppingBag, HelpCircle, MessageCircle,
  ChevronDown, Check, X
} from 'lucide-react';
import * as motion from 'motion/react-client';

// --- DATA ---
const pricingPlans = [
  {
    name: 'Basic',
    desc: 'Perfect for personal blogs, portfolio sites, or small business websites',
    prices: { 'Monthly': 350, 'Yearly': 200, '3 Years': 111 },
    oldPrice: '৳200/mo',
    features: ['5 GB NVMe Storage', '~10K Monthly Visitors', 'Standard Website Speed', '2 Domain Hosted', 'Lifetime Free SSL', 'One Click WordPress Install', 'Unlimited Bandwidth', '5 Email Accounts'],
    popular: false
  },
  {
    name: 'Starter',
    desc: 'Ideal for multiple sites with storage, WordPress & Laravel features',
    prices: { 'Monthly': 450, 'Yearly': 250, '3 Years': 166 },
    oldPrice: '৳300/mo',
    features: ['10 GB NVMe Storage', '~50K Monthly Visitors', 'Increased Website Speed', '5 Domain Hosted', 'Lifetime Free SSL', 'One Click WordPress Install', 'Unlimited Bandwidth', '25 Email Accounts'],
    popular: true
  },
  {
    name: 'Pro',
    desc: 'Best for growing businesses, eCommerce & landing pages',
    prices: { 'Monthly': 650, 'Yearly': 400, '3 Years': 249 },
    oldPrice: '৳500/mo',
    features: ['20 GB NVMe Storage', '~200K Monthly Visitors', 'Super Fast Website Speed', 'Unlimited Domain Hosted', 'Lifetime Free SSL', 'One Click WordPress Install', 'Unlimited Bandwidth', 'Unlimited Email Accounts'],
    popular: false
  },
  {
    name: 'Ultimate',
    desc: 'Maximum power for high traffic businesses and advertising',
    prices: { 'Monthly': 950, 'Yearly': 600, '3 Years': 416 },
    oldPrice: '৳800/mo',
    features: ['50 GB NVMe Storage', '~500K Monthly Visitors', 'Maximize Website Speed', 'Unlimited Domain Hosted', 'Lifetime Free SSL', 'One Click WordPress Install', 'Unlimited Bandwidth', 'Unlimited Email Accounts'],
    popular: false
  }
];

const features = [
  { icon: Server, title: 'Latest Control Panel', desc: 'We provide a popular and widely used control panel for our reseller hosting plans. cPanel is the latest version and is protected by advanced security guidelines.' },
  { icon: Cloud, title: 'Softaculous App Installer', desc: 'Install WordPress and more than 285 other content management systems (CMS) with just a few clicks using our built-in Softaculous app installer.' },
  { icon: Shield, title: 'Let\'s Encrypt SSL Certs', desc: 'As part of the Let\'s Encrypt SSL option, SSL certificates from Let\'s Encrypt are given for free to all customers. You will never have to worry about the SSL.' },
  { icon: Zap, title: 'LiteSpeed Web Server', desc: 'A website that loads slowly won\'t be able to rank on Google. We prioritize speed most of all for SEO. We utilize the LiteSpeed web server.' },
  { icon: Database, title: 'CloudLinux OS', desc: 'CloudLinux OS is what we use to run major server functions like PHP, Node, Python, or Ruby. The server was used by the CloudLinux operating system.' },
  { icon: Lock, title: 'Built in SSH Terminal', desc: 'As part of our service, we provide SSH access for your project requirements. There are many uses for SSH including logging in and performing operations.' }
];

const faqCategories = ['General Questions', 'Ordering & Billing', 'Hosting Server', 'Control Panel', 'Support System'];
const faqs = [
  { q: "What is Web Hosting?", a: "Web hosting is the service of storing data that keeps websites up and running for users. Every website online has a host server, and almost all use a web host to manage that storage. However, not all web hosts provide the same level of quality." },
  { q: "What is shared web hosting?", a: "Shared web hosting is a service where multiple websites reside on a single web server connected to the internet. This is generally the most economical option for hosting." },
  { q: "What is a domain name?", a: "A domain name is your website's equivalent of a physical address. It helps users find your site easily instead of using its IP address." },
  { q: "How can I trust you?", a: "We have been in the industry for years, serving thousands of satisfied customers with a 99.9% uptime guarantee and 24/7 expert support." },
  { q: "What's Domain Hosting BD history?", a: "We started with a mission to provide affordable, high-performance hosting solutions to businesses of all sizes, growing into a trusted provider globally." }
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'Monthly' | 'Yearly' | '3 Years'>('3 Years');
  const [activeFaqTab, setActiveFaqTab] = useState(faqCategories[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-x-hidden">
      
      {/* Top Flash Sale Banner */}
      <div className="bg-yellow-400 text-slate-900 text-xs sm:text-sm font-bold py-2 px-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4 z-50 relative">
        <span>FLASH SALE | Get up to <span className="text-red-600">81% OFF</span> + Free <strong>.COM Domain</strong> ends in</span>
        <div className="flex gap-1">
          <span className="bg-white/50 px-2 py-0.5 rounded">01 <span className="text-[10px] font-normal">D</span></span>:
          <span className="bg-white/50 px-2 py-0.5 rounded">22 <span className="text-[10px] font-normal">H</span></span>:
          <span className="bg-white/50 px-2 py-0.5 rounded">31 <span className="text-[10px] font-normal">M</span></span>:
          <span className="bg-white/50 px-2 py-0.5 rounded">58 <span className="text-[10px] font-normal">S</span></span>
        </div>
        <button className="bg-slate-900 text-white px-4 py-1 rounded-full text-xs hover:bg-slate-800 transition-colors">Claim Offer</button>
      </div>

      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="font-black text-2xl tracking-tight text-blue-600 flex items-center gap-1">
                <Server className="w-6 h-6" /> DOMAIN HOSTING BD
              </span>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-1">
              <a href="#" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#" className="px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-md shadow-sm shadow-blue-600/20">AI Builder <span className="bg-yellow-400 text-slate-900 text-[10px] px-1.5 py-0.5 rounded ml-1">NEW</span></a>
              
              {/* Mega Menu: Hosting */}
              <div className="relative group">
                <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1">
                  Hosting <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="w-[800px] bg-white rounded-xl shadow-xl border border-slate-100 flex overflow-hidden">
                    <div className="w-[65%] p-6 grid grid-cols-2 gap-4">
                      {[
                        { icon: Server, title: 'Web Hosting', desc: 'NVMe SSD server' },
                        { icon: Cloud, title: 'Cloud Hosting', desc: 'Fast autoscaling server' },
                        { icon: Compass, title: 'WordPress Hosting', desc: 'Fully Managed WordPress' },
                        { icon: Globe, title: 'Reseller Hosting', desc: 'Start your Business' },
                        { icon: Database, title: 'BDIX Hosting', desc: 'Lowest Network Latency' },
                        { icon: Zap, title: 'Turbo Hosting', desc: 'Fast Speed Guaranteed' },
                      ].map((item, idx) => (
                        <a key={idx} href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover/item:text-blue-600 transition-colors">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors">{item.title}</h4>
                            <p className="text-xs text-slate-500">{item.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="w-[35%] bg-slate-50 p-6 border-l border-slate-100 flex flex-col">
                      <div className="flex items-center gap-2 text-slate-900 font-bold mb-2 text-sm">
                        <HelpCircle className="w-4 h-4 text-blue-600" /> Need help choosing?
                      </div>
                      <p className="text-xs text-slate-500 mb-4">Get instant help from our experts via WhatsApp. 24/7!</p>
                      <div className="bg-blue-50 rounded-lg border border-blue-100 p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                          <span className="text-xs text-slate-600 font-medium">Online Now</span>
                        </div>
                        <p className="text-lg font-black text-blue-700">01750749652</p>
                      </div>
                      <a href="https://wa.me/8801750749652" target="_blank" rel="noopener noreferrer" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mt-auto">
                        <MessageCircle className="w-4 h-4" /> Chat with Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {['Domain', 'Server', 'Solutions', 'Tools'].map((item) => (
                <button key={item} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1">
                  {item} <ChevronDown className="w-3 h-3" />
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-slate-600 hover:text-blue-600"><Search className="w-5 h-5" /></button>
              <button className="px-6 py-2 text-sm font-bold text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                Dashboard
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-2 shadow-xl">
            {['Pricing', 'Hosting', 'Domain', 'Server', 'Solutions', 'Tools'].map((item) => (
              <a key={item} href="#" className="p-3 text-sm font-bold text-slate-700 border-b border-slate-100 hover:text-blue-600">{item}</a>
            ))}
            <button className="mt-4 w-full py-3 text-sm font-bold text-blue-600 border border-blue-600 rounded-lg">Dashboard</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0b1b42] pt-16 pb-24 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-yellow-400 font-bold text-sm mb-4 tracking-wide">Everything You Need to Create a Website</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Get Fastest Hosting<br />Up to 81% Discount
              </h1>
              
              <ul className="space-y-3 mb-8">
                {['Free .COM Domain with Yearly', 'Genuine & Latest Control Panel', 'Free WildCard SSL for Lifetime'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" /> {item}
                  </li>
                ))}
              </ul>

              {/* Hero Timer */}
              <div className="flex gap-4 mb-8">
                {[
                  { val: '01', label: 'DAYS' },
                  { val: '22', label: 'HOURS' },
                  { val: '31', label: 'MINS' },
                  { val: '58', label: 'SECS' }
                ].map((t, i) => (
                  <div key={i} className="bg-white text-slate-900 rounded-lg w-16 h-16 flex flex-col items-center justify-center shadow-lg">
                    <span className="text-xl font-black">{t.val}</span>
                    <span className="text-[10px] font-bold text-slate-500">{t.label}</span>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/30">
                <Cloud className="w-5 h-5" /> Claim Offer Now
              </button>
            </div>

            {/* Hero Graphic */}
            <div className="relative hidden lg:block">
              <div className="relative w-full max-w-lg mx-auto">
                <img src="https://picsum.photos/seed/domainhostingbdhero/600/600" alt="Hosting Expert" className="w-full h-auto rounded-2xl shadow-2xl object-cover" />
                
                {/* Floating Elements */}
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-6 -left-6 bg-[#1e293b] p-4 rounded-xl shadow-xl border border-slate-700">
                  <div className="text-white font-black text-2xl tracking-widest">SALE</div>
                </motion.div>
                
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900">24/7</div>
                    <div className="text-xs text-slate-500 font-bold">Expert Support</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#f8fafc] relative -mt-10 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Choose Your Perfect Plan</h2>
            <p className="text-slate-600 font-medium mb-8">You&apos;re just 5 minutes away from a faster website</p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border border-slate-200">
              {(['Monthly', 'Yearly', '3 Years'] as const).map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    billingCycle === cycle 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cycle}
                </button>
              ))}
              <span className="ml-4 mr-4 text-blue-600 font-bold text-sm flex items-center gap-1">
                <Zap className="w-4 h-4" /> Save 81%
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl transition-all duration-300 flex flex-col ${
                  plan.popular 
                    ? 'border-2 border-blue-600 shadow-xl lg:-translate-y-4 relative' 
                    : 'border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-bold rounded-t-xl absolute top-0 left-0 w-full -mt-[2px] -ml-[2px] pr-[4px]">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-6 text-center border-b border-slate-100 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    <Server className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-500 h-10 mb-4">{plan.desc}</p>
                  
                  <div className="mb-2">
                    <span className="text-sm text-slate-400 line-through font-medium">{plan.oldPrice}</span>
                  </div>
                  <div className="flex justify-center items-start gap-1 mb-2">
                    <span className="text-lg font-bold text-slate-900 mt-1">৳</span>
                    <span className="text-5xl font-black text-slate-900 tracking-tighter">{plan.prices[billingCycle]}</span>
                    <span className="text-sm text-slate-500 font-medium self-end mb-2">/mo</span>
                  </div>
                  <div className="text-xs font-bold text-blue-600 bg-blue-50 py-1 px-3 rounded-full inline-block mb-6">
                    Same Price Renew, Guaranteed
                  </div>
                  
                  <button className={`w-full py-3 rounded-full font-bold text-sm transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Get Pro Now'}
                  </button>
                  <p className="text-[10px] text-slate-400 mt-3">৳{plan.prices[billingCycle] * (billingCycle === 'Monthly' ? 1 : billingCycle === 'Yearly' ? 12 : 36)} billed every {billingCycle.toLowerCase()}</p>
                </div>

                <div className="p-6 flex-grow">
                  <h4 className="font-bold text-slate-900 mb-4">Features</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 border-t border-slate-100 text-center">
                  <button className="text-blue-600 text-sm font-bold flex items-center justify-center gap-1 w-full hover:text-blue-700">
                    See All Features <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Search Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Search your Domain Name</h2>
              <div className="flex flex-col sm:flex-row gap-2 mb-8">
                <div className="relative flex-grow">
                  <input 
                    type="text" 
                    className="w-full pl-4 pr-4 py-4 bg-white border border-slate-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                    placeholder="yourdomain.com"
                  />
                </div>
                <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" /> Search
                </button>
              </div>
              <div className="flex flex-wrap gap-6">
                {[
                  { tld: '.com', price: '৳1,650/Year', color: 'text-blue-600' },
                  { tld: '.net', price: '৳1,750/Year', color: 'text-slate-900' },
                  { tld: '.org', price: '৳1,650/Year', color: 'text-slate-900' },
                  { tld: '.xyz', price: '৳599/Year', color: 'text-slate-900' },
                ].map((d, i) => (
                  <div key={i}>
                    <span className={`font-black text-lg ${d.color}`}>{d.tld}</span>
                    <span className="text-sm text-slate-500 ml-2">{d.price}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 lg:justify-end">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center flex-1 lg:flex-none lg:w-40">
                <div className="text-sm font-bold text-slate-600 mb-2">Sale</div>
                <div className="text-3xl font-black text-slate-900 mb-2">.com</div>
                <div className="bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">66% off</div>
                <div className="text-sm text-blue-600 font-bold">৳1,650/year</div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center flex-1 lg:flex-none lg:w-40">
                <div className="text-sm font-bold text-slate-600 mb-2">Deal</div>
                <div className="text-3xl font-black text-slate-900 mb-2">.org</div>
                <div className="bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">35% off</div>
                <div className="text-sm text-blue-600 font-bold">৳1,650/year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Web Hosting */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Why Choose Web Hosting?</h2>
            <p className="text-slate-600 font-medium">With our Web Hosting plans, you&apos;ll receive more resources for less money, ensuring the reliability you can count on. Starting your own business with Domain Hosting BD is easier than you think!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30 Day Money Back */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">30 day Money-back Guarantee</h2>
          <p className="text-slate-600 mb-8">There is no risk with our 30-day money back guarantee. Stay safe with assurance of refund.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center"><Check className="w-4 h-4" /></div>
              Easily Upgrade or Downgrade
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center"><Check className="w-4 h-4" /></div>
              Get Notified before suspension
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center"><Check className="w-4 h-4" /></div>
              Refund process within an hour
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">FAQs: Your questions, our answers</h2>
            <p className="text-slate-600 font-medium">Here you will find answers to the most frequently asked questions. If you still need assistance, feel free to contact our live support team.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs */}
            <div className="w-full lg:w-1/4 flex flex-col gap-2">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFaqTab(cat)}
                  className={`text-left px-6 py-4 rounded-xl font-bold text-sm transition-colors flex items-center gap-3 ${
                    activeFaqTab === cat 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <HelpCircle className={`w-5 h-5 ${activeFaqTab === cat ? 'text-white' : 'text-blue-600'}`} />
                  {cat}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="w-full lg:w-3/4 flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-slate-900">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1b42] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="font-black text-3xl tracking-tight text-white flex items-center gap-2">
                  <Server className="w-8 h-8 text-blue-500" /> DOMAIN HOSTING BD
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                Premium web hosting solutions with blazing-fast speeds, rock-solid security, and 24/7 expert support.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholder */}
                {[1, 2, 3, 4].map((i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <Globe className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Hosting</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">BDIX Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WordPress Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">VPS Hosting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Client Area</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Submit Ticket</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Domain Hosting BD. All rights reserved.</p>
            <div className="flex gap-2">
              <span className="text-sm text-slate-400 mr-2">Pay With:</span>
              {/* Payment Icons Placeholder */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-6 bg-white/20 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
