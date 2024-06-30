import React from "react";
import logo from "../assets/images/icon.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  Copyright,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <div className="pt-20  bg-blue-900 text-gray-200">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-4 space-x-5  px-10">
        <div className="w-fit  ">
          <img
            src={logo}
            className="w-24 sm:w-48 my-auto bg-white rounded-full"
            alt=""
          />
          <div className="space-x-4 flex my-auto w-full py-5 ">
            <div className="mx-auto flex space-x-4">
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
          </div>
        </div>
        <div
          className="flex-col space-y-3 
  "
        >
          <h1 className="my-6 text-xl font-semibold  ">Explore</h1>
          <div>
            <a href="">Deputy Mayors</a>
          </div>
          <div>
            {" "}
            <a href="">Cabinet Members</a>
          </div>
          <div>
            <a href="">Mechara Mega Projects</a>
          </div>
          <div>
            {" "}
            <a href="">Our History</a>
          </div>
          <div>
            {" "}
            <a href="">Publications</a>
          </div>
        </div>

        <div className="flex-col space-y-3">
          <h1 className="my-6 text-xl font-semibold ">Useful Links</h1>
          <div>
            <a href="">FAQs</a>
          </div>
          <div>
            {" "}
            <a href="">Publications</a>
          </div>
          <div>
            <a href="">Privacy Policy</a>
          </div>
        </div>

        <div className="flex-col space-y-3">
          <h1 className="my-6 text-xl font-semibold ">Contact Us</h1>
          <div className="flex space-x-2">
            <MapPin size={20} className="my-auto" />
            <a href="">Mechara, Ethiopia</a>
          </div>
          <div className="flex space-x-2">
            <Mail size={20} className="my-auto" />
            <a href="">info@mechara.gov.et</a>
          </div>
          <div className="flex space-x-2">
            <Phone size={20} className="my-auto" />
            <a href="">011000000</a>
          </div>
        </div>
      </div>

      <div className="w-full flex py-8">
        <div className="flex space-x-3 mx-auto font-semibold">
          <Copyright size={20} className="my-auto" />
          <h1>Mayor's Office 2024 All Right Reserved</h1>
        </div>
      </div>
    </div>
  );
}
