import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";

export default function RecipeImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-lg overflow-hidden mb-6">
      <Suspense fallback={<Skeleton className="aspect-video w-full" />}>
        <Image width="50" height="60" src={src || "/placeholder.svg"} alt={alt} className="w-full h-auto" />
      </Suspense>
    </div>
  );
}
