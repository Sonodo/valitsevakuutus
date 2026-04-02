import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: 'sm' | 'md';
}

export default function StarRating({
  rating,
  max = 5,
  size = 'sm',
}: StarRatingProps) {
  // Normalize to 5-star scale
  const normalized = (rating / max) * 5;
  const fullStars = Math.floor(normalized);
  const hasHalf = normalized - fullStars >= 0.25;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const starSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-5 w-5';

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating}/${max}`}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          className={`${starSize} fill-amber text-amber`}
        />
      ))}
      {/* Half star */}
      {hasHalf && (
        <div className={`relative ${starSize}`}>
          <Star className={`absolute ${starSize} text-gray-300`} />
          <div className="absolute overflow-hidden" style={{ width: '50%' }}>
            <Star className={`${starSize} fill-amber text-amber`} />
          </div>
        </div>
      )}
      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star
          key={`empty-${i}`}
          className={`${starSize} text-gray-300`}
        />
      ))}
    </div>
  );
}
