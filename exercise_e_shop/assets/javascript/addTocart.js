  var product = [
  {
    id: 1,
    name: "T-Shirt Summer Vibes",
    image:"./assets/images/product-1.svg",
    price:119.99,
    discount: 30,
  },
  {
    id: 2,
    name: "Loose Knit 3/4 Sleeve",
    image: "./assets/images/product-2.svg",
    price: 119.99,
    discount: 0,
  },
  {
    id: 3,
    name: "Basic Slim Fit T-Shirt",
    image: "./assets/images/product-3.svg",
    price: 79.99,
    discount: 0,
  },
  {
    id: 4,
    name: "Loose Textured T-Shirt",
    image: "./assets/images/product-4.svg",
    price: 119.99,
    discount: 0,
  }
]
//list product

product.forEach(function(element){
  //create element li
  var li = document.createElement("li");
  li.className = "col-3 col-sm-6 product-item";
  //create element div 1
  var div1 = document.createElement("div");
  div1.className = element.discount == 0 ? "product" : "product product-discount";
  li.appendChild(div1);
  //create element div2
  var div2 = document.createElement("div");
  div2.className = "product-img";
  div1.appendChild(div2);
  //create element a
  var a = document.createElement("a");
  a.href = "#";
  div2.appendChild(a);
  //create elemetn img
  var img = document.createElement("img");
  img.src = element.image;
  img.alt = element.name;
  a.appendChild(img);
// create element button
  var button = document.createElement("button");
  button.className = "btn btn-orange btn-add-cart";
  button.id = element.id;
  var txtbtn = document.createTextNode("Add to cart");
  button.appendChild(txtbtn);
  div2.appendChild(button);
//create element div3
  var div3 = document.createElement("div");
  div3.className = "product-info";
  div1.appendChild(div3);
  //create element h4
  var h4 = document.createElement("h4");
  h4.className = "product-name";
  div3.appendChild(h4);
  //create link
  var a2 = document.createElement("a");
  a2.href = "#";
  var texta2 = document.createTextNode(element.name);
  a2.appendChild(texta2);
  h4.appendChild(a2);

  //create elemetn img
  var div4 = document.createElement("div");
  div3.appendChild(div4);
  //create span1
  var span1 = document.createElement("span");
  span1.className = "product-price";
  var txt1 = document.createTextNode(element.price);
  span1.appendChild(txt1);
  div4.appendChild(span1);
  if (element.discount != 0) {
    //create span2
    var span2 = document.createElement("span");
    span2.className = "product-price-discount";
    var priceDiscount = element.price - element.price * element.discount / 100;
    var txt2 = document.createTextNode(priceDiscount);
    span2.appendChild(txt2);
    div4.appendChild(span2);
    //create p
    var p = document.createElement("p");
    p.className = "badge badge-discount";
    var txtp = document.createTextNode('-'+ element.discount +'%');
    p.appendChild(txtp);
    div1.appendChild(p);
  }
  document.getElementsByClassName("product-list")[0].appendChild(li);
  //function add to cart
  button.addEventListener("click", handleAddToCart);
})

function find(arr,id) {
  var value = '';
  arr.forEach((item)=>{
    if(item.id == id){
      value = item;
    }
  })
  return value;
}

function findIndex(arr,id) {
  if(arr){
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

function handleAddToCart() { 
  var item = find(product,this.id);
  var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  var index = findIndex(cart,this.id);
  if(index != -1){
    cart[index].qty += 1;
  }
  else{
    var itemPush ={
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      discount: item.discount,
      qty:1
    }
    cart.push(itemPush);
  }
  localStorage.setItem('cart',JSON.stringify(cart));
  localStorage.setItem("count",JSON.stringify(cart.length));
  document.getElementsByClassName("number-cart")[0].innerHTML = cart.length;
}
document.getElementsByClassName("number-cart")[0].innerHTML = JSON.parse(localStorage.getItem("count"));

