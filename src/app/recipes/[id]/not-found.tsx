import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Recipe Not Found</h2>
      <p className="text-muted-foreground mb-6">We couldn&apos;t find the recipe you&apos;re looking for.</p>
      <Button asChild>
        <Link href="/recipes">Back to Recipes</Link>
      </Button>
    </div>
  );
}
