import { motion } from 'framer-motion';
import { Code2, DatabaseZap, Headphones, Rocket } from 'lucide-react';

const specializations = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive, modern, and user-friendly web interfaces focused on performance, accessibility, and clean user experience.',
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    icon: Code2,
  },
  {
    title: 'Product Development',
    description:
      'Designing and developing digital products and startup-focused solutions that solve real-world problems through technology and innovation.',
    tools: ['SaaS Concepts', 'Marketplace Platforms', 'Product Strategy', 'UI/UX Thinking'],
    icon: Rocket,
  },
  {
    title: 'Technical Support & IT Solutions',
    description:
      'Providing technical support, troubleshooting, and system assistance with experience in ICT environments and service management operations.',
    tools: ['Troubleshooting', 'IT Support', 'User Assistance', 'Service Operations'],
    icon: Headphones,
  },
  {
    title: 'Data & Automation',
    description:
      'Exploring data analysis, automation, and technology-driven workflows using modern tools and programming concepts.',
    tools: ['Python', 'Excel', 'Automation', 'Analytics'],
    icon: DatabaseZap,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Specializations() {
  return (
    <section
      id="specializations"
      className="relative isolate overflow-hidden border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

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
            Specializations
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl"
          >
            The roles I&apos;m built for.
          </motion.h2>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {specializations.map((specialization, index) => {
            const Icon = specialization.icon;

            return (
              <motion.article
                key={specialization.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/25 hover:bg-white/[0.075] sm:p-8"
              >
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-400/10 blur-2xl transition duration-300 group-hover:bg-cyan-400/18" />
                <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-purple-500/10 blur-2xl transition duration-300 group-hover:bg-purple-500/18" />

                <div className="relative">
                  <div className="mb-7 grid size-13 place-items-center rounded-xl border border-white/10 bg-black/30 text-cyan-200 shadow-[0_0_32px_rgba(34,211,238,0.14)]">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {specialization.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/68">
                    {specialization.description}
                  </p>

                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                      Tools
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {specialization.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md border border-white/10 bg-black/24 px-3 py-2 text-xs font-medium text-white/65"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
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

export default Specializations;
