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

type TRootState = {
  products: TProductsState;
};

type TProductsState = {
  products: TProduct[];
};
