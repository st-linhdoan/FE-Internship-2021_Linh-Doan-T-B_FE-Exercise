import {getDataLocal,updateItem} from './index.js';
export function handleAddToCart(e,data, id) {
  let item = data.find(x => x.id == id);
  let cart = getDataLocal('cart', []);
  let index = cart.findIndex(x => x.id == id);
  if (index != -1) {
    updateItem(cart, index,"+");
  }
  else {
    addItem(cart, item);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('count', JSON.stringify(cart.length));
  document.getElementsByClassName('number-cart')[0].innerHTML = cart.length;
}
function addItem(cart,item) {
  let itemPush = {
    ...item,
    qty: 1
  }
  cart.push(itemPush);
}
document.getElementsByClassName('number-cart')[0].innerHTML = getDataLocal('count',0);
