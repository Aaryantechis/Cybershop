import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/cart/operations";
import { getCarts, getSubtotal } from "../../reducks/cart/selectors";
import { push } from "connected-react-router";

const Item = ({ product }) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);
  const [particularCart, setParticularCart] = useState(null);
  const key = localStorage.getItem("CYBERSHOP_LOGIN_USER_KEY");
  useEffect(() => {
    console.log("carts", carts);
    if (carts.length > 0) {
      const matchedCarts = carts.filter((cart) => cart.item.id == product.id);
      console.log("hello", matchedCarts);
      if (matchedCarts.length > 0) {
        setParticularCart(matchedCarts[0]);
      } else {
        setParticularCart(null);
      }
    }
  }, [subtotal]);

  const clickAddCart = () => {
    if (key) {
      dispatch(addCart(product));
    } else {
      dispatch(push("/signin"));
    }
  };

  const clickPlusCart = () => {
    dispatch(increaseCart(particularCart.id));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(particularCart.id));
  };
  return (
    <li key={product.id}>
      <img src={product.image} class="item-image" alt="" />
      <div class="info">
        <div class="name">{product.name}</div>

        <div class="info-bottom">
          <div class="price">{product.price}</div>
          {!particularCart ? (
            <div class="add" onClick={clickAddCart}>
              Add +
            </div>
          ) : (
            <div class="number">
              <span class="minus" onClick={clickMinusCart}>
                －
              </span>
              <span class="count">{particularCart.quantity}</span>
              <span class="plus" onClick={clickPlusCart}>
                +
              </span>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Item;
