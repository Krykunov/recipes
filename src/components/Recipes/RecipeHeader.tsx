import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft, Clock, Users } from "lucide-react";

export default function RecipeHeader({
  title,
  readyInMinutes,
  servings,
}: {
  title: string;
  readyInMinutes: number;
  servings: number;
}) {
  return (
    <div className="mb-6">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/recipes" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Recipes
        </Link>
      </Button>

      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <div className="flex items-center gap-4 text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{readyInMinutes} minutes</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          <span>{servings} servings</span>
        </div>
      </div>
    </div>
  );
}
