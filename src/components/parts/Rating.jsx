import React from 'react';
import { Star, StarHalf, StarOff } from 'lucide-react';

const getLucideIcon = (value, index, precision) => {
  const diff = value - index;
  if (diff >= 1) return <Star className="text-yellow-400 fill-yellow-400" />;
  if (precision === 0.25) {
    if (diff >= 0.75)
      return <Star className="text-yellow-400 fill-yellow-400" />;
    if (diff >= 0.5)
      return <StarHalf className="text-yellow-400 fill-yellow-400" />;
    if (diff >= 0.25)
      return (
        <StarHalf className="text-yellow-400 fill-yellow-400 rotate-[45deg]" />
      );
  } else if (precision === 0.5) {
    if (diff >= 0.5)
      return <StarHalf className="text-yellow-400 fill-yellow-400" />;
  }
  return <StarOff className="text-yellow-400" />;
};

const RatingStar = ({ rating = 0, maxStars = 5, precision = 0.25 }) => {
  return (
    <div>
      <div className="flex space-x-1">
        {Array.from({ length: maxStars }, (_, i) => (
          <span key={i}>{getLucideIcon(rating, i, precision)}</span>
        ))}
      </div>
    </div>
  );
};

export default RatingStar;
