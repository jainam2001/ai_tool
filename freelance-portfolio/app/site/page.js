// app/page.js
import Hero from "../components/sections/Hero";

export default function Page() {
  return (
    <>
      <Hero />
      <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* placeholder for service cards */}
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">AI / ML / GenAI</div>
          <div className="p-6 border rounded-lg">Web Development</div>
          <div className="p-6 border rounded-lg">Automation & DevOps</div>
        </div>
      </section>
    </>
  );
}
