export default function Donate() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] via-[#2E6DA4] to-[#E8F1F8] text-white py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Give a child a future worth moving toward.
          </h1>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Children who have survived trafficking and trauma deserve more than survival. They deserve restoration —
            real, clinical, lasting healing. Your gift makes that possible.
          </p>
          <button className="bg-[#F0A500] text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-[#d4940a] transition-colors shadow-lg cursor-pointer">
            Donate Now
          </button>
          <p className="text-blue-300 text-sm mt-4">Secure donation processing coming soon. Check back shortly.</p>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-10 text-center">What your support funds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                label: "Clinical care",
                detail:
                  "Licensed therapists providing individualized, evidence-based mental health treatment to each participant.",
              },
              {
                label: "Equestrian programming",
                detail:
                  "The horses, facilities, certified practitioners, and safety infrastructure that make equestrian therapy possible.",
              },
              {
                label: "The healing environment",
                detail:
                  "Maintenance and operation of the 40-acre Castle Rock farm — the space that holds everything else.",
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-16 h-16 bg-[#E8F1F8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-4 h-4 rounded-full bg-[#2E6DA4]" />
                </div>
                <h3 className="text-[#1B3A5C] font-bold text-lg mb-2">{item.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional section */}
      <section className="bg-[#E8F1F8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80"
            alt="Open fields at the Castle Rock farm"
            className="rounded-2xl w-full object-cover h-64 shadow-md mb-10"
          />
          <h2 className="text-2xl font-bold text-[#1B3A5C] mb-4">
            Rescue is the beginning. Restoration is the work.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The children who come to Saving Arrows have already survived something most adults will never understand.
            What they need now is not pity or charity — it is clinical rigor, relational safety, and time. Time to
            heal. Time to become who they were always meant to be.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium">
            Your support makes that time possible.
          </p>
        </div>
      </section>

      {/* Share CTA */}
      <section className="bg-[#1B3A5C] text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Can&rsquo;t give today? Share the mission.</h2>
          <p className="text-blue-200 mb-6">
            The most powerful thing you can do is tell someone. Share Saving Arrows with someone who cares about
            children, about healing, about what restoration actually looks like.
          </p>
          <a
            href="mailto:?subject=Saving%20Arrows%20-%20A%20program%20worth%20knowing%20about&body=I%20wanted%20to%20share%20Saving%20Arrows%20with%20you%20-%20a%20trauma-informed%20day%20program%20for%20child%20survivors%20in%20Castle%20Rock%2C%20Colorado.%20https%3A%2F%2Fconus.liberators-alliance.org"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Share via Email
          </a>
        </div>
      </section>
    </>
  );
}
