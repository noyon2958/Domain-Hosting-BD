"use client";

import React, { useState } from 'react';
import { 
  Search, CheckCircle2, Shield, Zap, Server, 
  Globe, Headphones, ArrowRight, Menu, PlayCircle,
  Cloud, Cpu, RefreshCw, Lock, ChevronRight, Star,
  DownloadCloud, UploadCloud, Activity,
  Compass, Database, Code, ShoppingBag, HelpCircle, MessageCircle
} from 'lucide-react';
import * as motion from 'motion/react-client';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* Glassmorphic Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/70 backdrop-blur-xl border border-slate-200/50 rounded-full shadow-[0_8px_32px_rgba(16,185,129,0.05)] px-4 sm:px-6 py-3 flex justify-between items-center transition-all"
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
            <Server className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl sm:text-2xl tracking-tight text-slate-900">
            DomainHosting<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">BD</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          {/* Hosting Mega Menu */}
          <div className="relative group">
            <button className="text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors flex items-center gap-1 py-2">
              Hosting <ChevronRight className="w-3 h-3 rotate-90 transition-transform group-hover:-rotate-90" />
            </button>
            
            {/* Mega Menu Dropdown */}
            <div className="absolute top-full left-[-100px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="w-[850px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100 flex overflow-hidden">
                
                {/* Left Side: Hosting Options */}
                <div className="w-[65%] p-8 grid grid-cols-2 gap-x-6 gap-y-8">
                  {[
                    { icon: Server, title: 'Web Hosting', desc: 'NVMe SSD server' },
                    { icon: Cloud, title: 'Cloud Hosting', desc: 'Fast autoscaling server' },
                    { icon: Compass, title: 'WordPress Hosting', desc: 'Fully Managed WordPress' },
                    { icon: Globe, title: 'Reseller Hosting', desc: 'Start your Business' },
                    { icon: Database, title: 'BDIX Hosting', desc: 'Lowest Network Latency' },
                    { icon: Zap, title: 'Turbo Hosting', desc: 'Fast Speed Guaranteed' },
                    { icon: Code, title: 'Node.js Hosting', desc: 'JavaScript Runtime' },
                    { icon: ShoppingBag, title: 'WooCommerce Hosting', desc: 'E-commerce Optimized' },
                  ].map((item, idx) => (
                    <a key={idx} href="#" className="flex items-start gap-4 group/item">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover/item:bg-green-50 group-hover/item:text-green-600 transition-colors flex-shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover/item:text-green-600 transition-colors">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Right Side: Support */}
                <div className="w-[35%] bg-slate-50 p-8 border-l border-slate-100 flex flex-col">
                  <div className="flex items-center gap-2 text-slate-900 font-bold mb-3">
                    <HelpCircle className="w-5 h-5 text-green-600" />
                    Need help choosing a plan?
                  </div>
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    Get instant help from our experts via WhatsApp. We&apos;re here for you 24/7!
                  </p>
                  
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-xs text-slate-500 font-medium">Online Now</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-1">Chat with us on WhatsApp</p>
                    <p className="text-lg font-black text-green-600">01750749652</p>
                  </div>

                  <button className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-green-600/20 mt-auto">
                    <MessageCircle className="w-4 h-4" /> Chat with Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {['Domain', 'Server', 'Solutions', 'Tools'].map((item) => (
            <a key={item} href="#" className="text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors flex items-center gap-1 py-2">
              {item} <ChevronRight className="w-3 h-3 rotate-90" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-sm font-bold text-slate-600 hover:text-green-600 transition-colors">Login</a>
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all"
          >
            Dashboard
          </motion.a>
        </div>

        <button 
          className="lg:hidden text-slate-600 hover:text-green-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 mt-4 p-4 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl lg:hidden flex flex-col gap-4"
          >
            {['Hosting', 'Domain', 'Server', 'Solutions', 'Tools'].map((item) => (
              <a key={item} href="#" className="text-base font-semibold text-slate-700 hover:text-green-600 p-2 border-b border-slate-100">
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <a href="#" className="text-center text-base font-bold text-slate-700 hover:text-green-600 py-2">Login</a>
              <a href="#" className="text-center py-3 text-base font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                Dashboard
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section with Animated Multi-Color Background */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] bg-white">
        {/* Animated Background Blobs (Green/Teal/Emerald) */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-green-200/40 blur-[120px] -z-10"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-200/40 blur-[120px] -z-10"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-teal-100/50 blur-[120px] -z-10"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-bold mb-8 shadow-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                Trusted by 6,400+ Businesses
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                10x Faster Hosting.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 drop-shadow-sm">
                  Launch in Minutes.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
                Get blazing-fast NVMe SSD hosting, free SSL, and 24/7 expert support so you can focus on growing your business, not managing servers.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#pricing" 
                  className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
                >
                  Start My Hosting Now <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                  whileTap={{ scale: 0.95 }}
                  href="#features" 
                  className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  View Pricing
                </motion.a>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-10 flex items-center gap-2 text-slate-500 text-sm font-medium">
                <Headphones className="w-5 h-5 text-green-500" />
                24/7 Expert Support. We&apos;re here to help.
              </motion.div>
            </motion.div>

            {/* Right Side Abstract Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Center Main Server */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/80 backdrop-blur-2xl border border-green-100 rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.2)] flex flex-col items-center justify-center z-20"
                >
                  <Server className="w-16 h-16 text-green-500 mb-2" />
                  <span className="text-slate-800 font-bold text-lg">Web Hosting</span>
                </motion.div>

                {/* Orbiting Elements */}
                {[
                  { icon: Cloud, label: "Cloud Hosting", color: "text-green-500", pos: "top-0 left-1/4", delay: 0 },
                  { icon: Zap, label: "99.9% Uptime", color: "text-emerald-500", pos: "top-1/4 right-0", delay: 1 },
                  { icon: Shield, label: "Free SSL", color: "text-teal-500", pos: "bottom-1/4 right-10", delay: 2 },
                  { icon: Globe, label: "Global CDN", color: "text-green-600", pos: "bottom-0 left-1/3", delay: 3 },
                  { icon: Activity, label: "NVMe SSD", color: "text-emerald-600", pos: "top-1/3 -left-4", delay: 4 },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 5, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute ${item.pos} bg-white backdrop-blur-xl border border-slate-100 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl z-10`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <span className="text-slate-700 text-sm font-bold whitespace-nowrap">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domain Search Section (Glassmorphic Overlap) */}
      <section className="relative -mt-20 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(16,185,129,0.08)] border border-green-50 p-8 md:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 text-center">Search your Domain Name</h2>
          
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-4 sm:pl-6 flex items-center pointer-events-none">
                <Search className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-4 sm:py-5 bg-white border-2 border-slate-100 rounded-full text-base sm:text-lg focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none font-medium shadow-inner" 
                placeholder="yourdomain.com"
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full transition-all whitespace-nowrap text-base sm:text-lg shadow-lg shadow-green-500/20"
            >
              Search
            </motion.button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
            {[
              { tld: '.com', price: '৳1,650/Year', color: 'text-green-600', badge: 'Sale 66% off' },
              { tld: '.net', price: '৳1,750/Year', color: 'text-slate-800' },
              { tld: '.org', price: '৳1,650/Year', color: 'text-slate-800', badge: 'Deal 35% off' },
              { tld: '.xyz', price: '৳599/Year', color: 'text-slate-800' },
            ].map((domain, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className={`relative px-6 py-4 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all ${domain.badge ? 'ring-2 ring-green-100' : ''}`}
              >
                {domain.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                    {domain.badge}
                  </span>
                )}
                <span className={`block text-2xl font-black ${domain.color} mb-1`}>{domain.tld}</span>
                <span className="text-sm font-semibold text-slate-500">{domain.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">Flexible Plans</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Select Your Perfect Plan</h2>
            <p className="text-xl text-slate-600 font-medium">Choose the hosting that fits your needs. All plans include free migration.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: 'Cheapest Cloud', desc: 'Fast, secure cloud hosting with 16+ CDN worldwide.', price: '৳79', oldPrice: '৳2,844/First 3 Years', features: ['16+ Global CDN', 'Static Websites', '100% SSD Web Space'] },
              { name: 'Web Hosting', desc: 'Multi-platform hosting with 24/7 instant support.', price: '৳166', oldPrice: '৳1,995/year', features: ['Industry-Standard cPanel', 'Super Fast Speed', 'E-Commerce Optimized'], popular: true },
              { name: 'Turbo Hosting', desc: '10x faster NVMe hosting with Cloudflare Pro CDN included.', price: '৳747', oldPrice: '৳8,964/year', features: ['NVMe SSD + LiteSpeed', 'Cloudflare Pro ($240/yr Value)', 'Auto Image Optimizer'] },
              { name: 'Reseller', desc: 'Start your hosting business with full rebranding.', price: '৳4,999', oldPrice: 'Industry-Standard cPanel/WHM', features: ['Fully White Label', 'Fastest Servers', 'Priority Support'] },
            ].map((plan, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className={`relative bg-white rounded-[2rem] p-8 transition-all duration-300 ${plan.popular ? 'border-2 border-green-500 shadow-[0_20px_50px_rgba(16,185,129,0.15)] transform lg:-translate-y-4' : 'border border-slate-200 shadow-lg hover:shadow-xl'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-black px-6 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.popular ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600'}`}>
                  <Cloud className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{plan.name}</h3>
                <p className="text-sm text-slate-600 mb-8 font-medium h-10">{plan.desc}</p>
                
                <div className="mb-8">
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 font-bold mb-1">/month</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 line-through">{plan.oldPrice}</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-green-500' : 'text-slate-400'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30' : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-green-500 hover:text-green-600 hover:bg-green-50'}`}
                >
                  Select Plan <ArrowRight className="inline-block w-5 h-5 ml-1 -mt-1" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-600 font-bold text-sm">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> 30-Day Money Back</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Free Migration</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> 24/7 Expert Support</div>
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] border border-green-100 shadow-[0_20px_60px_rgba(16,185,129,0.08)] p-10 lg:p-20 relative overflow-hidden">
            {/* Decorative background blur inside card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-emerald-400/10 blur-3xl rounded-full -z-10"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block py-1.5 px-4 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-6">
                  Free Migration Service
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  Moving From <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Another Host?</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed">
                  Our expert team handles everything. zero downtime, zero hassle. Just sit back while we migrate your website seamlessly.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  {[
                    { icon: DownloadCloud, title: "Backup", desc: "Complete site backup" },
                    { icon: RefreshCw, title: "Transfer", desc: "Secure data migration" },
                    { icon: UploadCloud, title: "Restore", desc: "Go live instantly" },
                    { icon: Shield, title: "Seamless", desc: "Zero downtime guaranteed" }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-green-500/20 flex-shrink-0">
                        <step.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{step.title}</h4>
                        <p className="text-xs text-slate-500 font-medium">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-full transition-all flex items-center gap-2 shadow-lg"
                >
                  Start Free Migration <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Graphic Side */}
              <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center mt-12 lg:mt-0 scale-90 sm:scale-100">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[1px] border-dashed border-green-300 rounded-full opacity-50"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-10 border-[1px] border-dashed border-emerald-300 rounded-full opacity-50"
                />
                
                {/* Center Logo */}
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/40 z-20 relative">
                  <span className="text-4xl lg:text-5xl font-black text-white">H</span>
                </div>

                {/* Orbiting Nodes */}
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-4 left-4 lg:top-10 lg:left-10 bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl shadow-lg font-bold text-xs lg:text-sm text-slate-700 border border-slate-100">HostGator</motion.div>
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10 bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl shadow-lg font-bold text-xs lg:text-sm text-slate-700 border border-slate-100">GoDaddy</motion.div>
                <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute top-16 -right-2 lg:top-20 lg:right-0 bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl shadow-lg font-bold text-xs lg:text-sm text-slate-700 border border-slate-100">Namecheap</motion.div>
                <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute bottom-16 -left-2 lg:bottom-20 lg:left-0 bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl shadow-lg font-bold text-xs lg:text-sm text-slate-700 border border-slate-100">Hostinger</motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">Customer Stories</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600 font-medium">Real businesses sharing their Hostnin experience</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2.5rem] overflow-hidden shadow-xl cursor-pointer border border-slate-100"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
                <img 
                  src={`https://picsum.photos/seed/testimonial${item}/600/800`} 
                  alt="Customer" 
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <div className="w-16 h-16 bg-green-600/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 text-white fill-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">&quot;The best hosting company I have ever seen in BD&quot;</h3>
                  <p className="text-white/80 font-medium">Md. Ariful Islam</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-white pt-32 pb-12 overflow-hidden mt-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* CTA Box inside Footer */}
          <div className="bg-green-50 border border-green-100 rounded-[3rem] p-12 text-center mb-20 shadow-lg">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Try Hosting Risk-Free for 30 Days</h2>
            <p className="text-slate-600 text-lg mb-10 font-medium">30 Days to Decide. Full Refund Guaranteed.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-green-600 text-white font-black rounded-full transition-all text-base sm:text-lg shadow-md"
              >
                Get The Offer
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#f0fdf4" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-white border border-green-200 text-green-700 font-bold rounded-full transition-all text-base sm:text-lg shadow-sm"
              >
                Chat with an Expert
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-3xl tracking-tight text-slate-900">
                  DomainHosting<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">BD</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm font-medium">
                Premium web hosting solutions with blazing-fast speeds, rock-solid security, and 24/7 expert support. Trusted by thousands of businesses worldwide.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.2, y: -5 }}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-green-100 hover:text-green-600 transition-all border border-slate-200"
                  >
                    <Star className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-bold text-lg mb-6">Hosting</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="#" className="hover:text-green-600 transition-colors">Web Hosting</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">BDIX Hosting</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">WordPress Hosting</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">VPS Hosting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="#" className="hover:text-green-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="#" className="hover:text-green-600 transition-colors">Client Area</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Submit Ticket</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">System Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-500 font-medium">© {new Date().getFullYear()} DomainHostingBD. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
              <span>Payment Methods:</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-12 h-8 bg-slate-100 rounded-md border border-slate-200"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
