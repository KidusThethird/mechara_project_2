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
    <div className="relative">
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

      <div className="absolute top-0 h-full w-full flex ">
        <div className="my-auto  w-3/4   h-fit mx-auto space-y-4 xmd:space-y-9">
          <div>
            <h1 className="text-white bg-blue-800 w-fit bg-opacity-25 shadow-lg  text-2xl sm:text-4xl xmd:text-7xl font-bold">
              Welcome to Mechara City
            </h1>
            <h1 className="text-white text-xl py-3">
              Mechara City Adminstration
            </h1>
          </div>
          <button className="text-white sm:text-xl bg-blue-800 rounded-3xl px-1 sm:px-3 py-1 xmd:px-5 xmd:py-3">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}
