import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getReductions } from "../api";
import { DeleteIcon } from "../assets/icons/deleteIcon";
import { Card } from "../components/Card";
import { TotalCart } from "../components/TotalCart";
import { addReduction, removeItem } from "../redux/slice/cart";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CartItem = ({ name, image, price, id }: TProduct): JSX.Element => {
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

const ReductionItem = ({ code, amount }: TReduction) => {
  return (
    <div className="cart__pay__reduction-item" key={code}>
      <span>
        Cod. Descuento: <b>{code}</b>
      </span>
      <span>-{amount} €</span>
    </div>
  );
};

export const CartPage = (): JSX.Element => {
  const [code, setCode] = useState("");
  const [validCodes, setValidCodes] = useState([]);
  const { items, reduction } = useSelector(
    (state: TRootState) => state.cart.cart
  );
  const dispatch = useDispatch();
  const totalItems = items.length;

  useEffect(() => {
    setValidCodes(getReductions());
  }, []);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (reduction) {
      return;
    }
    const codeValid = validCodes.find((c) => code.toUpperCase() === c.code);

    if (codeValid) {
      dispatch(addReduction({ ...codeValid }));
    }
    setCode("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const TitleCardPay = () => (
    <div className="cart__card-title">
      <span className="text-thin">
        {totalItems} artículo{totalItems !== 1 && "s"}
      </span>
      <TotalCart className="cart__card-total" />
    </div>
  );

  const getTotal = () => {
    const totalCart = items.reduce(
      (acc: number, item: TCartItem) => acc + item.price,
      0
    );
    const reductionAmount = reduction ? reduction.amount : 0;
    const total = totalCart - reductionAmount;
    return total < 0 ? 0 : total.toFixed(2);
  };

  return (
    <div className="cart">
      <div className="cart__grid">
        <div className="cart__products">
          <Card title="Carrito">
            <div>
              <table>
                <tbody>{items.map(CartItem)}</tbody>
              </table>
              {totalItems === 0 && (
                <p className="text-center">
                  No ha agregado artículos la carrito
                </p>
              )}
            </div>
          </Card>
        </div>
        <div className="cart__pay">
          <Card title={<TitleCardPay />}>
            <div>
              {reduction && <ReductionItem {...reduction} />}
              {reduction && (
                <div className="cart__pay__reduction-total">
                  Total: {getTotal()} €
                </div>
              )}
              <Button fullWidth disabled>
                Finalizar compra
              </Button>
            </div>
          </Card>

          <form action="#" method="GET" onSubmit={onSubmit}>
            <div className="cart__pay__reduction">
              <label className="text-thin">Código de descuento</label>
              <Input
                maxLength={5}
                onChange={handleChange}
                value={code}
                disabled={totalItems === 0 || Boolean(reduction)}
              />
              <Button
                type="submit"
                disabled={totalItems === 0 || Boolean(reduction)}
              >
                Aplicar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
