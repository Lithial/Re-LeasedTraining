const shoppingCart = [
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 },
];

const allowedProducts = {
  lisbon: 5,
  others: 7,
};

const checkCorrectAllowedProducts = function (cart, numAllowed, city) {
  if (!cart.length) return [];

  let allowed = numAllowed[city] > 0 ? numAllowed[city] : numAllowed.others;

  const newCart = cart.map(item => {
    const { product, quantity } = item;
    return {
      product,
      quantity: quantity > allowed ? allowed : quantity,
    };
  });
  return newCart;
};
const allowedShoppingCart = checkCorrectAllowedProducts(
  shoppingCart,
  allowedProducts,
  'lisbon'
);
console.log(allowedShoppingCart);

const createOrderDescription = function (cart) {
  const { product, quantity } = cart[0];

  return `Order with ${quantity} ${product}${
    cart.length > 1 ? ',etc...' : '.'
  }`;
};

const orderDescription = createOrderDescription(allowedShoppingCart);

console.log(orderDescription);
