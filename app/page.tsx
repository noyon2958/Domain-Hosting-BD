import React from 'react';
import { 
  Search, CheckCircle2, Shield, Zap, Server, 
  Globe, Headphones, ArrowRight, Menu, PlayCircle,
  Cloud, Cpu, RefreshCw, Lock, ChevronRight, Star,
  DownloadCloud, UploadCloud, Activity
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 font-sans text-slate-900 overflow-x-hidden">
      
      {/* Glassmorphic Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full shadow-[0_8px_32px_rgba(31,38,135,0.1)] px-4 sm:px-6 py-3 flex justify-between items-center transition-all"
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Server className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl sm:text-2xl tracking-tight text-slate-900">
            DomainHosting<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">BD</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          {['Hosting', 'Domain', 'Server', 'Solutions', 'Tools'].map((item) => (
            <a key={item} href="#" className="text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors flex items-center gap-1">
              {item} <ChevronRight className="w-3 h-3 rotate-90" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-sm font-bold text-slate-700 hover:text-purple-600 transition-colors">Login</a>
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all"
          >
            Dashboard
          </motion.a>
        </div>

        <button className="lg:hidden text-slate-700 hover:text-purple-600">
          <Menu className="w-6 h-6" />
        </button>
      </motion.nav>

      {/* Hero Section with Animated Multi-Color Background */}
      <section className="relative pt-40 pb-32 lg:pt-48 lg:pb-40 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 -z-20"></div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-cyan-500/30 blur-[120px] -z-10"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-fuchsia-500/30 blur-[120px] -z-10"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-500/30 blur-[120px] -z-10"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-sm font-bold mb-8 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
                Trusted by 6,400+ Businesses
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                10x Faster Hosting.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-sm">
                  Launch in Minutes.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-blue-100/80 max-w-xl mb-10 leading-relaxed font-medium">
                Get blazing-fast NVMe SSD hosting, free SSL, and 24/7 expert support so you can focus on growing your business, not managing servers.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56, 189, 248, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#pricing" 
                  className="w-full sm:w-auto px-8 py-4 text-base font-bold text-blue-900 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full transition-all flex items-center justify-center gap-2"
                >
                  Start My Hosting Now <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#features" 
                  className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-white/5 backdrop-blur-sm border border-white/20 rounded-full transition-all flex items-center justify-center gap-2"
                >
                  View Pricing
                </motion.a>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-10 flex items-center gap-2 text-blue-200 text-sm font-medium">
                <Headphones className="w-5 h-5 text-cyan-400" />
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
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-[0_0_50px_rgba(147,51,234,0.3)] flex flex-col items-center justify-center z-20"
                >
                  <Server className="w-16 h-16 text-cyan-300 mb-2" />
                  <span className="text-white font-bold text-lg">Web Hosting</span>
                </motion.div>

                {/* Orbiting Elements */}
                {[
                  { icon: Cloud, label: "Cloud Hosting", color: "text-blue-300", pos: "top-0 left-1/4", delay: 0 },
                  { icon: Zap, label: "99.9% Uptime", color: "text-yellow-300", pos: "top-1/4 right-0", delay: 1 },
                  { icon: Shield, label: "Free SSL", color: "text-green-300", pos: "bottom-1/4 right-10", delay: 2 },
                  { icon: Globe, label: "Global CDN", color: "text-purple-300", pos: "bottom-0 left-1/3", delay: 3 },
                  { icon: Activity, label: "NVMe SSD", color: "text-pink-300", pos: "top-1/3 -left-4", delay: 4 },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 5, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute ${item.pos} bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl z-10`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <span className="text-white text-sm font-bold whitespace-nowrap">{item.label}</span>
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
          className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white p-8 md:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 text-center">Search your Domain Name</h2>
          
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-purple-500" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-16 pr-6 py-5 bg-white/80 border-2 border-purple-100 rounded-full text-lg focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all outline-none font-medium shadow-inner" 
                placeholder="yourdomain.com"
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full transition-all whitespace-nowrap text-lg shadow-lg"
            >
              Search
            </motion.button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
            {[
              { tld: '.com', price: '৳1,650/Year', color: 'text-blue-600', badge: 'Sale 66% off' },
              { tld: '.net', price: '৳1,750/Year', color: 'text-slate-800' },
              { tld: '.org', price: '৳1,650/Year', color: 'text-slate-800', badge: 'Deal 35% off' },
              { tld: '.xyz', price: '৳599/Year', color: 'text-slate-800' },
            ].map((domain, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className={`relative px-6 py-4 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all ${domain.badge ? 'ring-2 ring-purple-100' : ''}`}
              >
                {domain.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
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
      <section id="pricing" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">Flexible Plans</span>
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
                className={`relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 transition-all duration-300 ${plan.popular ? 'border-2 border-blue-500 shadow-[0_20px_50px_rgba(59,130,246,0.2)] transform lg:-translate-y-4' : 'border border-white shadow-xl hover:shadow-2xl'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-black px-6 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.popular ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-purple-100 text-purple-600'}`}>
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
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-blue-500' : 'text-purple-500'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white border-2 border-purple-100 text-purple-600 hover:border-purple-600 hover:bg-purple-50'}`}
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
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white shadow-2xl p-10 lg:p-20 relative overflow-hidden">
            {/* Decorative background blur inside card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/20 to-purple-400/20 blur-3xl rounded-full -z-10"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6">
                  Free Migration Service
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  Moving From <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Another Host?</span>
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
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
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
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full transition-all flex items-center gap-2 shadow-lg"
                >
                  Start Free Migration <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Graphic Side */}
              <div className="relative h-[400px] flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[1px] border-dashed border-purple-300 rounded-full opacity-50"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-10 border-[1px] border-dashed border-blue-300 rounded-full opacity-50"
                />
                
                {/* Center Logo */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/40 z-20 relative">
                  <span className="text-5xl font-black text-white">H</span>
                </div>

                {/* Orbiting Nodes */}
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-10 left-10 bg-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm text-slate-700 border border-slate-100">HostGator</motion.div>
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 bg-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm text-slate-700 border border-slate-100">GoDaddy</motion.div>
                <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute top-20 right-0 bg-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm text-slate-700 border border-slate-100">Namecheap</motion.div>
                <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute bottom-20 left-0 bg-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm text-slate-700 border border-slate-100">Hostinger</motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="py-24 bg-gradient-to-b from-transparent to-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">Customer Stories</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600 font-medium">Real businesses sharing their Hostnin experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2.5rem] overflow-hidden shadow-xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
                <img 
                  src={`https://picsum.photos/seed/testimonial${item}/600/800`} 
                  alt="Customer" 
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <div className="w-16 h-16 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
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
      <footer className="relative bg-slate-950 pt-32 pb-12 overflow-hidden rounded-t-[3rem] lg:rounded-t-[5rem] mt-24">
        {/* Animated Footer Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 -z-20"></div>
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-b from-blue-600/20 to-purple-600/20 blur-[100px] -z-10 rounded-full pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* CTA Box inside Footer */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-12 text-center mb-20 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Try Hosting Risk-Free for 30 Days</h2>
            <p className="text-blue-200 text-lg mb-10 font-medium">30 Days to Decide. Full Refund Guaranteed.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-blue-900 font-black rounded-full transition-all text-lg"
              >
                Get The Offer
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/5 border border-white/20 text-white font-bold rounded-full transition-all text-lg"
              >
                Chat with an Expert
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-3xl tracking-tight text-white">
                  DomainHosting<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">BD</span>
                </span>
              </div>
              <p className="text-blue-200/80 text-sm leading-relaxed mb-8 max-w-sm font-medium">
                Premium web hosting solutions with blazing-fast speeds, rock-solid security, and 24/7 expert support. Trusted by thousands of businesses worldwide.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.2, y: -5 }}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all border border-white/10"
                  >
                    <Star className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Hosting</h4>
              <ul className="space-y-4 text-sm font-medium text-blue-200/70">
                <li><a href="#" className="hover:text-white transition-colors">Web Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">BDIX Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WordPress Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">VPS Hosting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-sm font-medium text-blue-200/70">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-4 text-sm font-medium text-blue-200/70">
                <li><a href="#" className="hover:text-white transition-colors">Client Area</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Submit Ticket</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-blue-200/60 font-medium">© {new Date().getFullYear()} DomainHostingBD. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-blue-200/60 font-medium">
              <span>Payment Methods:</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-12 h-8 bg-white/10 rounded-md border border-white/5"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
