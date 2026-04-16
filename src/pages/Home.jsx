import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  ArrowRight, Globe, Rocket, BrainCircuit, ShieldCheck, Timer, Headphones,
  LineChart, Globe2, Monitor, Smartphone, Briefcase, Users, Clock, Star,
  MessageSquare, PenTool, Code2, Calendar, Download, ChevronLeft, ChevronRight,
  Quote
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn'

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const num = parseFloat(target)
    const steps = 60
    const increment = num / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= num) { setCount(num); clearInterval(timer) }
      else setCount(Math.floor(current * 10) / 10)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return <span ref={ref}>{typeof count === 'number' && count % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}{suffix}</span>
}

const whyCards = [
  { icon: BrainCircuit, title: 'AI-First Engineering', desc: 'We integrate machine learning, natural language processing, and predictive analytics into every solution \u2014 giving your product an intelligent edge competitors can\'t replicate.' },
  { icon: ShieldCheck, title: 'Enterprise-Grade Security', desc: 'SOC 2-aligned development practices, encrypted data pipelines, and OWASP-compliant code reviews ensure your application meets the highest security standards from launch.' },
  { icon: Timer, title: 'Agile Delivery, Zero Delays', desc: 'Our sprint-based workflow with weekly demos and transparent Jira boards means you see progress in real time. We maintain a 97.5% on-time delivery rate across 200+ projects.' },
  { icon: Headphones, title: '24/7 Post-Launch Support', desc: 'Your dedicated account manager and engineering pod provide round-the-clock monitoring, bug resolution, and performance optimization \u2014 not just for launch, but for the long run.' },
  { icon: LineChart, title: 'ROI-Obsessed Strategy', desc: 'Every feature, every sprint, every design decision is tied to a measurable business KPI \u2014 whether that\'s conversion rate, user retention, or monthly recurring revenue.' },
  { icon: Globe2, title: 'Global Team, Local Understanding', desc: 'With delivery centers and client-facing teams across the US, UK, and Australia, we offer timezone-aligned communication and culturally relevant design thinking.' },
]

const services = [
  {
    icon: Monitor, title: 'Custom Web & SaaS Development',
    desc: 'We architect and develop high-performance web applications using React, Next.js, and Node.js. Whether you need a multi-tenant SaaS platform, an internal business tool, or a customer-facing portal \u2014 we deliver production-ready code with sub-2-second load times, 99.9% uptime SLAs, and scalable cloud infrastructure on AWS or GCP.',
    features: ['Full-Stack React & Next.js Architecture', 'Multi-Tenant SaaS with Stripe Billing Integration', 'Cloud-Native Deployment (AWS, GCP, Vercel)'],
    cta: 'Explore Web Development', link: '/services',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    icon: Smartphone, title: 'Mobile App Development',
    desc: 'We build cross-platform and native mobile applications using React Native, Flutter, and Swift/Kotlin. From consumer-facing marketplace apps to enterprise field-service tools, our mobile solutions are optimized for performance, offline capability, and seamless App Store/Play Store approval \u2014 with an average 4.7-star user rating across our portfolio.',
    features: ['React Native & Flutter Cross-Platform Apps', 'Native iOS (Swift) & Android (Kotlin) Development', 'Push Notifications, Offline Sync & In-App Payments'],
    cta: 'Explore Mobile Solutions', link: '/services',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  },
  {
    icon: BrainCircuit, title: 'AI & Automation Solutions',
    desc: 'We design and deploy intelligent systems that automate workflows, extract insights from unstructured data, and deliver personalized user experiences. Our AI engineering team builds custom LLM integrations, computer vision pipelines, and recommendation engines \u2014 helping clients reduce operational costs by an average of 35% within the first quarter.',
    features: ['Custom LLM Integration & RAG Pipelines', 'Predictive Analytics & Business Intelligence Dashboards', 'Workflow Automation with RPA & API Orchestration'],
    cta: 'Explore AI Solutions', link: '/services',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
]

const stats = [
  { icon: Briefcase, number: '200', suffix: '+', label: 'Projects Delivered' },
  { icon: Users, number: '85', suffix: '+', label: 'Active Clients Worldwide' },
  { icon: Clock, number: '97.5', suffix: '%', label: 'On-Time Delivery Rate' },
  { icon: Star, number: '4.9', suffix: '/5', label: 'Average Client Satisfaction' },
  { icon: Globe, number: '12', suffix: '+', label: 'Countries Served' },
]

const steps = [
  { num: '01', icon: MessageSquare, title: 'Discovery & Strategy', desc: 'We begin with a deep-dive consultation to understand your business objectives, target users, competitive landscape, and technical requirements. You\'ll receive a detailed project roadmap, wireframes, and a fixed-scope proposal within 5 business days.' },
  { num: '02', icon: PenTool, title: 'UI/UX Design & Prototyping', desc: 'Our design team creates high-fidelity mockups and interactive prototypes in Figma, validated through user testing. You\'ll review and approve every screen before a single line of code is written \u2014 ensuring the final product matches your vision exactly.' },
  { num: '03', icon: Code2, title: 'Agile Development & QA', desc: 'We build in 2-week sprints with weekly demo calls, automated testing (90%+ code coverage), and CI/CD pipelines. Every feature is reviewed, tested, and deployed to a staging environment for your approval before going live.' },
  { num: '04', icon: Rocket, title: 'Launch, Monitor & Scale', desc: 'We handle deployment to production, configure monitoring dashboards (uptime, performance, errors), and provide 90 days of complimentary post-launch support. As your user base grows, we scale your infrastructure seamlessly.' },
]

const testimonials = [
  { quote: 'Xtec Global rebuilt our entire SaaS platform from a monolithic Rails app to a microservices architecture on AWS. The migration was seamless \u2014 zero downtime \u2014 and our page load times dropped from 4.2 seconds to under 800 milliseconds. They\'re not just developers, they\'re strategic partners.', name: 'Marcus Chen', role: 'CTO', company: 'Finsight Analytics, San Francisco', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  { quote: 'We needed a mobile app that could handle real-time GPS tracking, offline data sync, and integration with our existing ERP. Xtec Global delivered in 14 weeks \u2014 two weeks ahead of schedule. The app now has over 12,000 daily active users and a 4.8-star rating on both app stores.', name: 'Priya Mehta', role: 'Head of Product', company: 'LogiTrack Solutions, Melbourne', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80' },
  { quote: 'Their AI team built a custom document processing pipeline that reduced our manual data entry by 78%. What used to take our team 6 hours per day now runs automatically in under 15 minutes. The ROI was visible within the first month.', name: 'James Whitfield', role: 'Operations Director', company: 'Nexbridge Capital, London', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80' },
  { quote: 'As a non-technical founder, I was nervous about outsourcing development. Xtec Global made the entire process transparent and approachable. Weekly demos, clear documentation, and a dedicated project manager who actually understood our business. Our MVP launched on time and helped us close our seed round.', name: 'Sarah Johansson', role: 'CEO & Founder', company: 'Wellframe Health, Austin', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80' },
]

const blogPosts = [
  { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', cat: 'Engineering', title: 'Why We Migrated 3 Client Platforms From Next.js Pages Router to App Router \u2014 And What Broke', date: 'March 28, 2026', time: '9 min read', excerpt: 'The Next.js App Router promised better performance, server components, and streaming \u2014 but migration from Pages Router isn\'t a weekend project. Here\'s what we learned migrating three production SaaS platforms, including the caching pitfalls that cost us 12 hours of debugging.' },
  { img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80', cat: 'AI & Machine Learning', title: 'Building a Production-Ready RAG Pipeline: Lessons From Processing 2 Million Documents', date: 'March 15, 2026', time: '12 min read', excerpt: 'Retrieval-Augmented Generation is the backbone of modern AI applications \u2014 but most tutorials skip the hard parts. We break down our production RAG pipeline that processes 2M+ documents for a legal-tech client.' },
  { img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80', cat: 'Mobile Development', title: 'React Native vs. Flutter in 2026: A Head-to-Head From Teams That Ship Both', date: 'February 27, 2026', time: '11 min read', excerpt: 'We\'ve shipped 15 React Native apps and 8 Flutter apps in production. Instead of the usual framework comparison, we\'re sharing real performance benchmarks and developer velocity metrics from our own portfolio.' },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(i => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    document.title = 'Xtec Global \u2014 Engineering Digital Products That Drive Revenue'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2 md:py-36 lg:px-8">
          <div className="flex flex-col justify-center">
            <FadeIn>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold leading-tight tracking-tight text-stone-900 md:text-6xl lg:text-7xl">
                Engineering Digital Products That Drive Revenue.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-500">
                Xtec Global partners with startups and enterprises to design, build, and scale high-performance web applications, mobile platforms, and AI-powered systems — delivering measurable business outcomes from day one.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-[var(--color-accent)]">
                  Book a Free Strategy Call <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
                  View Our Work <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="mt-10 text-sm font-medium text-stone-400">Trusted by 200+ businesses across 3 continents</p>
            </FadeIn>
          </div>
          <FadeIn direction="right" delay={0.3}>
            <div className="relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
                alt="Team collaborating on digital products"
                className="h-[600px] w-full rounded-2xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Globe className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">12+ Countries</p>
                    <p className="text-xs text-stone-500">Global delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Why Choose Us */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Why Xtec Global</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
              Why Industry Leaders Choose Xtec Global
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-stone-500">
              We don't just write code — we engineer growth. Our approach combines deep technical expertise with strategic thinking to deliver solutions that move your bottom line.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
                  <card.icon className="text-[var(--color-accent)]" size={28} />
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-stone-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Services Overview */}
      <section className="bg-stone-50 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">What We Build</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
              End-to-End Digital Solutions for Modern Businesses
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-stone-500">
              From SaaS platforms to AI-powered automation, we build the technology that powers your next phase of growth.
            </p>
          </FadeIn>
          <div className="mt-16 space-y-12">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.15}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="grid md:grid-cols-2">
                    <div className="overflow-hidden">
                      <img src={s.img} alt={s.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full" />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-10">
                      <s.icon className="text-[var(--color-accent)]" size={28} />
                      <h3 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone-500">{s.desc}</p>
                      <ul className="mt-4 space-y-2">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-stone-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" /> {f}
                          </li>
                        ))}
                      </ul>
                      <Link to={s.link} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline">
                        {s.cta} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {stats.map((s) => (
              <FadeIn key={s.label} className="text-center">
                <s.icon className="mx-auto text-[var(--color-accent-light)]" size={24} />
                <p className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">
                  <CountUp target={s.number} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-stone-400">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Our Process</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
              From Idea to Launch in 4 Phases
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-stone-500">
              Our battle-tested delivery framework eliminates guesswork and keeps your project on track, on budget, and aligned with your business goals.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <StaggerItem key={step.num}>
                <div className="relative rounded-xl border border-stone-100 p-6">
                  <span className="absolute -top-3 left-6 rounded-full bg-[var(--color-accent)] px-3 py-0.5 text-xs font-bold text-white">{step.num}</span>
                  <step.icon className="mt-2 text-stone-400" size={24} />
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-stone-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Testimonials */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Client Voices</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
              What Our Clients Say About Working With Us
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-stone-500">
              Don't take our word for it — hear from the founders and CTOs who've built with Xtec Global.
            </p>
          </FadeIn>
          <div className="relative mt-16">
            <div className="overflow-hidden">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-3xl rounded-2xl bg-stone-50 p-8 md:p-12"
              >
                <Quote className="text-[var(--color-accent)] opacity-30" size={40} />
                <div className="mt-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-6 font-[family-name:var(--font-heading)] text-lg leading-relaxed text-stone-700 md:text-xl">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={testimonials[activeTestimonial].img}
                    alt={testimonials[activeTestimonial].name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-stone-900">{testimonials[activeTestimonial].name}</p>
                    <p className="text-sm text-stone-500">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button onClick={() => setActiveTestimonial(i => (i - 1 + testimonials.length) % testimonials.length)} className="rounded-full border border-stone-200 p-2 text-stone-400 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"><ChevronLeft size={20} /></button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)} className={`h-2 rounded-full transition-all ${i === activeTestimonial ? 'w-8 bg-[var(--color-accent)]' : 'w-2 bg-stone-300'}`} />
                ))}
              </div>
              <button onClick={() => setActiveTestimonial(i => (i + 1) % testimonials.length)} className="rounded-full border border-stone-200 p-2 text-stone-400 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--color-accent)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Whether you're launching an MVP, scaling an existing product, or exploring AI integration — our team is ready to turn your vision into production-ready software. Let's talk.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--color-accent)] transition-transform hover:scale-105">
                <Calendar size={16} /> Schedule Your Free Consultation
              </Link>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                <Download size={16} /> Download Our Capabilities Deck
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Insights & Resources</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
              Latest From the Xtec Global Engineering Blog
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-stone-500">
              Technical deep-dives, industry analysis, and practical guides from our engineering and strategy teams.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <StaggerItem key={post.title}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="overflow-hidden">
                    <img src={post.img} alt={post.title} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-[var(--color-accent)]">{post.cat}</span>
                    <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg font-semibold leading-snug text-stone-900">{post.title}</h3>
                    <p className="mt-2 text-sm text-stone-400">{post.date} &middot; {post.time}</p>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-stone-500">{post.excerpt}</p>
                    <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline">
                      Read Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
