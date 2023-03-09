import React from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "../assets/icons/cartIcon";

export const Header = (): JSX.Element => {
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
        <div className="header__cart">
          <div className="header__cart__icon">
            <CartIcon />
            <div className="header__cart__badge">0</div>
          </div>
          <Link to="/cart" className="header__cart__info">
            <span className="header__cart__amount">0,00 €</span>
            <span>Mi carrito</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
