import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/rahim0431', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://linkedin.com/in/rahim0431', label: 'LinkedIn' },
    {
      icon: Mail,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=iamabdulrahim0431@gmail.com',
      label: 'Email'
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden md:overflow-visible">
      {/* Background Gradient Effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 via-transparent to-[#06B6D4]/5"
        aria-hidden="true"
      ></div>
      
      {/* Animated Blobs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-[#7C3AED]/20 rounded-full blur-3xl animate-none md:animate-pulse motion-reduce:animate-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-3xl animate-none md:animate-pulse md:delay-1000 motion-reduce:animate-none"
        aria-hidden="true"
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 md:pt-32 md:pb-20 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Content Area */}
          <motion.div
            className="w-full lg:w-[55%] text-center lg:text-left flex flex-col items-center lg:items-start"
            initial={shouldReduceMotion ? false : 'hidden'}
            animate={shouldReduceMotion ? 'show' : 'show'}
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.95,
                  ease: [0.22, 1, 0.36, 1],
                  staggerChildren: 0.14
                }
              }
            }}
          >
            {/* Greeting */}
            <motion.div
              className="mb-6 animate-fade-in"
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#7C3AED]/10 to-[#06B6D4]/10 rounded-full text-[#E5E7EB] text-sm font-medium border border-[#7C3AED]/20">
               <span className='text-l'>🚀</span> Welcome to My Digital Portfolio
              </span>
            </motion.div>

            {/* Name and Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight"
              variants={{
                hidden: { opacity: 0, x: -26 },
                show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <span className="text-[#E5E7EB]">Hi, I'm </span>
              <br className="hidden lg:block md:hidden" />
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent whitespace-nowrap">
                Abdul Rahim
              </span>
            </motion.h1>
            
            <motion.div
              className="mb-8"
              variants={{
                hidden: { opacity: 0, x: -22 },
                show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#E5E7EB] mb-6 leading-tight">
                I'm a{' '}
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent role-highlight">
                  Full Stack Developer
                </span>
              </h2>
              <p className="text-[#E5E7EB]/80 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  I design and develop scalable, high-performance web applications that deliver real business results.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start mb-10"
              variants={{
                hidden: { opacity: 0, x: -18 },
                show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <a
                href="#contact"
                className="cta-shine px-6 py-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-medium shadow-lg transition-all duration-300 text-center hover:scale-105"
              >
                <span className="relative z-10">Let's Talk</span>
              </a>

              <a
                href="#work"
                className="group relative overflow-hidden px-6 py-3 rounded-full border border-[#7C3AED] text-white transition-all duration-300 text-center hover:-translate-y-0.5 hover:bg-[#7C3AED]/10"
              >
                <span className="relative z-10">View My Work</span>
                <span className="pointer-events-none absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.35),transparent_70%)] transition-opacity duration-500 group-hover:opacity-100" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-5"
              variants={{
                hidden: { opacity: 0, x: -14 },
                show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative grid place-items-center w-11 h-11 rounded-full border border-white/10 bg-white/5 text-[#E5E7EB]/80 transition-all duration-300 ease-out hover:text-white hover:border-transparent hover:-translate-y-1 hover:scale-105 hover:rotate-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
                    aria-label={social.label}
                  >
                    <span className="pointer-events-none absolute -inset-1 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.6),rgba(6,182,212,0.45),transparent_70%)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-90" />
                    <Icon size={20} className="relative z-10" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

        {/* Right Image Area */}
         <motion.div
          className="w-full lg:w-[45%] flex justify-center lg:justify-end relative mt-10 lg:mt-0"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
         >
          <motion.div
            className="relative"
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={shouldReduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
        {/* Image Container */}
         <div className="relative w-[260px] sm:w-[320px] md:w-[420px] lg:w-[480px] aspect-square rounded-full p-[3px] bg-gradient-to-br from-[#7C3AED] via-[#7C3AED]/20 to-[#06B6D4] group shadow-xl shadow-[#7C3AED]/20">
        {/* Inner Circle */}
         <div className="w-full h-full rounded-full bg-[#0B0F19] overflow-hidden relative border-[4px] border-[#0B0F19]">

            <img 
                src={`${import.meta.env.BASE_URL}me.jpg`} 
                alt="Abdul Rahim"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
            />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent opacity-50 group-hover:opacity-0 transition duration-500"></div>
        </div>
        </div>

        {/* Decorations */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-white/5 border-dashed -z-10 animate-[spin_60s_linear_infinite] motion-reduce:animate-none"
          aria-hidden="true"
        ></div>
          </motion.div>

        </motion.div>
        </div>


        {/* Scroll Down Indicator */}
        <div className="mt-8 flex justify-center md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:mt-0">
            <a
              href="#about"
              className="text-[#E5E7EB] hover:text-[#7C3AED] transition-colors duration-300 flex flex-col items-center gap-2"
            >
              <span className="text-sm">Scroll Down</span>
              <ArrowDown size={20} className="animate-bounce motion-reduce:animate-none" />
            </a>
          </div>
        </div>
    </section>
  );
};

export default Hero;
