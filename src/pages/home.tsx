import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";

export const HomePage = (): JSX.Element => {
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
    </div>
  );
};
