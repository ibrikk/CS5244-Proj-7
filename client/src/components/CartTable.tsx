import { BookItem, ShoppingCartItem } from "../Types";
import { CartTypes } from "../reducers/CartReducer";
import { CartContext } from "../contexts/CartContext";
import "../assets/css/CartTable.css";
import { useContext } from "react";
import React from "react";

const getBookImageUrl = function (book: BookItem): string {
  let filename = book.title.toLowerCase();
  filename = filename.replace(/ /g, "-");
  filename = filename.replace(/'/g, "");
  filename = filename + ".gif";
  try {
    return require(`../assets/images/books/${filename}`);
  } catch (_) {
    return require("../assets/images/books/no-image.jpg");
  }
};

const CartTable = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleIncrement = (id: string) => {
    dispatch({ type: CartTypes.ADD, payload: id });
  };

  const handleDecrement = (id: string) => {
    dispatch({ type: CartTypes.REMOVE, payload: id });
  };

  return (
    <div className="cart-table">
      <ul className="cart2">
        <li className="table-heading">
          <div className="heading-book">Book</div>
          <div className="heading-price">Price / Quantity</div>
          <div className="heading-subtotal">Amount</div>
        </li>
        {cart.length === 0 ? (
          <li>No items in cart</li>
        ) : (
          <div>cart</div>
          //   cart.map((item: ShoppingCartItem) => (
          // <React.Fragment key={item.items}>
          //   <li>
          //     <div className="cart-book-image">
          //       <img
          //         className="cart2"
          //         src={getBookImageUrl(item.book)}
          //         alt={item.book.title}
          //       />
          //     </div>
          //     <div className="cart-book-title">{item.book.title}</div>
          //     <div className="cart-book-price">
          //       ${item.book.price.toFixed(2)}
          //     </div>
          //     <div className="cart-book-quantity">
          //       <button
          //         onClick={() => handleDecrement(item.book.id)}
          //         className="icon-button dec-arrow-button"
          //       >
          //         <i className="fas fa-chevron-left"></i>
          //       </button>
          //       <span className="quantity">
          //         &nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;
          //       </span>
          //       <button
          //         onClick={() => handleIncrement(item.book.id)}
          //         className="icon-button inc-arrow-button"
          //       >
          //         <i className="fas fa-chevron-right"></i>
          //       </button>
          //     </div>
          //     <div className="cart-book-subtotal">
          //       ${(item.quantity * item.book.price).toFixed(2)}
          //     </div>
          //   </li>
          //   <li className="line-sep"></li>
          // </React.Fragment>
          //   ))
        )}
      </ul>
    </div>
  );
};

export default CartTable;
