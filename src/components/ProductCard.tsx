import React from "react";
import { StarIcon } from "../assets/icons/starIcon";

export const ProductCard = (): JSX.Element => {
  return (
    <a className="product-card">
      <div className="product-card__header">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          width={200}
        />
        <div className="product-card__rating">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
    </a>
  );
};
