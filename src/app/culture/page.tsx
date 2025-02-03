'use client'

import React from "react";
import HeroImage from "./components/HeroImage";
import HeritageCard from "./components/HeritageCard";
import SearchBar from "./components/SearchBar";
import SearchCard from "./components/SearchCard";

export default function Culture() {

  return (
    <div>
    <div className="main ">
      <HeroImage/>
      <SearchCard/>
    <div className="mb-10">
    <HeritageCard/>
    </div>
    <div className="absolute top-60 left-1/2 transform -translate-x-1/2 z-20">
    <SearchBar  />
      </div>
      </div>
      </div>
  );
}
