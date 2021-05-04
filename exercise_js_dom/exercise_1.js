
//create input
var input = document.createElement("input");
input.placeholder = "Nhập năm sinh";
//create button
var button = document.createElement("button");
var txtbtn = document.createTextNode("Tính tuổi");
button.appendChild(txtbtn);
//create p
var p = document.createElement("p");

//append body
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(p);

//func
button.addEventListener("click", handleClick);
function handleClick(e) {
  var d = new Date();
  var age = d.getFullYear() - input.value;
  p.innerHTML = `Tuổi của bạn là ${age}`
}
