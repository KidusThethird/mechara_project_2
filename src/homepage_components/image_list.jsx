import React from "react";
import Image1 from "../assets/images/img2.jpeg";
import Image2 from "../assets/images/img3.jpeg";
import Image3 from "../assets/images/img4.jpeg";
import Image4 from "../assets/images/img5.jpeg";

export default function ImageList() {
  return (
    <div className="my-10">
      <div className="w-full flex">
        <div className="relative group w-1/4 h-1/4 overflow-hidden">
          <img
            className="z-10 group-hover:scale-110 duration-1000"
            src={Image1}
            alt=""
          />
          <div className="absolute top-0 z-50 h-full w-full bg-black opacity-0 duration-200 cursor-pointer hover:opacity-50"></div>
        </div>
        <div className="relative group w-1/4 h-1/4 overflow-hidden">
          <img
            className="z-10 group-hover:scale-110 duration-1000"
            src={Image2}
            alt=""
          />
          <div className="absolute top-0 z-50 h-full w-full bg-black opacity-0 duration-200 cursor-pointer hover:opacity-50"></div>
        </div>
        <div className="relative group w-1/4 h-1/4 overflow-hidden">
          <img
            className="z-10 group-hover:scale-110 duration-1000"
            src={Image3}
            alt=""
          />
          <div className="absolute top-0 z-50 h-full w-full bg-black opacity-0 duration-200 cursor-pointer hover:opacity-50"></div>
        </div>
        <div className="relative group w-1/4 h-1/4 overflow-hidden">
          <img
            className="z-10 group-hover:scale-110 duration-1000"
            src={Image4}
            alt=""
          />
          <div className="absolute top-0 z-50 h-full w-full bg-black opacity-0 duration-200 cursor-pointer hover:opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
