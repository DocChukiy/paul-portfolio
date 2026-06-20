import { motion } from 'framer-motion';
import { BriefcaseBusiness, CalendarDays } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="absolute right-0 top-12 -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

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
            Experience
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl"
          >
            Professional background.
          </motion.h2>
        </motion.div>

        <div className="relative mt-12 space-y-6 lg:space-y-8">
          <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300/45 via-purple-300/25 to-transparent lg:block" />

          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="relative lg:pl-16"
            >
              <div className="absolute left-0 top-8 hidden size-10 place-items-center rounded-full border border-cyan-300/25 bg-[#05050A] text-cyan-200 shadow-[0_0_32px_rgba(34,211,238,0.22)] lg:grid">
                <BriefcaseBusiness size={18} strokeWidth={1.8} />
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.075] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/45 to-transparent opacity-70" />
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl transition duration-300 group-hover:bg-cyan-400/18" />

                <div className="relative">
                  <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/40">
                        {experience.company}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                        {experience.role}
                      </h3>
                    </div>

                    <div className="inline-flex w-fit max-w-full items-start gap-2 rounded-md border border-white/10 bg-black/24 px-3 py-2 text-sm font-medium leading-6 text-white/62">
                      <span className="mt-0.5 shrink-0">
                        <CalendarDays size={16} strokeWidth={1.8} />
                      </span>
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  <p className="mt-5 max-w-4xl text-base leading-8 text-white/68">
                    {experience.description}
                  </p>

                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                      Responsibilities
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {experience.responsibilities.map((responsibility) => (
                        <span
                          key={responsibility}
                          className="rounded-md border border-cyan-300/10 bg-cyan-300/[0.035] px-3 py-2 text-xs font-medium text-cyan-50/70"
                        >
                          {responsibility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
