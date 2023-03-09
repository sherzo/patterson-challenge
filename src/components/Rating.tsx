import React, { useEffect, useState } from "react";
import { StarIcon } from "../assets/icons/starIcon";

type TRating = { rate: number };

export const Rating = ({ rate }: TRating): JSX.Element => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const integerNumber = Math.round(rate);
    setStars(Array.from(Array(integerNumber).keys()));
  }, [rate]);

  return (
    <div className="rating">
      {stars.map((i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
};
