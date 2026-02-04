import { motion } from 'framer-motion';
import { Server, Cloud } from 'lucide-react';
import { deploymentFlexibility } from '../data/content';

const iconMap = { Server, Cloud };

export default function DeploymentFlexibility() {
  return (
    <section className="py-16 sm:py-24 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
            {deploymentFlexibility.title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {deploymentFlexibility.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deploymentFlexibility.options.map((opt, i) => {
            const Icon = iconMap[opt.icon] || Server;
            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col items-center text-center md:items-center md:text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-digital-blue/10 flex items-center justify-center text-digital-blue">
                  <Icon size={28} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-xl text-charcoal">
                  {opt.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {opt.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
