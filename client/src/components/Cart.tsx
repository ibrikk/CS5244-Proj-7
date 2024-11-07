import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CheckoutPopup from "./CheckoutPopup";
import CartTable from "./CartTable";
import "../assets/css/Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart-container">
      <h1 className="cart-heading">Items in Your Cart 🛒</h1>
      {cart.length !== 0 ? (
        <>
          <CartTable />
          <div className="checkout-button">
            <CheckoutPopup />
          </div>
        </>
      ) : (
        <h2 className="cart-empty">Your cart is empty</h2>
      )}
    </div>
  );
};

export default Cart;
