import "../assets/css/CartTable.css";
import "../assets/css/CartTable.css";
import { BookItem } from "../Types";
import { CirclePlusIcon } from "lucide-react";

const getBookImageUrl = function (book: BookItem): string {
  let filename = book.title.toLowerCase();
  filename = filename.replace(/ /g, "-");
  filename = filename.replace(/'/g, "");
  filename = filename + ".gif";
  try {
    return require("../assets/images/books/" + filename);
  } catch (_) {
    return require("../assets/images/books/no-image.jpg");
  }
};
const CartTable = () => {
  return (
    <div className="cart-table">
      <ul className="cart2">
        <li className="table-heading">
          <div className="heading-book">Book</div>
          <div className="heading-price">Price / Quantity</div>
          <div className="heading-subtotal">Amount</div>
        </li>
        {/* TODO : You need to iterate through the cart and display book image, */}
        {/*        Book Title, unit price/quantity and total price for each item in the cart*/}
        {/*        Note that the following simply display hardcoded data*/}
        <li>
          <div className="cart-book-image">
            <div className="rect narrow-rect"></div>
          </div>
          <div className="cart-book-title">Book Title</div>
          <div className="cart-book-price">$2.99</div>
          <div className="cart-book-quantity">
            <button className="icon-button inc-button">
              <i className="fas fa-plus-circle">{<CirclePlusIcon />}</i>
            </button>
            <span className="quantity">2</span>&nbsp;
            <button className="icon-button dec-button">
              <i className="fas fa-minus-circle">
                {" "}
                {/* <FontAwesomeIcon icon={faMinusCircle} /> */}
              </i>
            </button>
          </div>
          <div className="cart-book-subtotal">$3.98</div>
        </li>
        <li className="line-sep"></li>
        <li>
          <div className="cart-book-image">
            <img
              className="cart2"
              src={require("../assets/images/books/1984.jpg")}
              alt="Dune"
            />
          </div>
          <div className="cart-book-title">Book Title</div>
          <div className="cart-book-price">$2.99</div>
          <div className="cart-book-quantity">
            <button className="icon-button dec-arrow-button">
              <i className="fas fa-chevron-left">
                {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
              </i>
            </button>
            <span className="quantity">&nbsp;&nbsp;2&nbsp;&nbsp;</span>
            <button className="icon-button inc-arrow-button">
              <i className="fas fa-chevron-right">
                {" "}
                {/* <FontAwesomeIcon icon={faChevronRight} /> */}
              </i>
            </button>
          </div>
          <div className="cart-book-subtotal">$3.98</div>
        </li>
        <li className="line-sep"></li>
        <li>
          <div className="cart-book-image">
            <div className="rect square"></div>
          </div>
          <div className="cart-book-title">
            A Very Long Book Title That Goes On and On As Though the Author Were
            Very Impressed with Themself
          </div>
          <div className="cart-book-price">$43.50</div>
          <div className="cart-book-quantity">
            <input type="number" value="12" min="0" max="20" />
          </div>
          <div className="cart-book-subtotal">$522.00</div>
        </li>
        <li className="line-sep"></li>
        <li>
          <div className="cart-book-image">
            <div className="rect wide-rect"></div>
          </div>
          <div className="cart-book-title">Book Title</div>
          <div className="cart-book-price">$2.99</div>
          <div className="cart-book-quantity">
            <select id="quantity">
              <option value="0">Qty: 0</option>
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
              <option value="6">Qty: 6</option>
              <option value="7">Qty: 7</option>
              <option value="8">Qty: 8</option>
              <option value="9">Qty: 9</option>
              <option value="10">Qty: 10</option>
            </select>
          </div>
          <div className="cart-book-subtotal">$3.98</div>
        </li>
      </ul>
    </div>
  );
};

export default CartTable;
