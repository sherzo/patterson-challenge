import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProducts } from "../api";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductCard } from "../components/ProductCard";
import { setProducts } from "../redux/actions/products.actions";

export const HomePage = (): JSX.Element => {
  const { products } = useSelector((state: TRootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      getProductsData();
    }
  }, []);

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
      <div className="home__content">{products.map(ProductCard)}</div>
    </div>
  );
};
