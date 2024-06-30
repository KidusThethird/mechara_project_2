import React from "react";

import Image1 from "../assets/images/cabinet/001.jpeg";
import Image2 from "../assets/images/cabinet/002.jpeg";
import Image3 from "../assets/images/cabinet/003.jpeg";
import Image4 from "../assets/images/cabinet/004.jpeg";
import Image5 from "../assets/images/cabinet/005.jpeg";
import Image6 from "../assets/images/cabinet/006.jpeg";
import Image7 from "../assets/images/cabinet/007.jpeg";
import Image8 from "../assets/images/cabinet/008.jpeg";
import Image9 from "../assets/images/cabinet/009.jpeg";

export default function Cabinets() {
  const CabinetMembers = [
    {
      name: "Dr. Dadhi Wedajo",
      image: Image1,
      position: "Head of Planning and Development Bureau",
    },
    {
      name: "Dr. Hirut Kasaw",
      image: Image2,
      position: "Head of Culture Arts and Tourism Bureau",
    },
    {
      name: "Dr. Yohannes Chala",
      image: Image3,
      position: "Head of Health Bureau",
    },
    {
      name: "Eng. Ayalnesh H/Mariam",
      image: Image4,
      position: "Head of Design and Construction Bureau",
    },
    {
      name: "Mr. Girma Seyfu",
      image: Image5,
      position: "Head of Investment Bureau",
    },
    {
      name: "Mr. Abdulkadir Redwan",
      image: Image6,
      position: "Head of Finance Bureau",
    },
    {
      name: "Mrs. Habiba Siraj",
      image: Image7,
      position:
        "E.Dir. of the Regulatory Authority of Government Development Organizations",
    },
    {
      name: "Mr. Tilahun Worku",
      image: Image8,
      position: "Head of the Mayor's Office and Cabinet Affairs",
    },
    {
      name: "Mr. Tiratu Beyene",
      image: Image9,
      position:
        "With The Rank Of The Deputy Mayor, Head of The Jobs & Skills Bureau",
    },
  ];

  return (
    <div>
      <div className="text-center w-full ">
        <h1 className="text-2xl py-5">Cabinet Members</h1>
      </div>
      <div className="grid smx:grid-cols-2 ms:grid-cols-3 gap-6 px-10">
        {CabinetMembers.map((member) => (
          <div className="cursor-pointer group">
            <div className="relative  p-8 bg-gray-200">
              <img
                src={member.image}
                alt=""
                className="group-hover:scale-105 duration-300"
              />
              <div className="hidden group-hover:block duration-300 absolute top-0 left-0 bg-black opacity-30 w-full h-full z-10"></div>
            </div>
            <div className="bg-gray-200 pb-3 text-center">
              <h1 className="lmd:text-2xl">{member.name}</h1>
              <h3>{member.position}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
