var product = [
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    image: './assets/images/product-1.svg',
    price: 119.99,
    discount: 30,
  },
  {
    id: 2,
    name: 'Loose Knit 3/4 Sleeve',
    image: './assets/images/product-2.svg',
    price: 119.99,
    discount: 0,
  },
  {
    id: 3,
    name: 'Basic Slim Fit T-Shirt',
    image: './assets/images/product-3.svg',
    price: 79.99,
    discount: 0,
  },
  {
    id: 4,
    name: 'Loose Textured T-Shirt',
    image: './assets/images/product-4.svg',
    price: 119.99,
    discount: 0,
  }
]
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
function getLocal(gt) {
  return localStorage.getItem(gt);
}
function setLocal(name,gt) {
  return localStorage.setItem(name,gt);
}
