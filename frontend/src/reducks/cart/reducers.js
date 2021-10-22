import * as Actions from "./actions";
import initialState from "../store/initialState";

export const CartsReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case Actions.FETCH_CART:
      return {
        ...state,
        list: action.list,
        subtotal: action.subtotal,
      };
    case Actions.ADD_CART:
      return {
        ...state,
        list: action.list,
        subtotal: action.subtotal,
      };
    case Actions.INCREASE_CART:
      return {
        ...state,
        list: action.list,
        subtotal: action.subtotal,
      };
    case Actions.DECREASE_CART:
      return {
        ...state,
        list: action.list,
        subtotal: action.subtotal,
      };
    default:
      return state;
  }
};
