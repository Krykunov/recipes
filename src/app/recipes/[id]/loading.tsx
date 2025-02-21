import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function LoadingRecipeDetails() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="ghost" disabled className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Recipes
        </Button>

        <Skeleton className="h-10 w-2/3 mb-4" />

        <div className="flex items-center gap-4 mb-6">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-24" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Skeleton className="aspect-video w-full rounded-lg mb-6" />

          <Card className="p-6">
            <Skeleton className="h-8 w-40 mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <Skeleton className="h-8 w-40 mb-4" />
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
