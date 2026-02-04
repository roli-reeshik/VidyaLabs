import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { formSuccess } from '../data/content';

export default function SuccessOverlay({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-midnight/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="glass-strong rounded-2xl p-8 sm:p-10 text-center border border-cyan-electric/40 shadow-2xl shadow-cyan-500/10">
              <div className="w-20 h-20 rounded-full bg-cyan-electric/20 flex items-center justify-center mx-auto text-cyan-electric">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="mt-6 font-display font-bold text-2xl text-white">
                {formSuccess.title}
              </h3>
              <p className="mt-4 text-slate-400 leading-relaxed">
                {formSuccess.message}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-8 px-6 py-3 rounded-xl bg-cyan-electric text-midnight font-semibold hover:bg-cyan-400 transition-colors"
              >
                Done
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
