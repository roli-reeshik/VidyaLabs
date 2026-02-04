import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { discoveryForm, formSuccess } from '../data/content';
import { ChevronRight, ChevronLeft, Send } from 'lucide-react';

const INDUSTRY_VALUES = discoveryForm.industries.map((o) => o.value).filter(Boolean);

export default function DiscoveryForm({ onSuccess }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    siteCount: '',
    teamSize: '',
    timeline: '',
    goals: '',
    additional: '',
  });

  const totalSteps = discoveryForm.steps.length;
  const isLastStep = step === totalSteps - 1;
  const isFirstStep = step === 0;

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const showSiteCount = form.industry === 'construction';
  const showTeamSize = ['education', 'healthcare', 'construction', 'retail'].includes(form.industry);

  const handleNext = () => {
    if (isLastStep) {
      setSubmitted(true);
      onSuccess?.();
    } else setStep((s) => s + 1);
  };

  const handleBack = () => setStep((s) => Math.max(0, s - 1));

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-8 sm:p-12 text-center border border-cyan-electric/30"
      >
        <div className="w-16 h-16 rounded-full bg-cyan-electric/20 flex items-center justify-center mx-auto text-cyan-electric">
          <Send size={32} />
        </div>
        <h3 className="mt-6 font-display font-bold text-2xl text-white">
          {formSuccess.title}
        </h3>
        <p className="mt-4 text-slate-400 max-w-md mx-auto">
          {formSuccess.message}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      id="discovery-form"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl border border-white/10 overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <span className="text-slate-500 text-sm font-medium">
          Step {step + 1} of {totalSteps}
        </span>
        <div className="flex gap-1">
          {discoveryForm.steps.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i <= step ? 'bg-cyan-electric' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <h3 className="font-display font-semibold text-xl text-white">
                {discoveryForm.steps[0]}
              </h3>
              <div>
                <label className="block text-slate-400 text-sm mb-1">Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric outline-none"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1">Company / Organization</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => set('company', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric outline-none"
                  placeholder="Company name"
                />
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <h3 className="font-display font-semibold text-xl text-white">
                {discoveryForm.steps[1]}
              </h3>
              <div>
                <label className="block text-slate-400 text-sm mb-1">Industry *</label>
                <select
                  value={form.industry}
                  onChange={(e) => set('industry', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric outline-none"
                >
                  {discoveryForm.industries.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-midnight">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <AnimatePresence>
                {showSiteCount && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label className="block text-slate-400 text-sm mb-1">
                      Number of sites / projects
                    </label>
                    <input
                      type="text"
                      value={form.siteCount}
                      onChange={(e) => set('siteCount', e.target.value)}
                      placeholder="e.g. 5"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric outline-none"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {showTeamSize && (
                <div>
                  <label className="block text-slate-400 text-sm mb-1">
                    Team size (approx.)
                  </label>
                  <input
                    type="text"
                    value={form.teamSize}
                    onChange={(e) => set('teamSize', e.target.value)}
                    placeholder="e.g. 10–50"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-slate-400 text-sm mb-1">Timeline</label>
                <input
                  type="text"
                  value={form.timeline}
                  onChange={(e) => set('timeline', e.target.value)}
                  placeholder="e.g. Q2 2025"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1">Goals / Pain points</label>
                <textarea
                  value={form.goals}
                  onChange={(e) => set('goals', e.target.value)}
                  rows={4}
                  placeholder="What are you trying to achieve? What’s not working today?"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric outline-none resize-none"
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <h3 className="font-display font-semibold text-xl text-white">
                {discoveryForm.steps[2]}
              </h3>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-2 text-sm">
                <p><span className="text-slate-500">Name:</span> {form.name || '—'}</p>
                <p><span className="text-slate-500">Email:</span> {form.email || '—'}</p>
                <p><span className="text-slate-500">Company:</span> {form.company || '—'}</p>
                <p>
                  <span className="text-slate-500">Industry:</span>{' '}
                  {discoveryForm.industries.find((i) => i.value === form.industry)?.label || '—'}
                </p>
                {showSiteCount && form.siteCount && (
                  <p><span className="text-slate-500">Sites:</span> {form.siteCount}</p>
                )}
                {form.teamSize && (
                  <p><span className="text-slate-500">Team size:</span> {form.teamSize}</p>
                )}
                {form.timeline && (
                  <p><span className="text-slate-500">Timeline:</span> {form.timeline}</p>
                )}
                {form.goals && (
                  <p><span className="text-slate-500">Goals:</span> {form.goals}</p>
                )}
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1">Anything else?</label>
                <textarea
                  value={form.additional}
                  onChange={(e) => set('additional', e.target.value)}
                  rows={2}
                  placeholder="Optional details for our team"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric outline-none resize-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={isFirstStep}
            className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-40 disabled:pointer-events-none"
          >
            <ChevronLeft size={20} /> Back
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-electric text-midnight font-semibold hover:bg-cyan-400 transition-colors"
          >
            {isLastStep ? 'Submit' : 'Next'}
            {!isLastStep && <ChevronRight size={20} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
