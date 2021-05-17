/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/javascript/index.js":
/*!************************************!*\
  !*** ./assets/javascript/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDataLocal": () => (/* binding */ getDataLocal),
/* harmony export */   "updateItem": () => (/* binding */ updateItem),
/* harmony export */   "addEvent": () => (/* binding */ addEvent),
/* harmony export */   "updateNumberCart": () => (/* binding */ updateNumberCart)
/* harmony export */ });
function getDataLocal(dataLocal, gt) {
  let data = localStorage.getItem(dataLocal) ? JSON.parse(localStorage.getItem(dataLocal)) : gt;
  return data;
}
function updateItem(cart, index, caculator) {
  if (typeof caculator == "number") {
    return cart[index].qty = caculator;
  }
  return caculator == "+" ? cart[index].qty += 1 : cart[index].qty -= 1;
}
function addEvent(arr, className, eventFuc, nameFunc) {
  arr.forEach((element, index) => {
    return document.getElementsByClassName(className)[index].addEventListener(eventFuc, (e) => nameFunc(e, arr, element.id));
  });
}
function updateNumberCart() {
  document.getElementsByClassName('number-cart')[0].innerHTML = getDataLocal('count', 0);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./assets/javascript/product.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./assets/javascript/index.js");

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
  let cart = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getDataLocal)('cart', []);
  let index = cart.findIndex(x => x.id == id);
  if (index != -1) {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateItem)(cart, index, "+");
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
(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)(data, 'btn-add-cart', 'click', handleAddToCart);
(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateNumberCart)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGVyY2lzZV9lX3Nob3AvLi9hc3NldHMvamF2YXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGVyY2lzZV9lX3Nob3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhlcmNpc2VfZV9zaG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGVyY2lzZV9lX3Nob3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGVyY2lzZV9lX3Nob3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGVyY2lzZV9lX3Nob3AvLi9hc3NldHMvamF2YXNjcmlwdC9wcm9kdWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOOEU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQ0FBK0M7QUFDM0U7QUFDQSxpQ0FBaUMsY0FBYyxPQUFPLGFBQWE7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsYUFBYTtBQUN2QztBQUNBO0FBQ0EsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQTtBQUNBLHlEQUF5RCxvRUFBb0U7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdFQUFnRSxpQkFBaUI7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1REFBWTtBQUN6QjtBQUNBO0FBQ0EsSUFBSSxxREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQVE7QUFDUiwyREFBZ0IiLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXREYXRhTG9jYWwoZGF0YUxvY2FsLCBndCkge1xyXG4gIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUxvY2FsKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUxvY2FsKSkgOiBndDtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbShjYXJ0LCBpbmRleCwgY2FjdWxhdG9yKSB7XHJcbiAgaWYgKHR5cGVvZiBjYWN1bGF0b3IgPT0gXCJudW1iZXJcIikge1xyXG4gICAgcmV0dXJuIGNhcnRbaW5kZXhdLnF0eSA9IGNhY3VsYXRvcjtcclxuICB9XHJcbiAgcmV0dXJuIGNhY3VsYXRvciA9PSBcIitcIiA/IGNhcnRbaW5kZXhdLnF0eSArPSAxIDogY2FydFtpbmRleF0ucXR5IC09IDE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50KGFyciwgY2xhc3NOYW1lLCBldmVudEZ1YywgbmFtZUZ1bmMpIHtcclxuICBhcnIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRGdWMsIChlKSA9PiBuYW1lRnVuYyhlLCBhcnIsIGVsZW1lbnQuaWQpKTtcclxuICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTnVtYmVyQ2FydCgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdudW1iZXItY2FydCcpWzBdLmlubmVySFRNTCA9IGdldERhdGFMb2NhbCgnY291bnQnLCAwKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZEV2ZW50LHVwZGF0ZU51bWJlckNhcnQsdXBkYXRlSXRlbSxnZXREYXRhTG9jYWx9IGZyb20gJy4vaW5kZXguanMnO1xyXG4vLyBnZXQgZGF0YVxyXG5mdW5jdGlvbiBmZXRjaERhdGEoZGF0YSl7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuLy9yZXR1cm4gaHRtbFxyXG5mdW5jdGlvbiByZXR1cm5MaXN0KHByb2R1Y3QpIHtcclxuICBsZXQgaHRtbCA9XHJcbiAgICBgPGxpIGNsYXNzPVwiY29sLTMgY29sLXNtLTYgcHJvZHVjdC1pdGVtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0ICR7cHJvZHVjdC5kaXNjb3VudCAhPTAgPyBgcHJvZHVjdC1kaXNjb3VudGAgOiBcIlwifVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWltZ1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz0ke3Byb2R1Y3QuaW1hZ2V9IGFsdD0ke3Byb2R1Y3QubmFtZX0+PC9hPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3JhbmdlIGJ0bi1hZGQtY2FydFwiPkFkZCB0byBjYXJ0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaW5mb1wiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzPVwicHJvZHVjdC1uYW1lXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+JHtwcm9kdWN0Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1wcmljZVwiPiR7cHJvZHVjdC5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgKHByb2R1Y3QuZGlzY291bnQgIT0gMCkgXHJcbiAgICAgICAgICAgICAgPyAoYDxzcGFuIGNsYXNzPVwicHJvZHVjdC1wcmljZS1kaXNjb3VudFwiPiR7KHByb2R1Y3QucHJpY2UgLSBwcm9kdWN0LnByaWNlICogcHJvZHVjdC5kaXNjb3VudCAvIDEwMCkudG9GaXhlZCgyKX08L3NwYW4+YClcclxuICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgJHsgKHByb2R1Y3QuZGlzY291bnQgIT0gMCkgPyAoYDxwIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtZGlzY291bnRcIj4tJHtwcm9kdWN0LmRpc2NvdW50fSU8L3A+YCkgOiBcIlwifVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+YFxyXG4gIHJldHVybiBodG1sO1xyXG59XHJcbi8vIHJlbmRlciB2aWV3XHJcbmZ1bmN0aW9uIHJlbmRlcihkYXRhKSB7XHJcbiAgLy9saXN0IHByb2R1Y3RcclxuICBsZXQgbGkgPSAnJztcclxuICBmb3IgKGxldCBlbGVtZW50IG9mIGRhdGEpIHtcclxuICAgIGxpICs9IHJldHVybkxpc3QoZWxlbWVudCk7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2R1Y3QtbGlzdCcpWzBdLmlubmVySFRNTCA9IGxpO1xyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZUFkZFRvQ2FydChlLCBkYXRhLCBpZCkge1xyXG4gIGxldCBpdGVtID0gZGF0YS5maW5kKHggPT4geC5pZCA9PSBpZCk7XHJcbiAgbGV0IGNhcnQgPSBnZXREYXRhTG9jYWwoJ2NhcnQnLCBbXSk7XHJcbiAgbGV0IGluZGV4ID0gY2FydC5maW5kSW5kZXgoeCA9PiB4LmlkID09IGlkKTtcclxuICBpZiAoaW5kZXggIT0gLTEpIHtcclxuICAgIHVwZGF0ZUl0ZW0oY2FydCwgaW5kZXgsIFwiK1wiKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBhZGRJdGVtKGNhcnQsIGl0ZW0pO1xyXG4gIH1cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291bnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0Lmxlbmd0aCkpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ251bWJlci1jYXJ0JylbMF0uaW5uZXJIVE1MID0gY2FydC5sZW5ndGg7XHJcbn1cclxuZnVuY3Rpb24gYWRkSXRlbShjYXJ0LCBpdGVtKSB7XHJcbiAgbGV0IGl0ZW1QdXNoID0ge1xyXG4gICAgLi4uaXRlbSxcclxuICAgIHF0eTogMVxyXG4gIH1cclxuICBjYXJ0LnB1c2goaXRlbVB1c2gpO1xyXG59XHJcbi8vZGF0YSBwcm9kdWN0c1xyXG52YXIgcHJvZHVjdHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiAnVC1TaGlydCBTdW1tZXIgVmliZXMnLFxyXG4gICAgaW1hZ2U6ICcuL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdC0xLnBuZycsXHJcbiAgICBwcmljZTogMTE5Ljk5LFxyXG4gICAgZGlzY291bnQ6IDMwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnTG9vc2UgS25pdCAzLzQgU2xlZXZlJyxcclxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3QtMi5wbmcnLFxyXG4gICAgcHJpY2U6IDExOS45OSxcclxuICAgIGRpc2NvdW50OiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiAnQmFzaWMgU2xpbSBGaXQgVC1TaGlydCcsXHJcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTMucG5nJyxcclxuICAgIHByaWNlOiA3OS45OSxcclxuICAgIGRpc2NvdW50OiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBuYW1lOiAnTG9vc2UgVGV4dHVyZWQgVC1TaGlydCcsXHJcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTQucG5nJyxcclxuICAgIHByaWNlOiAxMTkuOTksXHJcbiAgICBkaXNjb3VudDogMCxcclxuICB9XHJcbl1cclxuLy8gZmV0Y2ggYW5kIHJlbmRlciBkYXRhXHJcbnZhciBkYXRhID0gZmV0Y2hEYXRhKHByb2R1Y3RzKTtcclxucmVuZGVyKGRhdGEpO1xyXG5hZGRFdmVudChkYXRhLCAnYnRuLWFkZC1jYXJ0JywgJ2NsaWNrJywgaGFuZGxlQWRkVG9DYXJ0KTtcclxudXBkYXRlTnVtYmVyQ2FydCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9