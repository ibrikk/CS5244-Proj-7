import React, { useContext } from "react";
import { BookItem, ShoppingCartItem } from "../Types";
import { CartContext } from "../contexts/CartContext";
import { CartTypes } from "../reducers/CartReducer";
import "../assets/css/CartTable.css";
import noimage from "../assets/images/books/no-image.jpg";

const getBookImageUrl = (book: BookItem): string => {
  let filename =
    book.title.toLowerCase().replace(/ /g, "-").replace(/'/g, "") + ".gif";
  try {
    return require(`../assets/images/books/${filename}`);
  } catch (_) {
    return require("../assets/images/books/no-image.jpg");
  }
};

const CartTable: React.FC = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleIncrement = (bookId: number) => {
    dispatch({ type: CartTypes.ADD, payload: bookId });
  };

  const handleDecrement = (bookId: number) => {
    dispatch({ type: CartTypes.REMOVE, payload: bookId });
  };

  console.log(cart);

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
                <img className="cart2" src={noimage} alt={item.items.title} />
              </div>
              <div className="cart-book-title">{item.items.title}</div>
              <div className="cart-book-price">
                ${item.items.price.toFixed(2)}
              </div>
              <div className="cart-book-quantity">
                <button
                  onClick={() => console.log("decrement")}
                  //   onClick={() => handleDecrement(item.quantity)}
                  className="icon-button dec-arrow-button"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <span className="quantity">
                  &nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;
                </span>
                <button
                  onClick={() => console.log("increment")}
                  //   onClick={() => handleIncrement(item.quantity)}
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
