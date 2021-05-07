function getDataLocal(dataLocal, gt) {
  var data = localStorage.getItem(dataLocal) ? JSON.parse(localStorage.getItem(dataLocal)) : gt;
  return data;
}
function find(arr, id) {
  var value = '';
  arr.forEach((item) => {
    if (item.id == id) {
      value = item;
    }
  })
  return value;
}

function findIndex(arr, id) {
  if (arr) {
    var indexArr = -1;
    arr.forEach((item, index) => {
      if (item.id == id) {
        indexArr = index;
      }
    })
    return indexArr;
  }
  return -1;
}
function addItem(item) {
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
function updateItem(cart,index) {
  cart[index].qty += 1;
}
function handleAddToCart(data,id) {
  var item = find(data, id);
  var cart = getDataLocal('cart',[]);
  var index = findIndex(cart, id);
  if (index != -1) {
    updateItem(cart,index);
  }
  else {
    addItem(item);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('count', JSON.stringify(cart.length));
  document.getElementsByClassName('number-cart')[0].innerHTML = cart.length;
}
document.getElementsByClassName('number-cart')[0].innerHTML = getDataLocal('count',0);
