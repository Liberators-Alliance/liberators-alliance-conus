import type { Metadata } from "next";
import PageSchema from "../components/PageSchema";

const siteUrl = "https://conus.liberators-alliance.org";

export const metadata: Metadata = {
  title: "Refer a Child | Caseworker & Professional Referrals | Saving Arrows",
  description:
    "Caseworkers, school counselors, judges, and child welfare professionals: learn how to refer a child to the Saving Arrows day program. Three-step process, eligibility criteria, and intake contact information.",
  alternates: { canonical: "https://conus.liberators-alliance.org/refer" },
  openGraph: {
    title: "Refer a Child | Saving Arrows",
    description:
      "For caseworkers, counselors, and child welfare professionals. Learn how to refer a child survivor to the Saving Arrows day program — three steps, confidential intake.",
    url: "https://conus.liberators-alliance.org/refer",
  },
  twitter: {
    title: "Refer a Child | Saving Arrows",
    description:
      "For caseworkers, counselors, and child welfare professionals. Learn how to refer a child survivor to the Saving Arrows day program — three steps, confidential intake.",
  },
};

const steps = [
  {
    number: "01",
    title: "Reach out",
    detail:
      "Contact our team at contactus@liberators-alliance.org with the subject line \"Referral Inquiry.\" Include a brief description of the child's situation and your role. We respond within two business days.",
  },
  {
    number: "02",
    title: "Intake conversation",
    detail:
      "A member of our clinical and intake team will schedule a confidential conversation with you to better understand the child's needs, current situation, and what an appropriate care plan would look like.",
  },
  {
    number: "03",
    title: "Program enrollment",
    detail:
      "If Saving Arrows is the right fit, we coordinate directly with you, the child, and appropriate support systems to facilitate enrollment, establish consent and communication protocols, and begin the onboarding process.",
  },
];

export default function Refer() {
  return (
    <>
      <PageSchema
        pageName="Refer a Child"
        pageDescription="Three-step referral process for caseworkers, school counselors, judges, and child welfare professionals connecting child survivors of trafficking and trauma to the Saving Arrows program."
        pageUrl={`${siteUrl}/refer`}
      />
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2E6DA4] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refer a Child</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We partner with schools, courts, foster care systems, and community advocates to connect children with the
            care they need. If you work with a child who may benefit from Saving Arrows, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Who to Refer */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6 text-center">Who is an appropriate referral?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Children and adolescents under 18 years of age",
              "Survivors of trafficking, sexual exploitation, or commercial exploitation",
              "Youth with complex trauma histories, including repeated or prolonged trauma",
              "Children in foster care, juvenile diversion, or involved in the child welfare system",
              "Youth who have not found adequate support in traditional therapeutic settings",
              "Children who are stable enough to participate in a structured day program",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-[#E8F1F8] rounded-xl p-5">
                <div className="w-2 h-2 rounded-full bg-[#2E6DA4] flex-shrink-0 mt-1.5" />
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Process */}
      <section className="bg-[#E8F1F8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-10 text-center">The referral process</h2>
          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="text-4xl font-bold text-[#2E6DA4] opacity-40 flex-shrink-0 w-12">{step.number}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4">Ready to begin?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our intake team is experienced in working with caseworkers, school counselors, juvenile court officers, and
            child welfare professionals. Every conversation is confidential and judgment-free.
          </p>
          <a
            href="mailto:contactus@liberators-alliance.org?subject=Referral%20Inquiry"
            className="inline-block bg-[#2E6DA4] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1B3A5C] transition-colors"
          >
            Email Us: Referral Inquiry
          </a>
          <p className="text-gray-400 text-sm mt-4">contactus@liberators-alliance.org</p>
        </div>
      </section>
    </>
  );
}
