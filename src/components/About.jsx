import { motion } from 'framer-motion';

const paragraphs = [
  "I'm Chukwukamadu Paul Igwedinma, a Software Developer and Product Builder passionate about using technology to solve real-world problems.",
  'I specialize in frontend development, digital product development, and technology solutions, with experience building modern web-based platforms and startup-focused ideas.',
  "Over time, I've worked on projects focused on real estate technology, service marketplaces, and digital innovation, while continuously improving my skills in software development and product thinking.",
  "Beyond coding, I'm deeply interested in building scalable technology products that can create impact across Africa and beyond.",
  'My long-term vision is to combine software engineering, innovation, and entrepreneurship to build meaningful digital solutions through technology.',
];

const quickFacts = [
  'B.Sc Computer Science',
  'Software Developer',
  'Product Builder',
  'Tech Founder',
  'Based in Nigeria',
  'Building TerraConnect & Handiwave',
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="absolute right-0 top-10 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80"
          >
            About Me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl"
          >
            A developer with a builder&apos;s mindset.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-8 rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:p-8"
          >
            <div className="space-y-5 text-base leading-8 text-white/72">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative lg:sticky lg:top-28"
        >
          <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-blue-500/18 via-purple-500/18 to-cyan-400/18 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-black/30 p-6 shadow-2xl shadow-black/35 backdrop-blur-2xl sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/15 blur-2xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">
                Profile
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white">Quick Facts</h3>

              <ul className="mt-7 space-y-3">
                {quickFacts.map((fact, index) => (
                  <motion.li
                    key={fact}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-medium leading-6 text-white/76"
                  >
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.55)]" />
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

export default About;
