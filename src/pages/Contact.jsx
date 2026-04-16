import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail, Phone, Clock, User, Building, Layers, DollarSign, Calendar,
  FileText, MapPin, MessageCircle, Handshake, ChevronDown, ArrowRight,
  Linkedin, Twitter, Github, Dribbble, Youtube, Send, Check
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn'

const contactCards = [
  { icon: Calendar, title: 'Book a Strategy Call', desc: 'Schedule a free 30-minute call with our solutions architect to discuss your project requirements, timeline, and budget.', cta: 'Pick a Time Slot', href: '#', color: 'bg-indigo-50 text-indigo-600' },
  { icon: Mail, title: 'Send a Detailed Brief', desc: 'Prefer email? Send your project requirements, technical specs, and any reference materials to our team for a thorough review.', cta: 'Email hello@xtecglobal.com', href: 'mailto:hello@xtecglobal.com', color: 'bg-purple-50 text-purple-600' },
  { icon: MessageCircle, title: 'Chat on WhatsApp', desc: 'For quick questions or initial conversations, reach us on WhatsApp. Available Monday through Friday, 9 AM \u2013 6 PM PST.', cta: 'Start a Chat', href: '#', color: 'bg-green-50 text-green-600' },
  { icon: Handshake, title: 'Partnership & Reseller', desc: 'Interested in a technology partnership, white-label arrangement, or reseller agreement? Our partnerships team would love to connect.', cta: 'Email partnerships@xtecglobal.com', href: 'mailto:partnerships@xtecglobal.com', color: 'bg-amber-50 text-amber-600' },
]

const faqs = [
  { q: 'What happens after I submit the contact form?', a: 'Our solutions team reviews every submission within 4 business hours during weekdays. You\'ll receive a confirmation email immediately, followed by a personalized response from a project coordinator who will schedule a discovery call at your convenience. For urgent requests, call us directly at +1 (415) 890-2740.' },
  { q: 'Do you offer free consultations?', a: 'Yes. Your initial 30-minute strategy call is completely free with no obligation. During this call, we\'ll discuss your project goals, recommend the right service and engagement model, and provide a rough timeline and budget estimate. If you decide to proceed, we\'ll follow up with a detailed proposal within 5 business days.' },
  { q: 'What\'s your typical project timeline?', a: 'Timelines vary by scope and complexity. A landing page or marketing site typically takes 3\u20134 weeks. An MVP or web application ranges from 8\u201316 weeks. Complex SaaS platforms or AI integrations can take 12\u201324 weeks. During our discovery call, we\'ll provide a specific timeline based on your requirements.' },
  { q: 'Can I hire your team on a monthly retainer?', a: 'Absolutely. We offer dedicated team retainers starting at 80 hours per month. This model is ideal for ongoing development, maintenance, and iterative feature work. Retainer clients get priority scheduling, a dedicated Slack channel, and monthly strategy sessions with their account manager.' },
  { q: 'Do you sign NDAs before discussing project details?', a: 'Yes. We\'re happy to sign a mutual NDA before any detailed technical discussions. Simply mention this in your contact form or at the start of our call, and we\'ll have a standard NDA ready for both parties to sign within 24 hours.' },
]

const offices = [
  { name: 'Headquarters \u2014 San Francisco, USA', address: '548 Market Street, Suite 320, San Francisco, CA 94104', phone: '+1 (415) 890-2740', email: 'us@xtecglobal.com' },
  { name: 'APAC Office \u2014 Melbourne, Australia', address: 'Level 12, 600 Collins Street, Melbourne VIC 3000', phone: '+61 3 9028 4455', email: 'apac@xtecglobal.com' },
  { name: 'EMEA Office \u2014 London, United Kingdom', address: '71 Kingsway, Holborn, London WC2B 6ST', phone: '+44 20 7946 0958', email: 'uk@xtecglobal.com' },
]

const socials = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter/X' },
  { icon: Github, label: 'GitHub' },
  { icon: Dribbble, label: 'Dribbble' },
  { icon: Youtube, label: 'YouTube' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title = 'Contact Us \u2014 Xtec Global'
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="flex items-center bg-white pt-20">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36 lg:px-8">
          <p className="text-sm text-stone-400">
            <Link to="/" className="hover:text-[var(--color-accent)]">Home</Link> &rarr; Contact Us
          </p>
          <FadeIn>
            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Let's Turn Your Idea Into Production-Ready Software.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-stone-500">
              Whether you're scoping an MVP, planning a platform migration, or exploring AI integration — our team is ready to listen, advise, and build. Reach out through any channel below.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-10 flex flex-wrap justify-center gap-6" stagger={0.1}>
            {[
              { icon: Mail, label: 'Email Us', value: 'hello@xtecglobal.com' },
              { icon: Phone, label: 'Call Us', value: '+1 (415) 890-2740' },
              { icon: Clock, label: 'Business Hours', value: 'Mon\u2013Fri, 9 AM \u2013 6 PM PST' },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50">
                    <item.icon className="text-[var(--color-accent)]" size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium text-stone-400">{item.label}</p>
                    <p className="text-sm font-semibold text-stone-900">{item.value}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Contact Form */}
      <section id="form" className="bg-white py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-5 lg:px-8">
          <div className="md:col-span-3">
            <FadeIn>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-stone-900">Tell Us About Your Project</h2>
              <p className="mt-2 text-sm text-stone-500">Fill out the form below and our solutions team will get back to you within 4 business hours.</p>
            </FadeIn>
            {submitted ? (
              <FadeIn>
                <div className="mt-8 rounded-xl bg-green-50 p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Check className="text-green-600" size={24} />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-stone-900">Thank you!</h3>
                  <p className="mt-2 text-sm text-stone-500">Our team has received your brief and will respond within 4 business hours. Check your inbox for a confirmation email.</p>
                </div>
              </FadeIn>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 flex items-center gap-1.5 text-sm font-medium text-stone-700"><User size={14} /> Full Name *</label>
                    <input required type="text" placeholder="e.g., Sarah Johnson" className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-stone-900 outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                  </div>
                  <div>
                    <label className="mb-1 flex items-center gap-1.5 text-sm font-medium text-stone-700"><Mail size={14} /> Business Email *</label>
                    <input required type="email" placeholder="you@company.com" className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-stone-900 outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 flex items-center gap-1.5 text-sm font-medium text-stone-700"><Phone size={14} /> Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-stone-900 outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                  </div>
                  <div>
                    <label className="mb-1 flex items-center gap-1.5 text-sm font-medium text-stone-700"><Building size={14} /> Company Name *</label>
                    <input required type="text" placeholder="Your company name" className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-stone-900 outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 flex items-center gap-1.5 text-sm font-medium text-stone-700"><Layers size={14} /> Service Interested In *</label>
                    <select required className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-stone-900 outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]">
                      <option value="">Select a service</option>
                      <option>Web & SaaS Development</option>
                      <option>Mobile App Development</option>
                      <option>AI & Machine Learning</option>
                      <option>UI/UX Design</option>
                      <option>Cloud & DevOps</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 flex items-center gap-1.5 text-sm font-medium text-stone-700"><DollarSign size={14} /> Estimated Budget *</label>
                    <select required className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-stone-900 outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]">
                      <option value="">Select budget range</option>
                      <option>Under $10,000</option>
                      <option>$10,000 – $25,000</option>
                      <option>$25,000 – $50,000</option>
                      <option>$50,000 – $100,000</option>
                      <option>$100,000+</option>
                      <option>Let's Discuss</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1 flex items-center gap-1.5 text-sm font-medium text-stone-700"><Calendar size={14} /> Project Timeline *</label>
                  <select required className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-stone-900 outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]">
                    <option value="">Select timeline</option>
                    <option>ASAP (Within 2 weeks)</option>
                    <option>1–3 Months</option>
                    <option>3–6 Months</option>
                    <option>6+ Months</option>
                    <option>Just Exploring</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 flex items-center gap-1.5 text-sm font-medium text-stone-700"><FileText size={14} /> Project Description *</label>
                  <textarea required rows={5} placeholder="Describe your project, goals, and any technical requirements..." className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-stone-900 outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-[var(--color-accent)]">
                  <Send size={16} /> Send Your Project Brief
                </button>
              </form>
            )}
          </div>
          <FadeIn direction="right" delay={0.3} className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Team collaborating"
              className="h-full min-h-[400px] w-full rounded-2xl object-cover"
            />
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Offices */}
      <section className="bg-stone-50 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-stone-900">Our Offices</h2>
          </FadeIn>
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.15}>
            {offices.map((o) => (
              <StaggerItem key={o.name}>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <MapPin className="text-[var(--color-accent)]" size={20} />
                  <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-stone-900">{o.name}</h3>
                  <p className="mt-2 text-sm text-stone-500">{o.address}</p>
                  <p className="mt-1 text-sm text-stone-500">{o.phone}</p>
                  <a href={`mailto:${o.email}`} className="text-sm text-[var(--color-accent)] hover:underline">{o.email}</a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* Contact Method Cards */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {contactCards.map((c) => (
              <StaggerItem key={c.title}>
                <div className="group rounded-xl border border-stone-100 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${c.color}`}>
                    <c.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-stone-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-stone-500">{c.desc}</p>
                  <a href={c.href} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline">
                    {c.cta} <ArrowRight size={14} />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-stone-200" />

      {/* FAQ */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Common Questions</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-stone-900">Quick Answers Before You Reach Out</h2>
          </FadeIn>
          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="rounded-xl border border-stone-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-stone-900">{faq.q}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={18} className="shrink-0 text-stone-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
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
            ))}
          </div>
        </div>
      </section>

      {/* Social & CTA */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <div className="flex justify-center gap-4">
              {socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 text-stone-400 transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:scale-110">
                  <s.icon size={20} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-stone-500">Follow us for engineering insights, behind-the-scenes project updates, and open-source contributions.</p>
            <h3 className="mt-10 font-[family-name:var(--font-heading)] text-2xl font-bold text-stone-900">Ready to Start Building?</h3>
            <a href="#form" className="mt-4 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-[var(--color-accent)]">
              Submit Your Project Brief <ArrowRight size={16} />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
