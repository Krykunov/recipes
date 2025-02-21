import { RecipeForm } from "@/components/RecipeForm/RecipeForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <RecipeForm />
      </main>
    </div>
  );
}
