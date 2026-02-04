import { motion } from 'framer-motion';

/**
 * Duotone icon: Royal Blue (#2563EB) icon on soft blue (#DBEAFE) rounded container.
 * Optional hoverBounce for Service cards — icon bounces up, background darkens.
 */
export default function IconDuotone({ icon: Icon, size = 24, className = '', hoverBounce = false, shape = 'rounded-xl' }) {
  const wrapperClass = `w-12 h-12 ${shape} bg-gradient-to-br from-accent-blue/10 to-tech-purple/10 flex items-center justify-center text-accent-blue transition-all duration-300 ${hoverBounce ? 'group-hover:bg-gradient-to-br group-hover:from-accent-blue/20 group-hover:to-tech-purple/20 group-hover:scale-110' : ''} ${className}`;

  if (hoverBounce) {
    return (
      <div className={`relative ${wrapperClass}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-tech-purple/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10" />
        <motion.span
          whileHover={{ y: -4, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="inline-flex"
        >
          <Icon size={size} strokeWidth={2} className="group-hover:text-tech-purple transition-colors duration-300" />
        </motion.span>
      </div>
    );
  }

  return (
    <div className={`relative ${wrapperClass}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-tech-purple/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10" />
      <Icon size={size} strokeWidth={2} className="group-hover:text-tech-purple transition-colors duration-300" />
    </div>
  );
}
