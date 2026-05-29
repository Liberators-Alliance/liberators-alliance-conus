import type { Metadata } from "next";
import Link from "next/link";
import PageSchema from "../components/PageSchema";

const siteUrl = "https://conus.liberators-alliance.org";

export const metadata: Metadata = {
  title: "Our Program | Equestrian Therapy, Trauma-Informed Care & Clinical Treatment",
  description:
    "Learn how the Saving Arrows day program integrates equestrian therapy, trauma-informed care, and licensed clinical treatment into a unified healing model for child survivors in Castle Rock, Colorado.",
  alternates: { canonical: "https://conus.liberators-alliance.org/program" },
  openGraph: {
    title: "Our Program | Saving Arrows",
    description:
      "Equestrian therapy, trauma-informed care, and licensed clinical treatment — integrated into a structured day program for child survivors of trafficking and trauma.",
    url: "https://conus.liberators-alliance.org/program",
  },
  twitter: {
    title: "Our Program | Saving Arrows",
    description:
      "Equestrian therapy, trauma-informed care, and licensed clinical treatment — integrated into a structured day program for child survivors of trafficking and trauma.",
  },
};

const pillars = [
  {
    title: "Equestrian Therapy",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
    imageAlt: "Child with horse in therapy setting",
    body: [
      "Equestrian-assisted therapy (EAT) is an evidence-informed modality that uses structured interaction with horses to support emotional, behavioral, and relational healing. For children who have experienced trauma, horses offer something uniquely valuable: a non-judgmental, attuned relationship that responds honestly and immediately to emotional states.",
      "Horses are prey animals with a finely calibrated nervous system. They mirror the emotional state of the person working with them — calm presence is rewarded with connection; anxiety or aggression interrupts it. This feedback loop, in a structured clinical setting, becomes one of the most powerful tools in trauma recovery.",
      "At Saving Arrows, equestrian therapy is universally accessible. Programming is adapted to meet participants at their current level of readiness and mobility, and no prior experience with horses is required. The focus is relationship, not horsemanship.",
    ],
  },
  {
    title: "Trauma-Informed Care",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
    imageAlt: "Calm, open therapeutic environment",
    body: [
      "Trauma-informed care (TIC) is not a treatment modality — it is an organizational and relational framework that reshapes how every aspect of a program operates. At Saving Arrows, TIC is the foundation on which everything else is built.",
      "Our approach draws from SAMHSA's six principles of trauma-informed care: safety, trustworthiness and transparency, peer support, collaboration and mutuality, empowerment and choice, and cultural humility. These principles guide staff training, physical environment design, participant communication, and program scheduling.",
      "Children who have experienced trafficking and exploitation have had their sense of agency systematically removed. Every element of the Saving Arrows environment is designed to restore it. Participants understand what is happening, why, and what choices they have. Nothing is done to them — it is done with them.",
    ],
  },
  {
    title: "Clinical Treatment",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80",
    imageAlt: "Licensed clinician in session",
    body: [
      "Saving Arrows integrates licensed clinical professionals into every level of the program. Participants receive individualized, evidence-based mental health treatment alongside the experiential components of the day — not as a separate track, but as part of a unified therapeutic model.",
      "Clinical services are provided by licensed therapists with specialization in trauma, complex PTSD, dissociation, and developmental impacts of trafficking and exploitation. Treatment modalities include Trauma-Focused Cognitive Behavioral Therapy (TF-CBT), Eye Movement Desensitization and Reprocessing (EMDR), and somatic approaches tailored to the individual.",
      "Clinical staff collaborate directly with equestrian therapy practitioners, case managers, and referring agencies to ensure continuity of care. Progress is documented and shared with appropriate parties according to consent and applicable law.",
    ],
  },
];

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Equestrian-Assisted Therapy for Trafficking Survivors",
    serviceType: "Equestrian-Assisted Psychotherapy (EAP)",
    description:
      "Evidence-informed equestrian therapy for child survivors of trafficking and trauma. Credentialed under PATH Intl. and EAGALA standards. Provided as part of the Saving Arrows day program in Castle Rock, Colorado.",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "State", name: "Colorado" },
    audience: { "@type": "Audience", name: "Child survivors of trafficking and complex trauma under age 18" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Trauma-Informed Care Program",
    serviceType: "Trauma-Informed Care",
    description:
      "Organizational trauma-informed framework based on SAMHSA's six principles — safety, trustworthiness, peer support, collaboration, empowerment, and cultural humility — applied across all programming and staff interactions.",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "State", name: "Colorado" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Licensed Clinical Treatment for Child Trauma Survivors",
    serviceType: "Mental Health Treatment",
    description:
      "Individualized, evidence-based mental health treatment provided by licensed clinicians. Modalities include Trauma-Focused CBT (TF-CBT), EMDR, and somatic therapies tailored to each child survivor's needs.",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "State", name: "Colorado" },
    audience: { "@type": "Audience", name: "Children under 18 with trauma, PTSD, and complex trauma histories" },
  },
];

export default function Program() {
  return (
    <>
      <PageSchema
        pageName="Our Program"
        pageDescription="Equestrian therapy, trauma-informed care, and licensed clinical treatment integrated into a structured day program for child survivors of trafficking in Castle Rock, Colorado."
        pageUrl={`${siteUrl}/program`}
        additionalSchemas={serviceSchemas}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2E6DA4] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">A program built around healing</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Saving Arrows combines equestrian therapy, trauma-informed care, and clinical treatment into an integrated
            day program designed for children who have survived the unimaginable.
          </p>
        </div>
      </section>

      {/* Pillars */}
      {pillars.map((pillar, i) => (
        <section
          key={pillar.title}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${i % 2 === 0 ? "bg-white" : "bg-[#E8F1F8]"}`}
        >
          <div
            className={`max-w-7xl mx-auto flex flex-col gap-10 items-center ${
              i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="flex-1">
              <img
                src={pillar.image}
                alt={pillar.imageAlt}
              loading="lazy"
                className="rounded-2xl w-full object-cover h-72 shadow-md"
              />
            </div>
            <div className="flex-1 max-w-lg">
              <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">{pillar.title}</h2>
              {pillar.body.map((para, j) => (
                <p key={j} className="text-gray-700 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Day Structure */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">What a participant&rsquo;s day looks like</h2>
          <p className="text-gray-600 text-center mb-10">
            The Saving Arrows day program runs on a structured schedule designed to balance clinical intensity with
            restorative rhythm.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { time: "Morning arrival", detail: "Grounded check-in, orientation, and relational connection with staff" },
              { time: "Equestrian session", detail: "Structured equestrian-assisted therapy with clinical oversight" },
              { time: "Midday processing", detail: "Group or individual clinical processing of the morning experience" },
              { time: "Skills & enrichment", detail: "Life skills, creative expression, or academic support activities" },
              { time: "Afternoon clinical", detail: "Individual therapy session with licensed clinician" },
              { time: "Closing circle", detail: "Reflection, co-regulation, and preparation for transition home" },
            ].map((item) => (
              <div key={item.time} className="bg-[#E8F1F8] rounded-xl p-5">
                <div className="text-[#2E6DA4] font-semibold text-sm mb-1">{item.time}</div>
                <div className="text-gray-700 text-sm">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Farm */}
      <section className="bg-[#1B3A5C] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80"
              alt="The Saving Arrows 40-acre farm in Castle Rock, Colorado, providing a purposeful healing environment"
              className="rounded-2xl w-full object-cover h-72 shadow-lg"
            />
          </div>
          <div className="flex-1 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">The Castle Rock farm</h2>
            <p className="text-blue-200 leading-relaxed mb-4">
              The Saving Arrows program is set on a 40-acre farm in Castle Rock, Colorado. The land itself is part of
              the therapeutic experience — open space, natural rhythms, and purposeful distance from the environments
              where trauma occurred.
            </p>
            <p className="text-blue-200 leading-relaxed">
              The farm has been purpose-designed for the program: accessible facilities, safe and well-maintained
              equestrian infrastructure, clinical office space, and natural areas for restorative and reflective
              activities. Everything is built to serve the healing process.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials callout */}
      <section className="bg-[#E8F1F8] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#1B3A5C] mb-4">Clinically credentialed. Evidence-based.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Saving Arrows&rsquo; equestrian therapy programming aligns with standards established by{" "}
            <a href="https://pathintl.org" target="_blank" rel="noopener noreferrer" className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]">PATH Intl.</a>{" "}
            and{" "}
            <a href="https://www.eagala.org" target="_blank" rel="noopener noreferrer" className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]">EAGALA</a>.
            Clinical services use modalities recommended by{" "}
            <a href="https://www.samhsa.gov" target="_blank" rel="noopener noreferrer" className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]">SAMHSA</a>{" "}
            and the{" "}
            <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]">World Health Organization</a>.
            Learn more about{" "}
            <Link href="/approach" className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]">our clinical approach →</Link>
          </p>
        </div>
      </section>

      {/* Refer CTA */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-[#1B3A5C] mb-4">Know a child who could benefit?</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          We work with schools, courts, foster care systems, and community advocates to connect{" "}
          <Link href="/who-we-serve" className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]">
            child survivors of trafficking and trauma
          </Link>{" "}
          with the care they need.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/refer"
            className="inline-block bg-[#2E6DA4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1B3A5C] transition-colors"
          >
            Make a Referral
          </Link>
          <Link
            href="/donate"
            className="inline-block border-2 border-[#2E6DA4] text-[#2E6DA4] px-8 py-3 rounded-full font-semibold hover:bg-[#E8F1F8] transition-colors"
          >
            Donate to Fund the Program
          </Link>
        </div>
      </section>
    </>
  );
}
