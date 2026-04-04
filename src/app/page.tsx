import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">Qixel</h1>
        <p className="text-gray-600 mt-2">Copy-paste animated React components.</p>
        <div className="mt-6">
          <Link
            href="/components"
            className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Browse Components
          </Link>
        </div>
      </div>
    </div>
  );
}