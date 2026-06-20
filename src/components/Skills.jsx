import { motion } from 'framer-motion';
import { Brain, Code2, Headphones, PenTool, TerminalSquare, UsersRound } from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

const iconMap = {
  Languages: Code2,
  'Frameworks & Libraries': TerminalSquare,
  Tools: PenTool,
  'Technical Support': Headphones,
  'Product Skills': Brain,
  'Soft Skills': UsersRound,
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ staggerChildren: 0.1 }}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80"
          >
            Skills
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl"
          >
            Tools, technologies, and strengths.
          </motion.h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.title];

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.07, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.075]"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition duration-300 group-hover:bg-cyan-400/18" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent opacity-70" />

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <span className="grid size-12 place-items-center rounded-xl border border-white/10 bg-black/30 text-cyan-200 shadow-[0_0_32px_rgba(34,211,238,0.12)]">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <h3 className="pt-2 text-xl font-bold tracking-tight text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/10 bg-black/24 px-3 py-2 text-xs font-medium text-white/68"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
