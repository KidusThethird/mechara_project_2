import React from "react";
import { Eye, ScanEye, Heart } from "lucide-react";

export default function About() {
  return (
    <div>
      <div className="w-full text-center">
        <h1 className="text-2xl font-semibold py-6">
          Welcome to the Office Of the Mayor Of Mechara
        </h1>
      </div>
      <div className="lmd:grid grid-cols-3 mx-10 space-y-4 lmd:space-y-0  text-center lmd:text-left">
        <div className="mx-auto bg-gray-100 p-10 rounded-xl hover:bg-gray-300 cursor-pointer duration-200">
          <Eye
            size={100}
            className=" text-white bg-blue-900 mx-auto w-fit my-5 p-2 rounded-full "
          />
          <h1 className="text-center text-xl font-semibold">Vision</h1>
          <h1 className="text-gray-800 text-lg">
            Seeing Mechara as a symbol of prosperity.
          </h1>
        </div>

        <div className="mx-auto bg-gray-100 p-10 rounded-xl hover:bg-gray-300 cursor-pointer duration-200">
          <ScanEye
            size={100}
            className=" text-white bg-blue-900 mx-auto w-fit my-5 p-2 rounded-full "
          />
          <h1 className="text-center text-xl font-semibold">Mission</h1>
          <h1 className="text-gray-800 text-lg">
            Mission Our mission is employing a strategic city administration
            plan to strengthen both domestic and international relations,
            elevate initiatives aimed at enhancing the city's image, oversee and
            support the performance of result-oriented entities, sector offices,
            and projects. This involves conducting supervision and inspection
            activities, ensuring the timely implementation of cabinet decisions,
            and fostering good governance for equitable service delivery. The
            overarching goal is to advance transparency and accountability,
            ultimately benefiting the society of the city.
          </h1>
        </div>

        <div className="mx-auto bg-gray-100 p-10 rounded-xl hover:bg-gray-300 cursor-pointer duration-200">
          <Heart
            size={100}
            className=" text-white bg-blue-900 mx-auto w-fit my-5 p-2 rounded-full "
          />
          <h1 className="text-center text-xl font-semibold">Values</h1>
          <div className="text-gray-800 text-lg">
            <li>Transparency and accountability</li>
            <li>Sincerity</li>
            <li>Loyalty</li>
            <li>Motivation</li>
            <li>Excellent service</li>
            <li>Rule of law</li>
            <li>Superior public interest</li>
            <li>Knowledge and faith to lead</li>
          </div>
        </div>
      </div>
    </div>
  );
}
