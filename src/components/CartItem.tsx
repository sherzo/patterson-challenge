import { useDispatch } from "react-redux";
import React from "react";
import { DeleteIcon } from "../assets/icons/deleteIcon";
import { removeItem } from "../redux/slice/cart";
import { Button } from "../ui/button";

export const CartItem = ({ name, image, price, id }: TProduct): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <tr className="cart__item" key={id}>
      <td>
        <img src={image} className="cart__item__image" />
      </td>
      <td>{name}</td>
      <td>{price} €</td>
      <td>
        <Button
          size="sm"
          variant="default"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          <DeleteIcon />
        </Button>
      </td>
    </tr>
  );
};
