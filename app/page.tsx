import React from 'react';
import { 
  Search, CheckCircle2, Shield, Zap, Server, 
  Globe, Headphones, ChevronDown, ArrowRight,
  Menu, X, PlayCircle, Star
} from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">
                DomainHosting<span className="text-indigo-600">BD</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Hosting</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Domain</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">BDIX Server</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Solutions</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Support</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Login</a>
              <a href="#" className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all shadow-sm hover:shadow-indigo-200">
                Client Area
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button className="text-slate-600 hover:text-slate-900">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-950 overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-[100px] rounded-full mix-blend-screen" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Trusted by 5,000+ Businesses in Bangladesh
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
              Lightning Fast Hosting.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Launch in Minutes.
              </span>
            </h1>
            
            <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Get blazing-fast NVMe SSD hosting, free SSL, and 24/7 expert support so you can focus on growing your business, not managing servers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#pricing" className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2">
                Start My Hosting Now <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#features" className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5" /> Watch Video
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> 30-Day Money Back</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Free Migration</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> 99.9% Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Domain Search Section (Overlapping Hero) */}
      <section className="relative -mt-16 z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Find Your Perfect Domain Name</h2>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all outline-none" 
                placeholder="Enter your domain name (e.g., mybusiness.com)"
              />
            </div>
            <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors whitespace-nowrap">
              Search Domain
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center divide-x divide-slate-100">
            <div className="px-4">
              <span className="block text-lg font-bold text-indigo-600">.com</span>
              <span className="text-sm text-slate-500">৳ 1,250/yr</span>
            </div>
            <div className="px-4">
              <span className="block text-lg font-bold text-slate-900">.net</span>
              <span className="text-sm text-slate-500">৳ 1,450/yr</span>
            </div>
            <div className="px-4">
              <span className="block text-lg font-bold text-slate-900">.org</span>
              <span className="text-sm text-slate-500">৳ 1,550/yr</span>
            </div>
            <div className="px-4">
              <span className="block text-lg font-bold text-slate-900">.bd</span>
              <span className="text-sm text-slate-500">৳ 800/yr</span>
            </div>
            <div className="px-4 hidden md:block">
              <span className="block text-lg font-bold text-slate-900">.xyz</span>
              <span className="text-sm text-slate-500">৳ 299/yr</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Web Hosting Plan</h2>
            <p className="text-lg text-slate-600">Start with confidence – 30 Days money-back guarantee. All plans include free migration and SSL.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Budget Hosting</h3>
              <p className="text-sm text-slate-500 mb-6">Perfect for personal sites and blogs.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">৳149</span>
                <span className="text-slate-500 font-medium">/month</span>
              </div>
              <button className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-semibold rounded-xl border border-slate-200 transition-colors mb-8">
                Select Plan
              </button>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> 5 GB NVMe SSD Storage</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> 1 Hosted Domain</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> Unlimited Bandwidth</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> Free SSL Certificate</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> LiteSpeed Web Server</li>
              </ul>
            </div>

            {/* Plan 2 - Popular */}
            <div className="bg-indigo-600 rounded-2xl border border-indigo-500 p-8 shadow-2xl shadow-indigo-200 relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">BDIX Hosting</h3>
              <p className="text-indigo-200 text-sm mb-6">Optimized for Bangladesh traffic.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">৳299</span>
                <span className="text-indigo-200 font-medium">/month</span>
              </div>
              <button className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-indigo-600 font-bold rounded-xl transition-colors mb-8">
                Select Plan
              </button>
              <ul className="space-y-4 text-sm text-indigo-100">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" /> 20 GB NVMe SSD Storage</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" /> 5 Hosted Domains</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" /> 1000 Mbps BDIX Bandwidth</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" /> Free SSL & Daily Backups</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" /> Premium LiteSpeed Server</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" /> Free Domain (Yearly Plan)</li>
              </ul>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Cloud</h3>
              <p className="text-sm text-slate-500 mb-6">For high-traffic eCommerce & agencies.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">৳599</span>
                <span className="text-slate-500 font-medium">/month</span>
              </div>
              <button className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-semibold rounded-xl border border-slate-200 transition-colors mb-8">
                Select Plan
              </button>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> 50 GB NVMe SSD Storage</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> Unlimited Domains</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> Unlimited Bandwidth</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> Free SSL & Hourly Backups</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /> Dedicated Resources (RAM/CPU)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to succeed online</h2>
            <p className="text-lg text-slate-600">We provide top-tier infrastructure and software to ensure your website is fast, secure, and always online.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "LiteSpeed Web Server", desc: "Up to 20x faster than Apache. Experience blazing fast load times for your WordPress sites." },
              { icon: Shield, title: "Imunify360 Security", desc: "Enterprise-grade security protecting your website from malware, brute-force attacks, and hackers." },
              { icon: Server, title: "NVMe SSD Storage", desc: "Latest generation NVMe drives providing maximum read/write speeds for your databases and files." },
              { icon: Globe, title: "Free Global CDN", desc: "Serve your content from 200+ locations worldwide for instant loading speeds anywhere." },
              { icon: CheckCircle2, title: "Daily Automated Backups", desc: "Sleep peacefully knowing your data is backed up daily and can be restored with one click." },
              { icon: Headphones, title: "24/7 Expert Support", desc: "Our local and international experts are always ready to help you via live chat and tickets." }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-colors">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack / Logos */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">Powered by Industry Leading Technology</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for tech logos like cPanel, Cloudflare, LiteSpeed, etc. */}
            <div className="text-2xl font-black text-slate-800">cPanel</div>
            <div className="text-2xl font-black text-slate-800">LiteSpeed</div>
            <div className="text-2xl font-black text-slate-800">Cloudflare</div>
            <div className="text-2xl font-black text-slate-800">WordPress</div>
            <div className="text-2xl font-black text-slate-800">Imunify360</div>
            <div className="text-2xl font-black text-slate-800">NVMe</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/hosting/1920/1080')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to launch your website?</h2>
          <p className="text-xl text-indigo-100 mb-10">Join thousands of satisfied customers and experience the best web hosting in Bangladesh.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-lg">
              View All Plans
            </button>
            <button className="px-8 py-4 bg-indigo-700 text-white font-bold rounded-xl hover:bg-indigo-800 transition-colors border border-indigo-500">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-2xl tracking-tight text-white">
                  DomainHosting<span className="text-indigo-500">BD</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-xs">
                Premium web hosting solutions with blazing-fast speeds, rock-solid security, and 24/7 expert support.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer"></div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer"></div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer"></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Hosting</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Web Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">BDIX Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WordPress Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">VPS Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dedicated Server</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Client Area</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Submit Ticket</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© {new Date().getFullYear()} DomainHostingBD. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <span>Payment Methods:</span>
              <div className="flex gap-2">
                {/* Payment method placeholders */}
                <div className="w-10 h-6 bg-slate-800 rounded"></div>
                <div className="w-10 h-6 bg-slate-800 rounded"></div>
                <div className="w-10 h-6 bg-slate-800 rounded"></div>
                <div className="w-10 h-6 bg-slate-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
