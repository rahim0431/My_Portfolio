import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const skillCards = [
  {
    title: 'Frontend',
    gradient: 'from-[#3B82F6]/80 via-[#22D3EE]/40 to-[#7C3AED]/70',
    items: [
      { name: 'React', level: 'Advanced', iconUrl: `${import.meta.env.BASE_URL}skills/react.svg` },
      { name: 'Tailwind CSS', level: 'Advanced', iconUrl: `${import.meta.env.BASE_URL}skills/tailwind.svg` },
      { name: 'HTML', level: 'Advanced', iconUrl: `${import.meta.env.BASE_URL}skills/html5.svg` },
      { name: 'JavaScript', level: 'Advanced', iconUrl: `${import.meta.env.BASE_URL}skills/javascript.svg` },
    ],
  },
  {
    title: 'Backend',
    gradient: 'from-[#A855F7]/80 via-[#7C3AED]/40 to-[#EC4899]/70',
    items: [
      {
        name: 'Node.js',
        level: 'Advanced',
        iconStack: {
          base: `${import.meta.env.BASE_URL}skills/nodejs.svg`,
          mark: `${import.meta.env.BASE_URL}skills/nodejs-2.svg`,
          iconClass: 'brightness-150 saturate-150',
        },
      },
      { name: 'Laravel', level: 'Intermediate', iconUrl: `${import.meta.env.BASE_URL}skills/laravel.svg` },
      { name: 'Python', level: 'Intermediate', iconUrl: `${import.meta.env.BASE_URL}skills/python.svg` }
    ],
  },
  {
    title: 'Database',
    gradient: 'from-[#06B6D4]/80 via-[#22D3EE]/40 to-[#38BDF8]/70',
    items: [
      { name: 'MongoDB', level: 'Advanced', iconUrl: `${import.meta.env.BASE_URL}skills/mongodb.svg` },
      { name: 'MySQL', level: 'Advanced', iconUrl: `${import.meta.env.BASE_URL}skills/mysql.svg`, iconClass: 'brightness-150 saturate-150' },
    ],
  },
  {
    title: 'Tools',
    gradient: 'from-[#8B5CF6]/80 via-[#7C3AED]/40 to-[#60A5FA]/70',
    items: [
      { name: 'Git', level: 'Advanced', iconUrl: `${import.meta.env.BASE_URL}skills/git.svg` },
      { name: 'VS Code', level: 'Advanced', iconUrl: `${import.meta.env.BASE_URL}skills/vscode.svg` },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="cv-auto relative py-24 lg:py-32 bg-[#0B0F19] overflow-hidden mt-[-50px]">
      {/* Background ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(6,182,212,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent,rgba(255,255,255,0.02))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-60px]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <Sparkles size={16} className="text-[#06B6D4]" />
            <span className="text-sm font-medium tracking-wide text-white/80 uppercase">My Skills</span>
          </div>
          <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#06B6D4]">
              {' '}Skills
            </span>
          </h2>
          <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
            Technologies I use to build scalable and modern applications.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCards.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className={`group relative rounded-3xl p-[1px] bg-gradient-to-br ${group.gradient}`}
            >
              <div className="relative rounded-3xl border border-white/10 bg-[#0B0F19]/80 p-6 md:p-7 transition-shadow duration-300 group-hover:shadow-[0_18px_45px_rgba(12,18,32,0.55)]">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                    {group.title}
                  </h3>
                  <div className="h-px flex-1 mx-4 bg-gradient-to-r from-white/20 to-transparent" />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="group/item rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.12] hover:shadow-[0_10px_30px_rgba(12,18,32,0.4)]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-xs font-bold text-white/80 transition-transform duration-300 group-hover/item:scale-[1.05]">
                        {item.iconStack ? (
                          <div className="relative w-8 h-8">
                            <img
                              src={item.iconStack.base}
                              alt={`${item.name} logo`}
                              className="absolute inset-0 w-full h-full object-contain"
                              loading="lazy"
                            />
                            <img
                              src={item.iconStack.mark}
                              alt={`${item.name} wordmark`}
                              className="absolute inset-0 m-auto w-6 h-6 object-contain"
                              loading="lazy"
                            />
                          </div>
                        ) : item.iconUrl ? (
                          <img
                            src={item.iconUrl}
                            alt={item.name}
                            className={`object-contain ${item.iconClass || 'w-6 h-6'}`}
                            loading="lazy"
                          />
                        ) : (
                          item.badge
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{item.name}</div>
                        <div className="text-xs text-white/50">{item.level}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
