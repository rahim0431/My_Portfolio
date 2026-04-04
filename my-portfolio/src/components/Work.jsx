import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

const projects = [
  {
    title: 'Chat Web Application',
    type: 'Full-Stack Product',
    year: '2026',
    desc:
      'A real-time full-stack chat application built to deliver seamless and interactive communication.Features include instant messaging, audio/video calling using WebRTC, and AI-powered enhancements for smarter conversations.',
    tech: ['React JS', 'Node.js', 'MongoDB', 'Socket.io','WebRTC'],
    images: ['/chat_register.jpg',
              '/chat_login.jpg',
              '/chat_msg.jpg',
              '/chat_profile.jpg',
              '/chat_ai.jpg',
              '/chat_settings.jpg',
              '/chat_themes.jpg',
    ],
    // stats: ['98 Lighthouse', '1.2s load', 'RBAC'],
    featured: true,
  },
  {
    title: 'Student Management System',
    type: 'Web App',
    year: '2025',
    desc:
      'A web-based system designed to manage student data efficiently, including records, updates, and organization of academic information',
    tech: ['HTML', 'CSS', 'JavaScript','Laravel','MySql'],
    // stats: ['<120ms latency', 'Multi-room'],
  },
  {
    title: 'Personal Portfolio',
    type: 'Web App',
    year: '2025',
    desc:
      'A modern and responsive personal portfolio website showcasing projects, skills, and contact information with a clean and professional design.',
    tech: ['React JS','Tailwind', 'Framer Motion'],
    // stats: ['Design tokens', 'Dark UI'],
  },
];

const Work = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const previewImages = featured?.images?.filter(Boolean) ?? [];
  const [activeImage, setActiveImage] = useState(0);
  const activeIndex = previewImages.length
    ? Math.min(activeImage, previewImages.length - 1)
    : 0;

  useEffect(() => {
    if (previewImages.length < 2) return;
    const id = setInterval(() => {
      setActiveImage((current) => (current + 1) % previewImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, [previewImages.length]);

  return (
    <section id="work" className="cv-auto relative py-24 lg:py-32 bg-[#0B0F19] overflow-hidden mt-[-40px]">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,0.15),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent,rgba(255,255,255,0.03))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-70px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <Sparkles size={16} className="text-[#06B6D4]" />
              <span className="text-sm font-medium tracking-wide text-white/80 uppercase">My Work</span>
            </div>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
              Featured
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#06B6D4]">
                {' '}Projects
              </span>
            </h2>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
              Here are some of the real-world projects I’ve built, focusing on performance, scalability, and user experience.
            </p>
          </div>

        </div>

        {/* Featured project */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group mt-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#7C3AED]/60 hover:shadow-[0_0_0_1px_rgba(124,58,237,0.45),0_24px_60px_rgba(12,18,32,0.6)]"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                  ⭐ Featured Project
                </span>
                <Layers size={16} className="text-[#7C3AED]" />
                <span>{featured.type}</span>
                <span className="text-white/30">�</span>
                <span>{featured.year}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white transition-transform duration-300 group-hover:translate-x-1">
                {featured.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{featured.desc}</p>

              <div className="flex flex-wrap gap-2">
                {featured.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs uppercase tracking-widest text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="flex flex-wrap gap-3">
                {featured.stats.map((stat) => (
                  <span key={stat} className="text-sm text-white/50">
                    {stat}
                  </span>
                ))}
              </div> */}

              <div className="flex flex-wrap gap-3 pt-2">
                <button className="group/cta inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0B0F19] font-semibold transition-transform duration-300 hover:scale-105">
                  🚀 View Project Details
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/cta:translate-x-1" />
                </button>
                <button className="group/cta inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition-colors">
                  <ExternalLink size={16} className="transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                   Live Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[#7C3AED]/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#06B6D4]/20 blur-3xl" />

              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-4">
                <div className="rounded-xl border border-white/10 bg-[#0B0F19]/70 p-4">
                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span>Preview</span>
                    <span>Dashboard UI</span>
                  </div>
                  <div className="mt-4">
                    <div className="group rounded-lg border border-white/10 bg-white/5 overflow-hidden relative h-44 md:h-52 p-2">
                      {previewImages.length ? (
                        <div className="absolute inset-2 rounded-md overflow-hidden">
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={activeIndex}
                              src={previewImages[activeIndex]}
                              alt={`${featured.title} preview ${activeIndex + 1}`}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.6, ease: 'easeInOut' }}
                            />
                          </AnimatePresence>
                          <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-black/15" />
                          <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <div className="absolute -inset-y-1/2 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[220%] transition-all duration-1000" />
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/30 to-[#06B6D4]/20" />
                      )}
                    </div>

                    {previewImages.length > 1 && (
                      <div className="mt-3 flex items-center justify-center gap-2">
                        {previewImages.map((_, index) => {
                          const isActive = index === activeIndex;
                          return (
                            <button
                              key={`dot-${index}`}
                              type="button"
                              onClick={() => setActiveImage(index)}
                              className={`h-2.5 w-2.5 rounded-full transition ${isActive ? 'bg-white/80' : 'bg-white/30'}`}
                              aria-label={`Show preview ${index + 1}`}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#06B6D4]/60 hover:shadow-[0_0_0_1px_rgba(6,182,212,0.4),0_20px_50px_rgba(12,18,32,0.55)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,0.12),transparent_50%)]" />
              <div className="relative flex items-center justify-between text-sm text-white/60">
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <h4 className="relative mt-4 text-xl font-bold text-white transition-transform duration-300 group-hover:translate-x-1">
                {project.title}
              </h4>
              <p className="relative mt-3 text-white/60 text-sm leading-relaxed">{project.desc}</p>

              <div className="relative mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="relative mt-4 flex items-center justify-end">
                {/* <div className="flex items-center gap-3 text-xs text-white/50">
                  {project.stats.map((stat) => (
                    <span key={stat}>{stat}</span>
                  ))}
                </div> */}
                <button className="group/cta inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                  View
                  <ExternalLink size={14} className="transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
