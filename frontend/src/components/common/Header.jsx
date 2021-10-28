import React from "react";
import ImageDribbleLightPreview from "../../assets/img/Dribbble-Light-Preview.png";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <section className="header-box">
        <div
          className="header"
          onClick={() => {
            dispatch(push("/"));
          }}
        >
          <span className="cyber">Cyber</span>
          <span className="shop">shop</span>
        </div>
        <div className="row">
          <div
            className="sign-in"
            onClick={() => {
              dispatch(push("signin"));
            }}
          >
            Sign In
          </div>
          <img
            className="cart-icon"
            src={ImageDribbleLightPreview}
            onClick={() => {
              dispatch(push("cart"));
            }}
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
