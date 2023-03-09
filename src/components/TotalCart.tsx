import React from "react";
import { useSelector } from "react-redux";

export const TotalCart = ({ className = "" }: { className?: string }) => {
  const { items } = useSelector((state: TRootState) => state.cart.cart);
  const getTotal = () => {
    const total = items.reduce(
      (acc: number, item: TCartItem) => acc + item.price,
      0
    );

    return total.toFixed(2);
  };
  return <span className={className}>{getTotal()} €</span>;
};
