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
/*!***********************************!*\
  !*** ./assets/javascript/cart.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./assets/javascript/index.js");

//update data after handle
function updateData(data) {
  document.getElementsByClassName('total-price')[0].innerHTML = totalPrice(data).toFixed(2);
  localStorage.setItem('cart', JSON.stringify(data));
}
function updateInput(data,index,params) {
  if (typeof params == "number") {
    return document.getElementsByClassName("cart-qty-input")[index].value = params;
  }
  return document.getElementsByClassName("cart-qty-input")[index].value = (params == "+" ? data[index].qty + 1 : data[index].qty - 1);
}
//func delete
function handleDelete(e, data, id) {
  //filter item is id not in listCart
  let fil = data.filter(item => item.id != id );
  window.location.reload();
  // update data
  localStorage.setItem('cart', JSON.stringify(fil));
  localStorage.setItem('count', JSON.stringify(fil.length));
}
//func change quantity when click button increase or deacrease
function handleChangeNumber(e,data,id){
  let pointer = e.target;
  // Get index
  let index = data.findIndex(x => x.id == id);
  //Check is decrease or increase
  if (pointer.className == "cart-qty-up") {
    updateInput(data,index,"+");
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateItem)(data,index,"+");
    updateData(data); 
  } 
  else {
    // Check quantity > 1 to handle
    if (data[index].qty > 1) {
      updateInput(data, index, "-");
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateItem)(data,index,"-");
      updateData(data);
    }
  }
}
//func change quantity when input number
function handleChangeQuantity(e,data,id) {
  // get value input
  let valueNumber = Number(e.target.value);
  // Get index
  let index = data.findIndex(x => x.id == id);
  // number < 1 -> value input = current quantity
  if (valueNumber < 1) {
    updateInput(data, index, data[index].qty);
  }
  // number > 1 -> update quantity
  else {
    updateInput(data,index,valueNumber);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateItem)(data,index,Number(valueNumber));
    updateData(data);
  }
}
// total price
function totalPrice(arr) {
  let sum = 0;
  for (let element of arr) {
    sum += (element.price - (element.price * (element.discount / 100))) * element.qty;
  };
  return sum;
}
//return list product in cart
function returnListCart(item) {
  let html = 
  `
  <li class="cart-item">
    <div class="cart-product-inner" id=${item.id}>
      <div class="cart-product-img">
        <img src=${item.image}>
      </div>
      <div class="cart-product-content">
        <div class="content-desc">
          <p class="cart-product-name">${item.name}</p>
          <a class="action-delete" href="#" onClick=handleDelete(${item.id})>Delete</a>
        </div>
        <div class="content-detail">
          <div>
            <p class="cart-price">${(item.price - item.price * item.discount / 100).toFixed(2)}</p>
            ${item.discount != 0 ? (`<p class="cart-price-sale">${item.price}</p>`) :""}
          </div>
          <div>
            <div class="cart-qty">
              <span class="cart-qty-down">-</span>
              <input type="text" min="1" class="cart-qty-input" value=${item.qty} )>
              <span class="cart-qty-up">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
  `
  return html;
}
//render cart empty
function renderCartEmpty() {
  let html = 
  `
    <div class="notification-container text-center" > 
    <img src="https://professionalscareer.com/assets/images/emptycart.png">
      <br>
      <a href="./home.html" class="btn btn-orange">Continue to purchase</a>
    </div>
  `
  return html;
}
//render view
function render(data) {
  // map data car
  let li = '';
  for (let element of data) {
    li += returnListCart(element);
  };
  document.getElementsByClassName("cart-product")[0].innerHTML = li;
}

function renderHTML(data) {
    //if cart is not null, display cart screen
  if (data.length > 0) {
    render(data);
  }
  else {
    document.getElementsByClassName('carts')[0].innerHTML = renderCartEmpty();
  }
}
//get data
var listCart = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getDataLocal)('cart', []);
//render data
renderHTML(listCart); 
//add event
(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)(listCart,'cart-qty-down','click',handleChangeNumber);
(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)(listCart,'cart-qty-input','change',handleChangeQuantity);
(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)(listCart, 'cart-qty-up','click',handleChangeNumber);
(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)(listCart,'action-delete','click',handleDelete);
// inner HTML
updateData(listCart);
(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateNumberCart)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGVyY2lzZV9lX3Nob3AvLi9hc3NldHMvamF2YXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGVyY2lzZV9lX3Nob3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhlcmNpc2VfZV9zaG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGVyY2lzZV9lX3Nob3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGVyY2lzZV9lX3Nob3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGVyY2lzZV9lX3Nob3AvLi9hc3NldHMvamF2YXNjcmlwdC9jYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNONkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVO0FBQ2QscUI7QUFDQSxHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFEQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRDtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxVQUFVO0FBQ25ELG1FQUFtRSxRQUFRO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywyREFBMkQ7QUFDL0YsY0FBYyxvREFBb0QsV0FBVztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxTQUFTO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBWTtBQUMzQjtBQUNBLHFCO0FBQ0E7QUFDQSxtREFBUTtBQUNSLG1EQUFRO0FBQ1IsbURBQVE7QUFDUixtREFBUTtBQUNSO0FBQ0E7QUFDQSwyREFBZ0IiLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXREYXRhTG9jYWwoZGF0YUxvY2FsLCBndCkge1xyXG4gIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUxvY2FsKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUxvY2FsKSkgOiBndDtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbShjYXJ0LCBpbmRleCwgY2FjdWxhdG9yKSB7XHJcbiAgaWYgKHR5cGVvZiBjYWN1bGF0b3IgPT0gXCJudW1iZXJcIikge1xyXG4gICAgcmV0dXJuIGNhcnRbaW5kZXhdLnF0eSA9IGNhY3VsYXRvcjtcclxuICB9XHJcbiAgcmV0dXJuIGNhY3VsYXRvciA9PSBcIitcIiA/IGNhcnRbaW5kZXhdLnF0eSArPSAxIDogY2FydFtpbmRleF0ucXR5IC09IDE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50KGFyciwgY2xhc3NOYW1lLCBldmVudEZ1YywgbmFtZUZ1bmMpIHtcclxuICBhcnIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRGdWMsIChlKSA9PiBuYW1lRnVuYyhlLCBhcnIsIGVsZW1lbnQuaWQpKTtcclxuICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTnVtYmVyQ2FydCgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdudW1iZXItY2FydCcpWzBdLmlubmVySFRNTCA9IGdldERhdGFMb2NhbCgnY291bnQnLCAwKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7YWRkRXZlbnQsZ2V0RGF0YUxvY2FsLHVwZGF0ZUl0ZW0sIHVwZGF0ZU51bWJlckNhcnR9IGZyb20gJy4vaW5kZXguanMnXHJcbi8vdXBkYXRlIGRhdGEgYWZ0ZXIgaGFuZGxlXHJcbmZ1bmN0aW9uIHVwZGF0ZURhdGEoZGF0YSkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvdGFsLXByaWNlJylbMF0uaW5uZXJIVE1MID0gdG90YWxQcmljZShkYXRhKS50b0ZpeGVkKDIpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZUlucHV0KGRhdGEsaW5kZXgscGFyYW1zKSB7XHJcbiAgaWYgKHR5cGVvZiBwYXJhbXMgPT0gXCJudW1iZXJcIikge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJ0LXF0eS1pbnB1dFwiKVtpbmRleF0udmFsdWUgPSBwYXJhbXM7XHJcbiAgfVxyXG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FydC1xdHktaW5wdXRcIilbaW5kZXhdLnZhbHVlID0gKHBhcmFtcyA9PSBcIitcIiA/IGRhdGFbaW5kZXhdLnF0eSArIDEgOiBkYXRhW2luZGV4XS5xdHkgLSAxKTtcclxufVxyXG4vL2Z1bmMgZGVsZXRlXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZShlLCBkYXRhLCBpZCkge1xyXG4gIC8vZmlsdGVyIGl0ZW0gaXMgaWQgbm90IGluIGxpc3RDYXJ0XHJcbiAgbGV0IGZpbCA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPSBpZCApO1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAvLyB1cGRhdGUgZGF0YVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoZmlsKSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvdW50JywgSlNPTi5zdHJpbmdpZnkoZmlsLmxlbmd0aCkpO1xyXG59XHJcbi8vZnVuYyBjaGFuZ2UgcXVhbnRpdHkgd2hlbiBjbGljayBidXR0b24gaW5jcmVhc2Ugb3IgZGVhY3JlYXNlXHJcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZU51bWJlcihlLGRhdGEsaWQpe1xyXG4gIGxldCBwb2ludGVyID0gZS50YXJnZXQ7XHJcbiAgLy8gR2V0IGluZGV4XHJcbiAgbGV0IGluZGV4ID0gZGF0YS5maW5kSW5kZXgoeCA9PiB4LmlkID09IGlkKTtcclxuICAvL0NoZWNrIGlzIGRlY3JlYXNlIG9yIGluY3JlYXNlXHJcbiAgaWYgKHBvaW50ZXIuY2xhc3NOYW1lID09IFwiY2FydC1xdHktdXBcIikge1xyXG4gICAgdXBkYXRlSW5wdXQoZGF0YSxpbmRleCxcIitcIik7XHJcbiAgICB1cGRhdGVJdGVtKGRhdGEsaW5kZXgsXCIrXCIpO1xyXG4gICAgdXBkYXRlRGF0YShkYXRhKTsgXHJcbiAgfSBcclxuICBlbHNlIHtcclxuICAgIC8vIENoZWNrIHF1YW50aXR5ID4gMSB0byBoYW5kbGVcclxuICAgIGlmIChkYXRhW2luZGV4XS5xdHkgPiAxKSB7XHJcbiAgICAgIHVwZGF0ZUlucHV0KGRhdGEsIGluZGV4LCBcIi1cIik7XHJcbiAgICAgIHVwZGF0ZUl0ZW0oZGF0YSxpbmRleCxcIi1cIik7XHJcbiAgICAgIHVwZGF0ZURhdGEoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vZnVuYyBjaGFuZ2UgcXVhbnRpdHkgd2hlbiBpbnB1dCBudW1iZXJcclxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlUXVhbnRpdHkoZSxkYXRhLGlkKSB7XHJcbiAgLy8gZ2V0IHZhbHVlIGlucHV0XHJcbiAgbGV0IHZhbHVlTnVtYmVyID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyBHZXQgaW5kZXhcclxuICBsZXQgaW5kZXggPSBkYXRhLmZpbmRJbmRleCh4ID0+IHguaWQgPT0gaWQpO1xyXG4gIC8vIG51bWJlciA8IDEgLT4gdmFsdWUgaW5wdXQgPSBjdXJyZW50IHF1YW50aXR5XHJcbiAgaWYgKHZhbHVlTnVtYmVyIDwgMSkge1xyXG4gICAgdXBkYXRlSW5wdXQoZGF0YSwgaW5kZXgsIGRhdGFbaW5kZXhdLnF0eSk7XHJcbiAgfVxyXG4gIC8vIG51bWJlciA+IDEgLT4gdXBkYXRlIHF1YW50aXR5XHJcbiAgZWxzZSB7XHJcbiAgICB1cGRhdGVJbnB1dChkYXRhLGluZGV4LHZhbHVlTnVtYmVyKTtcclxuICAgIHVwZGF0ZUl0ZW0oZGF0YSxpbmRleCxOdW1iZXIodmFsdWVOdW1iZXIpKTtcclxuICAgIHVwZGF0ZURhdGEoZGF0YSk7XHJcbiAgfVxyXG59XHJcbi8vIHRvdGFsIHByaWNlXHJcbmZ1bmN0aW9uIHRvdGFsUHJpY2UoYXJyKSB7XHJcbiAgbGV0IHN1bSA9IDA7XHJcbiAgZm9yIChsZXQgZWxlbWVudCBvZiBhcnIpIHtcclxuICAgIHN1bSArPSAoZWxlbWVudC5wcmljZSAtIChlbGVtZW50LnByaWNlICogKGVsZW1lbnQuZGlzY291bnQgLyAxMDApKSkgKiBlbGVtZW50LnF0eTtcclxuICB9O1xyXG4gIHJldHVybiBzdW07XHJcbn1cclxuLy9yZXR1cm4gbGlzdCBwcm9kdWN0IGluIGNhcnRcclxuZnVuY3Rpb24gcmV0dXJuTGlzdENhcnQoaXRlbSkge1xyXG4gIGxldCBodG1sID0gXHJcbiAgYFxyXG4gIDxsaSBjbGFzcz1cImNhcnQtaXRlbVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcnQtcHJvZHVjdC1pbm5lclwiIGlkPSR7aXRlbS5pZH0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXByb2R1Y3QtaW1nXCI+XHJcbiAgICAgICAgPGltZyBzcmM9JHtpdGVtLmltYWdlfT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWRlc2NcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2FydC1wcm9kdWN0LW5hbWVcIj4ke2l0ZW0ubmFtZX08L3A+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cImFjdGlvbi1kZWxldGVcIiBocmVmPVwiI1wiIG9uQ2xpY2s9aGFuZGxlRGVsZXRlKCR7aXRlbS5pZH0pPkRlbGV0ZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1kZXRhaWxcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FydC1wcmljZVwiPiR7KGl0ZW0ucHJpY2UgLSBpdGVtLnByaWNlICogaXRlbS5kaXNjb3VudCAvIDEwMCkudG9GaXhlZCgyKX08L3A+XHJcbiAgICAgICAgICAgICR7aXRlbS5kaXNjb3VudCAhPSAwID8gKGA8cCBjbGFzcz1cImNhcnQtcHJpY2Utc2FsZVwiPiR7aXRlbS5wcmljZX08L3A+YCkgOlwiXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXF0eVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FydC1xdHktZG93blwiPi08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWluPVwiMVwiIGNsYXNzPVwiY2FydC1xdHktaW5wdXRcIiB2YWx1ZT0ke2l0ZW0ucXR5fSApPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FydC1xdHktdXBcIj4rPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGk+XHJcbiAgYFxyXG4gIHJldHVybiBodG1sO1xyXG59XHJcbi8vcmVuZGVyIGNhcnQgZW1wdHlcclxuZnVuY3Rpb24gcmVuZGVyQ2FydEVtcHR5KCkge1xyXG4gIGxldCBodG1sID0gXHJcbiAgYFxyXG4gICAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1jb250YWluZXIgdGV4dC1jZW50ZXJcIiA+IFxyXG4gICAgPGltZyBzcmM9XCJodHRwczovL3Byb2Zlc3Npb25hbHNjYXJlZXIuY29tL2Fzc2V0cy9pbWFnZXMvZW1wdHljYXJ0LnBuZ1wiPlxyXG4gICAgICA8YnI+XHJcbiAgICAgIDxhIGhyZWY9XCIuL2hvbWUuaHRtbFwiIGNsYXNzPVwiYnRuIGJ0bi1vcmFuZ2VcIj5Db250aW51ZSB0byBwdXJjaGFzZTwvYT5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxuICByZXR1cm4gaHRtbDtcclxufVxyXG4vL3JlbmRlciB2aWV3XHJcbmZ1bmN0aW9uIHJlbmRlcihkYXRhKSB7XHJcbiAgLy8gbWFwIGRhdGEgY2FyXHJcbiAgbGV0IGxpID0gJyc7XHJcbiAgZm9yIChsZXQgZWxlbWVudCBvZiBkYXRhKSB7XHJcbiAgICBsaSArPSByZXR1cm5MaXN0Q2FydChlbGVtZW50KTtcclxuICB9O1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJ0LXByb2R1Y3RcIilbMF0uaW5uZXJIVE1MID0gbGk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhUTUwoZGF0YSkge1xyXG4gICAgLy9pZiBjYXJ0IGlzIG5vdCBudWxsLCBkaXNwbGF5IGNhcnQgc2NyZWVuXHJcbiAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgcmVuZGVyKGRhdGEpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcnRzJylbMF0uaW5uZXJIVE1MID0gcmVuZGVyQ2FydEVtcHR5KCk7XHJcbiAgfVxyXG59XHJcbi8vZ2V0IGRhdGFcclxudmFyIGxpc3RDYXJ0ID0gZ2V0RGF0YUxvY2FsKCdjYXJ0JywgW10pO1xyXG4vL3JlbmRlciBkYXRhXHJcbnJlbmRlckhUTUwobGlzdENhcnQpOyBcclxuLy9hZGQgZXZlbnRcclxuYWRkRXZlbnQobGlzdENhcnQsJ2NhcnQtcXR5LWRvd24nLCdjbGljaycsaGFuZGxlQ2hhbmdlTnVtYmVyKTtcclxuYWRkRXZlbnQobGlzdENhcnQsJ2NhcnQtcXR5LWlucHV0JywnY2hhbmdlJyxoYW5kbGVDaGFuZ2VRdWFudGl0eSk7XHJcbmFkZEV2ZW50KGxpc3RDYXJ0LCAnY2FydC1xdHktdXAnLCdjbGljaycsaGFuZGxlQ2hhbmdlTnVtYmVyKTtcclxuYWRkRXZlbnQobGlzdENhcnQsJ2FjdGlvbi1kZWxldGUnLCdjbGljaycsaGFuZGxlRGVsZXRlKTtcclxuLy8gaW5uZXIgSFRNTFxyXG51cGRhdGVEYXRhKGxpc3RDYXJ0KTtcclxudXBkYXRlTnVtYmVyQ2FydCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9