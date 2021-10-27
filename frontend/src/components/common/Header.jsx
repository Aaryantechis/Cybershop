import React from "react";
import ImageDribbleLightPreview from "../../assets/img/Dribbble-Light-Preview.png";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../reducks/user/selectors";
import { push } from "connected-react-router";

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);

  return (
    <header>

      <section className="header-box">

        <div className="header">
          <span className="cyber">Cyber</span><span className="shop">shop</span>
        </div>

        <div className="sign-in">
          Sign In

          <link rel="stylesheet" href="style.css"/>
          <a href="#"><img className="cart-icon" src={ImageDribbleLightPreview} /></a>
        </div>

      </section>

    </header>

  );
};

export default Header;