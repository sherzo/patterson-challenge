import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProducts } from "../api";
import { Breadcrumb } from "../components/Breadcrumb";
import { Carousel } from "../components/Carousel";
import { ProductCard } from "../components/ProductCard";
import { setProducts } from "../redux/actions/products.actions";

export const HomePage = (): JSX.Element => {
  const { products } = useSelector((state: TRootState) => state.products);
  const [carouselItems, setCarouselItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    setCarouselItems(products.map(ProductCard));
  }, [products]);

  const getProductsData = async () => {
    const products = await getProducts();
    dispatch(setProducts(products));
  };

  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Productos destacados</h1>
        <Breadcrumb
          items={[
            {
              name: "Todos los productos",
              link: "/products",
              isActive: true,
            },
            { name: "Cocina", link: "/kitchen" },
            { name: "Productos Destacados", link: "/" },
          ]}
        />
      </div>
      <div className="home__content">
        {carouselItems && <Carousel items={carouselItems} />}
      </div>
    </div>
  );
};
