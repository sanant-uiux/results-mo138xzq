import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Grid, Code2, BrainCircuit, Palette, TrendingUp, Smartphone, Cloud,
  Mail, Send
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn'

const categories = [
  { icon: Grid, label: 'All Posts' },
  { icon: Code2, label: 'Engineering' },
  { icon: BrainCircuit, label: 'AI & Machine Learning' },
  { icon: Palette, label: 'Design & UX' },
  { icon: TrendingUp, label: 'Business & Strategy' },
  { icon: Smartphone, label: 'Mobile Development' },
  { icon: Cloud, label: 'Cloud & DevOps' },
]

const featuredPost = {
  img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  cat: 'Engineering Leadership',
  title: 'The True Cost of Technical Debt: How We Helped a Series B Startup Recover 4 Months of Lost Velocity',
  author: 'Elena Vasquez, CTO',
  date: 'April 8, 2026',
  time: '14 min read',
  excerpt: 'When Clearpath Education came to us, their React app had 47 console warnings, zero test coverage, and a deployment process that required SSHing into a production server. Feature development had slowed to a crawl, and their investors were losing patience. Here\'s how we executed a 6-week technical debt reduction sprint that restored their engineering velocity \u2014 without pausing feature development.',
}

const posts = [
  { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', cat: 'Engineering', title: 'Why We Migrated 3 Client Platforms From Next.js Pages Router to App Router \u2014 And What Broke', author: 'Elena Vasquez', date: 'March 28, 2026', time: '9 min read', excerpt: 'The App Router promised better performance and server components \u2014 but migration isn\'t a weekend project. Here\'s what we learned across three production SaaS platforms, including the caching pitfalls that cost us 12 hours of debugging.' },
  { img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80', cat: 'AI & Machine Learning', title: 'Building a Production-Ready RAG Pipeline: Lessons From Processing 2 Million Documents', author: 'Amara Singh', date: 'March 15, 2026', time: '12 min read', excerpt: 'Most RAG tutorials skip the hard parts. We break down our production pipeline that processes 2M+ documents for a legal-tech client \u2014 including chunking strategies, embedding model selection, and hallucination guardrails that actually work.' },
  { img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80', cat: 'Mobile Development', title: 'React Native vs. Flutter in 2026: A Head-to-Head From Teams That Ship Both', author: 'Daniel Okafor', date: 'February 27, 2026', time: '11 min read', excerpt: 'We\'ve shipped 15 React Native apps and 8 Flutter apps in production. Instead of the usual framework comparison, here are real performance benchmarks and developer velocity data from our own portfolio.' },
  { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', cat: 'Cloud & DevOps', title: 'How We Cut a Client\'s AWS Bill by 42% Without Sacrificing Performance', author: 'Rajiv Kapoor', date: 'February 12, 2026', time: '8 min read', excerpt: 'An e-commerce client was spending $18,000/month on AWS with auto-scaling policies that hadn\'t been reviewed since launch. We audited their infrastructure and implemented right-sizing, reserved instances, and spot fleets \u2014 dropping their bill to $10,400/month.' },
  { img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80', cat: 'Design & UX', title: 'Building a Design System That Engineers Actually Use: Our Internal Playbook', author: 'Daniel Okafor', date: 'January 30, 2026', time: '10 min read', excerpt: 'Most design systems die in Figma. They look beautiful but never get implemented consistently. Here\'s how we bridge the designer-developer gap with component parity, shared tokens, and a review process that keeps both sides honest.' },
  { img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', cat: 'Business & Strategy', title: 'From Idea to Funded MVP: The 90-Day Playbook We Use With Pre-Seed Startups', author: 'Rajiv Kapoor', date: 'January 15, 2026', time: '13 min read', excerpt: 'We\'ve helped 30+ startups go from concept to investor-ready MVP. This is our exact 90-day framework \u2014 covering validation, scoping, design, development, and launch \u2014 that\'s helped founders raise over $12M in combined seed funding.' },
]

const tags = ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'Python', 'AI/ML', 'Flutter', 'React Native', 'PostgreSQL', 'Docker', 'Kubernetes', 'Figma', 'SaaS', 'Startup', 'DevOps', 'RAG', 'LLM', 'System Design', 'Performance']

export default function Blog() {
  const [activeCat, setActiveCat] = useState('All Posts')

  useEffect(() => {
    document.title = 'Blog \u2014 Xtec Global'
  }, [])

  const filtered = activeCat === 'All Posts' ? posts : posts.filter(p => p.cat === activeCat)

  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[50vh] items-center bg-white pt-20">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36 lg:px-8">
          <p className="text-sm text-stone-400">
            <Link to="/" className="hover:text-[var(--color-accent)]">Home</Link> &rarr; Blog
          </p>
          <FadeIn>
            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Insights, Guides & Engineering Deep-Dives
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-stone-500">
              Technical articles, industry analysis, and practical tutorials from the Xtec Global engineering and strategy teams. Written by practitioners who ship production code every day.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Featured Post */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="group grid overflow-hidden rounded-2xl border border-stone-100 md:grid-cols-5">
              <div className="overflow-hidden md:col-span-3">
                <img src={featuredPost.img} alt={featuredPost.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full" />
              </div>
              <div className="flex flex-col justify-center p-8 md:col-span-2 md:p-10">
                <span className="inline-block w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-[var(--color-accent)]">{featuredPost.cat}</span>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold leading-snug text-stone-900">{featuredPost.title}</h2>
                <p className="mt-2 text-sm text-stone-400">{featuredPost.author} &middot; {featuredPost.date} &middot; {featuredPost.time}</p>
                <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-stone-500">{featuredPost.excerpt}</p>
                <Link to="/blog" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline">
                  Read the Full Story <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-30 border-b border-stone-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 lg:px-8">
          <div className="flex gap-2 py-4">
            {categories.map((c) => (
              <button
                key={c.label}
                onClick={() => setActiveCat(c.label)}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCat === c.label
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <c.icon size={14} /> {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {filtered.map((post) => (
              <StaggerItem key={post.title}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="overflow-hidden">
                    <img src={post.img} alt={post.title} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-[var(--color-accent)]">{post.cat}</span>
                    <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg font-semibold leading-snug text-stone-900">{post.title}</h3>
                    <p className="mt-2 text-xs text-stone-400">{post.author} &middot; {post.date} &middot; {post.time}</p>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-stone-500">{post.excerpt}</p>
                    <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline">
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-stone-400">No posts in this category yet. Check back soon.</p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-stone-900 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white">
              Get Engineering Insights Delivered Weekly
            </h2>
            <p className="mt-4 text-stone-400">
              Join 3,200+ CTOs, founders, and senior engineers who read our weekly newsletter. No spam, no fluff — just actionable technical insights and industry analysis.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" size={16} />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-full bg-stone-800 py-3 pl-10 pr-4 text-sm text-white placeholder-stone-500 outline-none ring-1 ring-stone-700 focus:ring-[var(--color-accent)]"
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105">
                <Send size={14} /> Subscribe to The Build Log
              </button>
            </form>
            <p className="mt-4 text-xs text-stone-500">We respect your inbox. Unsubscribe anytime.</p>
          </FadeIn>
        </div>
      </section>

      {/* Tags */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-500 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-accent)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white">
              Have a Topic You'd Like Us to Cover?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              We write about what our community wants to learn. Submit a topic suggestion and we'll add it to our editorial calendar.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--color-accent)] transition-transform hover:scale-105">
                Suggest a Topic
              </Link>
              <Link to="/blog" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                Browse All Articles
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
