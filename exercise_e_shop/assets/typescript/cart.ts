import { addEvent, getDataLocal, updateItem, updateNumberCart } from './index.js';
import { IProductCart } from './interface.js'
//update data after handle
function updateData(data: IProductCart[]):void {
  document.getElementsByClassName('total-price')[0].innerHTML = totalPrice(data).toFixed(2);
  localStorage.setItem('cart', JSON.stringify(data));
}
function updateInput(data: IProductCart[], index: number, params: string | number):number {
  let view: any = document.getElementsByClassName("cart-qty-input");
  if (typeof params === "number") {
    return view[index].value = params;
  }
  return view[index].value = (params === "+" ? data[index].qty + 1 : data[index].qty - 1);
}
//func delete
function handleDelete(e: any, data: IProductCart[], id: number):void {
  //filter item is id not in listCart
  let fil:IProductCart[] = data.filter(item => item.id != id);
  window.location.reload();
  // update data
  localStorage.setItem('cart', JSON.stringify(fil));
  localStorage.setItem('count', JSON.stringify(fil.length));
}
//func change quantity when click button increase or deacrease
function handleChangeNumber(e: any, data: IProductCart[], id: number):void {
  let pointer:any = e.target;
  // Get index
  let index:number = data.findIndex(x => x.id === id);
  //Check is decrease or increase
  if (pointer.className === "cart-qty-up") {
    updateInput(data, index, "+");
    updateItem(data, index, "+");
    updateData(data);
  }
  else {
    // Check quantity > 1 to handle
    if (data[index].qty > 1) {
      updateInput(data, index, "-");
      updateItem(data, index, "-");
      updateData(data);
    }
  }
}
//func change quantity when input number
function handleChangeQuantity(e: any, data: IProductCart[], id: number):void {
  // get value input
  let valueNumber:number = Number(e.target.value);
  // Get index
  let index:number = data.findIndex(x => x.id === id);
  // number < 1 -> value input = current quantity
  if (valueNumber < 1) {
    updateInput(data, index, data[index].qty);
  }
  // number > 1 -> update quantity
  else {
    updateInput(data, index, valueNumber);
    updateItem(data, index, Number(valueNumber));
    updateData(data);
  }
}
// total price
function totalPrice(arr: IProductCart[]):number {
  let sum:number = 0;
  for (let element of arr) {
    sum += (element.price - (element.price * (element.discount / 100))) * element.qty;
  };
  return sum;
}
//return list product in cart
function returnListCart(item: IProductCart):string {
  let html:string =
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
  `
  return html;
}
//render cart empty
function renderCartEmpty():string {
  let html:string =
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
function render(data: IProductCart[]):void {
  // map data car
  let li:string = '';
  for (let element of data) {
    li += returnListCart(element);
  };
  document.getElementsByClassName("cart-product")[0].innerHTML = li;
}

function renderHTML(data: IProductCart[]):void {
  //if cart is not null, display cart screen
  if (data.length > 0) {
    render(data);
  }
  else {
    document.getElementsByClassName('carts')[0].innerHTML = renderCartEmpty();
  }
}
//get data
var listCart:IProductCart[] = getDataLocal('cart', []);
//render data
renderHTML(listCart);
//add event
addEvent(listCart, 'cart-qty-down', 'click', handleChangeNumber);
addEvent(listCart, 'cart-qty-input', 'change', handleChangeQuantity);
addEvent(listCart, 'cart-qty-up', 'click', handleChangeNumber);
addEvent(listCart, 'action-delete', 'click', handleDelete);
// inner HTML
updateData(listCart);
updateNumberCart();
