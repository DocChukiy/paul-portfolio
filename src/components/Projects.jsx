import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="absolute left-0 top-20 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

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
            Featured Projects
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl"
          >
            Products, platforms, and practical builds.
          </motion.h2>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/25 hover:bg-white/[0.075] sm:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent opacity-70" />
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl transition duration-300 group-hover:bg-blue-500/18" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-purple-500/10 blur-2xl transition duration-300 group-hover:bg-purple-500/18" />

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                      Project {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-black/30 text-cyan-200 shadow-[0_0_32px_rgba(34,211,238,0.12)]">
                    <ExternalLink size={20} strokeWidth={1.8} />
                  </span>
                </div>

                <p className="mt-5 text-base leading-8 text-white/68">{project.description}</p>

                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                    Highlights
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-md border border-cyan-300/10 bg-cyan-300/[0.035] px-3 py-2 text-xs font-medium text-cyan-50/70"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                    Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-white/10 bg-black/24 px-3 py-2 text-xs font-medium text-white/65"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold text-white/80 transition hover:border-cyan-300/35 hover:bg-white/10 hover:text-white"
                  href={project.href}
                  aria-label={`View ${project.title} project`}
                >
                  View Project
                  <ExternalLink size={16} strokeWidth={1.8} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
