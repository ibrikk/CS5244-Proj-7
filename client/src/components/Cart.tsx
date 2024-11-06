import React from "react";
import CartTable from "./CartTable";
import { useContext } from "react";

import "../assets/css/CartTable.css";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  return (
    <div className="cart-container">
      <h1 className="cart-heading">Items in Your Cart 🛒</h1>
      {cart.length !== 0 && <CartTable />}
    </div>
  );
};

export default Cart;
