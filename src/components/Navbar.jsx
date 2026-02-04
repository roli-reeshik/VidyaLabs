import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { nav, brand, servicesMegaMenu } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-xl shadow-lg shadow-accent-blue/5 py-3 border-b border-gray-200'
          : 'bg-dark-bg/55 backdrop-blur-xl py-4 border-b border-white/10'
      }`}
    >
      {/* Top glow line */}
      <div className={`absolute inset-x-0 top-0 h-px ${scrolled ? 'bg-gradient-software/30' : 'bg-gradient-cyber/60'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3 relative">
          <div className="relative">
            <img
              src="/logo.png"
              alt={`${brand.name} logo`}
              className={`h-9 w-auto transition-transform duration-300 group-hover:scale-[1.03] ${scrolled ? '' : 'drop-shadow-[0_10px_25px_rgba(34,211,238,0.25)]'}`}
            />
            <span className={`absolute -inset-2 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${scrolled ? 'bg-gradient-tech/20' : 'bg-gradient-cyber/25'}`} />
          </div>
          <span
            className={`font-display font-bold text-lg sm:text-xl tracking-tight transition-colors ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}
          >
            {brand.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.links.map((link) =>
            link.mega ? (
              <div
                key="services"
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-4 py-2 font-medium rounded-lg transition-colors ${
                    scrolled ? 'text-gray-700 hover:text-accent-blue' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full pt-1"
                    >
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 py-6 px-8 min-w-[520px] grid grid-cols-2 gap-x-10 gap-y-5">
                        {servicesMegaMenu.map((group) => (
                          <div key={group.category}>
                            <p className="text-xs font-bold text-accent-blue uppercase tracking-wider mb-3">
                              {group.category}
                            </p>
                            <ul className="space-y-2">
                              {group.links.map((item) => (
                                <li key={item.path}>
                                  <Link
                                    to={item.path}
                                    className="group block py-2 text-gray-700 hover:text-accent-blue font-medium text-sm transition-all duration-200 relative"
                                  >
                                    <span className="relative z-10">{item.label}</span>
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-gradient-software group-hover:w-full transition-all duration-300 -z-0" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 font-medium rounded-lg transition-colors duration-200 relative group ${
                  scrolled ? 'text-gray-700 hover:text-accent-blue' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-software group-hover:w-3/4 transition-all duration-300" />
              </Link>
            )
          )}
          <Link
            to="/#quote"
            className="ml-4 px-5 py-2.5 rounded-lg bg-gradient-software text-white font-semibold text-sm hover:shadow-tech-glow transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">{brand.ctaQuote}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t ${scrolled ? 'bg-white border-gray-100' : 'bg-dark-bg/90 backdrop-blur-xl border-white/10'}`}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
              <p className={`text-xs font-semibold uppercase tracking-wider pt-2 ${scrolled ? 'text-gray-500' : 'text-slate-400'}`}>
                Services
              </p>
              {servicesMegaMenu.flatMap((g) =>
                g.links.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`py-2 font-medium transition-colors ${scrolled ? 'text-charcoal' : 'text-slate-200 hover:text-white'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))
              )}
              <Link
                to="/case-studies"
                className={`py-2 font-medium transition-colors ${scrolled ? 'text-charcoal' : 'text-slate-200 hover:text-white'}`}
                onClick={() => setMobileOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/#why-us"
                className={`py-2 font-medium transition-colors ${scrolled ? 'text-charcoal' : 'text-slate-200 hover:text-white'}`}
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#quote"
                className="mt-2 px-5 py-3 rounded-xl bg-gradient-software text-white font-semibold text-center hover:shadow-tech-glow-lg transition-all duration-300"
                onClick={() => setMobileOpen(false)}
              >
                {brand.ctaQuote}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
