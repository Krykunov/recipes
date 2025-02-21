import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import RecipeGrid from "@/components/Recipes/RecipeGrid";
import SearchSummary from "@/components/SearchSummary";
import LoadingGrid from "@/components/Recipes/LoadingGrid";

export default async function RecipesPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Recipe Results</h1>

      <Suspense fallback={<Skeleton className="h-24 mb-6" />}>
        <SearchSummary searchParams={searchParams} />
      </Suspense>

      <Suspense fallback={<LoadingGrid />}>
        <RecipeGrid searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
