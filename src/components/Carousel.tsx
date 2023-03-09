import React from "react";
import AliceCarousel from "react-alice-carousel";
import { Button } from "../ui/button";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

export const Carousel = ({ items }: { items: TProduct[] }) => {
  const renderPrevButton = () => (
    <Button size="sm">
      <>&lt;</>
    </Button>
  );

  const renderNextButton = () => (
    <Button size="sm">
      <>&gt;</>
    </Button>
  );

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
