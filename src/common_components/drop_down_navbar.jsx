import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DropDownNavBar() {
  return (
    <div className="bg-blue-900 text-gray-200 px-10 py-5">
      <div className="flex flex-col space-y-7">
        <a href="/" className="hover:text-gray-200 hover:underline my-auto">
          Home
        </a>
        <a href="" className="hover:text-gray-200 hover:underline my-auto">
          News
        </a>
        <a
          href="/about"
          className="hover:text-gray-200 hover:underline my-auto"
        >
          About
        </a>
        <a href="" className="hover:text-gray-200 hover:underline my-auto">
          The new face of Mechara
        </a>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger> City Adminstration</AccordionTrigger>
            <AccordionContent>
              <a className="px-5 " href="/cabinets">
                Cabinet Members
              </a>
            </AccordionContent>
            <AccordionContent>
              <a className="px-5 " href="">
                {" "}
                Deputy Meyors
              </a>
            </AccordionContent>
            <AccordionContent>
              <a className="px-5 " href="/about">
                About Us
              </a>
            </AccordionContent>
            <AccordionContent>
              <a className="px-5 " href="">
                Projects
              </a>
            </AccordionContent>
            <AccordionContent>
              <a className="px-5 " href="">
                Our History
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <a href="" className="hover:text-gray-200 hover:underline my-auto">
          Contact
        </a>
      </div>
    </div>
  );
}
