import { useState } from 'react';
import { motion } from 'framer-motion';
import { customSoftwarePage } from '../data/content';
import ProjectInquiryForm from '../components/ProjectInquiryForm';
import DeploymentFlexibility from '../components/DeploymentFlexibility';
import { ChevronRight } from 'lucide-react';

export default function CustomSoftware() {
  const [activeStep, setActiveStep] = useState(0);
  const { hero, executiveSummary, blueprint, capabilities, stats } = customSoftwarePage;

  return (
    <>
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/90 via-dark-bg/85 to-dark-bg/90" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-2 rounded-full bg-accent-blue/20 border border-accent-blue/30 text-accent-cyan text-sm font-semibold mb-4"
          >
            Custom Software Development
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.2] mb-6"
            style={{
              textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 60px rgba(59,130,246,0.3)',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed text-enhanced"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            {hero.subheadline}
          </motion.p>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal text-center mb-12 text-styled-strong">
            <span className="text-gradient-tech">{executiveSummary.title}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveSummary.columns.map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 text-center"
              >
                <h3 className="font-display font-semibold text-xl text-charcoal">{col.title}</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed text-enhanced">{col.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gray-50/95 backdrop-blur-sm" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal text-center mb-12 text-styled-strong">
            <span className="text-gradient-tech">{blueprint.title}</span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:overflow-x-auto sm:gap-0 pb-4 sm:pb-0 gap-6">
            {blueprint.steps.map((step, i) => (
              <div key={step.stage} className="flex items-start gap-4 sm:flex-col sm:items-center sm:min-w-[140px]">
                <button
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-3 sm:flex-col sm:text-center p-4 rounded-xl border-2 transition-all ${
                    activeStep === i
                      ? 'border-digital-blue bg-digital-blue/5 text-digital-blue'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-digital-blue text-white font-bold text-sm">
                    {step.stage}
                  </span>
                  <span className="font-semibold text-charcoal text-left sm:text-center">
                    {step.title}
                  </span>
                </button>
                <div className="hidden sm:block sm:w-px sm:h-6 sm:bg-gray-200 sm:flex-shrink-0 sm:mx-auto" />
              </div>
            ))}
          </div>

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-xl border border-gray-200 bg-white p-6 sm:p-8"
          >
            <h3 className="font-display font-semibold text-xl text-charcoal">
              {blueprint.steps[activeStep].title}
            </h3>
            <p className="mt-2 text-gray-600 text-enhanced">{blueprint.steps[activeStep].subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal text-center mb-10 text-styled-strong">
            <span className="text-gradient-tech">{capabilities.title}</span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {capabilities.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-gray-700 font-medium"
              >
                <ChevronRight size={18} className="text-digital-blue shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DeploymentFlexibility />

      <section className="py-12 sm:py-16 bg-digital-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12 sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-bold text-3xl sm:text-4xl text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-blue-100 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm />
        </div>
      </section>
    </>
  );
}
