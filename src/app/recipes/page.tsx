import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import RecipeGrid from '@/components/Recipes/RecipeGrid';
import SearchSummary from '@/components/SearchSummary';
import LoadingGrid from '@/components/Recipes/LoadingGrid';
import BackButton from '@/components/BackButton';

type Params = Promise<{ [key: string]: string | undefined }>;

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Params;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Recipe Results</h1>
      <BackButton text="Back to form" />

      <Suspense fallback={<Skeleton className="h-24 mb-6" />}>
        <SearchSummary searchParams={resolvedSearchParams} />
      </Suspense>

      <Suspense fallback={<LoadingGrid />}>
        <RecipeGrid searchParams={resolvedSearchParams} />
      </Suspense>
    </div>
  );
}
