import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CartIcon } from "../assets/icons/cartIcon";
import { EyeIcon } from "../assets/icons/eyeIcon";
import { addToCart } from "../redux/slice/cart";
import { Button } from "../ui/button";
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
  const { items } = useSelector((state: TRootState) => state.cart.cart);

  const handleaddItem = () =>
    dispatch(
      addToCart({
        id,
        name,
        price,
        image,
      })
    );

  const isSelected = () => items.find((item: TCartItem) => item.id === id);

  return (
    <div
      className={`product-card ${isSelected() ? "product-card--selected" : ""}`}
      key={id}
    >
      <div className="product-card__header">
        <img src={image} className="product-card__image" alt="Product" />
        <div className="product-card__buttons">
          <Button size="sm" variant="light">
            <EyeIcon />
          </Button>
          <Button
            size="sm"
            variant="light"
            onClick={handleaddItem}
            disabled={isSelected()}
          >
            <CartIcon width={16} height={16} />
          </Button>
        </div>
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
    </div>
  );
};
