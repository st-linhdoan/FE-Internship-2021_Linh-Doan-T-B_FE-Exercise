function handleAddToCart(id) {
  console.log(id);
  var item = find(product, id);
  var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  var index = findIndex(cart, id);
  if (index != -1) {
    cart[index].qty += 1;
  }
  else {
    var itemPush = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      discount: item.discount,
      qty: 1
    }
    cart.push(itemPush);
  }
  setLocal('cart', JSON.stringify(cart));
  setLocal('count', JSON.stringify(cart.length));
  document.getElementsByClassName('number-cart')[0].innerHTML = cart.length;
}
document.getElementsByClassName('number-cart')[0].innerHTML = getLocal('count') ? JSON.parse(getLocal('count')) : 0;
