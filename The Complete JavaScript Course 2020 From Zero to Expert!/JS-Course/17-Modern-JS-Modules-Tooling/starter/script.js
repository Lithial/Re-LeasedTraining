import {
  addToCart,
  totalPrice as price,
  totalQuantity as qt,
} from './shoppingCart.js';
import * as ShoppingCart from './shoppingCart.js';
//importing module
console.log('Importing Module');

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalQuantity, ShoppingCart.totalPrice);

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
      product: 'bread',
      quantity: 5,
    },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
console.log(stateClone);

if (module.hot) {
  module.hot.accept();
}
