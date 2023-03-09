import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import { Breadcrumb } from "../components/Breadcrumb";
import { Carousel } from "../components/Carousel";
import { ProductCard } from "../components/ProductCard";

export const HomePage = (): JSX.Element => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setCarouselItems(products.map(ProductCard));
    })();
  }, []);

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
