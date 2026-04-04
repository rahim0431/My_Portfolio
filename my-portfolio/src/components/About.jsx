import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Terminal, Cpu, Layers, Zap,
  GraduationCap, Briefcase, Heart, Coffee, ArrowUpRight,
  Sparkles
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────── */
const skills = [
  { name: 'React JS', level: 'Advanced', value: 88, color: '#7C3AED' },
  { name: 'Node.js / Express', level: 'Advanced', value: 84, color: '#06B6D4' },
  { name: 'Laravel / PHP', level: 'Intermediate', value: 72, color: '#7C3AED' },
  { name: 'MySQL / Databases', level: 'Advanced', value: 82, color: '#06B6D4' },
];

const journey = [
  {
    year: '2023',
    icon: GraduationCap,
    title: 'Started\u00A0Coding\nJourney',
    desc: 'Started coding journey, exploring web development fundamentals.',
  },
  {
    year: '2024',
    icon: Code2,
    title: 'Full-Stack\nProject\u00A0Growth',
    desc: 'Built multiple full-stack projects and gained hands-on experience.',
  },
  {
    year: '2026',
    icon: Briefcase,
    title: 'Open\u00A0to\nOpportunities',
    desc: 'Open to internships, freelance, and opportunities.',
  },
];

const highlights = [
  { icon: Layers, label: 'Scalable Systems' },
  { icon: Zap, label: 'Performance Optimized' },
  { icon: Heart, label: 'Problem Solver' },
  { icon: Coffee, label: 'Clean Code' },
];

const About = () => {
  return (
    <section id="about" className="cv-auto relative pt-6 pb-24 lg:pt-20 lg:pb-32 bg-[#0B0F19] overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-20 left-10 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-[#7C3AED]/10 rounded-full blur-[120px] md:blur-[180px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#06B6D4]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="relative grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Divider Glow */}
                <div className="pointer-events-none absolute left-1/2 top-8 bottom-8 hidden xl:block w-px bg-gradient-to-b from-[#7C3AED]/0 via-[#7C3AED]/50 to-[#06B6D4]/0 shadow-[0_0_18px_rgba(124,58,237,0.6)]" />
                
                {/* ─── LEFT COLUMN: Bio & Highlights ─── */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col text-left space-y-10"
                >
                    {/* Header */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                            <Sparkles size={16} className="text-[#06B6D4]" />
                            <span className="text-sm font-medium tracking-wide text-white/80 uppercase">About Me</span>
                        </div>
                        
                        <h2 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                            Crafting <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#06B6D4]">
                                Experience.
                            </span>
                        </h2>
                        
                        <div className="space-y-4 text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
                            <p>
                                Hi, I'm <strong className="text-white font-semibold">Abdul Rahim</strong> a passionate Full Stack Developer focused on building modern, scalable web applications.
                                I enjoy turning ideas into real-world digital products that solve problems and create impact.
                            </p>
                            <p>
                                I specialize in building responsive, high-performance applications using modern technologies. I focus on clean architecture, scalable systems, and reliable delivery from end to end.
                            </p>
                        </div>
                    </div>

                    {/* Stats / Highlights Row */}
                    <div className="flex flex-wrap gap-3 pt-4">
                        {highlights.map((h) => {
                            const Icon = h.icon;
                            return (
                                <motion.div 
                                    key={h.label}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm cursor-default transition-colors duration-300"
                                >
                                    <Icon size={18} className="text-[#7C3AED]" />
                                    <span className="text-sm font-medium text-white/80">{h.label}</span>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* CTA */}
                    <div className="pt-6 flex justify-center">
                        <a href="mailto:iamabdulrahim0431@gmail.com" className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#0B0F19] font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            <span>Let’s Work Together</span>
                            <span className="w-8 h-8 rounded-full bg-[#0B0F19]/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <ArrowUpRight size={16} />
                            </span>
                        </a>
                    </div>
                </motion.div>


                {/* --- RIGHT COLUMN: Developer Console + Skill Matrix --- */}
                <div className="relative w-full min-h-[500px] md:min-h-[600px] xl:min-h-[700px] flex items-center justify-center mt-12 xl:mt-0">
                    {/* Ambient accents */}
                    <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#7C3AED]/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#06B6D4]/10 rounded-full blur-3xl" />
                    <div className="relative w-full max-w-xl space-y-20 mt-[-60px]">
                        {/* Skill Matrix */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                            className="group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_60px_rgba(12,18,32,0.6)]"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Cpu size={20} className="text-[#7C3AED]" />
                                <h3 className="text-lg md:text-xl font-bold text-white">Skill Matrix</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="rounded-2xl border border-white/10 bg-[#0B0F19]/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_12px_30px_rgba(124,58,237,0.18)]"
                                    >
                                        <div className="flex items-center justify-between text-sm text-white/80">
                                            <span className="font-semibold">{skill.name}</span>
                                            <span className="text-white/50">{skill.level}</span>
                                        </div>
                                        <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                            <div className="h-full rounded-full" style={{ width: `${skill.value}%`, backgroundColor: skill.color }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        {/* Milestones */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 items-start"
                        >
                            {journey.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.year}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{ duration: 0.8, delay: 0.1 + i * 0.1 }}
                                        className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/25 via-white/10 to-white/0 shadow-[0_12px_28px_rgba(0,0,0,0.3)] transition-shadow duration-300 group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)] overflow-hidden"
                                    >
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7C3AED]/15 via-transparent to-[#06B6D4]/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        <div className="relative rounded-3xl border border-white/10 bg-[#0B0F19]/70 px-5 py-6 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20">
                                            <div className="flex items-center justify-between">
                                                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 uppercase tracking-widest transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/90">
                                                    <Icon size={14} className="text-[#06B6D4] transition-colors duration-300 group-hover:text-[#7C3AED]" />
                                                    {item.year}
                                                </div>
                                                <div className="h-9 w-9 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                                                    <Icon size={16} className="text-[#7C3AED] transition-colors duration-300 group-hover:text-[#06B6D4]" />
                                                </div>
                                            </div>
                                            <div className="mt-4 text-base md:text-lg font-semibold text-white whitespace-pre-line">{item.title}</div>
                                            <div className="mt-2 text-sm text-white/60 leading-relaxed">{item.desc}</div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
            
            {/* Stats row below the split */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-16 lg:mt-24 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x divide-white/10 border-y border-white/10 py-8 md:py-10"
            >
                {[
                  { v: '2+', l: 'Years Exp.' },
                  { v: '5+', l: 'Projects' },
                  { v: '10+', l: 'Technologies' },
                  { v: '100%', l: 'Dedication' },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="group text-center px-4 py-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:shadow-[0_16px_40px_rgba(124,58,237,0.18)]"
                  >
                    <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-2 transition-colors duration-300 group-hover:from-white group-hover:to-white/60">{s.v}</div>
                    <div className="text-xs md:text-sm text-white/40 font-medium uppercase tracking-widest transition-colors duration-300 group-hover:text-white/70">{s.l}</div>
                  </div>
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default About;
