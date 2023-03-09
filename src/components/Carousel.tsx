import React from "react";
import { ProductCard } from "./ProductCard";
import AliceCarousel from "react-alice-carousel";
import { Button } from "../ui/button";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

export const Carousel = () => {
  const renderPrevButton = () => (
    <Button>
      <>&lt;</>
    </Button>
  );

  const renderNextButton = () => (
    <Button>
      <>&gt;</>
    </Button>
  );

  const items = [
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
  ];

  return (
    <AliceCarousel
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableDotsControls
      infinite
      renderPrevButton={renderPrevButton}
      renderNextButton={renderNextButton}
    />
  );
};
