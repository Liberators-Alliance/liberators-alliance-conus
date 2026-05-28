"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/program", label: "Our Program" },
  { href: "/approach", label: "Our Approach" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/refer", label: "Refer a Child" },
  { href: "/partner", label: "Partner With Us" },
  { href: "/about", label: "About" },
  { href: "/donate", label: "Donate" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Saving Arrows logo" width={40} height={40} className="object-contain" />
            <div>
              <div className="text-[#1B3A5C] font-bold text-lg leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                Saving Arrows
              </div>
              <div className="text-[#2E6DA4] text-xs">A Liberators Alliance Program</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href === "/donate" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-[#F0A500] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#d4940a] transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#1B3A5C] text-sm font-medium hover:text-[#2E6DA4] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#1B3A5C]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.href === "/donate"
                    ? "bg-[#F0A500] text-white px-4 py-2 rounded-full text-sm font-semibold text-center"
                    : "text-[#1B3A5C] text-sm font-medium py-1"
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
