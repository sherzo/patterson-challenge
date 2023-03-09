import React, { useEffect, useState } from "react";
import { StarIcon } from "../assets/icons/starIcon";

type TRating = { value: number };

export const Rating = ({ value }: TRating): JSX.Element => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const integerNumber = Math.round(value);
    setStars(Array.from(Array(integerNumber).keys()));
  }, [value]);

  return (
    <div className="rating">
      {stars.map((i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
};
