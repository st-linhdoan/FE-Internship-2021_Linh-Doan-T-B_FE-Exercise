"use strict";
var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
exports.__esModule = true;
var index_js_1 = require("./index.js");
// get data
function fetchData() {
  var products = [
    {
      id: 1,
      name: 'T-Shirt Summer Vibes',
      image: './assets/images/product-1.png',
      price: 119.99,
      discount: 30
    },
    {
      id: 2,
      name: 'Loose Knit 3/4 Sleeve',
      image: './assets/images/product-2.png',
      price: 119.99,
      discount: 0
    },
    {
      id: 3,
      name: 'Basic Slim Fit T-Shirt',
      image: './assets/images/product-3.png',
      price: 79.99,
      discount: 0
    },
    {
      id: 4,
      name: 'Loose Textured T-Shirt',
      image: './assets/images/product-4.png',
      price: 119.99,
      discount: 0
    }
  ];
  return products;
}
//return html
function returnList(product) {
  var html = "<li class=\"col-3 col-sm-6 product-item\">\n    <div class=\"product " + (product.discount != 0 ? "product-discount" : "") + "\">\n      <div class=\"product-img\">\n        <a href=\"#\"><img src=" + product.image + " alt=" + product.name + "></a>\n        <button class=\"btn btn-orange btn-add-cart\">Add to cart</button>\n      </div>\n      <div class=\"product-info\">\n        <h4 class=\"product-name\">\n          <a href=\"#\">" + product.name + "</a>\n        </h4>\n        <div>\n          <span class=\"product-price\">" + product.price + "</span>\n          " + ((product.discount != 0)
    ? ("<span class=\"product-price-discount\">" + (product.price - product.price * product.discount / 100).toFixed(2) + "</span>")
    : "") + "\n        </div>\n      </div>\n      " + ((product.discount != 0) ? ("<p class=\"badge badge-discount\">-" + product.discount + "%</p>") : "") + "\n    </div>\n  </li>";
  return html;
}
// render view
function render(data) {
  //list product
  var li = '';
  for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var element = data_1[_i];
    li += returnList(element);
  }
  document.getElementsByClassName('product-list')[0].innerHTML = li;
}
function handleAddToCart(e, data, id) {
  var item = data.find(function (x) { return x.id == id; });
  var cart = index_js_1.getDataLocal('cart', []);
  var index = cart.findIndex(function (x) { return x.id == id; });
  var view = document.getElementsByClassName('number-cart');
  if (index != -1) {
    index_js_1.updateItem(cart, index, "+");
  }
  else {
    addItem(cart, item);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('count', JSON.stringify(cart.length));
  view[0].innerHTML = cart.length;
}
function addItem(cart, item) {
  var itemPush = __assign(__assign({}, item), { qty: 1 });
  cart.push(itemPush);
}
// fetch and render data
var data = fetchData();
render(data);
index_js_1.addEvent(data, 'btn-add-cart', 'click', handleAddToCart);
index_js_1.updateNumberCart();
