import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Network, Code2, GraduationCap, Store, FileCheck, Shield, Server } from 'lucide-react';
import { homeHero, homeServices, whyUs, brand } from '../data/content';
import ProjectInquiryForm from '../components/ProjectInquiryForm';
import DeploymentPricingPhilosophy from '../components/DeploymentPricingPhilosophy';
import IconDuotone from '../components/IconDuotone';
import AnimatedLineGraph from '../components/AnimatedLineGraph';

const iconMap = { Cpu, Brain, Network, Code2, GraduationCap, Store, FileCheck, Shield, Server };

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#quote') {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      {/* Modern Tech Hero with enhanced visuals */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28">
        {/* Enhanced background with tech theme */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/95 via-dark-bg/90 to-dark-bg/95" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        
        {/* Animated tech grid pattern overlay */}
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />

        {/* Floating tech elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-tech-purple/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, 60, 0],
              y: [0, -80, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-tech-cyan/10 rounded-full blur-2xl"
          />
        </div>

        {/* Animated graph — enhanced positioning */}
        <div className="absolute inset-0 flex items-end justify-center pb-[25%] sm:pb-[30%] pointer-events-none">
          <div className="w-full max-w-3xl px-4 opacity-80">
            <AnimatedLineGraph className="text-accent-blue" />
          </div>
        </div>

        {/* Enhanced center message with modern glassmorphism */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl glass-strong border border-white/30 p-10 sm:p-12 shadow-2xl"
          >
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-tech rounded-3xl blur-xl opacity-30 -z-10" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 rounded-full bg-accent-blue/20 border border-accent-blue/30 text-accent-cyan text-sm font-semibold"
            >
              🚀 Enterprise IT Solutions
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
              style={{ 
                textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 60px rgba(59,130,246,0.3)',
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {homeHero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              {homeHero.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#quote"
                className="group relative inline-flex items-center px-8 py-4 rounded-xl bg-gradient-software text-white font-semibold text-lg hover:shadow-tech-glow-lg transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">{brand.ctaQuote}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Explore Services →
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-400 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-accent-cyan/50 flex justify-center pt-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
          </motion.div>
        </motion.div>
      </section>

      <section id="services" className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-ice-blue to-white">
        {/* Subtle tech pattern overlay */}
        <div className="absolute inset-0 bg-pattern-dots opacity-40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-semibold mb-4"
            >
              Our Expertise
            </motion.span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4">
              <span className="text-gradient-tech">Comprehensive IT Solutions</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end software engineering and digital solutions for enterprise and growth-stage businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {homeServices.map((item, i) => {
              const Icon = iconMap[item.icon] || Cpu;
              const gradients = [
                'from-accent-blue/20 to-tech-cyan/20',
                'from-tech-purple/20 to-tech-pink/20',
                'from-tech-green/20 to-tech-cyan/20',
                'from-tech-orange/20 to-tech-pink/20',
                'from-accent-blue/20 to-tech-purple/20',
                'from-tech-cyan/20 to-tech-green/20',
              ];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group relative service-card"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
                  
                  {/* Icon with enhanced styling */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-tech-purple/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/10 to-tech-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-accent-blue group-hover:text-tech-purple transition-colors duration-300" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <h3 className="mt-6 font-display font-bold text-xl text-charcoal group-hover:text-gradient-tech transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <Link
                    to={item.path}
                    className="mt-6 inline-flex items-center gap-2 text-accent-blue font-semibold text-sm hover:gap-3 transition-all duration-300 group-hover:text-tech-purple"
                  >
                    {brand.ctaExplore}
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-blue/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <DeploymentPricingPhilosophy />

      <section id="why-us" className="relative py-24 sm:py-32 bg-gradient-to-b from-ice-blue via-white to-ice-blue overflow-hidden">
        {/* Tech pattern background */}
        <div className="absolute inset-0 bg-pattern-dots opacity-30" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-tech-purple/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-tech-green/10 text-tech-green text-sm font-semibold mb-4"
            >
              Why Choose Us
            </motion.span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4">
              {whyUs.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{whyUs.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whyUs.items.map((item, i) => {
              const Icon = iconMap[item.icon] || FileCheck;
              const iconColors = [
                'text-accent-blue bg-accent-blue/10',
                'text-tech-green bg-tech-green/10',
                'text-tech-purple bg-tech-purple/10',
              ];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative rounded-2xl border-2 border-gray-200 bg-white p-8 hover:border-accent-blue/50 hover:shadow-xl hover:shadow-accent-blue/10 transition-all duration-300"
                >
                  {/* Gradient accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-tech-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  {/* Enhanced icon */}
                  <div className={`relative w-16 h-16 rounded-xl ${iconColors[i]} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon size={28} strokeWidth={2} />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-tech-purple/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-charcoal mb-3 group-hover:text-accent-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue via-tech-purple to-accent-blue rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm />
        </div>
      </section>
    </>
  );
}
