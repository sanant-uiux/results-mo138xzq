import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Monitor, Database, CreditCard, Lock, BarChart3,
  Smartphone, Wifi, Bell, TestTube, BrainCircuit, FileSearch, Eye,
  TrendingUp, Bot, Palette, Users, Layout, PenTool, Cloud, Container as ContainerIcon,
  GitBranch, Shield, Activity, Phone, FileDown, Check, Minus
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn'

const allServices = [
  {
    tag: 'SERVICE 01', title: 'Custom Web & SaaS Development',
    desc: 'We architect and build production-grade web applications that handle real traffic, real data, and real business logic. Our web development team specializes in React, Next.js, and TypeScript \u2014 delivering platforms that are fast (sub-2s load times), accessible (WCAG 2.1 AA), and built to scale to millions of users without re-architecture.\n\nWhether you\'re building a B2B SaaS platform with multi-tenant architecture, an internal operations dashboard, or a high-converting marketing site with CMS integration \u2014 we deliver clean, maintainable code backed by comprehensive test suites and CI/CD pipelines.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    features: [
      { icon: Monitor, name: 'Full-Stack React & Next.js', detail: 'Server-side rendering, static generation, and API routes \u2014 all in one framework. Optimized for SEO, performance, and developer experience.' },
      { icon: Database, name: 'Scalable Backend Architecture', detail: 'Node.js, PostgreSQL, Redis, and message queues \u2014 designed for high-throughput workloads with horizontal scaling on AWS or GCP.' },
      { icon: CreditCard, name: 'SaaS Billing & Subscription Management', detail: 'Stripe integration with metered billing, plan upgrades, invoicing, and revenue analytics \u2014 ready for your first customer on day one.' },
      { icon: Lock, name: 'Security-First Development', detail: 'OWASP Top 10 compliant, role-based access control, encrypted data at rest and in transit, and automated vulnerability scanning in CI.' },
      { icon: BarChart3, name: 'Analytics & Monitoring', detail: 'PostHog, Mixpanel, or custom event tracking \u2014 plus real-time error monitoring with Sentry and uptime alerts with PagerDuty.' },
    ],
    cta: 'Discuss Your Web Project', ctaLink: '/contact',
  },
  {
    tag: 'SERVICE 02', title: 'Mobile App Development',
    desc: 'We build mobile applications that users actually keep installed. Our mobile team ships cross-platform apps with React Native and Flutter \u2014 as well as fully native iOS (Swift) and Android (Kotlin) applications for performance-critical use cases. From consumer marketplaces to enterprise field-service tools, our apps are optimized for battery life, offline capability, and seamless push notification delivery.\n\nEvery app goes through a rigorous QA process that includes device testing on 25+ physical devices, automated UI testing, and performance profiling. We handle App Store and Play Store submission, including compliance with Apple\'s latest review guidelines and Google\'s policy requirements.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    features: [
      { icon: Smartphone, name: 'React Native & Flutter', detail: 'Cross-platform apps that share 85%+ code between iOS and Android while maintaining native performance and look-and-feel.' },
      { icon: Wifi, name: 'Offline-First Architecture', detail: 'Local SQLite storage, background sync, and conflict resolution \u2014 your app works flawlessly in subway tunnels and rural areas alike.' },
      { icon: Bell, name: 'Push Notifications & Engagement', detail: 'Firebase Cloud Messaging, in-app messaging, and behavioral triggers \u2014 keep users engaged without being annoying.' },
      { icon: CreditCard, name: 'In-App Payments', detail: 'Apple Pay, Google Pay, Stripe, and subscription IAP \u2014 with receipt validation and revenue tracking built in.' },
      { icon: TestTube, name: 'Device Testing Lab', detail: 'Automated testing on 25+ physical devices across iOS 15+ and Android 10+ \u2014 catching device-specific bugs before your users do.' },
    ],
    cta: 'Plan Your Mobile App', ctaLink: '/contact',
  },
  {
    tag: 'SERVICE 03', title: 'AI & Machine Learning Solutions',
    desc: 'We design and deploy production AI systems that go beyond proof-of-concept. Our ML engineering team builds custom solutions \u2014 from LLM-powered chatbots and document processing pipelines to computer vision systems and predictive analytics engines \u2014 all deployed on scalable cloud infrastructure with proper monitoring, A/B testing, and model versioning.\n\nWe specialize in Retrieval-Augmented Generation (RAG) pipelines that ground LLM responses in your proprietary data, reducing hallucinations and delivering accurate, contextual answers. Our AI solutions have helped clients reduce manual processing time by up to 78% and increase customer engagement by 45%.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    features: [
      { icon: BrainCircuit, name: 'Custom LLM Integration', detail: 'Fine-tuned GPT-4, Claude, and open-source models integrated into your product \u2014 with guardrails, token optimization, and cost management.' },
      { icon: FileSearch, name: 'RAG Pipelines & Document AI', detail: 'Ingest, chunk, embed, and retrieve from millions of documents \u2014 PDF, DOCX, HTML, email \u2014 with sub-second query latency.' },
      { icon: Eye, name: 'Computer Vision', detail: 'Object detection, image classification, OCR, and video analysis \u2014 deployed at the edge or in the cloud for real-time processing.' },
      { icon: TrendingUp, name: 'Predictive Analytics', detail: 'Demand forecasting, churn prediction, pricing optimization, and anomaly detection \u2014 trained on your historical data and refreshed continuously.' },
      { icon: Bot, name: 'Conversational AI & Chatbots', detail: 'Intelligent chatbots that handle customer support, lead qualification, and internal knowledge retrieval \u2014 with handoff to human agents when needed.' },
    ],
    cta: 'Explore AI for Your Business', ctaLink: '/contact',
  },
  {
    tag: 'SERVICE 04', title: 'UI/UX Design & Product Strategy',
    desc: 'Great software starts with great design. Our product design team creates interfaces that are beautiful, intuitive, and conversion-optimized \u2014 backed by user research, competitive analysis, and data-driven iteration. We work in Figma with a component-based design system approach, ensuring pixel-perfect handoff to our development team.\n\nEvery project begins with user journey mapping, information architecture, and wireframing before moving to high-fidelity mockups and interactive prototypes. We validate designs through usability testing with real target users, iterating until conversion metrics and task completion rates meet our benchmarks.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    features: [
      { icon: Palette, name: 'Brand-Aligned Visual Design', detail: 'Custom design systems with typography, color palettes, iconography, and component libraries \u2014 all reflecting your brand identity.' },
      { icon: Users, name: 'User Research & Testing', detail: 'Persona development, competitive UX audit, usability testing, and heatmap analysis \u2014 ensuring every design decision is evidence-based.' },
      { icon: Layout, name: 'Responsive & Adaptive Design', detail: 'Designs optimized for desktop, tablet, mobile, and large screens \u2014 with breakpoint-specific layouts and touch-friendly interactions.' },
      { icon: Shield, name: 'WCAG 2.1 AA Compliance', detail: 'Color contrast ratios, keyboard navigation, screen reader compatibility, and focus management \u2014 making your product accessible to everyone.' },
      { icon: PenTool, name: 'Interactive Prototyping', detail: 'Clickable Figma prototypes with micro-interactions, page transitions, and loading states \u2014 test the experience before writing code.' },
    ],
    cta: 'Start With a Design Sprint', ctaLink: '/contact',
  },
  {
    tag: 'SERVICE 05', title: 'Cloud Infrastructure & DevOps Engineering',
    desc: 'We design, build, and manage the cloud infrastructure that keeps your application fast, reliable, and secure at scale. Our DevOps engineers specialize in AWS and Google Cloud \u2014 implementing infrastructure as code (Terraform), containerized deployments (Docker/Kubernetes), and CI/CD pipelines that enable multiple production deployments per day with zero-downtime rollouts.\n\nWhether you\'re migrating from a legacy hosting provider, optimizing an over-provisioned cloud bill, or architecting a greenfield infrastructure for a new product \u2014 we deliver environments that scale automatically, recover from failures gracefully, and cost 30\u201340% less than unoptimized setups.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    features: [
      { icon: Cloud, name: 'AWS & GCP Architecture', detail: 'VPC design, EC2/ECS/EKS, Lambda, RDS, S3, CloudFront \u2014 architected for high availability, auto-scaling, and cost optimization.' },
      { icon: ContainerIcon, name: 'Docker & Kubernetes', detail: 'Containerized microservices with orchestration, service mesh, health checks, and rolling updates \u2014 deployed via Helm charts.' },
      { icon: GitBranch, name: 'CI/CD Pipeline Design', detail: 'GitHub Actions, GitLab CI, or AWS CodePipeline \u2014 with automated testing, staging deployments, and production approval gates.' },
      { icon: Shield, name: 'Infrastructure Security', detail: 'WAF, VPN, secrets management (Vault/AWS Secrets Manager), IAM policies, and automated compliance scanning with Prowler.' },
      { icon: Activity, name: 'Monitoring & Observability', detail: 'Datadog, Grafana, or CloudWatch dashboards with custom alerts \u2014 tracking latency, error rates, throughput, and infrastructure costs in real time.' },
    ],
    cta: 'Optimize Your Infrastructure', ctaLink: '/contact',
  },
]

const comparisonHeaders = ['Feature', 'Web & SaaS', 'Mobile Apps', 'AI & ML', 'UI/UX Design', 'Cloud & DevOps']
const comparisonRows = [
  ['Custom Architecture Design', true, true, true, false, true],
  ['Figma Design & Prototyping', true, true, false, true, false],
  ['Frontend Development', true, true, 'Dashboards', false, false],
  ['Backend / API Development', true, true, true, false, false],
  ['Database Design & Optimization', true, true, true, false, true],
  ['Cloud Deployment', true, true, true, false, true],
  ['CI/CD Pipeline Setup', true, true, true, false, true],
  ['Automated Testing & QA', true, true, true, 'Usability', 'Infrastructure'],
  ['Post-Launch Support (90 days)', true, true, true, true, true],
  ['Performance Monitoring', true, true, true, false, true],
  ['Typical Timeline', '8\u201316 weeks', '10\u201318 weeks', '6\u201312 weeks', '3\u20136 weeks', '2\u20138 weeks'],
  ['Starting Investment', '$25,000', '$30,000', '$20,000', '$8,000', '$10,000'],
]

export default function Services() {
  useEffect(() => {
    document.title = 'Services \u2014 Xtec Global'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[60vh] items-center bg-white pt-20">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36 lg:px-8">
          <p className="text-sm text-stone-400">
            <Link to="/" className="hover:text-[var(--color-accent)]">Home</Link> &rarr; Services
          </p>
          <FadeIn>
            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Technology Solutions Engineered for Growth
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-stone-500">
              We offer a full spectrum of IT services — from custom web and mobile development to AI-powered automation and cloud infrastructure. Every solution is built to scale, optimized for performance, and designed to deliver measurable business outcomes.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-[var(--color-accent)]">
              Get a Free Project Estimate <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Service Sections */}
      {allServices.map((svc, idx) => (
        <section key={svc.tag} className={`py-28 md:py-36 ${idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className={`grid gap-12 md:grid-cols-2 ${idx % 2 === 1 ? 'md:[direction:rtl] md:[&>*]:[direction:ltr]' : ''}`}>
              <FadeIn direction={idx % 2 === 0 ? 'left' : 'right'}>
                <img src={svc.img} alt={svc.title} className="h-full min-h-[350px] w-full rounded-2xl object-cover" />
              </FadeIn>
              <div>
                <FadeIn>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">{svc.tag}</p>
                  <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                    {svc.title}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                  {svc.desc.split('\n\n').map((p, i) => (
                    <p key={i} className="mt-4 text-sm leading-relaxed text-stone-500">{p}</p>
                  ))}
                </FadeIn>
                <StaggerContainer className="mt-8 space-y-4" stagger={0.08}>
                  {svc.features.map((f) => (
                    <StaggerItem key={f.name}>
                      <div className="flex gap-3">
                        <f.icon className="mt-0.5 shrink-0 text-[var(--color-accent)]" size={20} />
                        <div>
                          <h4 className="text-sm font-semibold text-stone-900">{f.name}</h4>
                          <p className="text-sm text-stone-500">{f.detail}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <FadeIn delay={0.3}>
                  <Link to={svc.ctaLink} className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-[var(--color-accent)]">
                    {svc.cta} <ArrowRight size={16} />
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Comparison Table */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Compare Our Services</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-stone-900">
              Find the Right Solution for Your Business
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-stone-500">
              Not sure which service you need? This comparison helps you understand what's included at each level.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-12 overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    {comparisonHeaders.map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-semibold text-stone-900">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-stone-100 last:border-0">
                      {row.map((cell, j) => (
                        <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-medium text-stone-700' : 'text-center text-stone-500'}`}>
                          {cell === true ? <Check size={16} className="mx-auto text-green-600" /> :
                           cell === false ? <Minus size={16} className="mx-auto text-stone-300" /> :
                           cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-accent)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
              Not Sure Which Service You Need? Let's Figure It Out Together.
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Book a free 30-minute strategy call with our solutions architect. We'll assess your requirements, recommend the right approach, and provide a detailed project estimate — no commitment required.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--color-accent)] transition-transform hover:scale-105">
                <Phone size={16} /> Book Your Free Strategy Call
              </Link>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                <FileDown size={16} /> Download Service Guide (PDF)
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
