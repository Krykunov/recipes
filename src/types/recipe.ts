export interface RecipeCardType {
  id: number;
  title: string;
  image: string;
}

export interface SearchResponse {
  results: RecipeCardType[];
  totalResults: number;
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  summary: string;
  extendedIngredients: {
    id: number;
    original: string;
    amount: number;
    unit: string;
    name: string;
  }[];
}
