"use client";


// components/ui/MobileMenu.jsx
import Link from "next/link";
import { useEffect } from "react";

export default function MobileMenu({ open, setOpen }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <div
      className={`md:hidden fixed inset-x-0 top-16 z-50 transform transition-all ${
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="max-w-3xl mx-auto bg-white/95 dark:bg-black/90 rounded-lg shadow-lg p-6 ring-1 ring-gray-200">
        <ul className="flex flex-col gap-4">
          <li><Link href="/#services" onClick={() => setOpen(false)} className="block text-lg font-medium">Services</Link></li>
          <li><Link href="/projects" onClick={() => setOpen(false)} className="block text-lg font-medium">Projects</Link></li>
          <li><Link href="/blog" onClick={() => setOpen(false)} className="block text-lg font-medium">Blog</Link></li>
          <li><Link href="/#about" onClick={() => setOpen(false)} className="block text-lg font-medium">About</Link></li>
          <li><Link href="/contact" onClick={() => setOpen(false)} className="block text-lg font-medium">Contact</Link></li>
        </ul>
        <div className="mt-6">
          <Link href="/contact" onClick={() => setOpen(false)} className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md">
            Hire me
          </Link>
        </div>
      </div>
    </div>
  );
}
