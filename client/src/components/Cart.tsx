import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CircleX, ShoppingBasket } from "lucide-react";
import { CartContext } from "../contexts/CartContext";
import CheckoutPopup from "./CheckoutPopup";
import CartTable from "./CartTable";
import "../assets/css/Cart.css";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = () => {
    let sum = 0;
    for (const item of cart) {
      sum += item.items.price * item.quantity;
    }
    return sum.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Items in Your Cart</h1>
      {cart.length !== 0 ? (
        <>
          <CartTable />
          <div className="total">Total: $ {subtotal()}</div>
          <div className="btn-container">
            <div>
              <button
                className="continue-shopping-btn"
                onClick={() => navigate(-1)}
              >
                Continue Shopping &nbsp; <ShoppingBasket />
              </button>
            </div>
            <div>
              <button
                className="clear-cart-btn"
                onClick={() => dispatch({ type: "CLEAR" })}
              >
                CLEAR CART &nbsp; <CircleX />
              </button>
            </div>
            <div className="checkout-button">
              <CheckoutPopup />
            </div>
          </div>
        </>
      ) : (
        <h2 className="cart-empty">Your cart is empty 🛒</h2>
      )}
    </div>
  );
};

export default Cart;
