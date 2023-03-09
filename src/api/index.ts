export const getProducts = async (): Promise<TProduct[]> => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=4');
    const data = await response.json();
    return data.map((item: TApiResponseItem) => ({
      id: item.id,
      name: item.title,
      image: item.image,
      rate: item.rating.rate,
      price: item.price,
      reduction: Boolean(Math.round(Math.random())),
    }));
  } catch (e) {
    console.log('e', e);
  }
};

export const getReductions = () => {
  return [
    {
      code: 'DTO10',
      amount: 10,
    },
    {
      code: 'DTO50',
      amount: 50,
    },
  ];
};
