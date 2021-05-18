import { addEvent,updateNumberCart,updateItem,getDataLocal} from './index.js';
import '../stylesheet/style.scss';
// get data
function fetchData(data){
  return data;
}
//return html
function returnList(product) {
  let html =
    `<li class="col-3 col-sm-6 product-item">
      <div class="product ${product.discount !=0 ? `product-discount` : ""}">
        <div class="product-img">
          <a href="#"><img src=${product.image} alt=${product.name}></a>
          <button class="btn btn-orange btn-add-cart">Add to cart</button>
        </div>
        <div class="product-info">
          <h4 class="product-name">
            <a href="#">${product.name}</a>
          </h4>
          <div>
            <span class="product-price">${product.price}</span>
            ${
              (product.discount != 0) 
              ? (`<span class="product-price-discount">${(product.price - product.price * product.discount / 100).toFixed(2)}</span>`)
              : ""
            }
          </div>
        </div>
        ${ (product.discount != 0) ? (`<p class="badge badge-discount">-${product.discount}%</p>`) : ""}
      </div>
    </li>`
  return html;
}
// render view
function render(data) {
  //list product
  let li = '';
  for (let element of data) {
    li += returnList(element);
  }
  document.getElementsByClassName('product-list')[0].innerHTML = li;
}
function handleAddToCart(e, data, id) {
  let item = data.find(x => x.id == id);
  let cart = getDataLocal('cart', []);
  let index = cart.findIndex(x => x.id == id);
  if (index != -1) {
    updateItem(cart, index, "+");
  }
  else {
    addItem(cart, item);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('count', JSON.stringify(cart.length));
  document.getElementsByClassName('number-cart')[0].innerHTML = cart.length;
}
function addItem(cart, item) {
  let itemPush = {
    ...item,
    qty: 1
  }
  cart.push(itemPush);
}
//data products
var products = [
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    image: './assets/images/product-1.png',
    price: 119.99,
    discount: 30,
  },
  {
    id: 2,
    name: 'Loose Knit 3/4 Sleeve',
    image: './assets/images/product-2.png',
    price: 119.99,
    discount: 0,
  },
  {
    id: 3,
    name: 'Basic Slim Fit T-Shirt',
    image: './assets/images/product-3.png',
    price: 79.99,
    discount: 0,
  },
  {
    id: 4,
    name: 'Loose Textured T-Shirt',
    image: './assets/images/product-4.png',
    price: 119.99,
    discount: 0,
  }
]
// fetch and render data
var data = fetchData(products);
render(data);
addEvent(data, 'btn-add-cart', 'click', handleAddToCart);
updateNumberCart();
