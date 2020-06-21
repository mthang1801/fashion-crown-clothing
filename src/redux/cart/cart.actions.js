import { cartActionTypes } from "./cart.types";
export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_CART,
});

export const addItemToCart = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const closeCart = () => ({
  type: cartActionTypes.CLOSE_CART,
});

export const clearItemFromCart = (id) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: { id },
});

export const increaseQuantityItem = (id) => ({
  type: cartActionTypes.INCREASE_QUANTITY_ITEM,
  payload: { id },
});

export const decreaseQuantityItem = (id) => ({
  type: cartActionTypes.DECREASE_QUANTITY_ITEM,
  payload: { id },
});
