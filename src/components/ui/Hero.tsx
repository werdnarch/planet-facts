import { PlanetData, Tab } from "@/src/types";
import React from "react";
import Image from "next/image";

interface HeroProps {
  currentPlanet: PlanetData;
  activeTab: Tab;
}

export default function Hero({ currentPlanet, activeTab }: HeroProps) {
  return (
    <div className="relative my-20">
      {activeTab === "overview" && (
        <Image
          src={currentPlanet.images.planet}
          alt={currentPlanet.name}
          width={200}
          height={0}
          style={{ height: `auto` }}
        ></Image>
      )}

      {activeTab === "structure" && (
        <Image
          src={currentPlanet.images.internal}
          alt={currentPlanet.name}
          width={200}
          height={0}
          style={{ height: `auto` }}
        ></Image>
      )}
      {activeTab === "surface" && (
        <div className="relative">
          <Image
            src={currentPlanet.images.planet}
            alt={currentPlanet.name}
            width={200}
            height={0}
            style={{ height: `auto` }}
          ></Image>

          <div className="absolute top-[75%] left-1/2 -translate-x-1/2">
            <Image
              src={currentPlanet.images.geology}
              alt={currentPlanet.name}
              width={100}
              height={0}
              style={{ height: `auto` }}
            ></Image>
          </div>
        </div>
      )}
    </div>
  );
}
