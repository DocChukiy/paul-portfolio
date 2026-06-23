import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  Database,
  Filter,
  LayoutDashboard,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Smartphone,
  UserRound,
} from 'lucide-react';

const features = [
  { label: 'Property listings', icon: Building2 },
  { label: 'Advanced search and filtering', icon: Filter },
  { label: 'User profiles', icon: UserRound },
  { label: 'Property management dashboard', icon: LayoutDashboard },
  { label: 'Messaging system', icon: MessageSquare },
  { label: 'Property discovery', icon: Search },
  { label: 'Verification system', icon: ShieldCheck },
  { label: 'Mobile responsive experience', icon: Smartphone },
];

const techStack = [
  { title: 'Frontend', items: ['React', 'Tailwind CSS', 'Framer Motion'] },
  { title: 'Backend', items: ['Supabase'] },
  { title: 'Deployment', items: ['Vercel'] },
];

const challenges = [
  'Designing a scalable marketplace that can support buyers, renters, sellers, agents, and property managers.',
  'Managing different user types while keeping each workflow clear and useful.',
  'Organizing property data so listings remain searchable, structured, and easy to compare.',
  'Thinking through trust and verification systems for property stakeholders and listed assets.',
];

const lessons = [
  'Marketplace architecture depends on clean user flows, clear data boundaries, and reliable discovery patterns.',
  'Product design must reduce friction for both property seekers and listing owners.',
  'User experience is central when people are making high-trust decisions around property.',
  'Scalable system thinking helps separate discovery, listing management, communication, and transaction flows.',
];

const roadmap = [
  'AI property recommendations',
  'Interactive maps',
  'Mortgage integrations',
  'Escrow transactions',
  'Mobile applications',
  'Real estate analytics',
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({ label, title }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.08 }}
      className="max-w-3xl"
    >
      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80"
      >
        {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:p-8 ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

function TerraConnectCaseStudy() {
  return (
    <main id="main-content" className="bg-[#05050A] text-white">
      <section className="relative isolate overflow-hidden px-6 py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[#05050A]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />

        <div className="mx-auto max-w-6xl">
          <motion.a
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold text-white/80 transition hover:border-cyan-300/35 hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft size={16} strokeWidth={1.8} />
            Back to Portfolio
          </motion.a>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="inline-flex rounded-full border border-cyan-300/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,0.16)] backdrop-blur"
              >
                Case Study
              </motion.p>
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mt-7 text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                TerraConnect Global
              </motion.h1>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mt-6 max-w-2xl text-lg leading-8 text-white/70"
              >
                Modernizing property discovery and real estate transactions through technology.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-400/20 blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl">
                <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-black/30 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                      Product Preview
                    </p>
                    <div className="mt-5 grid gap-3">
                      <div className="h-4 w-2/3 rounded-full bg-white/20" />
                      <div className="h-4 w-1/2 rounded-full bg-white/10" />
                      <div className="grid h-24 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.04]">
                        <MapPinned className="size-10 text-cyan-200/60" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-white/55">Large screenshot placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <GlassCard>
            <SectionHeader label="Problem" title="Property discovery is still too fragmented." />
            <p className="mt-6 text-base leading-8 text-white/70">
              Property buyers, renters, sellers, and agents often struggle with fragmented
              information, lack of trust, inefficient communication, and outdated property discovery
              processes.
            </p>
          </GlassCard>

          <GlassCard>
            <SectionHeader label="Solution" title="A centralized real estate ecosystem." />
            <p className="mt-6 text-base leading-8 text-white/70">
              TerraConnect Global creates a centralized digital ecosystem where users can discover
              properties, connect with stakeholders, manage listings, and simplify real estate
              transactions.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader label="Features" title="Core product capabilities." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.04, ease: 'easeOut' }}
                  className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl"
                >
                  <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-black/30 text-cyan-200">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{feature.label}</h3>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader label="Screenshots" title="Premium placeholders for key property flows." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {['Property discovery', 'Listing dashboard', 'Verified property profile'].map((screen) => (
              <div
                key={screen}
                className="aspect-[4/3] rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-2xl"
              >
                <div className="flex h-full flex-col justify-between rounded-xl border border-cyan-300/10 bg-black/30 p-4">
                  <div className="space-y-3">
                    <div className="h-3 w-2/3 rounded-full bg-white/20" />
                    <div className="h-3 w-1/2 rounded-full bg-white/10" />
                    <div className="mt-5 grid gap-2">
                      <div className="h-12 rounded-lg bg-cyan-300/[0.05]" />
                      <div className="h-12 rounded-lg bg-purple-300/[0.05]" />
                      <div className="h-12 rounded-lg bg-blue-300/[0.05]" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-white/55">{screen}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <SectionHeader label="Tech Stack" title="Tools used to shape the platform." />
            <div className="mt-8 space-y-5">
              {techStack.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                    {group.title}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 bg-black/24 px-3 py-2 text-xs font-medium text-white/68"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <SectionHeader label="Challenges" title="The product problems that shaped the build." />
            <ul className="mt-8 space-y-4">
              {challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3 text-base leading-8 text-white/70">
                  <Database className="mt-1 size-5 shrink-0 text-cyan-200" strokeWidth={1.8} />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <GlassCard>
            <SectionHeader label="Lessons Learned" title="What TerraConnect strengthened." />
            <ul className="mt-8 space-y-4">
              {lessons.map((lesson) => (
                <li key={lesson} className="flex gap-3 text-base leading-8 text-white/70">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-cyan-200" strokeWidth={1.8} />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <SectionHeader label="Future Roadmap" title="Where the platform can grow next." />
            <div className="mt-8 flex flex-wrap gap-2">
              {roadmap.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-cyan-300/10 bg-cyan-300/[0.035] px-3 py-2 text-sm font-medium text-cyan-50/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}

export default TerraConnectCaseStudy;
