import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Saving Arrows | Restoring direction. Rebuilding futures.",
  description:
    "Saving Arrows is a structured day program providing equestrian therapy, trauma-informed care, and clinical treatment for children under 18 who have survived trafficking and trauma. Based on a 40-acre farm in Castle Rock, Colorado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#1a1a2e]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
