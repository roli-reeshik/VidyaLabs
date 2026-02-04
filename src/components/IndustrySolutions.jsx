import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industrySolutions } from '../data/content';

export default function IndustrySolutions() {
  const [activeId, setActiveId] = useState(industrySolutions.sectors[0].id);
  const active = industrySolutions.sectors.find((s) => s.id === activeId);

  return (
    <section id="products" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            {industrySolutions.title}
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            {industrySolutions.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {industrySolutions.sectors.map((sector) => (
              <button
                key={sector.id}
                type="button"
                onClick={() => setActiveId(sector.id)}
                className={`shrink-0 px-4 py-3 rounded-xl text-left font-medium transition-all ${
                  activeId === sector.id
                    ? 'glass border-cyan-electric/50 text-cyan-electric'
                    : 'border border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-300'
                }`}
              >
                {sector.label}
              </button>
            ))}
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="glass rounded-2xl p-6 sm:p-8 border border-white/10"
                >
                  <h3 className="font-display font-semibold text-2xl text-white">
                    {active.title}
                  </h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    {active.description}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {active.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-slate-350 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
