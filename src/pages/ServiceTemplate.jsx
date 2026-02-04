import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectInquiryForm from '../components/ProjectInquiryForm';
import DeploymentFlexibility from '../components/DeploymentFlexibility';
import { servicesMegaMenu } from '../data/content';

function getServiceTitle(path) {
  const flat = servicesMegaMenu.flatMap((g) => g.links);
  const found = flat.find((l) => l.path === `/services/${path}`);
  return found ? found.label : 'Our Services';
}

export default function ServiceTemplate() {
  const { slug } = useParams();
  const title = getServiceTitle(slug);

  return (
    <>
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden min-h-[60vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/90 via-dark-bg/85 to-dark-bg/90" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-2 rounded-full bg-accent-blue/20 border border-accent-blue/30 text-accent-cyan text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.2] mb-6"
            style={{
              textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 60px rgba(59,130,246,0.3)',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed text-enhanced"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Expert delivery tailored to your requirements. Get in touch for a detailed proposal.
          </motion.p>
          <Link
            to="/services/custom-software"
            className="mt-6 inline-block text-accent-cyan font-semibold hover:text-white transition-colors text-lg"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            See our Custom Software process →
          </Link>
        </div>
      </section>

      <DeploymentFlexibility />

      <section className="py-16 sm:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm />
        </div>
      </section>
    </>
  );
}
