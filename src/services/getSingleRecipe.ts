import { Recipe } from '@/types/recipe';

export async function getSingleRecipe(id: string) {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      throw new Error('Failed to fetch recipe details');
    }

    return res.json() as Promise<Recipe>;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
}
