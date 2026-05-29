import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Saving Arrows | Castle Rock, CO",
  description:
    "Contact Saving Arrows for general inquiries, referral inquiries, or partnership opportunities. Email contactus@liberators-alliance.org. Located in Castle Rock, Colorado.",
  alternates: { canonical: "https://conus.liberators-alliance.org/contact" },
  openGraph: {
    title: "Contact Us | Saving Arrows",
    description:
      "Reach the Saving Arrows team for general questions, child referrals, or partnership inquiries. Based in Castle Rock, Colorado.",
    url: "https://conus.liberators-alliance.org/contact",
  },
  twitter: {
    title: "Contact Us | Saving Arrows",
    description:
      "Reach the Saving Arrows team for general questions, child referrals, or partnership inquiries. Based in Castle Rock, Colorado.",
  },
};

const inquiries = [
  {
    type: "General Inquiry",
    subject: "General%20Inquiry",
    description: "Questions about Saving Arrows, our program, or Liberators Alliance.",
  },
  {
    type: "Referral Inquiry",
    subject: "Referral%20Inquiry",
    description: "For caseworkers, counselors, and advocates looking to refer a child to our program.",
  },
  {
    type: "Partnership Inquiry",
    subject: "Partnership%20Inquiry",
    description: "For clinicians, organizations, and researchers interested in collaboration.",
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2E6DA4] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We welcome questions from families, professionals, partners, and supporters. Reach out — we respond to
            every message.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">How can we help?</h2>
          <p className="text-gray-600 text-center mb-10">
            Select the type of inquiry below to send a pre-addressed email to our team.
          </p>
          <div className="flex flex-col gap-6">
            {inquiries.map((inq) => (
              <div key={inq.type} className="bg-[#E8F1F8] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-[#1B3A5C] font-bold text-lg mb-1">{inq.type}</h3>
                  <p className="text-gray-600 text-sm">{inq.description}</p>
                </div>
                <a
                  href={`mailto:contactus@liberators-alliance.org?subject=${inq.subject}`}
                  className="inline-block bg-[#2E6DA4] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#1B3A5C] transition-colors flex-shrink-0"
                >
                  Send Email
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location + email */}
      <section className="bg-[#E8F1F8] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1B3A5C] mb-6">Our information</h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <div>
              <div className="text-[#2E6DA4] font-semibold text-sm mb-1">Location</div>
              <div className="text-gray-700">Castle Rock, Colorado</div>
            </div>
            <div>
              <div className="text-[#2E6DA4] font-semibold text-sm mb-1">Email</div>
              <a
                href="mailto:contactus@liberators-alliance.org"
                className="text-[#1B3A5C] hover:text-[#2E6DA4] transition-colors"
              >
                contactus@liberators-alliance.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
