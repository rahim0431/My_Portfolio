import React, { useEffect, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    value: 'iamabdulrahim0431@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=iamabdulrahim0431@gmail.com',
    type: 'link',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 93425 42389',
    href: 'tel:+919342542389',
    type: 'link',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Kayalpattinam, Tamil Nadu, India',
    type: 'static',
  },
];

const Contact = () => {
  const formEndpoint = 'https://formspree.io/f/xgopnvlv';
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const isSuccess = status === 'success';
  const isError = status === 'error';

  useEffect(() => {
    if (!statusMessage || status === 'sending') {
      return undefined;
    }

    const timer = setTimeout(() => {
      setStatusMessage('');
      setStatus('idle');
    }, 4000);

    return () => clearTimeout(timer);
  }, [status, statusMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setStatusMessage('');

    try {
      const formData = new FormData(form);
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        setStatus('success');
        setStatusMessage("Thanks! Your message has been sent.");
        return;
      }

      let errorText = 'Something went wrong. Please try again.';
      try {
        const data = await response.json();
        if (data?.errors?.length) {
          errorText = data.errors.map((err) => err.message).join(' ');
        }
      } catch {
        // Keep default error message if response isn't JSON.
      }

      setStatus('error');
      setStatusMessage(errorText);
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please try again.');
    }
  };

  const closeModal = () => {
    setStatusMessage('');
    setStatus('idle');
  };

  return (
    <section id="contact" className="cv-auto relative py-24 lg:py-32 bg-[#0B0F19] overflow-hidden mt-[-50px]">
      {/* Background ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(6,182,212,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent,rgba(255,255,255,0.02))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-50px]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <Sparkles size={16} className="text-[#06B6D4]" />
            <span className="text-sm font-medium tracking-wide text-white/80 uppercase">Contact</span>
          </div>
          <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
            Let's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#06B6D4]">
              {' '}Connect
            </span>
          </h2>
          <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
            I’m always open to discussing new projects, freelance opportunities, or creative ideas.
If you have something in mind, feel free to reach out — I’d love to help bring it to life.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:items-stretch">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="h-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8"
          >
            <form action={formEndpoint} method="POST" className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Portfolio Inquiry" />
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-white/60">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-[#0B0F19]/70 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-[#0B0F19]/70 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/40"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/60">Project Details</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Share a quick summary, goals, and timeline..."
                  className="w-full rounded-2xl border border-white/10 bg-[#0B0F19]/70 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#0B0F19] font-semibold hover:scale-[1.02] transition-transform disabled:cursor-not-allowed disabled:opacity-70"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                {status === 'sending' ? (
                  <span
                    className="h-4 w-4 animate-spin rounded-full border-2 border-[#0B0F19]/30 border-t-[#0B0F19]"
                    aria-hidden="true"
                  />
                ) : (
                  <Send size={16} />
                )}
              </button>
              {statusMessage && !isSuccess ? (
                <p
                  className={`text-sm ${isError ? 'text-red-300' : 'text-emerald-300'}`}
                  role="status"
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              ) : null}
            </form>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 gap-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              const MotionTag = card.type === 'link' ? motion.a : motion.div;
              return (
                <MotionTag
                  key={card.title}
                  href={card.type === 'link' ? card.href : undefined}
                  target={card.title === 'Email' ? '_blank' : undefined}
                  rel={card.title === 'Email' ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, transition: { duration: 0.18, ease: 'easeOut' } }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className={`group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 flex items-center gap-4 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_18px_45px_rgba(12,18,32,0.55)] ${card.type === 'link' ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 uppercase tracking-widest">{card.title}</div>
                    <div className="text-white font-semibold">{card.value}</div>
                  </div>
                </MotionTag>
              );
            })}            <MotionConfig reducedMotion="never">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ willChange: 'transform' }}
                  className="availability-glow relative rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(124,58,237,0.22),transparent_45%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(6,182,212,0.18),transparent_40%)]" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
                      Availability
                    </div>
                    <h4 className="mt-4 text-xl font-semibold text-white">Open for freelance</h4>
                    <p className="mt-1 text-sm text-white/60">Currently accepting new projects starting May 2026</p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02] active:-translate-y-0.5 active:scale-[1.01]">
                        <div className="text-[11px] uppercase tracking-widest text-white/50">Next Slot</div>
                        <div className="mt-1 text-white font-semibold">2 weeks</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02] active:-translate-y-0.5 active:scale-[1.01]">
                        <div className="text-[11px] uppercase tracking-widest text-white/50">Response</div>
                        <div className="mt-1 text-white font-semibold">Under 24 hrs</div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs text-emerald-200">
                      <motion.span
                        animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                        className="availability-pulse inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                      />
                      Actively accepting new inquiries
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </MotionConfig>
          </div>
        </div>
      </div>

      {isSuccess && statusMessage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F19]/70 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 text-center shadow-[0_30px_80px_rgba(10,15,30,0.55)] backdrop-blur-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_45%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.25),transparent_40%)]" />
            <div className="relative z-10 mx-auto mb-4 h-12 w-12 rounded-2xl border border-white/20 bg-white/10 text-emerald-200 flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.25)]">
              <Send size={20} />
            </div>
            <h3 id="contact-success-title" className="relative z-10 text-xl font-semibold text-white">
              Message Sent
            </h3>
            <p className="relative z-10 mt-2 text-sm text-white/70">{statusMessage}</p>
            <button
              type="button"
              onClick={closeModal}
              className="relative z-10 mt-6 w-full rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-[#0B0F19] transition-transform hover:scale-[1.02]"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Contact;
