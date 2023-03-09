import React from "react";
import { Card } from "../components/Card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const CartPage = (): JSX.Element => {
  return (
    <div className="cart">
      <div className="cart__grid">
        <div className="cart__products">
          <Card title="Carrito">
            <h1>Content</h1>
          </Card>
        </div>
        <div className="cart__pay">
          <Card
            title={
              <div className="cart__card-title">
                <span className="text-thin">1 artículo</span>
                <span>34,50 €</span>
              </div>
            }
          >
            <Button fullWidth disabled>
              Finalizar compra
            </Button>
          </Card>

          <div className="cart__pay__reduction">
            <label className="text-thin">Código de descuento</label>
            <Input maxLength={6} />
            <Button>Aplicar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
