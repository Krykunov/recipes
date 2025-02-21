import { Clock, Users } from 'lucide-react';
import BackButton from '../BackButton';

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
      <BackButton text="Back to form" />
      <BackButton path="/recipes" text="Back to recipes" />

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
