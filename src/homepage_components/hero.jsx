import React from "react";
import Cover1 from "../assets/images/cover1.jpeg";
import Cover2 from "../assets/images/cover2.jpeg";
import Cover3 from "../assets/images/cover3.jpeg";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

export default function Hero() {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            {" "}
            <div className="w-full">
              <img className="w-full" src={Cover1} />
            </div>
          </CarouselItem>
          <CarouselItem>
            {" "}
            <div className="w-full">
              <img className="w-full" src={Cover2} />
            </div>
          </CarouselItem>
          <CarouselItem>
            {" "}
            <div className="w-full">
              <img className="w-full" src={Cover3} />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
