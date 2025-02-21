import { RecipeCardType } from "@/types/recipe";
import RecipeCard from "./RecipeCard";
import { getRecipes } from "@/services/getRecipes";

export default async function RecipeGrid({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const data = await getRecipes(searchParams);
  const recipes = data.results;
  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No recipes found. Try different search</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe: RecipeCardType) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
