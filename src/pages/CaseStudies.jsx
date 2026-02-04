import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies, caseStudyIndustries } from '../data/content';
import { ArrowLeft } from 'lucide-react';

export function CaseStudiesList() {
  const [industry, setIndustry] = useState('all');
  const filtered =
    industry === 'all'
      ? caseStudies
      : caseStudies.filter((c) => c.industry === industry);

  return (
    <div className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-semibold mb-4"
          >
            Success Stories
          </motion.span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4 text-styled-strong">
            <span className="text-gradient-tech">Case Studies</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto text-enhanced">
            Real challenges, real solutions—with measurable impact.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {caseStudyIndustries.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setIndustry(opt.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                industry === opt.value
                  ? 'bg-digital-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/case-studies/${study.id}`}
                  className="block rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 hover:shadow-lg hover:border-gray-300 transition-all"
                >
                  <span className="text-xs font-semibold text-digital-blue uppercase tracking-wider">
                    {caseStudyIndustries.find((x) => x.value === study.industry)?.label}
                  </span>
                  <h2 className="mt-2 font-display font-semibold text-xl text-charcoal text-styled">
                    {study.title}
                  </h2>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed text-enhanced">
                    {study.shortSummary}
                  </p>
                  <span className="mt-4 inline-flex items-center text-digital-blue font-semibold text-sm">
                    Read full case study →
                  </span>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = caseStudies.find((c) => c.id === id);

  if (!study) {
    return (
      <div className="pt-28 pb-20 text-center">
        <p className="text-gray-600">Case study not found.</p>
        <Link to="/case-studies" className="mt-4 inline-block text-digital-blue font-semibold">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  const industryLabel = caseStudyIndustries.find((x) => x.value === study.industry)?.label;

  return (
    <div className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate('/case-studies')}
          className="flex items-center gap-2 text-gray-600 hover:text-accent-blue font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Case Studies
        </button>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border-2 border-gray-200 bg-white/90 backdrop-blur-md overflow-hidden shadow-xl"
        >
          <div className="p-6 sm:p-8 border-b border-gray-200 bg-gradient-to-r from-accent-blue/5 to-tech-purple/5">
            <span className="text-xs font-semibold text-accent-blue uppercase tracking-wider">
              {industryLabel}
            </span>
            <h1 className="mt-2 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal text-styled-strong">
              <span className="text-gradient-tech">{study.title}</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            <div className="p-6 sm:p-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Challenge
              </h3>
              <p className="text-gray-700 leading-relaxed text-enhanced">{study.challenge}</p>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Solution
              </h3>
              <p className="text-gray-700 leading-relaxed text-enhanced">{study.solution}</p>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                ROI & Outcomes
              </h3>
              <p className="text-gray-700 leading-relaxed text-enhanced">{study.roi}</p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
