import React from "react";
import CartTable from "./CartTable";

import "../assets/css/CartTable.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <h1 className="cart-heading">Items in Your Cart 🛒</h1>
      <CartTable />
    </div>
  );
};

export default Cart;
