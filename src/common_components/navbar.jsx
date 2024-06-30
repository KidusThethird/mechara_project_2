import React, { useState } from "react";
// import { Instagram } from "lucide";
import { Facebook, Twitter, Instagram, Menu, X } from "lucide-react";
import logo from "../assets/images/icon.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import DropDownNavBar from "./drop_down_navbar";

export default function Navbar() {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const toggleClick = () => {
    setToggleDropDown(!toggleDropDown);
  };

  return (
    <div className=" fixed w-full bg-white z-50">
      <div className="flex w-full  justify-between px-10 py-3 bg-blue-800 text-white">
        <div className="space-x-4 flex">
          {toggleDropDown ? (
            <div
              onClick={() => {
                toggleClick();
              }}
              className="cursor-pointer block xmd:hidden mr-4"
            >
              <X />
            </div>
          ) : (
            <div
              onClick={() => {
                toggleClick();
              }}
              className="cursor-pointer block xmd:hidden mr-4"
            >
              <Menu />
            </div>
          )}
          <div className="cursor-pointer hidden xmd:flex space-x-4">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <div>
          <a href="">mechara@gov.et</a>
        </div>
      </div>
      <div className="hidden xmd:flex  w-full  justify-between xmd:px-10 xmd:py-5">
        <div>
          <img src={logo} className="w-24" alt="" />
        </div>
        <div className="flex justify-between space-x-4 lmd:space-x-8 xl:space-x-12  my-auto  lmd:text-lg">
          <a href="/" className="hover:text-blue-700 my-auto">
            Home
          </a>
          <a href="" className="hover:text-blue-700 my-auto">
            News
          </a>
          <a href="/about" className="hover:text-blue-700 my-auto">
            About
          </a>
          <a href="" className="hover:text-blue-700  my-auto">
            The new face of Mechara
          </a>
          <NavigationMenu className="">
            <NavigationMenuList className="">
              <NavigationMenuItem className="my-auto bg-white">
                <NavigationMenuTrigger className=" my-auto h-fit bg-white">
                  <h1 className="text-lg font-normal  hover:text-blue-700">
                    City Adminstration
                  </h1>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <div className="w-[200px] py-3  ">
                      <div className=" flex w-full hover:text-white hover:bg-blue-800 px-7 py-3">
                        <a className=" " href="/cabinets">
                          Cabinet Members
                        </a>
                      </div>
                      <div className="flex w-full hover:text-white hover:bg-blue-800 px-7 py-3">
                        <a href=""> Deputy Meyors</a>
                      </div>
                      <div className="flex w-full hover:text-white hover:bg-blue-800 px-7 py-3">
                        <a href="/about">About Us</a>
                      </div>
                      <div className="flex w-full hover:text-white hover:bg-blue-800 px-7 py-3">
                        <a href="">Projects</a>
                      </div>
                      <div className="flex w-full hover:text-white hover:bg-blue-800 px-7 py-3">
                        <a href="">Our History</a>
                      </div>

                      <div className="flex w-full hover:text-white hover:bg-blue-800 px-7 py-3">
                        <a href="">Events</a>
                      </div>
                      <div className="flex w-full hover:text-white hover:bg-blue-800 px-7 py-3">
                        <a href="">Publications</a>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a href="" className="hover:text-blue-700 my-auto">
            Contact
          </a>
        </div>
      </div>
      {toggleDropDown && (
        <div className="absolute top-12">
          <DropDownNavBar />
        </div>
      )}
    </div>
  );
}
