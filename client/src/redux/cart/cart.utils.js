export const addItemToCartUtil = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );
  if (!existingCartItem) {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }

  return cartItems.map((item) =>
    item.id === cartItemToAdd.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
};
