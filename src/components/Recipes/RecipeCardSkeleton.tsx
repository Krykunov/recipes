import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function RecipeCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <CardContent className="p-4">
        <Skeleton className="h-6 w-full" />
      </CardContent>
    </Card>
  );
}
