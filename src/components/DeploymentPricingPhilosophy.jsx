import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Cloud, ChevronDown } from 'lucide-react';
import IconDuotone from './IconDuotone';
import { deploymentPricingPhilosophy, faqItems } from '../data/content';

export default function DeploymentPricingPhilosophy() {
  const [openFaqId, setOpenFaqId] = useState(null);
  const { title, pricingIntro, localVsWeb } = deploymentPricingPhilosophy;

  return (
    <section className="relative py-20 sm:py-28 bg-pattern-dots it-watermark it-watermark--infrastructure">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title — navy header */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl text-charcoal text-center"
        >
          {title}
        </motion.h2>

        {/* Value-driven pricing intro */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-6 text-gray-600 leading-relaxed text-center max-w-3xl mx-auto"
        >
          {pricingIntro}
        </motion.p>

        {/* Local vs. Web — two-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12"
        >
          <h3 className="font-display font-semibold text-xl text-charcoal text-center mb-6">
            {localVsWeb.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 flex flex-col items-center text-center shadow-sm">
              <IconDuotone icon={Server} size={24} />
              <h4 className="mt-4 font-display font-semibold text-lg text-charcoal">
                {localVsWeb.local.title}
              </h4>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {localVsWeb.local.description}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 flex flex-col items-center text-center shadow-sm">
              <IconDuotone icon={Cloud} size={24} />
              <h4 className="mt-4 font-display font-semibold text-lg text-charcoal">
                {localVsWeb.web.title}
              </h4>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {localVsWeb.web.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ — accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-16"
        >
          <h3 className="font-display font-semibold text-xl text-charcoal text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-2">
            {faqItems.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-xl border border-gray-200 bg-white overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50/80 transition-colors"
                  >
                    <span className="font-medium text-charcoal pr-4">{item.question}</span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-digital-blue transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 pt-0">
                          <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
