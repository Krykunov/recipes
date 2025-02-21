export default function SearchSummary({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const { query, cuisine, preparationTime } = searchParams;
  const hasFilters = query || cuisine || preparationTime;

  if (!hasFilters) return null;

  return (
    <div className="mb-6 text-muted-foreground">
      <h2 className="text-lg font-medium text-foreground">Search Results for:</h2>
      <ul className="mt-2 space-y-1">
        {query && <li>• Name: {query}</li>}
        {cuisine && <li>• Cuisine: {cuisine}</li>}
        {preparationTime && <li>• Maximum prep time: {preparationTime} minutes</li>}
      </ul>
    </div>
  );
}
