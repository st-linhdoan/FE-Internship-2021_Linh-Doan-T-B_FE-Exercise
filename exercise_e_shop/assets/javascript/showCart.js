
var listCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
//list cart
if (listCart.length){
  var divContainer = document.createElement("div");
  divContainer.className = "container";
  document.getElementsByClassName("carts")[0].appendChild(divContainer);
  //
  var h3 = document.createElement("h3");
  h3.className = "title";
  var txttitle = document.createTextNode("Cart");
  h3.appendChild(txttitle);
  divContainer.appendChild(h3);
  //
  var divRow = document.createElement("div");
  divRow.className = "row carts-container";
  divContainer.appendChild(divRow)
  //
  var ul = document.createElement("ul");
  ul.className = "col-8 col-sm-12 cart-product";
  divRow.appendChild(ul);
  //
  listCart.forEach(function(element){
    //create li
    var licart = document.createElement("li");
    licart.className = "cart-item";
    ul.appendChild(licart);
    //create div
    var divPro = document.createElement("div");
    divPro.className = "cart-product-inner";
    divPro.id = element.id;
    licart.appendChild(divPro);
    var divPro1 = document.createElement("div");
    divPro1.className = "cart-product-img";
    divPro.appendChild(divPro1);
    //img
    var imgPro = document.createElement("img");
    imgPro.src = element.image;
    divPro1.appendChild(imgPro);
    //div 
    var divPro2 = document.createElement("div");
    divPro2.className = "cart-product-content";
    divPro.appendChild(divPro2);
    var divPro3 = document.createElement("div");
    divPro3.className = "content-desc";
    divPro2.appendChild(divPro3);
    var p1 = document.createElement("p");
    p1.className = "cart-product-name";
    var txxp1 = document.createTextNode(element.name);
    p1.appendChild(txxp1);
    divPro3.appendChild(p1)
    //
    var link1 = document.createElement("a");
    link1.className = "action-delete";
    link1.href = "#";
    // link1.id = element.id;
    var txtL1 = document.createTextNode("Delete");
    link1.appendChild(txtL1);
    divPro3.appendChild(link1);
    //
    var divPro4 = document.createElement("div");
    divPro4.className = "content-detail";
    divPro2.appendChild(divPro4);
    //
    var divPrice = document.createElement("div");
    divPro4.appendChild(divPrice);
    var p2 = document.createElement("p");
    p2.className = "cart-price";
    var txtprice = document.createTextNode((element.price - element.price * element.discount / 100).toFixed(2));
    p2.appendChild(txtprice);
    divPrice.appendChild(p2);
    if(element.discount != 0){
      var priceSale = document.createElement("p");
      priceSale.className = "cart-price-sale";
      var textSale = document.createTextNode(element.price);
      priceSale.appendChild(textSale);
      divPrice.appendChild(priceSale);
    }
    //
    var divPro5 = document.createElement("div");
    divPro4.appendChild(divPro5);
    //
    var divPro6 = document.createElement("div");
    divPro6.className = "cart-qty";
    divPro5.appendChild(divPro6);
    //
    var spanPro1 = document.createElement("span");
    spanPro1.className = "cart-qty-down";
    var textDown = document.createTextNode("-");
    spanPro1.appendChild(textDown);
    divPro6.appendChild(spanPro1);
    //
    var input = document.createElement("input");
    input.type = "text";
    input.min = "1";
    input.value = element.qty;
    input.className = "cart-qty-input";
    divPro6.appendChild(input);
    //
    var spanPro2 = document.createElement("span");
    spanPro2.className = "cart-qty-up";
    var textUp = document.createTextNode("+");
    spanPro2.appendChild(textUp);
    divPro6.appendChild(spanPro2);
    //add event
    link1.addEventListener('click',handleDelete);
    spanPro1.addEventListener("click", handleChangeNumber);
    spanPro2.addEventListener("click", handleChangeNumber);
  });
  //cart total
  //
  var divCol = document.createElement("div");
  divCol.className = "col-4 col-sm-12 cart-total-container";
  divRow.appendChild(divCol);
  //
  var divAddress = document.createElement("div");
  divAddress.className = "address-user";
  divCol.appendChild(divAddress);
  //
  var pAddres = document.createElement("p");
  var txtAddres = document.createTextNode("Address: 363 Nguyen Huu Tho, Hai Chau, Da Nang");
  pAddres.appendChild(txtAddres);
  divAddress.appendChild(pAddres);
  //
  var divTotal = document.createElement("div");
  divTotal.className = "cart-total";
  divCol.appendChild(divTotal);
  //
  var spanTitle = document.createElement("span");
  spanTitle.className = "title-total";
  var txtSpanTitle = document.createTextNode("Total: ");
  spanTitle.appendChild(txtSpanTitle);
  divTotal.appendChild(spanTitle)
  //
  var spanTotal = document.createElement("span");
  spanTotal.className = "total-price";
  divTotal.appendChild(spanTotal);
  //
  var divGroupBtn = document.createElement("div");
  divGroupBtn.className = "btn-group";
  divCol.appendChild(divGroupBtn);
  //
  var btnPay = document.createElement("button");
  btnPay.className = " btn btn-orange";
  var txtPay = document.createTextNode("Pay");
  btnPay.appendChild(txtPay);
  divGroupBtn.appendChild(btnPay);
  //

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
  function handleDelete() {
    var id = this.closest(".cart-product-inner").id;
    var fil = listCart.filter(function (item) { return item.id != id});
    var total = Number(totalPrice().toFixed(2));
    window.location.reload();
    localStorage.setItem("cart",JSON.stringify(fil));
    localStorage.setItem("count", JSON.stringify(fil.length));
  }
  function handleChangeNumber() {
    var id = this.closest(".cart-product-inner").id;
    var index = findIndex(listCart,id);
    var total = Number(totalPrice().toFixed(2));
    console.log((isNaN(total)));
    if(this.className == 'cart-qty-up') {
      this.closest(".cart-qty").children[1].value = listCart[index].qty + 1;
      listCart[index].qty += 1;
      document.getElementsByClassName("total-price")[0].innerHTML = (total + listCart[index].price - listCart[index].price *  listCart[index].discount/100).toFixed(2);
    }
    else{
      if (listCart[index].qty > 1) {
        this.closest(".cart-qty").children[1].value = listCart[index].qty - 1;
        listCart[index].qty -= 1;
        document.getElementsByClassName("total-price")[0].innerHTML = (total - listCart[index].price - listCart[index].price * listCart[index].discount / 100).toFixed(2);;
      }
    }
    localStorage.setItem("cart", JSON.stringify(listCart));
  }
  function totalPrice() {
    var sum = 0;
    listCart.forEach(function(element) {
      sum += (element.price - (element.price * (element.discount/100))) * element.qty;
    });
    return sum;
  }
  document.getElementsByClassName("total-price")[0].innerHTML = totalPrice().toFixed(2);
}
else{
  var divNotification = document.createElement("div");
  divNotification.className = "notification-container text-center";
  document.getElementsByClassName("carts")[0].appendChild(divNotification);
  var imgEmpty = document.createElement("img");
  imgEmpty.src = "https://professionalscareer.com/assets/images/emptycart.png";
  divNotification.appendChild(imgEmpty);
  var br = document.createElement("br");
  divNotification.appendChild(br);
  var btnNoti = document.createElement("a");
  btnNoti.href = "./home.html";
  btnNoti.className = "btn btn-orange";
  var txtBtnNoti = document.createTextNode("Continue to purchase");
  btnNoti.appendChild(txtBtnNoti);
  divNotification.appendChild(btnNoti);
}
document.getElementsByClassName("number-cart")[0].innerHTML = JSON.parse(localStorage.getItem("count"));

