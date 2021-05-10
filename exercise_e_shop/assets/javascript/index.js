export function getDataLocal(dataLocal, gt) {
	let data = localStorage.getItem(dataLocal) ? JSON.parse(localStorage.getItem(dataLocal)) : gt;
	return data;
}
export function updateItem(cart, index, caculator) {
	return caculator == "+" ? cart[index].qty += 1 : cart[index].qty -= 1;
}
export function addEvent(arr, className, eventFuc, nameFunc) {
	arr.forEach((element, index) => {
		return document.getElementsByClassName(className)[index].addEventListener(eventFuc, (e) => nameFunc(e,arr, element.id));
	});
}
