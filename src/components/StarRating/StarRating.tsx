import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStarCount = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 >= 1;

  return (
    <div data-testid="star-container">
      {[...Array(fullStarCount)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {hasHalfStar ? <FaStarHalf data-testid="half-star" /> : null}
    </div>
  );
};

export default StarRating;
