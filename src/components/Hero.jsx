import { motion } from 'framer-motion';

const stats = [
  { value: '4+', label: 'Specializations' },
  { value: '4', label: 'Featured Projects' },
  { value: '2+', label: 'Professional Experiences' },
  { value: '∞', label: 'Growth Mindset' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[calc(100vh-5rem)] overflow-hidden px-6 py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[#05050A]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex max-w-full rounded-full border border-cyan-300/20 bg-white/[0.06] px-4 py-2 text-center text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.16em] text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,0.16)] backdrop-blur sm:text-xs sm:tracking-[0.22em]"
          >
            Software Developer • Product Builder • Tech Founder
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-7 text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Paul Igwedinma
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg"
          >
            I create modern websites, digital products, and technology solutions that solve
            real-world problems, with a focus on clean design, functionality, and innovation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(59,130,246,0.28)] transition hover:scale-[1.02] hover:shadow-[0_20px_55px_rgba(34,211,238,0.28)]"
              href="#projects"
            >
              View My Work
            </a>
            <a
              className="inline-flex items-center justify-center rounded-md border border-white/12 bg-white/[0.05] px-6 py-3 text-sm font-bold text-white/85 backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/10 hover:text-white"
              href="#contact"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.18 }}
          className="relative w-full"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/15 blur-2xl" />
            <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-purple-500/15 blur-2xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                Current Focus
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Building practical technology products for Africa.
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.38 + index * 0.08, ease: 'easeOut' }}
                    className="rounded-xl border border-white/10 bg-black/20 p-4 backdrop-blur"
                  >
                    <p className="bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-200 bg-clip-text text-3xl font-black text-transparent">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-5 text-white/60">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.04] p-4 text-sm leading-6 text-white/65">
                Product-minded engineering for businesses, founders, and communities ready to
                move from idea to useful software.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
