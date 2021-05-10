import { IProductCart } from './interface.js'
export function getDataLocal(dataLocal: string, gt: any) {
  let data: IProductCart[] = localStorage.getItem(dataLocal) ? JSON.parse(localStorage.getItem(dataLocal)) : gt;
  return data;
}
export function updateItem(cart: IProductCart[], index: number, caculator: string | number) {
  if (typeof caculator == "number") {
    return cart[index].qty = caculator;
  }
  return caculator == "+" ? cart[index].qty += 1 : cart[index].qty -= 1;
}
export function addEvent(arr: any, className: string, eventFuc: string, nameFunc: any) {
  arr.forEach((element: any, index: number) => {
    return document.getElementsByClassName(className)[index].addEventListener(eventFuc, (e) => nameFunc(e, arr, element.id));
  });
}
export function updateNumberCart(): void {
  let view: any = document.getElementsByClassName('number-cart');
  view[0].innerHTML = getDataLocal('count', 0);
}
