type TProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
  rate: number;
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
