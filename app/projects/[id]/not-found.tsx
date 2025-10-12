import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ProjectNotFound() {
  return (
    <>
      <Header />
      <main className="px-4 w-full max-w-[1400px] mx-auto py-24 md:py-32 flex items-center justify-center">
        <div className="mx-auto max-w-lg text-center space-y-8">
          <div className="bg-muted inline-flex items-center justify-center p-8 rounded-full mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-12 text-muted-foreground"
            >
              <path d="m9.88 9.88-6.59 6.59a2 2 0 0 0 0 2.83l.7.7a2 2 0 0 0 2.83 0l6.59-6.59" />
              <path d="m15.94 15.94 6.59 6.59a2 2 0 0 1 0 2.83l-.7.7a2 2 0 0 1-2.83 0l-6.59-6.59" />
              <path d="M22 14v-3a9 9 0 0 0-9-9h-3" />
              <path d="m16 16 6 6" />
            </svg>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Project Not Found</h1>
            <p className="text-muted-foreground text-lg">
              We couldn't find the project you were looking for. It might have been removed or you may have followed a broken link.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/projects">Browse All Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}