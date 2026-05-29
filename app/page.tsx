import type { Metadata } from "next";
import Link from "next/link";
import PageSchema from "./components/PageSchema";

const siteUrl = "https://conus.liberators-alliance.org";

export const metadata: Metadata = {
  title: "Saving Arrows | Anti-Trafficking Nonprofit | Trauma Healing for Child Survivors",
  description:
    "Saving Arrows is an anti-trafficking nonprofit providing equestrian therapy, trauma-informed care, and clinical treatment for child survivors of trafficking and trauma. Based in Castle Rock, Colorado. Donate, refer, or partner with us.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Saving Arrows | Anti-Trafficking Nonprofit | Restoring direction. Rebuilding futures.",
    description:
      "An anti-trafficking nonprofit providing equestrian therapy and clinical healing for child survivors of trafficking and trauma. Castle Rock, Colorado. Donate or get involved today.",
    url: siteUrl,
  },
  twitter: {
    title: "Saving Arrows | Anti-Trafficking Nonprofit | Restoring direction. Rebuilding futures.",
    description:
      "Equestrian therapy and clinical healing for child survivors of trafficking and trauma. Fight trafficking by supporting Saving Arrows in Castle Rock, Colorado.",
  },
};

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
      </svg>
    ),
    title: "Equestrian Therapy",
    description:
      "Structured, evidence-informed interaction with horses builds trust, emotional regulation, and self-efficacy in ways that traditional talk therapy cannot reach alone — particularly for trafficking survivors.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
      </svg>
    ),
    title: "Trauma-Informed Care",
    description:
      "Every interaction, environment, and relationship within the program is designed around safety, trustworthiness, choice, and empowerment — restoring what exploitation took.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Clinical Treatment",
    description:
      "Licensed clinical professionals provide individualized, evidence-based mental health care — TF-CBT, EMDR, and somatic therapies — integrated with equestrian and experiential components.",
  },
];

const faqs = [
  {
    question: "What is Saving Arrows?",
    answer:
      "Saving Arrows is an anti-trafficking nonprofit and structured day program providing equestrian therapy, trauma-informed care, and licensed clinical treatment for children under 18 who have survived trafficking and trauma. The program is operated by Liberators Alliance and is based on a 40-acre farm in Castle Rock, Colorado.",
  },
  {
    question: "Who is eligible to participate in the program?",
    answer:
      "Saving Arrows serves children and adolescents under 18 who are survivors of sex trafficking, labor trafficking, exploitation, or complex trauma. Participants may be referred by schools, foster care systems, juvenile courts, child advocacy centers, or community organizations. Each referral begins with an intake conversation to assess fit.",
  },
  {
    question: "How does the day program model work?",
    answer:
      "Unlike residential programs, Saving Arrows is a day program — participants attend structured programming during the day and return home or to their placement each evening. This model preserves connection to family and community while providing intensive, clinical-grade care. The program integrates equestrian therapy sessions, individual clinical therapy, group processing, and life skills activities.",
  },
  {
    question: "Why does Saving Arrows use equestrian therapy for trafficking survivors?",
    answer:
      "Equestrian-assisted therapy is evidence-informed and particularly effective for trafficking survivors. Horses respond to the nervous system, not verbal narrative — they mirror actual emotional state and provide immediate, honest biofeedback. For children who have been exploited and learned to mask their emotions around adults, this non-judgmental, attuned relationship can create breakthroughs that traditional talk therapy alone may not reach.",
  },
  {
    question: "How can I donate to support anti-trafficking work?",
    answer:
      "Donations to Saving Arrows fund equestrian therapy programming, licensed clinical treatment, and the 40-acre healing environment that makes recovery possible. Visit our donate page to give. Every gift directly supports a child survivor of trafficking on their path to restoration.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <PageSchema
        pageName="Saving Arrows — Home"
        pageDescription="Anti-trafficking nonprofit providing equestrian therapy, trauma-informed care, and clinical treatment for child survivors in Castle Rock, Colorado."
        pageUrl={siteUrl}
        additionalSchemas={[faqSchema]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1B3A5C] via-[#2E6DA4] to-[#E8F1F8] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-2xl">
            <p className="text-[#F0A500] font-semibold text-sm uppercase tracking-widest mb-4">
              Anti-Trafficking Nonprofit · Castle Rock, Colorado
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Restoring direction.<br />Rebuilding futures.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Saving Arrows is a structured day program providing equestrian therapy, trauma-informed care, and clinical
              treatment for children under 18 who have survived trafficking and trauma. Based on a 40-acre farm in Castle
              Rock, Colorado.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/program"
                className="bg-white text-[#1B3A5C] px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn About Our Program
              </Link>
              <Link
                href="/donate"
                className="bg-[#F0A500] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d4940a] transition-colors"
              >
                Donate to Fight Trafficking
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement strip */}
      <section className="bg-[#1B3A5C] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 text-sm md:text-base">
            <span className="text-white font-semibold">Fighting child trafficking</span> through restoration, not just rescue —
            clinical healing grounded in equestrian therapy and trauma-informed care.
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4">A three-pillar approach to healing</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Saving Arrows integrates clinical care with experiential and relational approaches to meet child survivors
              of trafficking where they are.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#E8F1F8] rounded-2xl p-8 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className="text-[#2E6DA4]">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-[#1B3A5C]">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/program" className="text-[#2E6DA4] font-semibold hover:text-[#1B3A5C] transition-colors underline underline-offset-4">
              See how the full program works →
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-[#E8F1F8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80"
              alt="Open farmland at the Saving Arrows 40-acre facility in Castle Rock, Colorado — a healing environment for trafficking survivors"
              className="rounded-2xl w-full object-cover h-64 md:h-80 shadow-md"
            />
          </div>
          <div className="flex-1 max-w-lg">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4">Who we serve</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Saving Arrows serves children under 18 who are survivors of sex trafficking, labor trafficking, exploitation,
              or complex trauma. Our day program model allows participants to maintain connection to existing family and
              community support systems while receiving intensive, integrated care.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We work with schools, foster care systems, juvenile courts, child advocacy centers, and community
              organizations to connect children with the healing they need.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/who-we-serve"
                className="inline-flex items-center gap-2 text-[#2E6DA4] font-semibold hover:text-[#1B3A5C] transition-colors"
              >
                Learn who qualifies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/refer" className="inline-flex items-center gap-2 text-[#2E6DA4] font-semibold hover:text-[#1B3A5C] transition-colors">
                Refer a child
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donor CTA */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2E6DA4] py-20 px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#F0A500] font-semibold text-sm uppercase tracking-widest mb-3">Fight trafficking. Fund healing.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your support gives a child a future worth moving toward.
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Every dollar you give directly funds equestrian therapy, licensed clinical treatment, and the safe
            healing environment that makes recovery real for child survivors of trafficking.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="inline-block bg-[#F0A500] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d4940a] transition-colors shadow-lg"
            >
              Donate to Fight Trafficking
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white px-6 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              About Our Organization
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-3">Frequently asked questions</h2>
            <p className="text-gray-600">
              Answers to common questions from donors, families, and referring professionals.
            </p>
          </div>
          <dl className="divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <dt className="text-lg font-semibold text-[#1B3A5C] mb-2">{faq.question}</dt>
                <dd className="text-gray-700 leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 text-center">
            <Link href="/contact" className="text-[#2E6DA4] font-semibold hover:text-[#1B3A5C] underline underline-offset-4 transition-colors">
              Have another question? Contact us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
