// components/sections/Hero.jsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              I build AI-driven apps & production-ready web products.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Freelance engineer specializing in AI/ML, generative AI, web development, and automation. I help startups and businesses turn ideas into reliable software.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                Work with me
              </Link>
              <Link href="/projects" className="inline-block px-5 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                See projects
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div>
                <div className="text-xs text-gray-500">Featured</div>
                <div className="font-semibold">Chatbot demo</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Skills</div>
                <div className="font-semibold">AI/ML • GenAI • Web • Java</div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-6 shadow-xl">
              {/* Replace with hero image or demo component */}
              <div className="h-64 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-xl font-semibold">Interactive demo</div>
                  <div className="mt-3 text-sm">Chatbot & blog preview will appear here.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
