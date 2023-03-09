import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProducts } from "../api";
import { Breadcrumb } from "../components/Breadcrumb";
import { setProducts } from "../redux/actions/products.actions";
import { Carousel } from "../components/Carousel";
import { ProductCard } from "../components/ProductCard";

export const HomePage = (): JSX.Element => {
  const { products } = useSelector((state: TRootState) => state.products);
  const [carosuelItems, setCarouselItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      getProductsData();
    }
  }, []);

  useEffect(() => {
    const components = products.map((p) => <ProductCard {...p} />);
    setCarouselItems(components);
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
      <div className="home__content">{<Carousel items={carosuelItems} />}</div>
    </div>
  );
};
