import { SET_PRODUCTS } from '../types/products.types';

export function setProducts(products: TProduct[]) {
  const action = {
    type: SET_PRODUCTS,
    payload: products,
  };

  return action;
}
