import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, Grid, Layers, DollarSign, Workflow, Headphones, ShieldCheck,
  ChevronDown, MessageSquare, Calendar
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn'

const tabs = [
  { icon: Grid, label: 'All Questions' },
  { icon: Layers, label: 'Services & Capabilities' },
  { icon: DollarSign, label: 'Pricing & Billing' },
  { icon: Workflow, label: 'Process & Delivery' },
  { icon: Headphones, label: 'Support & Maintenance' },
  { icon: ShieldCheck, label: 'Security & Compliance' },
]

const faqSections = [
  {
    title: 'Services & Capabilities', icon: Layers,
    questions: [
      { q: 'What services does Xtec Global offer?', a: 'We provide five core services: Custom Web & SaaS Development (React, Next.js, Node.js), Mobile App Development (React Native, Flutter, Swift, Kotlin), AI & Machine Learning Solutions (LLM integration, RAG pipelines, computer vision), UI/UX Design & Product Strategy (Figma, user research, design systems), and Cloud Infrastructure & DevOps Engineering (AWS, GCP, Docker, Kubernetes). Each service can be engaged independently or as part of a full-stack product development engagement. We also offer technology consulting and architecture review services for teams that want expert guidance without full development outsourcing.' },
      { q: 'Do you work with startups or only enterprise clients?', a: 'We work with companies at every stage \u2014 from pre-seed startups building their first MVP to publicly traded enterprises modernizing legacy systems. About 45% of our clients are early-stage startups (pre-seed to Series A), 35% are growth-stage companies (Series B+), and 20% are enterprise organizations. Our engagement models are flexible to accommodate different budget levels and organizational maturity. Startups typically prefer our fixed-price MVP packages, while enterprises lean toward dedicated team retainers.' },
      { q: 'Can you work with our existing codebase and team?', a: 'Absolutely. About 60% of our projects involve working with existing codebases \u2014 whether that\'s refactoring legacy code, adding new features to a production app, or integrating with your in-house engineering team. We conduct a thorough code audit at the start of every engagement to assess technical debt, identify optimization opportunities, and create a roadmap for improvement. Our engineers are comfortable joining your existing Slack channels, attending your standups, and following your team\'s coding standards and review process.' },
      { q: 'What technologies and frameworks do you specialize in?', a: 'Our primary technology stack includes React, Next.js, and TypeScript for frontend development; Node.js, Python, and Go for backend services; PostgreSQL, MongoDB, and Redis for data storage; AWS and Google Cloud for infrastructure; and PyTorch, LangChain, and OpenAI/Anthropic APIs for AI/ML work. However, we\'re framework-agnostic when it makes sense \u2014 if your existing system runs on Vue, Angular, Django, or Ruby on Rails, we have engineers experienced in those ecosystems as well. We always recommend the technology that best fits your specific requirements, not just what we prefer.' },
      { q: 'Do you provide UI/UX design, or do I need to bring my own designs?', a: 'We have a full in-house product design team of 8 designers led by our VP of Design. We can handle the entire design process \u2014 from user research and wireframing to high-fidelity Figma mockups and interactive prototypes. If you already have designs, our team will review them for feasibility, responsiveness, and accessibility before development begins. We also offer standalone design services if you want to validate your UX before committing to a full development engagement.' },
    ],
  },
  {
    title: 'Pricing & Billing', icon: DollarSign,
    questions: [
      { q: 'How much does a typical project cost?', a: 'Project costs depend on scope, complexity, and timeline. As a general guide: a marketing website or landing page starts at $5,000\u2013$8,000; an MVP or web application typically ranges from $25,000\u2013$75,000; a full-featured SaaS platform ranges from $50,000\u2013$150,000; and AI/ML integrations start at $20,000. During our free discovery call, we\'ll provide a detailed estimate based on your specific requirements. We also offer phased delivery options so you can launch an initial version and add features incrementally \u2014 spreading the investment over time.' },
      { q: 'Do you offer fixed-price or time-and-materials billing?', a: 'We offer both models. Fixed-price engagements work best for well-defined projects with clear requirements \u2014 like MVPs, redesigns, or feature additions \u2014 where we can scope the work accurately upfront. Time-and-materials (T&M) billing is ideal for ongoing development, evolving projects, or engagements where requirements may shift. T&M clients are billed monthly based on hours worked, with weekly time reports and full transparency. Many clients start with a fixed-price MVP and transition to a monthly T&M retainer for ongoing feature development.' },
      { q: 'Is there a minimum project size or engagement length?', a: 'Our minimum engagement is $5,000 for standalone projects (like a single landing page or design sprint). For retainer engagements, we require a minimum commitment of 80 hours per month with a 3-month initial term. This ensures we can assign a dedicated team and deliver meaningful progress. For smaller one-off tasks or consultations, we offer hourly advisory sessions at $200/hour with a 2-hour minimum.' },
      { q: 'What are your payment terms?', a: 'For fixed-price projects, we typically structure payments as: 30% upfront upon contract signing, 30% at the midpoint milestone, 30% at delivery, and 10% after the 30-day acceptance period. For T&M retainers, we invoice on the first of each month for the previous month\'s hours, with net-15 payment terms. We accept bank transfers (ACH/wire), credit cards, and for larger engagements, we can accommodate custom payment schedules.' },
      { q: 'Are there any hidden costs I should know about?', a: 'No. Our proposals are comprehensive and include all development, design, QA, project management, and deployment costs. Third-party costs that are outside our control \u2014 such as hosting fees (AWS, Vercel), domain registration, third-party API subscriptions (Stripe, SendGrid, etc.), and App Store developer account fees \u2014 are clearly listed separately and are paid directly by you. We will always identify these external costs upfront in our proposal so there are no surprises.' },
    ],
  },
  {
    title: 'Process & Delivery', icon: Workflow,
    questions: [
      { q: 'What does your development process look like?', a: 'We follow a structured 4-phase process: (1) Discovery & Strategy \u2014 a deep-dive consultation resulting in a project roadmap, wireframes, and technical architecture document; (2) Design & Prototyping \u2014 high-fidelity Figma designs validated through user testing; (3) Agile Development \u2014 2-week sprints with weekly demo calls, automated testing, and CI/CD; (4) Launch & Support \u2014 production deployment, monitoring setup, and 90 days of complimentary support. Throughout every phase, you have full visibility via shared Jira boards, Slack channels, and weekly status reports.' },
      { q: 'How long does a typical project take from start to finish?', a: 'Timelines depend on project scope. A marketing website typically takes 3\u20134 weeks. An MVP or web application takes 8\u201316 weeks. A mobile app (iOS + Android) takes 10\u201318 weeks. A complex SaaS platform with AI integration takes 16\u201324 weeks. UI/UX design projects take 3\u20136 weeks. These timelines include design, development, QA, and deployment. During the discovery phase, we\'ll provide a detailed project schedule with specific milestones and delivery dates for your project.' },
      { q: 'How do you communicate and report progress during a project?', a: 'Every project gets a dedicated Slack channel (or Microsoft Teams, if preferred) for real-time communication with your assigned engineering team. We conduct weekly video demo calls where you see the latest work in a staging environment and provide feedback. You also get access to a shared Jira board with full visibility into sprint planning, task status, and burndown charts. For executive stakeholders, we send a weekly email summary highlighting milestones completed, upcoming work, and any blockers or decisions needed.' },
      { q: 'What happens if I want to change requirements mid-project?', a: 'Scope changes are a natural part of product development \u2014 we expect and plan for them. For fixed-price projects, we maintain a change request process where new requirements are documented, estimated, and approved before implementation. Minor changes (under 10% of project scope) are typically absorbed at no extra cost. For T&M engagements, priority shifts are handled within the sprint planning process \u2014 simply reprioritize your backlog and we\'ll adjust accordingly. The key is transparency: we\'ll always communicate the impact on timeline and budget before implementing changes.' },
      { q: 'Do you work in our timezone?', a: 'Yes, we ensure timezone-aligned collaboration regardless of where your team is based. Our offices in San Francisco (PST), London (GMT), and Melbourne (AEST) allow us to assign team members who share your working hours. For US clients, all meetings and synchronous work happen during US business hours. We also offer asynchronous workflows with detailed handoff documentation for teams that prefer fewer meetings and more async communication.' },
    ],
  },
  {
    title: 'Support & Maintenance', icon: Headphones,
    questions: [
      { q: 'What support do you provide after a project launches?', a: 'Every project includes 90 days of complimentary post-launch support covering bug fixes, performance optimization, and minor adjustments. During this period, you have direct access to your engineering team via Slack. After the 90-day warranty, you can transition to one of our ongoing support plans: Standard (20 hours/month), Professional (40 hours/month), or Enterprise (80+ hours/month) \u2014 all with guaranteed response times and dedicated account management.' },
      { q: 'What are your response times for support issues?', a: 'Our response times depend on issue severity. Critical issues (site down, data breach, payment processing failure) receive a response within 1 hour and resolution within 4 hours. High-priority issues (broken features, performance degradation) receive a response within 4 hours and resolution within 1 business day. Medium-priority issues (UI bugs, minor functionality problems) receive a response within 8 business hours. Low-priority issues (feature requests, cosmetic changes) are addressed within the next sprint cycle.' },
      { q: 'Can you maintain and update a product that was built by another team?', a: 'Yes, this is a common scenario \u2014 about 30% of our engagements involve taking over maintenance and development of codebases built by other teams. We start with a comprehensive code audit to assess architecture quality, test coverage, security vulnerabilities, and technical debt. Based on the audit, we create a stabilization roadmap and transition plan. Our engineers are experienced in inheriting diverse codebases across React, Angular, Vue, Node.js, Python, PHP, and Ruby on Rails.' },
      { q: 'Do you provide server monitoring and infrastructure management?', a: 'Yes, we offer managed infrastructure services as part of our Cloud & DevOps practice. This includes 24/7 uptime monitoring, automated alerting (PagerDuty/Opsgenie), performance dashboards (Datadog/Grafana), automated backups, security patching, SSL certificate management, and scaling adjustments. We can manage your infrastructure on AWS, Google Cloud, Azure, or Vercel \u2014 depending on your technology stack and preferences.' },
      { q: 'How do you handle critical production emergencies outside business hours?', a: 'Enterprise support plan clients have access to our 24/7 emergency hotline. For critical issues (production outage, security incident, data integrity), our on-call engineering team is paged immediately via PagerDuty and begins investigation within 15 minutes. We maintain runbooks for common failure scenarios and conduct regular incident response drills. After every critical incident, we conduct a blameless post-mortem and provide a detailed root cause analysis report within 48 hours.' },
    ],
  },
  {
    title: 'Security & Compliance', icon: ShieldCheck,
    questions: [
      { q: 'How do you ensure the security of our data and code?', a: 'Security is embedded into every layer of our process. All source code is stored in private GitHub repositories with branch protection rules and required code reviews. Our engineers access systems via SSO with mandatory two-factor authentication. Data is encrypted at rest (AES-256) and in transit (TLS 1.3). We conduct automated security scanning in our CI/CD pipeline using tools like Snyk and SonarQube. For projects handling sensitive data, we perform quarterly penetration testing through our certified security partner.' },
      { q: 'Are you SOC 2 compliant?', a: 'Yes, Xtec Global has completed SOC 2 Type II certification, which means our security controls have been independently audited and verified over a 12-month period. This covers the Trust Service Criteria for security, availability, and confidentiality. We can share our SOC 2 report under NDA with prospective and current clients upon request. For enterprise clients with additional compliance requirements (HIPAA, PCI-DSS, GDPR), we have experience implementing the technical and procedural controls necessary for those frameworks.' },
      { q: 'Who owns the intellectual property for the code you write?', a: 'You do \u2014 100%. Our standard contract includes a full IP assignment clause that transfers all rights to the code, designs, documentation, and any other deliverables to you upon payment. We do not retain any ownership, licensing rights, or usage rights to your custom code. The only exception is open-source libraries and frameworks (like React, Next.js, etc.) which remain under their respective licenses. You receive full access to your GitHub repository from day one of the engagement.' },
      { q: 'Do you sign NDAs and what data protection policies do you follow?', a: 'Yes, we sign mutual NDAs before any detailed project discussions \u2014 typically within 24 hours of request. Our data protection policies comply with GDPR (for EU clients), CCPA (for California clients), and Australian Privacy Act (for APAC clients). All employee devices are encrypted and managed through our MDM platform. We maintain a strict access control policy where team members can only access the client projects they\'re assigned to. Upon project completion, we can perform a verified data purge of all client materials from our systems.' },
      { q: 'How do you handle vulnerability disclosure and security patches?', a: 'We maintain a proactive vulnerability management program. Our automated CI/CD pipeline scans for known CVEs in dependencies on every build using Snyk and Dependabot. Critical vulnerabilities (CVSS 9.0+) are patched within 24 hours. High-severity issues are addressed within 72 hours. For clients on ongoing support plans, we include a monthly security update cycle that covers dependency updates, framework patches, and infrastructure hardening. If a zero-day vulnerability is disclosed that affects your stack, we notify you within 4 hours with an impact assessment and remediation timeline.' },
    ],
  },
]

export default function FAQs() {
  const [activeTab, setActiveTab] = useState('All Questions')
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState({})

  useEffect(() => {
    document.title = 'FAQs \u2014 Xtec Global'
  }, [])

  const toggleItem = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const filteredSections = activeTab === 'All Questions'
    ? faqSections
    : faqSections.filter((s) => s.title === activeTab)

  const searchFiltered = searchQuery
    ? filteredSections.map((s) => ({
        ...s,
        questions: s.questions.filter(
          (q) =>
            q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.a.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter((s) => s.questions.length > 0)
    : filteredSections

  return (
    <>
      {/* Hero */}
      <section className="flex items-center bg-white pt-20">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36 lg:px-8">
          <p className="text-sm text-stone-400">
            <Link to="/" className="hover:text-[var(--color-accent)]">Home</Link> &rarr; FAQs
          </p>
          <FadeIn>
            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-stone-500">
              Find answers to common questions about our services, process, pricing, and support. Can't find what you're looking for? Reach out to our team directly.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="relative mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers... (e.g., 'pricing', 'timeline', 'support')"
                className="w-full rounded-full border border-stone-200 bg-stone-50 py-3 pl-12 pr-4 text-sm text-stone-900 outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-30 border-b border-stone-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 lg:px-8">
          <div className="flex gap-2 py-4">
            {tabs.map((t) => (
              <button
                key={t.label}
                onClick={() => { setActiveTab(t.label); setSearchQuery('') }}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === t.label
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <t.icon size={14} /> {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {searchFiltered.map((section) => (
            <div key={section.title} className="mb-12 last:mb-0">
              <FadeIn>
                <div className="mb-6 flex items-center gap-2">
                  <section.icon className="text-[var(--color-accent)]" size={20} />
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900">{section.title}</h2>
                </div>
              </FadeIn>
              <div className="space-y-3">
                {section.questions.map((faq, i) => {
                  const key = `${section.title}-${i}`
                  return (
                    <FadeIn key={key} delay={i * 0.05}>
                      <div className="rounded-xl border border-stone-200 bg-white">
                        <button
                          onClick={() => toggleItem(key)}
                          className="flex w-full items-center justify-between px-6 py-4 text-left"
                        >
                          <span className="pr-4 text-sm font-semibold text-stone-900">{faq.q}</span>
                          <motion.div animate={{ rotate: openItems[key] ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown size={18} className="shrink-0 text-stone-400" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {openItems[key] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <p className="px-6 pb-4 text-sm leading-relaxed text-stone-500">{faq.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </FadeIn>
                  )
                })}
              </div>
            </div>
          ))}
          {searchFiltered.length === 0 && (
            <p className="py-12 text-center text-stone-400">No matching questions found. Try a different search term.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
              Still Have Questions? We're Here to Help.
            </h2>
            <p className="mt-4 text-lg text-stone-400">
              Can't find the answer you're looking for? Our team responds to every inquiry within 4 business hours. No chatbots, no ticket queues — just real people who understand technology.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105">
                <MessageSquare size={16} /> Contact Our Team
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-stone-600 px-6 py-3 text-sm font-medium text-stone-300 transition-colors hover:border-stone-400 hover:text-white">
                <Calendar size={16} /> Schedule a Free Call
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
