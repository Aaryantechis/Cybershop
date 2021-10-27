import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../reducks/user/selectors";

const Footer = () => {
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  return (
    <footer>

      <div className="subtotal">
        <span className="subtotal-test">Subtotal:</span>
        <span className="subtotal-price">$1000</span>
      </div>

      <button>Check Out</button>

    </footer>
  );
};

export default Footer;