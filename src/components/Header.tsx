import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartIcon } from "../assets/icons/cartIcon";
import { TotalCart } from "./TotalCart";

export const Header = (): JSX.Element => {
  const { items } = useSelector((state: TRootState) => state.cart.cart);
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img
            src="../assets/images/patterson-agency-logo.png"
            className="header__logo"
            alt="Patterson Agency Logo"
          />
        </Link>
        <Link className="header__cart" to="/cart">
          <div className="header__cart__icon">
            <CartIcon />
            <div className="header__cart__badge">{items.length}</div>
          </div>
          <div className="header__cart__info">
            <TotalCart className="header__cart__amount" />
            <span>Mi carrito</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
