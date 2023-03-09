import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/slice/cart";
import { Rating } from "./Rating";

export const ProductCard = ({
  name,
  price,
  rate,
  image,
  id,
  reduction,
}: TProduct) => {
  const dispatch = useDispatch();

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
        <p
          className="product-card__name"
          title={name}
          onClick={() => {
            dispatch(
              addToCart({
                id,
                name,
                price,
                image,
              })
            );
          }}
        >
          {name}
        </p>
        <span className="product-card__price">{price} €</span>
      </div>
    </Link>
  );
};
