import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectInquiryForm, projectInquirySuccess } from '../data/content';
import { CheckCircle2, Home, FileDown } from 'lucide-react';

export default function ProjectInquiryForm({ onSuccess }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    const success = projectInquirySuccess;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-digital-blue/10 flex items-center justify-center mx-auto text-digital-blue">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="mt-6 font-display font-bold text-2xl text-navy">
            {success.heading}
          </h3>
          <p className="mt-4 text-slate-600 leading-relaxed">
            {success.subtext}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-digital-blue text-white font-semibold hover:bg-digital-blue-hover transition-all duration-300 btn-cta-glow"
            >
              <Home size={20} />
              {success.backToHomeLabel}
            </Link>
            <a
              href={success.capabilityDeckHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-navy font-semibold hover:border-digital-blue hover:text-digital-blue transition-colors"
            >
              <FileDown size={20} />
              {success.capabilityDeckLabel}
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="quote"
      className="py-16"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-semibold mb-4"
          >
            Get Started
          </motion.span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal mb-3">
            {projectInquiryForm.title}
          </h2>
          <p className="text-lg text-gray-600">{projectInquiryForm.subtitle}</p>
        </div>
        <div className="rounded-2xl border-2 border-gray-200 bg-white/50 backdrop-blur-sm p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="pi-name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name *
              </label>
              <input
                id="pi-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-charcoal placeholder-gray-400 focus:ring-2 focus:ring-accent-blue focus:border-accent-blue outline-none transition-all duration-200 hover:border-gray-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="pi-email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                id="pi-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-charcoal placeholder-gray-400 focus:ring-2 focus:ring-accent-blue focus:border-accent-blue outline-none transition-all duration-200 hover:border-gray-300"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="pi-company" className="block text-sm font-semibold text-gray-700 mb-2">
                Company
              </label>
              <input
                id="pi-company"
                type="text"
                value={form.company}
                onChange={(e) => set('company', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-charcoal placeholder-gray-400 focus:ring-2 focus:ring-accent-blue focus:border-accent-blue outline-none transition-all duration-200 hover:border-gray-300"
                placeholder="Company name"
              />
            </div>
            <div>
              <label htmlFor="pi-service" className="block text-sm font-semibold text-gray-700 mb-2">
                Service of interest
              </label>
              <input
                id="pi-service"
                type="text"
                value={form.service}
                onChange={(e) => set('service', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-charcoal placeholder-gray-400 focus:ring-2 focus:ring-accent-blue focus:border-accent-blue outline-none transition-all duration-200 hover:border-gray-300"
                placeholder="e.g. Custom Software, AI/ML"
              />
            </div>
            <div>
              <label htmlFor="pi-message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="pi-message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-charcoal placeholder-gray-400 focus:ring-2 focus:ring-accent-blue focus:border-accent-blue outline-none resize-none transition-all duration-200 hover:border-gray-300"
                placeholder="Brief description of your project or goals"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-software text-white font-semibold hover:shadow-tech-glow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Send Inquiry</span>
              <motion.div
                className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
