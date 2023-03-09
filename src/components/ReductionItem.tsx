import React from "react";

export const ReductionItem = ({ code, amount }: TReduction): JSX.Element => {
  return (
    <div className="cart__pay__reduction-item" key={code}>
      <span>
        Cod. Descuento: <b>{code}</b>
      </span>
      <span>-{amount} €</span>
    </div>
  );
};
