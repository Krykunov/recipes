import { Card } from '../ui/card';

export default function RecipeSummary({ summary }: { summary: string }) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">About this Recipe</h2>
      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: summary }}
      />
    </Card>
  );
}
