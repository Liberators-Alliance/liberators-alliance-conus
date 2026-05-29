import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Liberators Alliance & Saving Arrows | Castle Rock, CO",
  description:
    "Saving Arrows is a program of Liberators Alliance, an organization with over five years of operational history establishing clinical and programmatic frameworks for trauma-informed aftercare. National headquarters in Denver, Colorado.",
  alternates: { canonical: "https://conus.liberators-alliance.org/about" },
  openGraph: {
    title: "About Saving Arrows | Liberators Alliance",
    description:
      "The history, values, and organizational foundation behind Saving Arrows — a program of Liberators Alliance, headquartered in Denver, Colorado.",
    url: "https://conus.liberators-alliance.org/about",
  },
  twitter: {
    title: "About Saving Arrows | Liberators Alliance",
    description:
      "The history, values, and organizational foundation behind Saving Arrows — a program of Liberators Alliance, headquartered in Denver, Colorado.",
  },
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2E6DA4] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Saving Arrows</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A program rooted in operational experience, clinical credibility, and a long-term commitment to children
            who have survived the worst.
          </p>
        </div>
      </section>

      {/* Liberators Alliance */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
              alt="The Liberators Alliance organizational headquarters, reflecting five years of operational experience in trauma-informed aftercare"
              className="rounded-2xl w-full object-cover h-72 shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">Liberators Alliance</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Liberators Alliance is the parent organization behind Saving Arrows. Founded over five years ago,
                Liberators Alliance has spent that time building operational capacity, establishing clinical and
                organizational frameworks, and developing the knowledge base required to run a program at the
                intersection of trauma, exploitation, and healing.
              </p>
              <p>
                Liberators Alliance is establishing its national headquarters in Denver, Colorado, with Saving Arrows
                serving as its flagship domestic healing initiative. The CONUS program represents the organization&rsquo;s
                commitment to applying operational lessons learned toward building rigorous, lasting aftercare
                infrastructure in the United States.
              </p>
              <p>
                The organization operates with a long-term perspective. Every decision made at Saving Arrows — from
                clinical model to program evaluation to facility design — is made with durability and replicability in
                mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#E8F1F8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-10 text-center">What we stand for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Clinical rigor",
                detail:
                  "We hold ourselves to evidence-based standards. What we do must be grounded in what works, not what feels good.",
              },
              {
                title: "Child-centered practice",
                detail:
                  "Every protocol, relationship, and environment at Saving Arrows is designed around the needs and rights of the child — not the convenience of the system.",
              },
              {
                title: "Operational integrity",
                detail:
                  "We do what we say. We document what we do. We measure what matters. Organizational credibility is built in practice, not in statements.",
              },
              {
                title: "Long-term commitment",
                detail:
                  "Healing takes time. Organizational trust takes time. We are not here for a quick win — we are building something that will outlast us.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#1B3A5C] font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Denver / Colorado */}
      <section className="bg-[#1B3A5C] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Rooted in Colorado</h2>
          <p className="text-blue-200 leading-relaxed max-w-2xl mx-auto mb-4">
            Saving Arrows operates on a 40-acre farm in Castle Rock, Colorado, a setting chosen for its open land,
            accessibility, and distance from urban trauma environments. Liberators Alliance national headquarters is
            located in Denver, Colorado.
          </p>
          <p className="text-blue-200 leading-relaxed max-w-2xl mx-auto">
            Colorado represents both a strategic base for organizational operations and a community we are deeply
            committed to serving well.
          </p>
        </div>
      </section>
    </>
  );
}
