import Link from "next/link";

const partners = [
  "K–12 schools and school counselors",
  "Foster care and child welfare agencies",
  "Juvenile courts and diversion programs",
  "Child advocacy centers",
  "Law enforcement victim services units",
  "Community-based advocacy organizations",
  "Hospital social work departments",
];

export default function WhoWeServe() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2E6DA4] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Children who deserve a different path forward</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Saving Arrows serves children who have experienced the most severe forms of childhood trauma — and who
            benefit from a program that meets them with clinical rigor and unconditional care.
          </p>
        </div>
      </section>

      {/* Who */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
              alt="Child in a healing outdoor environment"
              className="rounded-2xl w-full object-cover h-72 shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">Who we serve</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Saving Arrows serves children and adolescents under 18 who are survivors of trafficking, exploitation,
                or complex trauma. Participants may be in the process of recovery from a trafficking situation, entering
                care through diversion from the juvenile justice system, or referred by child welfare, educational, or
                clinical partners.
              </p>
              <p>
                Our program is designed for youth who benefit from intensive, trauma-informed alternatives to
                traditional intervention models — children who have not found adequate support in conventional settings,
                or who need a structured bridge between crisis stabilization and long-term community reintegration.
              </p>
              <p>
                The day program model means participants return home or to their placement each evening, maintaining
                connection to family, community, and existing support systems throughout the program. This continuity
                is an intentional feature — healing happens in relationship, not in isolation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day Program Model */}
      <section className="bg-[#E8F1F8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">The day program advantage</h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            Residential programs separate children from their communities. The Saving Arrows day program model keeps
            those relationships intact while providing intensive, clinical-grade care during program hours.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Continuity of relationship",
                detail:
                  "Participants stay connected to family, community, and existing support systems throughout treatment.",
              },
              {
                title: "Lower barrier to entry",
                detail:
                  "Day programming removes the disruption of residential placement, making participation more accessible.",
              },
              {
                title: "Real-world integration",
                detail:
                  "Skills and capacities developed in the program are applied and reinforced in daily life, not just in a controlled setting.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#1B3A5C] font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">Partners who refer to us</h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            We collaborate with professionals across systems who are working to connect children with appropriate care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {partners.map((p) => (
              <div key={p} className="flex items-center gap-3 bg-[#E8F1F8] rounded-xl px-5 py-4">
                <div className="w-2 h-2 rounded-full bg-[#2E6DA4] flex-shrink-0" />
                <span className="text-gray-700 text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral CTA */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2E6DA4] py-16 px-4 sm:px-6 lg:px-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to make a referral?</h2>
        <p className="text-blue-200 mb-6 max-w-xl mx-auto">
          Our intake team is available to discuss whether Saving Arrows is the right fit for a child in your care.
        </p>
        <Link
          href="/refer"
          className="inline-block bg-[#F0A500] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d4940a] transition-colors"
        >
          Start the Referral Process
        </Link>
      </section>
    </>
  );
}
