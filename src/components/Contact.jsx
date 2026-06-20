import { motion } from 'framer-motion';
import { Code2, Download, Link2, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/portfolioData';

const contactItems = [
  {
    label: 'Email',
    value: profile.email,
    href: profile.emailHref,
    icon: Mail,
  },
  {
    label: 'Location',
    value: profile.location,
    href: '#contact',
    icon: MapPin,
  },
  {
    label: 'LinkedIn',
    value: 'chukwukamadu-igwedinma',
    href: profile.linkedIn,
    icon: Link2,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'DocChukiy',
    href: profile.github,
    icon: Code2,
    external: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/12 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-purple-500/12 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-blue-500/12 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-purple-500/12 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80"
              >
                Contact
              </motion.p>

              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl"
              >
                Let&apos;s build something useful.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
              >
                I&apos;m open to frontend roles, junior developer opportunities, IT support roles,
                freelance projects, internships, and collaborations.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(59,130,246,0.28)] transition hover:scale-[1.02] hover:shadow-[0_20px_55px_rgba(34,211,238,0.28)]"
                  href={profile.emailHref}
                >
                  <Mail size={18} strokeWidth={1.8} />
                  Send Email
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.05] px-6 py-3 text-sm font-bold text-white/85 backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/10 hover:text-white"
                  href={profile.cvHref}
                  download
                >
                  <Download size={18} strokeWidth={1.8} />
                  Download CV
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
            >
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/24 p-4 transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.06]"
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                        {item.label}
                      </span>
                      <span className="mt-1 block break-words text-sm font-semibold leading-6 text-white/78 group-hover:text-white">
                        {item.value}
                      </span>
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
