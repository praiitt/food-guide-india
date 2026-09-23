export default function RatingStars({ rating, count }: { rating: number; count?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex text-saffron-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < Math.round(rating) ? "opacity-100" : "opacity-25"}>
            ★
          </span>
        ))}
      </div>
      <span className="text-sm font-medium text-spice-700">{rating.toFixed(1)}</span>
      {count !== undefined && (
        <span className="text-xs text-spice-500">({count} reviews)</span>
      )}
    </div>
  );
}
