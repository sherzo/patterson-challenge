type TIcon = {
  width?: number;
  height?: number;
};

type TProduct = {
  id: number;
  name: string;
  image: string;
  price: number;
  rate: number;
  reduction: boolean;
};

type TApiResponseItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type TCartItem = {
  id: number;
  name: string;
  price: string;
  image: string;
};

type TReduction = {
  code: string;
  amount: number;
};

type TRootState = {
  products: TProductsState;
  cart: any;
};

type TProductsState = {
  products: TProduct[];
};
