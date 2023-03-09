import React from "react";
import { useSelector } from "react-redux";

export const TotalCart = ({ className = "" }: { className?: string }) => {
  const { items } = useSelector((state: TRootState) => state.cart.cart);
  return (
    <span className={className}>
      {items.reduce((acc: number, item: TCartItem) => acc + item.price, 0)} €
    </span>
  );
};
