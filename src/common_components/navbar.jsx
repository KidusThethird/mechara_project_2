import React from "react";
// import { Instagram } from "lucide";
import { Facebook, Twitter, Instagram } from "lucide-react";
import logo from "../assets/images/icon.png";

export default function Navbar() {
  return (
    <div>
      <div className="w-full flex justify-between px-10 py-3 bg-blue-800 text-white">
        <div className="space-x-4 flex">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <div>
          <a href="">mechara@gov.et</a>
        </div>
      </div>

      <div className="w-full flex justify-between px-10 py-5">
        <div>
          <img src={logo} className="w-24" alt="" />
        </div>
        <div className="justify-between space-x-12 flex my-auto text-lg">
          <a href="" className="hover:text-blue-700">
            Home
          </a>
          <a href="" className="hover:text-blue-700">
            News
          </a>
          <a href="" className="hover:text-blue-700">
            Initiatives
          </a>
          <a href="" className="hover:text-blue-700">
            The new face of Mechara
          </a>
          <a href="" className="hover:text-blue-700">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
