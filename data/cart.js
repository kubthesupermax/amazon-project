// Research on data normalization / Normalizing the data
export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
    },
  ];
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

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

  saveToStorage();
}

export function removeFromCart(productId) {
  const newArray = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newArray.push(cartItem);
    }
  });

  cart = newArray;

  saveToStorage();
}
