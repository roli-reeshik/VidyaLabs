import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BadgeDollarSign,
  Brain,
  Globe,
  Code2,
  Server,
  Braces,
  Database,
  Box,
  Store,
  HardHat,
  HeartPulse,
  GraduationCap,
  Building2,
  Quote,
  Mail,
} from 'lucide-react';
import { aboutPage } from '../data/content';
import IconDuotone from '../components/IconDuotone';

const coreValueIcons = { BadgeDollarSign, Brain, Globe };
const industryIcons = { Store, HardHat, HeartPulse, GraduationCap, Building2 };
const techIcons = { Code2, Server, Braces, Database, Box };

export default function About() {
  const {
    hero,
    missionBlock,
    mission,
    problem,
    identity,
    leadership,
    story,
    coreValues,
    techStack,
    founder,
    industries,
    cta,
  } = aboutPage;

  return (
    <>
      {/* Hero with background image */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/90 via-dark-bg/85 to-dark-bg/90" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-accent-blue/20 border border-accent-blue/30 text-accent-cyan text-sm font-semibold mb-4"
          >
            About Vidya Labs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.2] mb-6"
            style={{
              textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 60px rgba(59,130,246,0.3)',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed text-enhanced"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            {hero.subheadline}
          </motion.p>
        </div>
      </section>

      {/* Mission, Problem, Identity — narrative arc */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-ice-blue/50" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 border border-gray-200/50 shadow-lg"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4 text-styled-strong">
              <span className="text-gradient-tech">{mission.title}</span>
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg text-enhanced">{mission.body}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 border border-gray-200/50 shadow-lg"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4 text-styled-strong">
              <span className="text-gradient-tech">{problem.title}</span>
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg text-enhanced">{problem.body}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 border border-gray-200/50 shadow-lg"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4 text-styled-strong">
              <span className="text-gradient-tech">{identity.title}</span>
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg text-enhanced">{identity.body}</p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission — Vidya Labs Story (above leadership) */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/20 via-tech-purple/15 to-accent-blue/20" />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/90 backdrop-blur-md p-10 border border-gray-200/50 shadow-xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-navy mb-6 text-styled-strong"
            >
              <span className="text-gradient-tech">{missionBlock.headline}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-slate-700 leading-relaxed text-lg text-enhanced"
            >
              {missionBlock.body}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vidya Labs Leadership — Mist Gray so white cards pop */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-mist-gray/95 backdrop-blur-sm" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-navy text-center mb-12 text-styled-strong"
          >
            <span className="text-gradient-tech">Vidya Labs Leadership</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((person, i) => (
              <motion.div
                key={person.email}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:border-digital-blue hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-square max-w-[200px] mx-auto rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-6 font-display font-bold text-xl text-navy">
                  {person.name}
                </h3>
                <p className="mt-1 text-digital-blue font-medium text-sm">
                  {person.title}
                </p>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed text-enhanced">
                  {person.description}
                </p>
                <a
                  href={`mailto:${person.email}`}
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-digital-blue/10 text-digital-blue font-semibold text-sm hover:bg-digital-blue hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  Contact
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32a7?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-50/90 backdrop-blur-sm" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/90 backdrop-blur-md p-10 border border-gray-200/50 shadow-xl mb-8"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-8 text-styled-strong">
              <span className="text-gradient-tech">{story.title}</span>
            </h2>
          </motion.div>
          <div className="space-y-6">
            {story.paragraphs.map((para, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl bg-white/80 backdrop-blur-sm p-6 border border-gray-200/50 shadow-md"
              >
                <p className="text-slate-700 leading-relaxed text-lg text-enhanced">
                  {para}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-navy text-center mb-12 text-styled-strong"
          >
            <span className="text-gradient-tech">Core Values</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => {
              const Icon = coreValueIcons[value.icon] || BadgeDollarSign;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 text-center"
                >
                  <div className="flex justify-center">
                    <IconDuotone icon={Icon} size={24} />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-lg text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed text-enhanced">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack — monochrome icon bar */}
      <section className="py-16 sm:py-24 bg-slate-50/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-2xl text-navy text-center mb-10"
          >
            The Tech Stack
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12"
          >
            {techStack.map((tech) => {
              const Icon = techIcons[tech.icon] || Code2;
              return (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 text-slate-600"
                >
                  <div className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-navy">{tech.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="shrink-0 w-40 h-40 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-400"
            >
              {founder.photoPlaceholder && (
                <span className="text-sm text-center px-2">Founder photo</span>
              )}
            </motion.div>
            <div className="flex-1">
              <Quote className="text-digital-blue/60 mb-2" size={28} />
              <blockquote className="font-display font-semibold text-xl sm:text-2xl text-navy leading-relaxed">
                {founder.quote}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Versatility */}
      <section className="py-16 sm:py-24 bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-2xl text-navy text-center"
          >
            {industries.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-2 text-slate-600 text-center text-sm"
          >
            {industries.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-12"
          >
            {industries.sectors.map((sector) => {
              const Icon = industryIcons[sector.icon] || Building2;
              return (
                <div
                  key={sector.name}
                  className="flex flex-col items-center gap-2 text-navy"
                >
                  <IconDuotone icon={Icon} size={22} />
                  <span className="text-sm font-medium">{sector.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA — Join Our Digital Journey */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-2xl sm:text-3xl text-navy"
          >
            {cta.title}
          </motion.h2>
          <p className="mt-4 text-slate-600 leading-relaxed">{cta.subtitle}</p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Link
              to={cta.buttonHref}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-digital-blue text-white font-semibold text-lg hover:bg-digital-blue-hover transition-all duration-300 btn-cta-glow"
            >
              {cta.buttonLabel}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
