import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import { RecipeCardType } from "@/types/recipe";

export default function RecipeCard({ recipe }: { recipe: RecipeCardType }) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="aspect-video relative">
          <Suspense fallback={<Skeleton className="w-full h-full" />}>
            <Image
              width={300}
              height={200}
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              className="object-cover w-full h-full"
            />
          </Suspense>
        </div>
        <CardContent className="p-4">
          <h2 className="font-semibold text-lg line-clamp-2">{recipe.title}</h2>
        </CardContent>
      </Card>
    </Link>
  );
}
