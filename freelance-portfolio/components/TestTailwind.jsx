// components/TestTailwind.jsx
export default function TestTailwind() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold text-brand-500">Tailwind Working ✅</h1>
      <p className="mt-4 text-gray-600">If this text appears and the header is colored, Tailwind is working.</p>
      <button className="mt-6 inline-block px-4 py-2 bg-brand-500 text-white rounded-lg hover:opacity-90">
        Sample Button
      </button>
    </div>
  );
}
