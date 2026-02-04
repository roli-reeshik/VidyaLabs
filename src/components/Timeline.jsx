import { motion } from 'framer-motion';
import { timelineSteps } from '../data/content';
import { Compass, Code, Shield, Rocket } from 'lucide-react';

const stepIcons = [Compass, Code, Shield, Rocket];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            How We Work
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A clear four-phase journey from discovery to launch.
          </p>
        </motion.div>

        <div className="relative pl-8 sm:pl-0">
          {/* Vertical line - visible on mobile left, on desktop center */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-electric/50 via-cyan-electric/30 to-transparent sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-8 sm:space-y-12">
            {timelineSteps.map((step, i) => {
              const Icon = stepIcons[i] || Compass;
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-6 sm:gap-8"
                >
                  <div className="absolute left-0 sm:left-1/2 w-10 h-10 rounded-xl glass border border-cyan-electric/30 flex items-center justify-center text-cyan-electric sm:-translate-x-1/2 z-10 shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="ml-14 sm:ml-0 sm:flex-1 sm:pt-0 pt-1">
                    <div className="glass rounded-xl p-5 sm:p-6 border border-white/10">
                      <span className="text-cyan-electric text-xs font-semibold uppercase tracking-wider">
                        Phase {step.phase}
                      </span>
                      <h3 className="mt-2 font-display font-semibold text-xl text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
