import React from "react";
import { useDispatch } from "react-redux";
import { DeleteIcon } from "../assets/icons/deleteIcon";
import { removeReduction } from "../redux/slice/cart";
import { Button } from "../ui/button";

export const ReductionItem = ({ code, amount }: TReduction): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className="cart__pay__reduction-item" key={code}>
      <Button
        title="Eliminar descuento"
        size="sm"
        variant="default"
        onClick={() => {
          dispatch(removeReduction());
        }}
      >
        <DeleteIcon width={15} height={15} />
      </Button>
      <span>
        Cod. Descuento: <b>{code}</b>
      </span>
      <span>-{amount} €</span>
    </div>
  );
};
