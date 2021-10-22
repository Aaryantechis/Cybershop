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

      <section class="header-box">

        <div class="header">
          <span class="cyber">Cyber</span><span class="shop">shop</span>
        </div>

        <div class="sign-in">
          Sign In

          <link rel="stylesheet" href="style.css"/>
          <a href="#"><img class="cart-icon" src={ImageDribbleLightPreview} /></a>
        </div>

      </section>

    </header>

  );
};

export default Header;