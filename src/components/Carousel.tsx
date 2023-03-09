import React, { ReactNode } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button } from "../ui/button";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

export const Carousel = ({ items }: { items: ReactNode[] }) => {
  const renderPrevButton = () => (
    <Button variant="sm">
      <>&lt;</>
    </Button>
  );

  const renderNextButton = () => (
    <Button variant="sm">
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
