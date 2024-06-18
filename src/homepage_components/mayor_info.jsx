import React from "react";
import Image from "../assets/images/img1.jpeg";

export default function MayorInfo() {
  return (
    <div>
      <div className="grid grid-cols-2 my-8">
        <div className="mx-7 my-auto text-lg">
          <h1 className="text-3xl text-gray-700 font-semibold pb-6">
            Message from the Mayor
          </h1>
          <h1 className="py-5">
            Greetings to Residents and Visitors of Mechara CIty,
          </h1>
          <h1>
            It is with great pleasure and a profound sense of responsibility
            that I extend a warm welcome to you on behalf of the Addis Ababa
            City Mayor's Office. Our vibrant city is not just a geographic
            space; it is a community of diverse cultures, aspirations, and
            dreams. As the Mayor of this remarkable city, I am honored to serve
            and lead alongside a dedicated team committed to the well-being and
            progress of every citizen. Addis Ababa, with its rich history and
            dynamic energy, stands as the heart of Ethiopia, a city of
            resilience, innovation, and unity. The Mayor's Office is steadfast
            in its commitment to fostering a city that is not only functional
            and prosperous but also inclusive...
          </h1>
        </div>
        <div className="w-full flex relative">
          <img src={Image} className="w-3/4 mx-auto" alt="" />
          <div className="absolute bottom-5 w-full">
            <h1 className=" bg-blue-800 p-5 w-fit mx-auto border-2  rounded-3xl text-white">
              H.E Adanech Abiebie
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
