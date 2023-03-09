import { SET_PRODUCTS } from '../types/products.types';

const initialValue: TProductsState = {
  products: [],
};

export const ProductsReducer = (
  state: TProductsState = initialValue,
  action: { payload: TProduct[]; type: string }
): TProductsState => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
  }

  return state;
};
