function getDataLocal(dataLocal, gt) {
  var data = localStorage.getItem(dataLocal) ? JSON.parse(localStorage.getItem(dataLocal)) : gt;
  return data;
}
function addItem(cart,item) {
  var itemPush = {
    ...item,
    qty: 1
  }
  cart.push(itemPush);
}
function updateItem(cart,index) {
  cart[index].qty += 1;
}
export function handleAddToCart(data,id) {
  var item = data.find(x => x.id == id);
  var cart = getDataLocal('cart',[]);
  var index = cart.findIndex(x =>x.id == id);
  if (index != -1) {
    updateItem(cart,index);
  }
  else {
    addItem(cart,item);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('count', JSON.stringify(cart.length));
  document.getElementsByClassName('number-cart')[0].innerHTML = cart.length;
}
document.getElementsByClassName('number-cart')[0].innerHTML = getDataLocal('count',0);
