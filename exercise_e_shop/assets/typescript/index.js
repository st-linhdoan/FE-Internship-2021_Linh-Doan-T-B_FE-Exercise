"use strict";
exports.__esModule = true;
exports.updateNumberCart = exports.addEvent = exports.updateItem = exports.getDataLocal = void 0;
function getDataLocal(dataLocal, gt) {
  var data = localStorage.getItem(dataLocal) ? JSON.parse(localStorage.getItem(dataLocal)) : gt;
  return data;
}
exports.getDataLocal = getDataLocal;
function updateItem(cart, index, caculator) {
  if (typeof caculator == "number") {
    return cart[index].qty = caculator;
  }
  return caculator == "+" ? cart[index].qty += 1 : cart[index].qty -= 1;
}
exports.updateItem = updateItem;
function addEvent(arr, className, eventFuc, nameFunc) {
  arr.forEach(function (element, index) {
    return document.getElementsByClassName(className)[index].addEventListener(eventFuc, function (e) { return nameFunc(e, arr, element.id); });
  });
}
exports.addEvent = addEvent;
function updateNumberCart() {
  var view = document.getElementsByClassName('number-cart');
  view[0].innerHTML = getDataLocal('count', 0);
}
exports.updateNumberCart = updateNumberCart;
