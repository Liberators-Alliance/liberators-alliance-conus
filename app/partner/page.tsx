import type { Metadata } from "next";
import PageSchema from "../components/PageSchema";

const siteUrl = "https://conus.liberators-alliance.org";

export const metadata: Metadata = {
  title: "Partner With Us | Clinical & Community Partnerships | Saving Arrows",
  description:
    "Saving Arrows partners with licensed clinicians, equine-assisted therapy practitioners, community organizations, and academic researchers. Learn about clinical collaboration, referral relationships, and research participation.",
  alternates: { canonical: "https://conus.liberators-alliance.org/partner" },
  openGraph: {
    title: "Partner With Us | Saving Arrows",
    description:
      "Clinical collaboration, referral partnerships, and research participation opportunities for therapists, practitioners, and organizations aligned with trauma-informed healing.",
    url: "https://conus.liberators-alliance.org/partner",
  },
  twitter: {
    title: "Partner With Us | Saving Arrows",
    description:
      "Clinical collaboration, referral partnerships, and research participation opportunities for therapists, practitioners, and organizations aligned with trauma-informed healing.",
  },
};

const partnerTypes = [
  {
    title: "Clinical Partners",
    description:
      "We collaborate with licensed therapists, psychologists, and clinical social workers who share our commitment to evidence-based, trauma-informed care. Clinical collaboration may include co-treatment, consultation, and cross-referral.",
  },
  {
    title: "Equine-Assisted Therapy Practitioners",
    description:
      "We welcome partnerships with certified equine-assisted psychotherapy and learning practitioners. If you hold relevant credentials and share our therapeutic approach, we want to explore what working together could look like.",
  },
  {
    title: "Community Organizations",
    description:
      "Advocacy organizations, survivor support networks, community health organizations, and nonprofits serving similar populations are valued partners. We believe the ecosystem matters — no program should work in isolation.",
  },
  {
    title: "Research Collaborators",
    description:
      "Saving Arrows is designed with data collection and program evaluation in mind. We welcome partnerships with academic institutions and researchers whose work aligns with equestrian-assisted therapy, trauma recovery, and program efficacy.",
  },
];

export default function Partner() {
  return (
    <>
      <PageSchema
        pageName="Partner With Us"
        pageDescription="Partnership opportunities for licensed clinicians, equine-assisted therapy practitioners, community organizations, and researchers aligned with anti-trafficking and trauma-informed healing."
        pageUrl={`${siteUrl}/partner`}
      />
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2E6DA4] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner With Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Saving Arrows is strengthened by a network of clinical, equestrian, and community partners who share our
            commitment to evidence-based healing for children. We are actively building those relationships.
          </p>
        </div>
      </section>

      {/* Partner Types */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-10 text-center">Partnership opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((pt) => (
              <div key={pt.title} className="bg-[#E8F1F8] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#1B3A5C] mb-3">{pt.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{pt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Partnership Looks Like */}
      <section className="bg-[#E8F1F8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6 text-center">What we&rsquo;re building together</h2>
          <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            We approach partnership as an ongoing, reciprocal relationship — not a transactional referral arrangement.
            Partnership with Saving Arrows may include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Clinical collaboration", detail: "Shared case consultation, co-treatment coordination, and clinical review processes." },
              { title: "Referral relationships", detail: "Formalized referral pathways and communication protocols for the children we share care for." },
              { title: "Research participation", detail: "Collaborative data collection, program evaluation, and publication of outcomes." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-[#1B3A5C] font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#1B3A5C] text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let&rsquo;s start the conversation</h2>
          <p className="text-blue-200 mb-6 leading-relaxed">
            Whether you&rsquo;re a clinician, a program director, or a researcher, we&rsquo;d welcome the chance to
            explore what working together could look like.
          </p>
          <a
            href="mailto:contactus@liberators-alliance.org?subject=Partnership%20Inquiry"
            className="inline-block bg-[#F0A500] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#d4940a] transition-colors"
          >
            Email Us: Partnership Inquiry
          </a>
          <p className="text-blue-400 text-sm mt-4">contactus@liberators-alliance.org</p>
        </div>
      </section>
    </>
  );
}
