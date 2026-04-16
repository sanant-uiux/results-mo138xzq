import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Target, Eye, Heart, UserCheck, GitBranch, Zap,
  DollarSign, Layers, RefreshCw, Linkedin, Github, Twitter
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn'

const mvv = [
  { icon: Target, title: 'Our Mission', content: 'To empower businesses of every size with world-class software engineering \u2014 making elite technical talent accessible, affordable, and aligned with measurable business outcomes. We believe every startup deserves the same engineering quality as a Fortune 500 company.' },
  { icon: Eye, title: 'Our Vision', content: 'To become the most trusted product engineering partner for technology-driven businesses globally \u2014 known not for our size, but for the quality of what we ship and the revenue impact we create for every client we serve.' },
  {
    icon: Heart, title: 'Our Values', content: null,
    values: [
      { bold: 'Ownership Over Output:', text: 'We don\'t just complete tickets \u2014 we own outcomes. Every engineer on your project understands the business context and makes decisions that serve your users.' },
      { bold: 'Radical Transparency:', text: 'Weekly demos, open Jira boards, real-time Slack channels. You\'ll never have to ask "what\'s the status?" \u2014 you\'ll already know.' },
      { bold: 'Engineering Excellence:', text: 'Clean code, comprehensive testing, thorough documentation. We build systems that your next engineering hire can understand and extend on day one.' },
      { bold: 'Long-Term Partnership:', text: '68% of our clients have worked with us for 2+ years. We optimize for relationships, not transactions.' },
    ],
  },
]

const differences = [
  { icon: UserCheck, title: 'Senior-Only Engineering Teams', desc: 'No junior developers learning on your project. Every engineer assigned to your team has 5+ years of production experience and has shipped at least 10 commercial products.' },
  { icon: GitBranch, title: 'Transparent Codebase Access', desc: 'You get full access to your GitHub repository from day one. Review every commit, every pull request, every code review comment \u2014 in real time. Your code is always yours.' },
  { icon: Zap, title: 'Startup Speed, Enterprise Quality', desc: 'We ship MVPs in 6\u20138 weeks and production applications in 12\u201316 weeks \u2014 without cutting corners on testing, security, or documentation. Fast doesn\'t mean fragile.' },
  { icon: DollarSign, title: 'Fixed-Price & Time-and-Materials Options', desc: 'Choose the engagement model that fits your stage. Early-stage startups love our fixed-price MVP packages. Scale-ups prefer flexible T&M with monthly caps.' },
  { icon: Layers, title: 'Full-Stack Vertical Integration', desc: 'Design, frontend, backend, DevOps, QA, and data science \u2014 all under one roof. No subcontractors, no third-party handoffs, no communication gaps.' },
  { icon: RefreshCw, title: '90-Day Post-Launch Warranty', desc: 'Every project comes with 90 days of free bug fixes and performance optimization after launch. If something breaks, we fix it \u2014 no questions asked, no additional invoices.' },
]

const team = [
  { name: 'Rajiv Kapoor', role: 'Co-Founder & CEO', bio: 'Former Engineering Lead at Infosys with 15 years in enterprise software. Rajiv oversees company strategy, client relationships, and ensures every project aligns with business outcomes. He still joins architecture review sessions for key accounts.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', social: [{ icon: Linkedin, label: 'LinkedIn' }, { icon: Twitter, label: 'Twitter' }] },
  { name: 'Elena Vasquez', role: 'Co-Founder & CTO', bio: 'Ex-Atlassian senior engineer who led the Jira Cloud migration team. Elena leads Xtec Global\'s technical architecture practice, oversees code quality standards, and mentors the senior engineering team. She\'s the reason our systems scale.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', social: [{ icon: Linkedin, label: 'LinkedIn' }, { icon: Github, label: 'GitHub' }] },
  { name: 'Daniel Okafor', role: 'VP of Design & UX', bio: 'Award-winning product designer with a portfolio spanning fintech, health-tech, and e-commerce. Daniel leads a team of 8 designers and ensures every interface we build is intuitive, accessible (WCAG 2.1 AA), and conversion-optimized.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', social: [{ icon: Linkedin, label: 'LinkedIn' }] },
  { name: 'Amara Singh', role: 'Head of AI & Data Engineering', bio: 'Former ML engineer at Shopify where she built recommendation systems serving 2M+ merchants. Amara leads Xtec Global\'s AI practice, specializing in LLM integration, computer vision, and production ML pipelines that deliver measurable business impact.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', social: [{ icon: Linkedin, label: 'LinkedIn' }, { icon: Github, label: 'GitHub' }] },
]

const certifications = [
  { name: 'ISO 27001:2022', desc: 'Information Security Management \u2014 our development processes meet international security standards.' },
  { name: 'AWS Advanced Consulting Partner', desc: 'Recognized by Amazon Web Services for demonstrated technical expertise and client delivery success.' },
  { name: 'Google Cloud Partner', desc: 'Certified Google Cloud partner for enterprise deployments, serverless computing, and data analytics.' },
  { name: 'SOC 2 Type II Compliant', desc: 'Our operations, infrastructure, and data handling meet AICPA\'s rigorous trust service criteria.' },
  { name: 'Clutch Top B2B Company 2025', desc: 'Recognized as a top-rated IT services provider based on verified client reviews and project outcomes.' },
]

const clients = [
  'Finsight Analytics', 'LogiTrack Solutions', 'Nexbridge Capital', 'Wellframe Health',
  'ClearPath Education', 'Vantage Retail', 'Meridian Insurance Group', 'Stratosphere SaaS',
]

export default function About() {
  useEffect(() => {
    document.title = 'About Us \u2014 Xtec Global'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-white pt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2 md:py-36 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm text-stone-400">
              <Link to="/" className="hover:text-[var(--color-accent)]">Home</Link> &rarr; About Us
            </p>
            <FadeIn>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
                We're the Engineering Team Behind Your Biggest Product Bets.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-500">
                Xtec Global is a full-service IT solutions company that helps startups, scale-ups, and enterprises design, build, and ship digital products that users love and businesses depend on. Founded in 2018, we've grown from a 4-person dev shop to a 75+ member global engineering firm.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <a href="#team" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:underline">
                Meet the Team <ArrowRight size={14} />
              </a>
            </FadeIn>
          </div>
          <FadeIn direction="right" delay={0.3}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
              alt="Xtec Global team collaboration"
              className="hidden h-[500px] w-full rounded-2xl object-cover md:block"
            />
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Our Story */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 lg:px-8">
          <div>
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Our Story</p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-stone-900">
                Built by Engineers, Driven by Impact
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-6 space-y-4 text-stone-500 leading-relaxed">
                <p>Xtec Global started in 2018 when our founders — three engineers who'd spent a decade building products at companies like Infosys, Atlassian, and Shopify — noticed a gap in the market. Startups and mid-market businesses needed world-class engineering talent, but couldn't afford Silicon Valley rates and didn't want to gamble on unreliable freelancers.</p>
                <p>We set out to build something different: a product engineering company that combines the technical depth of a tier-1 consultancy with the speed, flexibility, and founder empathy of a startup. No bloated teams. No unnecessary project managers. Just senior engineers who understand business outcomes.</p>
                <p>Our first client was a fintech startup in Sydney that needed to rebuild their payment processing system in 8 weeks. We delivered in 7. That client is still with us today — now processing over $40 million in transactions annually on the platform we built.</p>
                <p>Since then, we've delivered 200+ projects across 12 countries, expanded to offices in the US, UK, and Australia, and built a team of 75+ engineers, designers, and strategists who share one obsession: building software that actually works — and drives results.</p>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="right" delay={0.2}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Modern office workspace"
              className="h-full min-h-[400px] w-full rounded-2xl object-cover"
            />
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Mission / Vision / Values */}
      <section className="bg-stone-50 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {mvv.map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-xl bg-white p-8 shadow-sm">
                  <item.icon className="text-[var(--color-accent)]" size={28} />
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900">{item.title}</h3>
                  {item.content && <p className="mt-3 text-sm leading-relaxed text-stone-500">{item.content}</p>}
                  {item.values && (
                    <ul className="mt-3 space-y-3">
                      {item.values.map((v) => (
                        <li key={v.bold} className="text-sm leading-relaxed text-stone-500">
                          <strong className="text-stone-700">{v.bold}</strong> {v.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* What Makes Us Different */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">The Xtec Difference</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
              6 Reasons We're Not Your Typical Dev Shop
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-stone-500">
              We've intentionally built a company that solves the problems clients have with traditional outsourcing firms.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differences.map((d, i) => (
              <StaggerItem key={d.title}>
                <div className="group rounded-xl border border-stone-100 p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]/30 hover:shadow-sm">
                  <span className="font-[family-name:var(--font-heading)] text-5xl font-bold text-stone-100">{String(i + 1).padStart(2, '0')}</span>
                  <d.icon className="mt-2 text-[var(--color-accent)]" size={24} />
                  <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-stone-900">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Team */}
      <section id="team" className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">The People Behind the Code</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
              Leadership That Builds, Not Just Manages
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-stone-500">
              Our leadership team has collectively shipped products used by 50+ million people. They still write code, review PRs, and obsess over user experience.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group text-center">
                  <div className="overflow-hidden rounded-2xl">
                    <img src={m.img} alt={m.name} className="h-80 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-stone-900">{m.name}</h3>
                  <p className="text-sm font-medium text-[var(--color-accent)]">{m.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">{m.bio}</p>
                  <div className="mt-3 flex justify-center gap-2">
                    {m.social.map((s) => (
                      <a key={s.label} href="#" aria-label={s.label} className="rounded-full p-2 text-stone-400 transition-colors hover:text-[var(--color-accent)]">
                        <s.icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Certifications */}
      <section className="bg-stone-50 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Trust & Compliance</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-stone-900">
              Certified, Compliant, and Audit-Ready
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5" stagger={0.1}>
            {certifications.map((c) => (
              <StaggerItem key={c.name}>
                <div className="rounded-xl bg-white p-6 text-center shadow-sm transition-transform hover:scale-105">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
                    <span className="text-lg font-bold text-[var(--color-accent)]">{c.name.charAt(0)}</span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-stone-900">{c.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-stone-500">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Partners & Clients */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Companies We've Built For</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-stone-900">
              Trusted by Startups and Enterprises Alike
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4" stagger={0.08}>
            {clients.map((client) => (
              <StaggerItem key={client}>
                <div className="flex h-24 items-center justify-center rounded-xl border border-stone-100 bg-stone-50 px-6 transition-colors hover:border-[var(--color-accent)]/30">
                  <span className="font-[family-name:var(--font-heading)] text-lg font-semibold text-stone-400 transition-colors hover:text-stone-700">{client}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.3}>
            <p className="mt-8 text-center text-sm text-stone-500">
              From seed-stage startups to publicly traded enterprises — we've delivered production-grade software across every major industry.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
              Let's Build Your Next Product Together.
            </h2>
            <p className="mt-4 text-lg text-stone-400">
              Whether you're pre-seed or Series C, our team is ready to architect, design, and deliver the technology that drives your next milestone. Your first consultation is free — no strings attached.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105">
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-stone-600 px-6 py-3 text-sm font-medium text-stone-300 transition-colors hover:border-stone-400 hover:text-white">
                View Case Studies <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
