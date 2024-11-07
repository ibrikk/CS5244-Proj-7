import React, { useContext } from "react";
import { BookItem, ShoppingCartItem } from "../Types";
import { CartContext } from "../contexts/CartContext";
import { CartTypes } from "../reducers/CartReducer";
import "../assets/css/CartTable.css";

import { findImageByBookId } from "../Util";
const CartTable: React.FC = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleIncrement = (bookId: number) => {
    dispatch({ type: CartTypes.ADD, id: bookId });
  };

  const handleDecrement = (bookId: number) => {
    dispatch({ type: CartTypes.REMOVE, id: bookId });
  };

  return (
    <div className="cart-table">
      <ul className="cart2">
        <li className="table-heading">
          <div className="heading-book">Book</div>
          <div className="heading-price">Price / Quantity</div>
          <div className="heading-subtotal">Amount</div>
        </li>
        {cart.map((item) => (
          <React.Fragment key={item.id}>
            <li>
              <div className="cart-book-image">
                <img
                  className="cart2"
                  src={findImageByBookId(item.id)}
                  alt={item.items.title}
                />
              </div>
              <div className="cart-book-title">{item.items.title}</div>
              <div className="cart-book-price">
                ${item.items.price.toFixed(2)}
              </div>
              <div className="cart-book-quantity">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="icon-button dec-arrow-button"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <span className="quantity">
                  &nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;
                </span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="icon-button inc-arrow-button"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className="cart-book-subtotal">
                ${(item.quantity * item.items.price).toFixed(2)}
              </div>
            </li>
            <li className="line-sep"></li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default CartTable;
