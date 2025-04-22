export const cart = [];

export function addToCart(productId) {
  //Steps
  // 1. Check if the product is already in the cart.
  // 2. If it is in the cart, increase the quantity.
  // 3. If it's not in the cart, add it to the cart.

  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      // console.log(cartItem);
      matchingItem = cartItem;
    }
  }); //1.

  if (matchingItem) {
    matchingItem.quantity += 1; //2.
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    }); //3.
  }
}
