import { motion } from 'framer-motion';
import { caseStudies } from '../data/content';
import { Scale, AlertCircle, HardHat } from 'lucide-react';

const icons = { school: Scale, nursing: AlertCircle, construction: HardHat };

export default function CaseStudyVault() {
  return (
    <section id="case-studies" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            The Case Study Vault
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Real challenges, real solutions—across education, healthcare, and construction.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, i) => {
            const Icon = icons[study.id] || Scale;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-electric/10 flex items-center justify-center text-cyan-electric">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-display font-semibold text-xl text-white">
                        {study.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-2">
                      Challenge
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div className="p-6 sm:p-8 bg-white/[0.02]">
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-2">
                      Solution
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {study.solution}
                    </p>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-2">
                      Outcomes
                    </p>
                    <ul className="space-y-1">
                      {study.outcomes.map((o) => (
                        <li key={o} className="text-slate-350 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
