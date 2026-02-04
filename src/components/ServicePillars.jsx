import { motion } from 'framer-motion';
import { Cpu, Brain, Network, Code2, Zap } from 'lucide-react';
import { servicePillars } from '../data/content';

const iconMap = { Cpu, Brain, Network, Code2, Zap };

export default function ServicePillars() {
  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Universal Service Pillars
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            From automation to AI—we cover the full stack of intelligent digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicePillars.map((item, i) => {
            const Icon = iconMap[item.icon] || Cpu;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-electric/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-electric/10 flex items-center justify-center text-cyan-electric group-hover:bg-cyan-electric/20 transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-xl text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-slate-500 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
