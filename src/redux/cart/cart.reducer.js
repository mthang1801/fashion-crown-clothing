import cartActionTypes from "./cart.types";
import { addItemToCartUtil } from "./cart.utils";
const INITIAL_STATE = {
  show: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        show: !state.show,
      };
    case cartActionTypes.CLOSE_CART:
      return {
        ...state,
        show: false,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCartUtil(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionTypes.INCREASE_QUANTITY_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };
    case cartActionTypes.DECREASE_QUANTITY_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? cartItem.quantity > 1
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : { ...cartItem, quantity: 1 }
            : cartItem
        ),
      };
    case cartActionTypes.CLEAR_CART_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
