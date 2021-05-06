// get data
function fetchData(data){
  return data
}
// render view
function render(data) {
  //list product
  data.forEach(function (element) {
    console.log(element);
    //create element li to show item product
    var li = document.createElement('li');
    li.className = 'col-3 col-sm-6 product-item';
    //create element div1 to wrap content product
    var div1 = document.createElement('div');
    div1.className = element.discount == 0 ? 'product' : 'product product-discount';
    li.appendChild(div1);
    //create element div2 to wrap image
    var div2 = document.createElement('div');
    div2.className = 'product-img';
    div1.appendChild(div2);
    //create element a to add link for image
    var a = document.createElement('a');
    a.href = '#';
    div2.appendChild(a);
    //create element img 
    var img = document.createElement('img');
    img.src = element.image;
    img.alt = element.name;
    a.appendChild(img);
    // create element button add to cart
    var button = document.createElement('button');
    button.className = 'btn btn-orange btn-add-cart';
    button.id = element.id;
    var txtbtn = document.createTextNode('Add to cart');
    button.appendChild(txtbtn);
    div2.appendChild(button);
    //create element div3 to wrap infomation product
    var div3 = document.createElement('div');
    div3.className = 'product-info';
    div1.appendChild(div3);
    //create element h4 to wrap product name
    var h4 = document.createElement('h4');
    h4.className = 'product-name';
    div3.appendChild(h4);
    //create element a to display product name
    var a2 = document.createElement('a');
    a2.href = '#';
    var texta2 = document.createTextNode(element.name);
    a2.appendChild(texta2);
    h4.appendChild(a2);
    //create element div to wrap product-price
    var div4 = document.createElement('div');
    div3.appendChild(div4);
    //create span1 to display product-price
    var span1 = document.createElement('span');
    span1.className = 'product-price';
    var txt1 = document.createTextNode(element.price);
    span1.appendChild(txt1);
    div4.appendChild(span1);
    if (element.discount != 0) {
      //create span2 to display product-price-discount
      var span2 = document.createElement('span');
      span2.className = 'product-price-discount';
      var priceDiscount = (element.price - element.price * element.discount / 100).toFixed(2);
      var txt2 = document.createTextNode(priceDiscount);
      span2.appendChild(txt2);
      div4.appendChild(span2);
      //create p to display badge discount
      var p = document.createElement('p');
      p.className = 'badge badge-discount';
      var txtp = document.createTextNode('-' + element.discount + '%');
      p.appendChild(txtp);
      div1.appendChild(p);
    }
    //append li fo ul.product-list
    document.getElementsByClassName('product-list')[0].appendChild(li);
    //add event add to cart
    button.addEventListener('click', handleAddToCart.bind(this, data,element.id));
  })
}
//data products
var products = [
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    image: './assets/images/product-1.svg',
    price: 119.99,
    discount: 30,
  },
  {
    id: 2,
    name: 'Loose Knit 3/4 Sleeve',
    image: './assets/images/product-2.svg',
    price: 119.99,
    discount: 0,
  },
  {
    id: 3,
    name: 'Basic Slim Fit T-Shirt',
    image: './assets/images/product-3.svg',
    price: 79.99,
    discount: 0,
  },
  {
    id: 4,
    name: 'Loose Textured T-Shirt',
    image: './assets/images/product-4.svg',
    price: 119.99,
    discount: 0,
  }
]
// fetch and render data
var data = fetchData(products);
render(data);