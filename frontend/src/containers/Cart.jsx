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
      <section className="main-visual">
        <img className="top" src={ImgCover} alt="" />
        <img id="sony" src={ImgSony} />

        <div className="ad">
          <p className="one">A NEW TV EXPERIENCE AWAKENS</p>
          <p className="two">BRAVIA</p>
          <p className="three">OLED</p>
        </div>
      </section>

      {/* <!-- Content --> */}
      <section className="content">
        <ul className="items">
          {console.log(carts)}
          {carts &&
            carts.map((cart) => (
              <CartItem key={cart.item_id.id} item={cart.item_id} />
            ))}
        </ul>
      </section>
    </>
  );
}
