import React, { useEffect } from "react";
import CartItem from "../components/common/CartItem";
import ImgCover from "../assets/img/tv pic top.svg";
import ImgSony from "../assets/img/sony-256.png";
import { fetchCarts } from "../reducks/cart/operations";
import { fetchProducts } from "../reducks/products/operations";
import { getCarts } from "../reducks/cart/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducks/users/selectors";
import { getProducts } from "../reducks/products/selectors";
export default function Cart() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const items = getProducts(selector);

  useEffect(() => {
    dispatch(fetchCarts());
    console.log("test");
    console.log(carts);
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCarts());
  }, []);
  return (
    <>
      {/* <!-- Main Visual --> */}
      <section class="main-visual">
        <img class="top" src={ImgCover} alt="" />
        <img id="sony" src={ImgSony} />

        <div class="ad">
          <p class="one">A NEW TV EXPERIENCE AWAKENS</p>
          <p class="two">BRAVIA</p>
          <p class="three">OLED</p>
        </div>
      </section>

      {/* <!-- Content --> */}
      <section class="content">
        <ul class="items">
          {items && items.map((item) => <CartItem item={item} />)}
        </ul>
      </section>
    </>
  );
}
