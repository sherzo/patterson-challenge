import React from "react";
import { Rating } from "./Rating";

export const ProductCard = (): JSX.Element => {
  return (
    <a className="product-card">
      <div className="product-card__header">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          className="product-card__image"
          alt="Product"
        />
        <div className="product-card__rating">
          <Rating value={3} />
        </div>
        <span className="product-card__reduction">-7%</span>
      </div>
      <div className="product-card__content">
        <p className="product-card__name">Hervidor de Agua</p>
        <span className="product-card__price">29 €</span>
      </div>
    </a>
  );
};
