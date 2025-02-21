import RecipeCardSkeleton from "./RecipeCardSkeleton";

export default function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <RecipeCardSkeleton key={i} />
      ))}
    </div>
  );
}
