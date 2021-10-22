import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../reducks/products/selectors";
import { fetchProducts } from "../reducks/products/operations";
import ImgTvPicTop from "../assets/img/tv pic top.svg";
import ImgSony256 from "../assets/img/sony-256.png";
import Product from "../components/common/Product";
const Index = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <section className="main-visual">
        <img className="top" src={ImgTvPicTop} />
        <img id="sony" src={ImgSony256} />

        <div className="ad">
          <p className="one">A NEW TV EXPERIENCE AWAKENS</p>
          <p className="two">BRAVIA</p>
          <p className="three">OLED</p>
        </div>
      </section>

      <section className="content">
        <ul className="items">
          {products && products.map((product) => <Product product={product} />)}
        </ul>
      </section>
    </div>
  );
};

export default Index;
