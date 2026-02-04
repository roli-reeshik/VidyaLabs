import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techTranslator } from '../data/content';
import { BookOpen } from 'lucide-react';

export default function TechTranslator() {
  const [openTerm, setOpenTerm] = useState(null);

  return (
    <section id="tech-translator" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <BookOpen className="text-cyan-electric" size={28} />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Tech Translator
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 mb-12"
        >
          Simple explanations for the terms we use—so you’re always on the same page.
        </motion.p>

        <div className="space-y-4">
          {techTranslator.map((item) => {
            const isOpen = openTerm === item.term;
            return (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenTerm(isOpen ? null : item.term)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-display font-semibold text-lg text-white">
                    {item.term}
                    <span className="text-slate-500 font-normal text-sm ml-2">
                      — {item.full}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-cyan-electric"
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-slate-400 text-sm leading-relaxed pt-2 border-t border-white/10">
                        {item.explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
