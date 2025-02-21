import { Recipe } from "@/types/recipe";
import { Card } from "../ui/card";

export default function IngredientsList({ ingredients }: { ingredients: Recipe["extendedIngredients"] }) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
      <ul className="space-y-2">
        {ingredients.map((ingredient) => (
          <li key={ingredient.id} className="flex items-start">
            <span className="font-medium mr-2">•</span>
            <span>{ingredient.original}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
