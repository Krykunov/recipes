import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">No Recipes Found</h2>
      <p className="text-muted-foreground mb-6">We couldn&apos;t find any recipes matching your search criteria.</p>
      <Button asChild>
        <Link href="/">Try Another Search</Link>
      </Button>
    </div>
  );
}
