import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/rahim0431',
    Icon: GithubIcon
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/rahim0431',
    Icon: LinkedinIcon
  },
  {
    name: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=iamabdulrahim0431@gmail.com',
    Icon: Mail
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const navRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const socialHoverMotion = shouldReduceMotion ? {} : { y: -3, scale: 1.12, rotate: 6 };
  const socialTapMotion = shouldReduceMotion ? {} : { scale: 0.94, rotate: -6 };
  const socialLinkClass =
    'group relative grid place-items-center w-9 h-9 rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 hover:text-white hover:border-transparent overflow-visible';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const updateActiveSection = () => {
      const navHeight = navRef.current?.offsetHeight ?? 0;
      const activationLine = navHeight + 24;
      let currentSection = sections[0];

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= activationLine) {
          currentSection = section;
        }
      });

      setActiveSection(`#${currentSection.id}`);
    };

    updateActiveSection();
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      const menuEl = menuRef.current;
      const buttonEl = menuButtonRef.current;
      if (!menuEl || !buttonEl) return;
      if (!menuEl.contains(event.target) && !buttonEl.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
    document.body.style.overflow = '';
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      ref={navRef}
      initial={shouldReduceMotion ? false : { y: -100 }}
      animate={shouldReduceMotion ? undefined : { y: 0 }}
      transition={
        shouldReduceMotion ? undefined : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      }
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-premium p-[1px] relative">
            <div className="absolute inset-0 bg-gradient-premium rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-full h-full bg-[#0B0F19] rounded-xl flex items-center justify-center relative z-10">
              <Code2 className="w-5 h-5 text-white" />
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight">
            AR<span className="text-gradient">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`transition-colors duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 rounded-sm ${
                    activeSection === link.href
                      ? 'text-white'
                      : 'text-[#E5E7EB]/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-premium transition-all duration-300 ${
                      activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="h-6 w-[1px] bg-white/10 mx-2" />

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                whileHover={socialHoverMotion}
                whileTap={socialTapMotion}
                className={socialLinkClass}
              >
                <span className="pointer-events-none absolute -inset-1 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.6),rgba(6,182,212,0.45),transparent_70%)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-90" />
                <social.Icon className="w-5 h-5 relative z-10" />
              </motion.a>
            ))}
            <a
              href="#contact"
              className="cta-shine px-5 py-2.5 rounded-full bg-gradient-premium text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19]"
            >
              <span className="relative z-10">Let's Talk</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          ref={menuButtonRef}
          className="p-2 md:hidden rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] md:hidden z-40"
            />
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
              animate={shouldReduceMotion ? { opacity: 1, height: 'auto' } : { opacity: 1, height: 'auto' }}
              exit={shouldReduceMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
              className="md:hidden bg-[#111827] border-b border-white/5 shadow-2xl overflow-hidden relative z-50"
            >
              <div className="px-6 py-6 flex flex-col gap-6">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.li
                    key={link.name}
                      initial={shouldReduceMotion ? false : { x: -20, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { x: 0, opacity: 1 }}
                      transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 rounded-sm ${
                          activeSection === link.href ? 'text-white' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="h-[1px] w-full bg-white/10" />
                
                <div className="flex flex-col gap-4 pb-4">
                <a
                  href="#contact"
                  className="cta-shine w-full py-3 rounded-full bg-gradient-premium text-white text-center font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]"
                >
                  <span className="relative z-10">Let's Talk</span>
                </a>
                  <div className="flex justify-center gap-8 mt-2">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        title={social.name}
                        whileHover={socialHoverMotion}
                        whileTap={socialTapMotion}
                        className={`${socialLinkClass} w-10 h-10`}
                      >
                        <span className="pointer-events-none absolute -inset-1 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.6),rgba(6,182,212,0.45),transparent_70%)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-90" />
                        <social.Icon className="w-6 h-6 relative z-10" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
