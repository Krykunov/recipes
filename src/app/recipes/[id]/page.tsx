/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getSingleRecipe } from '@/services/getSingleRecipe';
import IngredientsList from '@/components/Recipes/IngredientsList';
import RecipeHeader from '@/components/Recipes/RecipeHeader';
import RecipeImage from '@/components/Recipes/RecipeImage';
import RecipeSummary from '@/components/Recipes/RecipeSummary';

export default async function RecipeDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const recipe = await getSingleRecipe(params.id);

    return (
      <div className="container mx-auto py-8 px-4">
        <Suspense
          fallback={
            <div className="mb-6">
              <Skeleton className="h-10 w-40 mb-4" />
              <Skeleton className="h-8 w-2/3 mb-4" />
              <Skeleton className="h-6 w-48" />
            </div>
          }
        >
          <RecipeHeader
            title={recipe.title}
            readyInMinutes={recipe.readyInMinutes}
            servings={recipe.servings}
          />
        </Suspense>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Suspense
              fallback={
                <Skeleton className="aspect-video w-full rounded-lg mb-6" />
              }
            >
              <RecipeImage src={recipe.image} alt={recipe.title} />
            </Suspense>

            <Suspense
              fallback={
                <Card className="p-6">
                  <Skeleton className="h-8 w-40 mb-4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                </Card>
              }
            >
              <RecipeSummary summary={recipe.summary} />
            </Suspense>
          </div>

          <Suspense
            fallback={
              <Card className="p-6">
                <Skeleton className="h-8 w-40 mb-4" />
                <div className="space-y-3">
                  {[...Array(8)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              </Card>
            }
          >
            <IngredientsList ingredients={recipe.extendedIngredients} />
          </Suspense>
        </div>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}
