import React from 'react';
import { 
  Search, CheckCircle2, Shield, Zap, Server, 
  Globe, Headphones, ArrowRight, Menu, PlayCircle,
  Cloud, Cpu, RefreshCw, Lock, ChevronRight, Star,
  DownloadCloud, UploadCloud, Activity, Hexagon
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 font-sans text-white overflow-x-hidden selection:bg-pink-500 selection:text-white">
      
      {/* Glassmorphic Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)] px-4 sm:px-6 py-3 flex justify-between items-center transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Hexagon className="absolute w-10 h-10 text-pink-500 fill-pink-500/20 animate-[spin_10s_linear_infinite]" />
            <Cloud className="absolute w-5 h-5 text-white z-10" />
          </div>
          <span className="font-black text-xl sm:text-2xl tracking-tight text-white drop-shadow-md">
            DomainHosting<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">BD</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          {['Hosting', 'Domain', 'Server', 'Solutions', 'Tools'].map((item) => (
            <a key={item} href="#" className="text-sm font-bold text-blue-50 hover:text-pink-400 transition-colors flex items-center gap-1 drop-shadow-sm">
              {item} <ChevronRight className="w-3 h-3 rotate-90" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-sm font-bold text-blue-50 hover:text-pink-400 transition-colors drop-shadow-sm">Login</a>
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-orange-500 rounded-full transition-all shadow-lg"
          >
            Dashboard
          </motion.a>
        </div>

        <button className="lg:hidden text-white hover:text-pink-400">
          <Menu className="w-6 h-6" />
        </button>
      </motion.nav>

      {/* Hero Section with Animated Multi-Color Background */}
      <section className="relative pt-40 pb-32 lg:pt-48 lg:pb-40 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl border-b border-white/10">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 -z-20"></div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-pink-600/40 blur-[120px] -z-10"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/40 blur-[120px] -z-10"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-orange-500/30 blur-[120px] -z-10"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-bold mb-8 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
                Best Web Hosting Company in Bangladesh
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
                10x Faster Hosting.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300 drop-shadow-sm">
                  Launch in Minutes.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-blue-50 max-w-xl mb-10 leading-relaxed font-semibold drop-shadow-md">
                Get blazing-fast NVMe SSD hosting, free SSL, and 24/7 expert support so you can focus on growing your business, not managing servers.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236, 72, 153, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#pricing" 
                  className="w-full sm:w-auto px-8 py-4 text-base font-black text-white bg-gradient-to-r from-pink-500 to-orange-500 rounded-full transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  Start My Hosting Now <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#features" 
                  className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-white/10 backdrop-blur-md border border-white/30 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  View Pricing
                </motion.a>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-10 flex items-center gap-2 text-blue-100 text-sm font-bold drop-shadow-md">
                <Headphones className="w-5 h-5 text-pink-400" />
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
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-[0_0_50px_rgba(236,72,153,0.4)] flex flex-col items-center justify-center z-20"
                >
                  <Server className="w-16 h-16 text-pink-400 mb-2 drop-shadow-md" />
                  <span className="text-white font-black text-lg drop-shadow-md">Web Hosting</span>
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
                    className={`absolute ${item.pos} bg-white/10 backdrop-blur-xl border border-white/30 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl z-10`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color} drop-shadow-md`} />
                    <span className="text-white text-sm font-bold whitespace-nowrap drop-shadow-md">{item.label}</span>
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
          className="bg-white/10 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/30 p-8 md:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center drop-shadow-md">Search your Domain Name</h2>
          
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-pink-400" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-16 pr-6 py-5 bg-white/10 border-2 border-white/20 rounded-full text-lg text-white focus:ring-4 focus:ring-pink-500/40 focus:border-pink-400 transition-all outline-none font-bold shadow-inner placeholder:text-blue-100/70 backdrop-blur-md" 
                placeholder="yourdomain.com"
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black rounded-full transition-all whitespace-nowrap text-lg shadow-xl"
            >
              Search
            </motion.button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
            {[
              { tld: '.com', price: '৳1,650/Year', color: 'text-pink-300', badge: 'Sale 66% off' },
              { tld: '.net', price: '৳1,750/Year', color: 'text-white' },
              { tld: '.org', price: '৳1,650/Year', color: 'text-white', badge: 'Deal 35% off' },
              { tld: '.xyz', price: '৳599/Year', color: 'text-white' },
            ].map((domain, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className={`relative px-6 py-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all ${domain.badge ? 'ring-2 ring-pink-400/60' : ''}`}
              >
                {domain.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                    {domain.badge}
                  </span>
                )}
                <span className={`block text-2xl font-black ${domain.color} mb-1 drop-shadow-md`}>{domain.tld}</span>
                <span className="text-sm font-bold text-blue-100 drop-shadow-sm">{domain.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-pink-400 font-black tracking-wider uppercase text-sm mb-2 block drop-shadow-md">Flexible Plans</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">Select Your Perfect Plan</h2>
            <p className="text-xl text-blue-100 font-semibold drop-shadow-md">Choose the hosting that fits your needs. All plans include free migration.</p>
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
                className={`relative bg-white/10 backdrop-blur-xl rounded-[2rem] p-8 transition-all duration-300 ${plan.popular ? 'border-2 border-pink-400 shadow-[0_20px_50px_rgba(236,72,153,0.3)] transform lg:-translate-y-4' : 'border border-white/20 shadow-xl hover:shadow-2xl'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-black px-6 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${plan.popular ? 'bg-gradient-to-br from-pink-500 to-orange-500 text-white' : 'bg-white/10 text-pink-300 border border-white/20'}`}>
                  <Cloud className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 drop-shadow-md">{plan.name}</h3>
                <p className="text-sm text-blue-100 mb-8 font-semibold h-10 drop-shadow-sm">{plan.desc}</p>
                
                <div className="mb-8">
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-5xl font-black text-white drop-shadow-md">{plan.price}</span>
                    <span className="text-blue-200 font-bold mb-1">/month</span>
                  </div>
                  <span className="text-xs font-bold text-blue-300 line-through">{plan.oldPrice}</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-bold text-white drop-shadow-sm">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-pink-400' : 'text-orange-400'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-2xl font-black text-lg transition-all shadow-lg ${plan.popular ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white' : 'bg-white/10 border border-white/30 text-white hover:bg-white/20'}`}
                >
                  Select Plan <ArrowRight className="inline-block w-5 h-5 ml-1 -mt-1" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-blue-100 font-bold text-sm drop-shadow-md">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-400" /> 30-Day Money Back</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-400" /> Free Migration</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-400" /> 24/7 Expert Support</div>
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-3xl rounded-[3rem] border border-white/20 shadow-2xl p-10 lg:p-20 relative overflow-hidden">
            {/* Decorative background blur inside card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/30 to-orange-500/30 blur-3xl rounded-full -z-10"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 text-white border border-white/30 font-black text-sm mb-6 shadow-md">
                  Free Migration Service
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight drop-shadow-lg">
                  Moving From <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Another Host?</span>
                </h2>
                <p className="text-lg text-blue-50 font-semibold mb-10 leading-relaxed drop-shadow-md">
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
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 text-white flex items-center justify-center shadow-lg shadow-pink-500/30 flex-shrink-0">
                        <step.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-white drop-shadow-md">{step.title}</h4>
                        <p className="text-xs text-blue-100 font-bold drop-shadow-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black rounded-full transition-all flex items-center gap-2 shadow-xl"
                >
                  Start Free Migration <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Graphic Side */}
              <div className="relative h-[400px] flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[2px] border-dashed border-pink-400/50 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-10 border-[2px] border-dashed border-orange-400/50 rounded-full"
                />
                
                {/* Center Logo */}
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-pink-500/40 z-20 relative border border-white/20">
                  <span className="text-5xl font-black text-white drop-shadow-md">H</span>
                </div>

                {/* Orbiting Nodes */}
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-10 left-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg font-black text-sm text-white border border-white/30">HostGator</motion.div>
                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg font-black text-sm text-white border border-white/30">GoDaddy</motion.div>
                <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute top-20 right-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg font-black text-sm text-white border border-white/30">Namecheap</motion.div>
                <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute bottom-20 left-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg font-black text-sm text-white border border-white/30">Hostinger</motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-pink-400 font-black tracking-wider uppercase text-sm mb-2 block drop-shadow-md">Customer Stories</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">Success Stories</h2>
            <p className="text-lg text-blue-100 font-semibold drop-shadow-md">Real businesses sharing their Hostnin experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent z-10"></div>
                <img 
                  src={`https://picsum.photos/seed/testimonial${item}/600/800`} 
                  alt="Customer" 
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <div className="w-16 h-16 bg-pink-500/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg shadow-pink-500/40 group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 text-white fill-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 leading-tight drop-shadow-md">&quot;The best hosting company I have ever seen in BD&quot;</h3>
                  <p className="text-blue-100 font-bold drop-shadow-sm">Md. Ariful Islam</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-blue-950 pt-32 pb-12 overflow-hidden rounded-t-[3rem] lg:rounded-t-[5rem] mt-24 border-t border-white/10">
        {/* Animated Footer Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 -z-20"></div>
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-b from-pink-500/20 to-orange-500/20 blur-[100px] -z-10 rounded-full pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* CTA Box inside Footer */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-12 text-center mb-20 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">Try Hosting Risk-Free for 30 Days</h2>
            <p className="text-blue-100 text-lg mb-10 font-bold drop-shadow-md">30 Days to Decide. Full Refund Guaranteed.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black rounded-full transition-all text-lg shadow-xl"
              >
                Get The Offer
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/10 border border-white/30 text-white font-black rounded-full transition-all text-lg shadow-lg"
              >
                Chat with an Expert
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Hexagon className="absolute w-10 h-10 text-pink-500 fill-pink-500/20 animate-[spin_10s_linear_infinite]" />
                  <Cloud className="absolute w-5 h-5 text-white z-10" />
                </div>
                <span className="font-black text-3xl tracking-tight text-white drop-shadow-md">
                  DomainHosting<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">BD</span>
                </span>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-8 max-w-sm font-bold drop-shadow-sm">
                Best Web Hosting Company in Bangladesh. Premium web hosting solutions with blazing-fast speeds, rock-solid security, and 24/7 expert support.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.2, y: -5 }}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 transition-all border border-white/20 shadow-lg"
                  >
                    <Star className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black text-lg mb-6 drop-shadow-md">Hosting</h4>
              <ul className="space-y-4 text-sm font-bold text-blue-100">
                <li><a href="#" className="hover:text-pink-400 transition-colors drop-shadow-sm">Web Hosting</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors drop-shadow-sm">BDIX Hosting</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors drop-shadow-sm">WordPress Hosting</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors drop-shadow-sm">VPS Hosting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-lg mb-6 drop-shadow-md">Company</h4>
              <ul className="space-y-4 text-sm font-bold text-blue-100">
                <li><a href="#" className="hover:text-pink-400 transition-colors drop-shadow-sm">About Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors drop-shadow-sm">Contact Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors drop-shadow-sm">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors drop-shadow-sm">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-lg mb-6 drop-shadow-md">Support</h4>
              <ul className="space-y-4 text-sm font-bold text-blue-100">
                <li><a href="#" className="hover:text-pink-400 transition-colors drop-shadow-sm">Client Area</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors drop-shadow-sm">Submit Ticket</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors drop-shadow-sm">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors drop-shadow-sm">System Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-blue-100 font-bold drop-shadow-sm">© {new Date().getFullYear()} Domain Hosting BD. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-blue-100 font-bold drop-shadow-sm">
              <span>Payment Methods:</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-12 h-8 bg-white/20 rounded-md border border-white/30 shadow-sm"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
