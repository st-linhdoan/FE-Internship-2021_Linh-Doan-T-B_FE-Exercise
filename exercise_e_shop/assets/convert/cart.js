import { addEvent, getDataLocal, updateItem, updateNumberCart } from './index.js';
function updateData(data) {
    document.getElementsByClassName('total-price')[0].innerHTML = totalPrice(data).toFixed(2);
    localStorage.setItem('cart', JSON.stringify(data));
}
function updateInput(data, index, params) {
    if (typeof params == "number") {
        return document.getElementsByClassName("cart-qty-input")[index].value = params;
    }
    return document.getElementsByClassName("cart-qty-input")[index].value = (params == "+" ? data[index].qty + 1 : data[index].qty - 1);
}
function handleDelete(e, data, id) {
    let fil = data.filter(item => item.id != id);
    window.location.reload();
    localStorage.setItem('cart', JSON.stringify(fil));
    localStorage.setItem('count', JSON.stringify(fil.length));
}
function handleChangeNumber(e, data, id) {
    let pointer = e.target;
    let index = data.findIndex(x => x.id == id);
    if (pointer.className == "cart-qty-up") {
        updateInput(data, index, "+");
        updateItem(data, index, "+");
        updateData(data);
    }
    else {
        if (data[index].qty > 1) {
            updateInput(data, index, "-");
            updateItem(data, index, "-");
            updateData(data);
        }
    }
}
function handleChangeQuantity(e, data, id) {
    let valueNumber = Number(e.target.value);
    let index = data.findIndex(x => x.id == id);
    if (valueNumber < 1) {
        updateInput(data, index, data[index].qty);
    }
    else {
        updateInput(data, index, valueNumber);
        updateItem(data, index, Number(valueNumber));
        updateData(data);
    }
}
function totalPrice(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += (element.price - (element.price * (element.discount / 100))) * element.qty;
    }
    ;
    return sum;
}
function returnListCart(item) {
    let html = `
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
            ${item.discount != 0 ? (`<p class="cart-price-sale">${item.price}</p>`) : ""}
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
  `;
    return html;
}
function renderCartEmpty() {
    let html = `
    <div class="notification-container text-center" > 
    <img src="https://professionalscareer.com/assets/images/emptycart.png">
      <br>
      <a href="./home.html" class="btn btn-orange">Continue to purchase</a>
    </div>
  `;
    return html;
}
function render(data) {
    let li = '';
    for (let element of data) {
        li += returnListCart(element);
    }
    ;
    document.getElementsByClassName("cart-product")[0].innerHTML = li;
}
function renderHTML(data) {
    if (data.length > 0) {
        render(data);
    }
    else {
        document.getElementsByClassName('carts')[0].innerHTML = renderCartEmpty();
    }
}
var listCart = getDataLocal('cart', []);
renderHTML(listCart);
addEvent(listCart, 'cart-qty-down', 'click', handleChangeNumber);
addEvent(listCart, 'cart-qty-input', 'change', handleChangeQuantity);
addEvent(listCart, 'cart-qty-up', 'click', handleChangeNumber);
addEvent(listCart, 'action-delete', 'click', handleDelete);
updateData(listCart);
updateNumberCart();
