import React from "react";
// import { Instagram } from "lucide";
import { Facebook, Twitter, Instagram } from "lucide-react";
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

export default function Navbar() {
  return (
    <div className="fixed w-full bg-white z-50">
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
          <a href="" className="hover:text-blue-700 my-auto">
            Home
          </a>
          <a href="" className="hover:text-blue-700 my-auto">
            News
          </a>
          <a href="" className="hover:text-blue-700 my-auto">
            Initiatives
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
    </div>
  );
}
