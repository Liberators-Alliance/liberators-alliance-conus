import type { Metadata } from "next";
import Link from "next/link";
import PageSchema from "../components/PageSchema";

const siteUrl = "https://conus.liberators-alliance.org";

export const metadata: Metadata = {
  title: "Our Approach | Evidence-Based Equestrian Therapy for Trafficking Survivors",
  description:
    "Saving Arrows uses equestrian-assisted therapy, TF-CBT, EMDR, and somatic approaches grounded in SAMHSA trauma-informed care principles to support lasting recovery for child survivors of trafficking and trauma.",
  alternates: { canonical: `${siteUrl}/approach` },
  openGraph: {
    title: "Our Approach | Saving Arrows",
    description:
      "Evidence-based equestrian therapy, TF-CBT, EMDR, and SAMHSA trauma-informed care — the clinical framework Saving Arrows uses to heal child survivors of trafficking.",
    url: `${siteUrl}/approach`,
  },
  twitter: {
    title: "Our Approach | Saving Arrows",
    description:
      "Evidence-based equestrian therapy, TF-CBT, EMDR, and SAMHSA trauma-informed care — the clinical framework Saving Arrows uses to heal child survivors of trafficking.",
  },
};

const evidenceItems = [
  {
    title: "Trauma-Focused CBT (TF-CBT)",
    detail: (
      <>
        An evidence-based treatment model with strong clinical research support for children and adolescents with PTSD,
        depression, and behavioral issues resulting from trauma. Recommended by the{" "}
        <a
          href="https://www.samhsa.gov/resource/dbhis/trauma-focused-cognitive-behavioral-therapy-tf-cbt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]"
        >
          Substance Abuse and Mental Health Services Administration (SAMHSA)
        </a>
        .
      </>
    ),
  },
  {
    title: "EMDR",
    detail: (
      <>
        Eye Movement Desensitization and Reprocessing is a well-researched, structured therapy{" "}
        <a
          href="https://www.who.int/publications/i/item/guidelines-for-the-management-of-conditions-specifically-related-to-stress"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]"
        >
          recommended by the World Health Organization (WHO)
        </a>{" "}
        and multiple national clinical bodies for treatment of trauma and PTSD.
      </>
    ),
  },
  {
    title: "Somatic approaches",
    detail: (
      <>
        Body-centered therapies address the physiological dimensions of trauma — the nervous system dysregulation
        that verbal interventions alone cannot reach. Grounded in{" "}
        <a
          href="https://www.ncbi.nlm.nih.gov/books/NBK207191/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]"
        >
          peer-reviewed research on complex trauma
        </a>
        .
      </>
    ),
  },
  {
    title: "SAMHSA Trauma-Informed Care",
    detail: (
      <>
        Our program design adheres to{" "}
        <a
          href="https://store.samhsa.gov/product/samhsas-concept-of-trauma-and-guidance-for-a-trauma-informed-approach/sma14-4884"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]"
        >
          SAMHSA&rsquo;s six principles of trauma-informed care
        </a>
        : safety, trustworthiness, peer support, collaboration, empowerment, and cultural humility.
      </>
    ),
  },
  {
    title: "Equine-Assisted Psychotherapy (EAP)",
    detail: (
      <>
        Credentialed under standards established by the{" "}
        <a
          href="https://pathintl.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]"
        >
          Professional Association of Therapeutic Horsemanship International (PATH Intl.)
        </a>{" "}
        and the{" "}
        <a
          href="https://www.eagala.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]"
        >
          Equine-Assisted Growth and Learning Association (EAGALA)
        </a>
        .
      </>
    ),
  },
  {
    title: "Developmental trauma & ACEs research",
    detail: (
      <>
        Our clinical approach is informed by attachment theory, complex PTSD frameworks, and the{" "}
        <a
          href="https://www.cdc.gov/violenceprevention/aces/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]"
        >
          CDC&rsquo;s Adverse Childhood Experiences (ACEs) research
        </a>
        , which established the long-term developmental and health impacts of childhood trauma and exploitation.
      </>
    ),
  },
];

export default function Approach() {
  return (
    <>
      <PageSchema
        pageName="Our Approach"
        pageDescription="The evidence-based clinical framework behind Saving Arrows — equestrian therapy, TF-CBT, EMDR, somatic approaches, and SAMHSA trauma-informed care for child survivors of trafficking."
        pageUrl={`${siteUrl}/approach`}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2E6DA4] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Evidence-informed. Clinically grounded. Designed for the child survivor in front of us — and held to the
            standards that the field demands.
          </p>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="bg-[#E8F1F8] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-[#1B3A5C] leading-snug italic">
            &ldquo;Rescue without restoration is incomplete. Saving Arrows exists to make restoration real.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Why Equestrian Therapy */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80"
              alt="A child engaged in equestrian-assisted therapy, working alongside a horse in a structured outdoor setting for trauma recovery"
              className="rounded-2xl w-full object-cover h-72 shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">Why equestrian therapy for trafficking survivors?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Equestrian-assisted therapy is evidence-informed, meaning it is supported by a growing body of{" "}
                <a
                  href="https://pathintl.org/research/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]"
                >
                  peer-reviewed clinical research
                </a>{" "}
                demonstrating measurable outcomes in emotional regulation, PTSD symptom reduction, social functioning,
                and self-efficacy — particularly in adolescent and trauma populations.
              </p>
              <p>
                Horses are uniquely effective therapeutic partners for trafficking survivors because they respond to the
                nervous system, not the narrative. A child cannot intellectually perform safety with a horse — the horse
                mirrors actual emotional state, creating real-time biofeedback that even the most guarded child cannot
                easily override. This makes equine-assisted modalities particularly valuable for survivors where verbal
                processing is either inaccessible or counterproductive in early treatment stages.
              </p>
              <p>
                Equestrian therapy is also culturally and linguistically universal. It requires no fluency in English,
                no prior therapeutic relationship, and no verbal disclosure. This makes it an especially powerful
                entry point for children who have experienced exploitation in environments that targeted their
                vulnerability to language and authority.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/program"
                className="text-[#2E6DA4] font-semibold underline underline-offset-4 hover:text-[#1B3A5C] transition-colors"
              >
                See how equestrian therapy fits into the full program →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Base */}
      <section className="bg-[#E8F1F8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">Evidence-based grounding</h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            Every treatment modality used at Saving Arrows is grounded in peer-reviewed research and recognized
            clinical standards.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {evidenceItems.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-[#1B3A5C] font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Angle */}
      <section className="bg-[#1B3A5C] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Designed to produce standards that scale</h2>
          <p className="text-blue-200 leading-relaxed max-w-2xl mx-auto mb-4">
            The Saving Arrows program is designed with rigorous documentation and program evaluation built into its
            core. The outcomes we measure, the protocols we develop, and the data we collect are intended to contribute
            to the broader body of knowledge on equestrian-assisted trauma recovery for trafficking survivors.
          </p>
          <p className="text-blue-200 leading-relaxed max-w-2xl mx-auto mb-8">
            We believe that effective aftercare developed here has the potential to inform standards applicable in
            other contexts — and that is a responsibility we take seriously. What we build in Castle Rock, we build
            carefully.
          </p>
          <Link
            href="/partner"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Explore research partnership opportunities →
          </Link>
        </div>
      </section>
    </>
  );
}
