import { SearchResponse } from "@/types/form";

export async function getRecipes(searchParams: { [key: string]: string | undefined }) {
  const { query, cuisine, preparationTime } = await searchParams;

  const params = new URLSearchParams();
  if (query) params.append("query", query);
  if (cuisine) params.append("cuisine", cuisine);
  if (preparationTime) params.append("preparationTime", preparationTime);
  params.append("apiKey", process.env.SPOONACULAR_API_KEY!);

  const url = `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch recipes");
    }

    return res.json() as Promise<SearchResponse>;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
}
