import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "./Rating";

export const ProductCard = ({
  name,
  price,
  rate,
  image,
  id,
  reduction,
}: TProduct): JSX.Element => {
  return (
    <Link className="product-card" key={id} to={"/"}>
      <div className="product-card__header">
        <img src={image} className="product-card__image" alt="Product" />
        <div className="product-card__rating">
          <Rating rate={rate} />
        </div>
        {reduction && <span className="product-card__reduction">-7%</span>}
      </div>
      <div className="product-card__content">
        <p className="product-card__name" title={name}>
          {name}
        </p>
        <span className="product-card__price">{price} €</span>
      </div>
    </Link>
  );
};
