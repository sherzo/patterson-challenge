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
    }));
  } catch (e) {
    console.log('e', e);
  }
};
