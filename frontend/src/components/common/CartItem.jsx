import React from "react";

const CartItem = ({ item }) => {
  return (
    <>
      <li>
        <img src={item.image} class="item-image" alt="" />
        <div class="info">
          <div class="name">{item.name}</div>

          <div class="info-bottom">
            <div class="price">${item.price}</div>
            <div class="add">Add +</div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
