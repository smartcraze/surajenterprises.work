import Link from "next/link";
import { BottomImage } from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-800 via-slate-900 to-black text-gray-400 px-4 pt-20">
      <h1 className="text-7xl text-center relative font-extrabold text-white mb-6">404</h1>
      <p className="text-xl sm:text-2xl font-semibold mb-4 max-w-md text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="mb-8 text-gray-400 max-w-md text-center">
        Maybe the URL is wrong or the page has been moved.
      </p>

      <Link href="/">
        <button className="inline-block px-6 py-3 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors duration-300">
          Go Back Home
        </button>
      </Link>

      <BottomImage />

      <footer className="mt-20 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Suraj Enterprises. All rights reserved.
      </footer>
    </main>
  );
}
