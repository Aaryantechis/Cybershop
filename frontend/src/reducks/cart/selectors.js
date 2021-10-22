import { createSelector } from "reselect";

const cartsSelector = (state) => state.cart;

export const getCarts = createSelector([cartsSelector], (state) => state.list);

export const getSubtotal = createSelector(
  [cartsSelector],
  (state) => state.subtotal
);
