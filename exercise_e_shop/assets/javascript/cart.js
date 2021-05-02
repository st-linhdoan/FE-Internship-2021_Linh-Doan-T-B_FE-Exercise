  var product = [
  {
    id: 1,
    name: "T-Shirt Summer Vibes",
    image:"./assets/images/product-1.svg",
    price:"119.99",
    discount: 30,
  },
  {
    id: 2,
    name: "Loose Knit 3/4 Sleeve",
    image: "./assets/images/product-2.svg",
    price: "119.99",
    discount: 0,
  },
  {
    id: 3,
    name: "Basic Slim Fit T-Shirt",
    image: "./assets/images/product-3.svg",
    price: "79.99",
    discount: 0,
  },
  {
    id: 4,
    name: "Loose Textured T-Shirt",
    image: "./assets/images/product-4.svg",
    price: "119.99",
    discount: 0,
  }
]
product.forEach(element => {
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
  a.appendChild(img);

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
  var txt1 = document.createTextNode(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD' }).format(element.price));
  span1.appendChild(txt1);
  div4.appendChild(span1);
  if (element.discount != 0) {
    //create span2
    var span2 = document.createElement("span");
    span2.className = "product-price-discount";
    var priceDiscount = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD' }).format(element.price - element.price * element.discount / 100);
    var txt2 = document.createTextNode(priceDiscount);
    span2.appendChild(txt2);
    div4.appendChild(span2);
    //create p
    var p = document.createElement("p");
    p.className = "badge badge-discount";
    var txtp = document.createTextNode(`-${element.discount} %`);
    p.appendChild(txtp);
    div1.appendChild(p);
  }
  document.getElementsByClassName("product-list")[0].appendChild(li);
});
