"use client";

// components/ui/Navbar.jsx
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-40 transition-colors backdrop-blur-md ${
        scrolled ? "bg-white/70 dark:bg-black/60 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                JP
              </div>
              <div className="hidden sm:block">
                <span className="font-semibold">Jainam Patel</span>
                <div className="text-xs text-gray-500">AI / Web / Dev</div>
              </div>
            </Link>
          </div>

          {/* Center: Links (desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink href="/#services">Services</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Right: CTA + Mobile button */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-block px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Hire me
            </Link>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu (slides in) */}
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
    >
      {children}
    </Link>
  );
}
