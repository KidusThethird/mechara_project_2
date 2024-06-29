import Footer from "@/common_components/footer";
import Navbar from "@/common_components/navbar";
import Hero from "@/homepage_components/hero";
import ImageList from "@/homepage_components/image_list";
import MapSection from "@/homepage_components/mapsection";
import MayorInfo from "@/homepage_components/mayor_info";
import Numbers from "@/homepage_components/numbers";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />

      <MayorInfo />
      <ImageList />
      <Numbers />
      <MapSection />
    </div>
  );
}
