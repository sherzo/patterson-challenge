import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getReductions } from "../api";
import { DeleteIcon } from "../assets/icons/deleteIcon";
import { Card } from "../components/Card";
import { TotalCart } from "../components/TotalCart";
import { addReduction } from "../redux/slice/cart";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CartItem = ({ name, image, price, id }: TProduct): JSX.Element => {
  return (
    <tr className="cart__item" key={id}>
      <td>
        <img src={image} className="cart__item__image" />
      </td>
      <td>{name}</td>
      <td>{price} €</td>
      <td>
        <Button size="sm" variant="default">
          <DeleteIcon />
        </Button>
      </td>
    </tr>
  );
};

export const CartPage = (): JSX.Element => {
  const [code, setCode] = useState("");
  const [validCodes, setValidCodes] = useState([]);
  const { items, reductions } = useSelector(
    (state: TRootState) => state.cart.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setValidCodes(getReductions());
  }, []);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const codeValid = validCodes.find((c) => code.toUpperCase() === c.code);

    if (codeValid) {
      dispatch(addReduction({ ...codeValid }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  return (
    <div className="cart">
      <div className="cart__grid">
        <div className="cart__products">
          <Card title="Carrito">
            <table>{items.map(CartItem)}</table>
          </Card>
        </div>
        <div className="cart__pay">
          <Card
            title={
              <div className="cart__card-title">
                <span className="text-thin">
                  {items.length} artículo{items.length !== 1 && "s"}
                </span>
                <TotalCart className="cart__card-total" />
              </div>
            }
          >
            <>
              {reductions.map((reduction: TReduction) => (
                <div className="cart__pay__reduction-item">
                  <span>
                    Cod. Descuento: <b>{reduction.code}</b>
                  </span>
                  <span>-{reduction.amount} €</span>
                </div>
              ))}
              {reductions.length > 0 && (
                <div className="cart__pay__reduction-total">Total: 10 €</div>
              )}
              <Button fullWidth disabled>
                Finalizar compra
              </Button>
            </>
          </Card>

          <form action="#" method="GET" onSubmit={onSubmit}>
            <div className="cart__pay__reduction">
              <label className="text-thin">Código de descuento</label>
              <Input maxLength={5} onChange={handleChange} />
              <Button type="submit" disabled={items.length >= 0}>
                Aplicar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
