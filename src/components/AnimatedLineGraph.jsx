import { motion } from 'framer-motion';

/**
 * Animated line graph suggesting "Growth Data" / "Efficiency Gains".
 * Path draws itself in real-time via Framer Motion pathLength.
 * Electric Blue (#2563EB).
 */
const VIEWBOX = '0 0 400 120';
const POINTS = [
  [20, 100],
  [60, 88],
  [100, 75],
  [140, 58],
  [180, 48],
  [220, 35],
  [260, 28],
  [300, 18],
  [340, 12],
  [380, 8],
];
const PATH_D = POINTS.reduce(
  (acc, [x, y], i) => acc + (i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`),
  ''
);

export default function AnimatedLineGraph({ className = '' }) {
  return (
    <motion.svg
      viewBox={VIEWBOX}
      className={`w-full max-w-2xl mx-auto ${className}`}
      initial="hidden"
      animate="visible"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="graphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* Grid lines (static, very faint) */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1="20"
          y1={20 + i * 25}
          x2="380"
          y2={20 + i * 25}
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
      ))}
      {/* Main growth line — path drawing animation */}
      <motion.path
        d={PATH_D}
        fill="none"
        stroke="url(#graphGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0.8 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { pathLength: { duration: 2, ease: 'easeInOut' }, opacity: { duration: 0.5 } },
          },
        }}
      />
      {/* Glow effect under line (optional) */}
      <motion.path
        d={PATH_D + ' L 380 120 L 20 120 Z'}
        fill="url(#graphGradient)"
        fillOpacity="0.08"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 1.5, duration: 0.8 } },
        }}
      />
    </motion.svg>
  );
}
