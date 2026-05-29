import type { Metadata } from "next";
import Link from "next/link";
import PageSchema from "../components/PageSchema";

const siteUrl = "https://conus.liberators-alliance.org";

export const metadata: Metadata = {
  title: "Donate | Fight Child Trafficking | Support Survivor Healing | Saving Arrows",
  description:
    "Donate to Saving Arrows and directly fight child trafficking. Your gift funds equestrian therapy, licensed clinical treatment, and the 40-acre healing environment that restores child survivors of trafficking and trauma in Castle Rock, Colorado.",
  alternates: { canonical: `${siteUrl}/donate` },
  openGraph: {
    title: "Donate to Fight Child Trafficking | Saving Arrows",
    description:
      "Your donation fights trafficking by funding real healing — equestrian therapy and clinical treatment for child survivors. Give today and help restore a child's future.",
    url: `${siteUrl}/donate`,
  },
  twitter: {
    title: "Donate to Fight Child Trafficking | Saving Arrows",
    description:
      "Fight trafficking with your donation. Fund equestrian therapy and clinical healing for child survivors at Saving Arrows — Castle Rock, Colorado.",
  },
};

const impactItems = [
  {
    label: "Equestrian therapy programming",
    detail:
      "Horses, facilities, certified practitioners, and safety infrastructure — the foundation of our evidence-informed approach to healing trafficking trauma.",
    icon: "🐴",
  },
  {
    label: "Licensed clinical treatment",
    detail:
      "TF-CBT, EMDR, somatic therapy, and individualized mental health care provided by licensed clinicians for each child survivor.",
    icon: "🧠",
  },
  {
    label: "The healing environment",
    detail:
      "40 acres of purposefully designed space in Castle Rock, Colorado — the land itself is part of the therapeutic experience.",
    icon: "🌿",
  },
];

const waysToGive = [
  {
    title: "One-time gift",
    description: "A direct donation at any amount funds the clinical care and equestrian programming that restores child survivors of trafficking.",
  },
  {
    title: "Recurring monthly giving",
    description: "Monthly donors make sustained restoration possible — ensuring every child who enters the program has the time they need to heal.",
  },
  {
    title: "Donate in honor or memory",
    description: "Honor someone who cares deeply about children, justice, or healing by directing a gift to Saving Arrows in their name.",
  },
  {
    title: "Corporate or foundation giving",
    description: "We welcome gifts from foundations and corporations aligned with child welfare, anti-trafficking, mental health, or equine-assisted therapy.",
  },
];

const donateActionSchema = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  name: "Donate to Saving Arrows — Anti-Trafficking Nonprofit",
  description:
    "Support Saving Arrows, an anti-trafficking nonprofit providing healing for child survivors of trafficking and trauma through equestrian therapy and clinical treatment.",
  recipient: {
    "@id": `${siteUrl}/#organization`,
  },
};

export default function Donate() {
  return (
    <>
      <PageSchema
        pageName="Donate to Saving Arrows"
        pageDescription="Donate to Saving Arrows and fight child trafficking. Your gift funds equestrian therapy and licensed clinical treatment for child survivors in Castle Rock, Colorado."
        pageUrl={`${siteUrl}/donate`}
        additionalSchemas={[donateActionSchema]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] via-[#2E6DA4] to-[#E8F1F8] text-white py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#F0A500] font-semibold text-sm uppercase tracking-widest mb-4">
            Fight trafficking. Fund healing.
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Give a child a future worth moving toward.
          </h1>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Children who have survived trafficking and exploitation deserve more than survival. They deserve
            restoration — real, clinical, lasting healing. Your donation to Saving Arrows makes that possible.
          </p>
          <button className="bg-[#F0A500] text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-[#d4940a] transition-colors shadow-lg cursor-pointer">
            Donate Now
          </button>
          <p className="text-blue-300 text-sm mt-4">Secure donation processing coming soon. Check back shortly.</p>
        </div>
      </section>

      {/* Why Saving Arrows */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1B3A5C] mb-4">Why Saving Arrows?</h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Most anti-trafficking efforts focus on rescue and law enforcement. Saving Arrows exists for what comes
            next. We are a <strong>clinically rigorous, evidence-based anti-trafficking organization</strong> built
            around the belief that rescue without restoration is incomplete. Our{" "}
            <Link href="/program" className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]">
              three-pillar program
            </Link>{" "}
            — equestrian therapy, trauma-informed care, and licensed clinical treatment — gives child survivors of
            trafficking a real path forward.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4 text-center">What your donation funds</h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            100% of program donations support direct services for child survivors of trafficking and trauma.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {impactItems.map((item) => (
              <div key={item.label} className="text-center bg-[#E8F1F8] rounded-2xl p-8">
                <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="text-[#1B3A5C] font-bold text-lg mb-2">{item.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional / mission section */}
      <section className="bg-[#E8F1F8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80"
            alt="Open fields at the Saving Arrows farm in Castle Rock, Colorado — a restorative landscape for child survivors of trafficking"
            className="rounded-2xl w-full object-cover h-64 shadow-md mb-10"
          />
          <h2 className="text-2xl font-bold text-[#1B3A5C] mb-4">
            Rescue is the beginning. Restoration is the work.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The children who come to Saving Arrows have already survived something most adults will never understand.
            They have been exploited, trafficked, and had their sense of safety and self systematically dismantled.
            What they need now is not pity — it is clinical rigor, relational safety, and time. Time to
            heal. Time to become who they were always meant to be.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            When you give to Saving Arrows, you are not writing a check to a cause. You are funding a specific child's
            specific healing — the{" "}
            <Link href="/approach" className="text-[#2E6DA4] underline underline-offset-2 hover:text-[#1B3A5C]">
              equestrian therapy session
            </Link>
            {" "}that breaks through a wall of silence, the clinical session that puts language to what happened, the
            morning on the farm that feels like the first safe place they have ever been.
          </p>
          <p className="text-gray-700 font-semibold">
            Your support makes that time — and that space — possible.
          </p>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-10 text-center">Ways to give</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {waysToGive.map((way) => (
              <div key={way.title} className="border border-gray-200 rounded-2xl p-6 hover:border-[#2E6DA4] hover:shadow-sm transition-all">
                <h3 className="text-[#1B3A5C] font-bold text-lg mb-2">{way.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{way.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">
              For corporate giving or foundation inquiries, contact us at{" "}
              <a href="mailto:contactus@liberators-alliance.org?subject=Donation%20Inquiry" className="text-[#2E6DA4] hover:text-[#1B3A5C]">
                contactus@liberators-alliance.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Share CTA */}
      <section className="bg-[#1B3A5C] text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Can&rsquo;t give today? Share the mission.</h2>
          <p className="text-blue-200 mb-8">
            The most powerful thing you can do is tell someone. Awareness is how anti-trafficking organizations
            grow. Share Saving Arrows with someone who cares about children, about justice, or about what fighting
            trafficking actually looks like after the rescue.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:?subject=Saving%20Arrows%20%E2%80%94%20An%20anti-trafficking%20nonprofit%20worth%20knowing&body=I%20wanted%20to%20share%20Saving%20Arrows%20with%20you%20%E2%80%94%20an%20anti-trafficking%20nonprofit%20providing%20equestrian%20therapy%20and%20clinical%20healing%20for%20child%20survivors%20of%20trafficking%20in%20Castle%20Rock%2C%20Colorado.%0A%0Ahttps%3A%2F%2Fconus.liberators-alliance.org"
              className="inline-block border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Share via Email
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=Fighting%20child%20trafficking%20means%20funding%20real%20healing.%20Saving%20Arrows%20provides%20equestrian%20therapy%20%26%20clinical%20care%20for%20child%20survivors.%20Worth%20knowing%20about.&url=https%3A%2F%2Fconus.liberators-alliance.org`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1DA1F2] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#1a91da] transition-colors"
            >
              Share on X / Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fconus.liberators-alliance.org%2Fdonate`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1877F2] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#166fe5] transition-colors"
            >
              Share on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
