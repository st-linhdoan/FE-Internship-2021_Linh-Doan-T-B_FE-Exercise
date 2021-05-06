function getDataLocal(dataLocal, gt) {
  // check data local , if not null -> parse else assign gt
  var data = localStorage.getItem(dataLocal) ? JSON.parse(localStorage.getItem(dataLocal)) : gt;
  return data;
}
function findIndex(arr, id) {
  // check arr 
  if (arr) {
    // if arr not null, assign index = -1
    var indexArr = -1;
    // for array, check if id coincide return position 
    arr.forEach((item, index) => {
      if (item.id == id) {
        indexArr = index;
      }
    })
    return indexArr;
  }
  // if arr null return -1
  return -1;
}
function updateData() {
  document.getElementsByClassName('total-price')[0].innerHTML = totalPrice(listCart).toFixed(2);
  localStorage.setItem('cart', JSON.stringify(listCart));
}

//func delete
function handleDelete() {
  // get id
  var id = this.closest('.cart-product-inner').id;
  //filter item is id not in listCart
  var fil = listCart.filter(function (item) { return item.id != id });
  window.location.reload();
  // update data
  localStorage.setItem('cart', JSON.stringify(fil));
  localStorage.setItem('count', JSON.stringify(fil.length));
}
//func change quantity when click button increase or deacrease
function handleChangeNumber() {
  // Get id
  var id = this.closest('.cart-product-inner').id;
  // Get index
  var index = findIndex(listCart, id);
  // Check is decrease or increase
  if (this.className == 'cart-qty-up') {
    this.closest('.cart-qty').children[1].value = listCart[index].qty + 1;
    listCart[index].qty += 1;
    updateData();
  }
  else {
    // Check quantity > 1 to handle
    if (listCart[index].qty > 1) {
      this.closest('.cart-qty').children[1].value = listCart[index].qty - 1;
      listCart[index].qty -= 1;
      updateData();
    }
  }
}
//func change quantity when input number
function handleChangeQuantity(e) {
  // get value input
  var valueNumber = e.target.value;
  // get id
  var id = this.closest('.cart-product-inner').id;
  //get index
  var index = findIndex(listCart, id);
  // number < 1 -> value input = current quantity
  if (valueNumber < 1) {
    this.closest('.cart-qty').children[1].value = Number(listCart[index].qty);
  }
  // number > 1 -> update quantity
  else {
    this.closest('.cart-qty').children[1].value = valueNumber;
    listCart[index].qty = Number(valueNumber);
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
//render view
function render(data) {
  //if cart is not null, display cart screen
  if (listCart.length) {
    // create div container
    var divContainer = document.createElement('div');
    divContainer.className = 'container';
    document.getElementsByClassName('carts')[0].appendChild(divContainer);
    // create element h3 to wrap title cart
    var h3 = document.createElement('h3');
    h3.className = 'title';
    var txttitle = document.createTextNode('Cart');
    h3.appendChild(txttitle);
    divContainer.appendChild(h3);
    //create div row
    var divRow = document.createElement('div');
    divRow.className = 'row carts-container';
    divContainer.appendChild(divRow)
    // create ul.cart-product
    var ul = document.createElement('ul');
    ul.className = 'col-8 col-sm-12 cart-product';
    divRow.appendChild(ul);
    // map data cart
    data.forEach(function (element) {
      //Create li to wrap item cart
      var licart = document.createElement('li');
      licart.className = 'cart-item';
      ul.appendChild(licart);
      //create div to wrap content product cart
      var divPro = document.createElement('div');
      divPro.className = 'cart-product-inner';
      divPro.id = element.id;
      licart.appendChild(divPro);
      //create div to wrap product img
      var divPro1 = document.createElement('div');
      divPro1.className = 'cart-product-img';
      divPro.appendChild(divPro1);
      // create element img
      var imgPro = document.createElement('img');
      imgPro.src = element.image;
      divPro1.appendChild(imgPro);
      // create div to wrap product content
      var divPro2 = document.createElement('div');
      divPro2.className = 'cart-product-content';
      divPro.appendChild(divPro2);
      // create div to wrap content detail
      var divPro3 = document.createElement('div');
      divPro3.className = 'content-desc';
      divPro2.appendChild(divPro3);
      //create element to display product name
      var p1 = document.createElement('p');
      p1.className = 'cart-product-name';
      var txxp1 = document.createTextNode(element.name);
      p1.appendChild(txxp1);
      divPro3.appendChild(p1)
      // create element a to display action delete
      var link1 = document.createElement('a');
      link1.className = 'action-delete';
      link1.href = '#';
      var txtL1 = document.createTextNode('Delete');
      link1.appendChild(txtL1);
      divPro3.appendChild(link1);
      // create div to wrap content detail
      var divPro4 = document.createElement('div');
      divPro4.className = 'content-detail';
      divPro2.appendChild(divPro4);
      // create div to wrap content price
      var divPrice = document.createElement('div');
      divPro4.appendChild(divPrice);
      // create element p to display price
      var p2 = document.createElement('p');
      p2.className = 'cart-price';
      var txtprice = document.createTextNode((element.price - element.price * element.discount / 100).toFixed(2));
      p2.appendChild(txtprice);
      divPrice.appendChild(p2);
      // if discount # 0 display badge discount
      if (element.discount != 0) {
        var priceSale = document.createElement('p');
        priceSale.className = 'cart-price-sale';
        var textSale = document.createTextNode(element.price);
        priceSale.appendChild(textSale);
        divPrice.appendChild(priceSale);
      }
      // create element div to wrap input change quantity
      var divPro5 = document.createElement('div');
      divPro4.appendChild(divPro5);
      var divPro6 = document.createElement('div');
      divPro6.className = 'cart-qty';
      divPro5.appendChild(divPro6);
      // create element span to wrap button decrease
      var spanPro1 = document.createElement('span');
      spanPro1.className = 'cart-qty-down';
      var textDown = document.createTextNode('-');
      spanPro1.appendChild(textDown);
      divPro6.appendChild(spanPro1);
      // create element span to wrap input quantity
      var input = document.createElement('input');
      input.type = 'text';
      input.min = '1';
      input.value = element.qty;
      input.className = 'cart-qty-input';
      divPro6.appendChild(input);
      // create element span to wrap button increase
      var spanPro2 = document.createElement('span');
      spanPro2.className = 'cart-qty-up';
      var textUp = document.createTextNode('+');
      spanPro2.appendChild(textUp);
      divPro6.appendChild(spanPro2);
      // Add event
      input.addEventListener('change', handleChangeQuantity)
      link1.addEventListener('click', handleDelete);
      spanPro1.addEventListener('click', handleChangeNumber);
      spanPro2.addEventListener('click', handleChangeNumber);
    });
    // Cart total
    // Create element container
    var divCol = document.createElement('div');
    divCol.className = 'col-4 col-sm-12 cart-total-container';
    divRow.appendChild(divCol);
    // Create element to wrap info user
    var divAddress = document.createElement('div');
    divAddress.className = 'address-user';
    divCol.appendChild(divAddress);
    // create element p to display address user
    var pAddres = document.createElement('p');
    var txtAddres = document.createTextNode('Address: 363 Nguyen Huu Tho, Hai Chau, Da Nang');
    pAddres.appendChild(txtAddres);
    divAddress.appendChild(pAddres);
    // create element div to wrap cart total
    var divTotal = document.createElement('div');
    divTotal.className = 'cart-total';
    divCol.appendChild(divTotal);
    // create element span to display title total
    var spanTitle = document.createElement('span');
    spanTitle.className = 'title-total';
    var txtSpanTitle = document.createTextNode('Total: ');
    spanTitle.appendChild(txtSpanTitle);
    divTotal.appendChild(spanTitle)
    // create element span to display total price
    var spanTotal = document.createElement('span');
    spanTotal.className = 'total-price';
    divTotal.appendChild(spanTotal);
    // create element to wrap button
    var divGroupBtn = document.createElement('div');
    divGroupBtn.className = 'btn-group';
    divCol.appendChild(divGroupBtn);
    // create element button
    var btnPay = document.createElement('button');
    btnPay.className = ' btn btn-orange';
    var txtPay = document.createTextNode('Pay');
    btnPay.appendChild(txtPay);
    divGroupBtn.appendChild(btnPay);
  }
  // cart is null, display screen cart empty
  else {
    //create div 
    var divNotification = document.createElement('div');
    divNotification.className = 'notification-container text-center';
    document.getElementsByClassName('carts')[0].appendChild(divNotification);
    // create img to notification 
    var imgEmpty = document.createElement('img');
    imgEmpty.src = 'https://professionalscareer.com/assets/images/emptycart.png';
    divNotification.appendChild(imgEmpty);
    var br = document.createElement('br');
    divNotification.appendChild(br);
    // create button to back home
    var btnNoti = document.createElement('a');
    btnNoti.href = './home.html';
    btnNoti.className = 'btn btn-orange';
    var txtBtnNoti = document.createTextNode('Continue to purchase');
    btnNoti.appendChild(txtBtnNoti);
    //append 
    divNotification.appendChild(btnNoti);
  }
}
//get data
var listCart = getDataLocal('cart', []);
//render data
render(listCart); 
// inner HTML
document.getElementsByClassName('total-price')[0].innerHTML = totalPrice(listCart).toFixed(2);
document.getElementsByClassName('number-cart')[0].innerHTML = getDataLocal('count',0);
