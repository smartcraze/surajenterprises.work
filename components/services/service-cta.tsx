import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServiceCTA() {
  return (
    <div className="rounded-lg bg-muted/70 p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
      <p className="mb-6 mx-auto max-w-2xl">
        Contact us today to discuss your construction needs and learn how Suraj Enterprises can help bring your project to successful completion.
      </p>
      <Button asChild size="lg">
        <Link href="/contact">Get a Quote</Link>
      </Button>
    </div>
  );
}