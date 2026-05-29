import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Saving Arrows logo" width={36} height={36} className="object-contain" />
              <div>
                <div className="font-bold text-lg leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                  Saving Arrows
                </div>
                <div className="text-blue-300 text-xs">A Liberators Alliance Program</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm italic">Restoring direction. Rebuilding futures.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Navigate</h4>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[
                { href: "/program", label: "Our Program" },
                { href: "/approach", label: "Our Approach" },
                { href: "/who-we-serve", label: "Who We Serve" },
                { href: "/refer", label: "Refer a Child" },
                { href: "/partner", label: "Partner With Us" },
                { href: "/about", label: "About" },
                { href: "/donate", label: "Donate" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-blue-200 text-sm hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Contact</h4>
            <p className="text-blue-200 text-sm mb-2">Castle Rock, Colorado</p>
            <a
              href="mailto:contactus@liberators-alliance.org"
              className="text-blue-200 text-sm hover:text-white transition-colors"
            >
              contactus@liberators-alliance.org
            </a>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-400 text-xs">
          © {new Date().getFullYear()} Liberators Alliance. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
