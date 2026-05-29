import { motion } from "framer-motion"

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#07070A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        
        <nav className="sticky top-0 z-50 mb-10 flex items-center justify-between border border-white/10 bg-black/20 px-6 py-4 backdrop-blur-xl rounded-2xl">
          <h1 className="text-2xl font-bold">
            Paul<span className="text-blue-400">.</span>
          </h1>

          <div className="hidden gap-8 text-zinc-300 md:flex">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </nav>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid min-h-[85vh] items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <p className="mb-4 text-blue-400">
              Software Developer • Product Builder
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Hi, I’m Paul Igwedinma
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              I create modern websites, digital products, and technology
              solutions focused on solving real-world problems through clean
              design, functionality, and innovation.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-blue-600 px-6 py-4 font-medium hover:bg-blue-500 transition"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-medium hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/20 p-8">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="text-zinc-400">Current Focus</p>

                <h2 className="mt-3 text-3xl font-bold">
                  Building practical tech products for Africa.
                </h2>
              </div>
            </div>
          </div>
        </motion.section>

        <section id="about" className="py-24">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              About Me
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              A developer with a builder’s mindset.
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              I’m Chukwukamadu Paul Igwedinma, a Software Developer and
              Product Builder passionate about using technology to solve
              real-world problems.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I specialize in frontend development, digital product
              development, and technology solutions, with experience building
              modern web-based platforms and startup-focused ideas.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Beyond coding, I’m deeply interested in building scalable
              technology products that can create impact across Africa and
              beyond.
            </p>
          </div>
        </section>

        <section className="py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Specializations
          </p>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            The roles I’m built for.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <SpecializationCard
              title="Frontend Development"
              description="Building responsive, modern, and user-friendly web interfaces focused on performance, accessibility, and clean user experience."
              tags={["HTML", "CSS", "JavaScript", "React"]}
            />

            <SpecializationCard
              title="Product Development"
              description="Designing and developing startup-focused digital products and scalable technology solutions for real-world problems."
              tags={["SaaS", "UI/UX", "Product Thinking"]}
            />

            <SpecializationCard
              title="Technical Support"
              description="Providing troubleshooting, system assistance, ICT support, and technology-related operational support."
              tags={["Troubleshooting", "ICT Support", "Operations"]}
            />

            <SpecializationCard
              title="Data & Automation"
              description="Exploring automation, analytics, and technology-driven workflows using Python and modern digital tools."
              tags={["Python", "Excel", "Automation"]}
            />
          </div>
        </section>

        <section id="projects" className="py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Featured Projects
          </p>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Products, platforms, and practical builds.
          </h2>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <ProjectCard
              title="TerraConnect Global"
              description="A prop-tech platform focused on connecting property buyers, sellers, renters, and real estate stakeholders through a modern digital ecosystem."
              tags={["React", "JavaScript", "Tailwind CSS"]}
            />

            <ProjectCard
              title="Handiwave"
              description="A digital platform designed to connect artisans and skilled workers with people who need trusted services while helping professionals showcase their work online."
              tags={["React", "Marketplace", "UI/UX"]}
            />

            <ProjectCard
              title="Calculator Application"
              description="A calculator project built as part of my early programming journey focused on logic building, problem-solving, and application structure fundamentals."
              tags={["Visual Basic"]}
            />

            <ProjectCard
              title="Personal Portfolio Website"
              description="A modern developer and product-builder portfolio designed to showcase projects, technical skills, experience, and digital product vision."
              tags={["React", "Tailwind CSS", "Framer Motion"]}
            />
          </div>
        </section>

        <section id="experience" className="py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Experience
          </p>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Professional background.
          </h2>

          <div className="mt-16 space-y-6">
            <ExperienceCard
              role="ICT Intern / NYSC Service Member"
              company="The Nigerian Printing and Minting Plc"
              period="Internship: 2020 • NYSC Service Year: 2024"
              description="Assisted in ICT support and service management operations, helping with technical troubleshooting, system support, and day-to-day technology-related tasks within the organization."
              tags={[
                "Technical Support",
                "System Troubleshooting",
                "ICT Operations",
                "User Assistance",
              ]}
            />

            <ExperienceCard
              role="Technical & Business Support Assistant"
              company="SunDee Concept Business Centre"
              period="2022 – 2023"
              description="Supported daily business operations while assisting with computer-related services, customer support, document handling, and general technical activities."
              tags={[
                "Customer Support",
                "Computer Operations",
                "Document Handling",
                "Technical Assistance",
              ]}
            />

            <ExperienceCard
              role="AI-Assisted Developer"
              company="Personal Workflow / Project Development"
              period="Current"
              description="Use AI tools to improve development efficiency, support debugging, generate ideas, research solutions, plan product features, and speed up frontend and product development workflows."
              tags={[
                "AI Tools",
                "Debugging",
                "Prompting",
                "Workflow Automation",
                "Productivity",
              ]}
            />
          </div>
        </section>

        <section className="py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Skills
          </p>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Tools, technologies, and strengths.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              title="Languages"
              items={["HTML", "CSS", "JavaScript", "Python"]}
            />

            <SkillCard
              title="Frameworks & Libraries"
              items={["React", "React Native", "Tailwind CSS", "Framer Motion"]}
            />

            <SkillCard
              title="Developer Tools"
              items={["Git", "GitHub", "VS Code", "Vite", "AI Tools"]}
            />

            <SkillCard
              title="Product Skills"
              items={[
                "Product Thinking",
                "UI/UX Planning",
                "Research",
                "Problem Solving",
              ]}
            />

            <SkillCard
              title="Technical Support"
              items={[
                "Troubleshooting",
                "ICT Support",
                "User Assistance",
                "Service Operations",
              ]}
            />

            <SkillCard
              title="Soft Skills"
              items={[
                "Communication",
                "Teamwork",
                "Leadership",
                "Adaptability",
              ]}
            />
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Contact
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Let’s build something great.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              I’m open to internships, remote opportunities, freelance work,
              collaborations, and exciting technology projects.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <ContactCard
                title="Email"
                value="pauligwedinma@gmail.com"
              />

              <ContactCard
                title="Phone"
                value="09056604257"
              />

              <ContactCard
                title="LinkedIn"
                value="Chukwukamadu (Paul) Igwedinma"
              />

              <ContactCard
                title="Location"
                value="Nigeria"
              />
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 text-center text-zinc-500">
          © 2026 Paul Igwedinma. Built with React, Tailwind CSS, and ambition.
        </footer>

      </div>
    </div>
  )
}

function Tags({ items }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-300"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

function SpecializationCard({ title, description, tags }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:bg-white/[0.05]">
      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-4 leading-8 text-zinc-400">{description}</p>

      <Tags items={tags} />
    </div>
  )
}

function ProjectCard({ title, description, tags }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:bg-white/[0.05]">
      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-4 leading-8 text-zinc-400">{description}</p>

      <Tags items={tags} />
    </div>
  )
}

function ExperienceCard({ role, company, period, description, tags }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:bg-white/[0.05]">
      <p className="text-sm text-blue-300">{period}</p>

      <h3 className="mt-3 text-2xl font-bold">{role}</h3>

      <p className="mt-1 text-zinc-500">{company}</p>

      <p className="mt-5 leading-8 text-zinc-400">{description}</p>

      <Tags items={tags} />
    </div>
  )
}

function SkillCard({ title, items }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:bg-white/[0.05]">
      <h3 className="text-2xl font-bold">{title}</h3>

      <Tags items={items} />
    </div>
  )
}

function ContactCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
      <p className="text-sm text-zinc-500">{title}</p>

      <h3 className="mt-2 text-lg font-semibold break-words">
        {value}
      </h3>
    </div>
  )
}