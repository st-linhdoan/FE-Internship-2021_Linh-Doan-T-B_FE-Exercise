export function addEvent(arr, className, eventFuc, nameFunc) {
  arr.forEach((element, index) => {
    return document.getElementsByClassName(className)[index].addEventListener(eventFuc,(e) => nameFunc(e,arr, element.id));
  });
}
//fecth data
function getDataLocal(dataLocal, gt) {
  // check data local , if not null -> parse else assign gt
  var data = localStorage.getItem(dataLocal) ? JSON.parse(localStorage.getItem(dataLocal)) : gt;
  return data;
}
//update data after handle
function updateData() {
  document.getElementsByClassName('total-price')[0].innerHTML = totalPrice(listCart).toFixed(2);
  localStorage.setItem('cart', JSON.stringify(listCart));
}
//func delete
function handleDelete(e, data, id) {
  // get id
  var id = e.target.closest('.cart-product-inner').id;
  //filter item is id not in listCart
  var fil = data.filter(item => item.id != id );
  window.location.reload();
  // update data
  localStorage.setItem('cart', JSON.stringify(fil));
  localStorage.setItem('count', JSON.stringify(fil.length));
}
//func change quantity when click button increase or deacrease
function handleChangeNumber(e,data,id){
  // Get index
  var index = data.findIndex(x => x.id == id);
  //Check is decrease or increase
  if (e.target.className == "cart-qty-up") {
    document.getElementsByClassName("cart-qty-input")[index].value = data[index].qty + 1;
    data[index].qty += 1;
    updateData(); 
  } 
  else {
    // Check quantity > 1 to handle
    if (data[index].qty > 1) {
      document.getElementsByClassName("cart-qty-input")[index].value = data[index].qty - 1;
      data[index].qty -= 1;
      updateData();
    }
  }
}
//func change quantity when input number
function handleChangeQuantity(e,data,id) {
  // get value input
  var valueNumber = e.target.value;
  // Get index
  var index = data.findIndex(x => x.id == id);
  // number < 1 -> value input = current quantity
  if (valueNumber < 1) {
    document.getElementsByClassName("cart-qty-input")[index].value = Number(data[index].qty);
  }
  // number > 1 -> update quantity
  else {
    document.getElementsByClassName("cart-qty-input")[index].value = valueNumber;
    data[index].qty = Number(valueNumber);
    updateData();
  }
}
// total price
function totalPrice(arr) {
  var sum = 0;
  arr.forEach(function (element) {
    sum += (element.price - (element.price * (element.discount / 100))) * element.qty;
  });
  return sum;
}
//return list product in cart
function returnListCart(item) {
  var html = 
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
  var html = 
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
  // map data cart
  var li = '';
  data.forEach(element => {
    li += returnListCart(element);
  });
  document.getElementsByClassName("cart-product")[0].innerHTML = li;
}

function renderHTML(data) {
    //if cart is not null, display cart screen
  if(data.length > 0){
    render(data);
  }
  else {
    document.getElementsByClassName('carts')[0].innerHTML = renderCartEmpty();
  }
}
//get data
var listCart = getDataLocal('cart', []);
//render data
renderHTML(listCart); 
//add event
addEvent(listCart,'cart-qty-down','click',handleChangeNumber);
addEvent(listCart,'cart-qty-input','change',handleChangeQuantity);
addEvent(listCart, 'cart-qty-up','click',handleChangeNumber);
addEvent(listCart,'action-delete','click',handleDelete);
// inner HTML
document.getElementsByClassName('total-price')[0].innerHTML = totalPrice(listCart).toFixed(2);
document.getElementsByClassName('number-cart')[0].innerHTML = getDataLocal('count',0);
