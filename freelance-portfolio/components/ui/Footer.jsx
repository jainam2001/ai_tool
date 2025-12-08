// components/ui/Footer.jsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-neutral-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">JP</div>
            <div>
              <div className="font-semibold">Jainam Patel</div>
              <div className="text-sm text-gray-500">AI/ML • Web • Automation</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">Freelance developer building data driven apps and AI tools.</p>
        </div>

        <div className="flex gap-8">
          <div>
            <h4 className="font-medium">Site</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Social</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <h4 className="font-medium">Contact</h4>
          <div className="mt-3">Email: <a className="text-blue-600" href="mailto:you@example.com">you@example.com</a></div>
          <div className="mt-6 text-xs text-gray-400">© {year} Jainam Patel. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
