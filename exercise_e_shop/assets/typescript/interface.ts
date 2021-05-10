export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
};
export interface IProductCart {
  id: number;
  name: string;
  price: number;
  discount: number;
  image: string;
  qty: number;
};
