var package = [
  {
    name: "Basic",
    info: {
      price: "$10/month",
      users: "10 users icluded",
      storage: "2GB of storage",
      support: "Email support",
      help: "Help center access",
    }
  },
  {
    name: "Pro",
    info: {
      price: "$30/month",
      users: "100 users icluded",
      storage: "20GB of storage",
      support: "Email support",
      help: "Help center access",
    }
  }
]
//create element div.container
var div = document.createElement("div");
div.className = "container text-center";
//create element div.list-options
var divListOption = document.createElement("div");
divListOption.className = "list-options";
//map
package.forEach(item => {
  //create element div.option
  var divOption = document.createElement("div");
  divOption.className = "option";
  //append 
  divListOption.appendChild(divOption);
  //create p
  var p = document.createElement("p");
  p.className = "title";
  var txtp = document.createTextNode(item.name)
  p.appendChild(txtp);
  //create element ul
  var ul = document.createElement("ul");
  ul.className = "list-description";
  var object = item['info']
  for (const property in object) {
    //create element li
    var li = document.createElement("li");
    li.className = "desc-item";
    var txtLi = document.createTextNode(object[property]);
    li.appendChild(txtLi);
    //append ul
    ul.appendChild(li);
  }
  //create button
  var button = document.createElement("button");
  button.className = "btn";
  //append div.Option
  divOption.appendChild(p)
  divOption.appendChild(ul);
  divOption.appendChild(button)
})
//append div
div.appendChild(divListOption);
//append body
document.body.appendChild(div);
//append button
var btnClass = document.getElementsByClassName("btn");
btnClass[0].innerHTML = "Get Started";
btnClass[0].classList.add('btn-primary');
btnClass[1].innerHTML = "Buy Now";
btnClass[1].classList.add('btn-secondary');
