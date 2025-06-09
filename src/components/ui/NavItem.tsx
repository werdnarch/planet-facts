import { PlanetData, PlanetName } from "@/src/types";
import React, { useState } from "react";

interface NavItemProps {
  currentPlanet: PlanetData | null;
  planet: PlanetData;
  handlePlanetSwitch: (value: PlanetName) => void;
  themes: Record<PlanetName, string>;
}

export default function NavItem({
  currentPlanet,
  planet,
  themes,
  handlePlanetSwitch,
}: NavItemProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const theme = themes[planet.name];

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handlePlanetSwitch(planet.name)}
      className="uppercase cursor-pointer tracking-tight  flex relative items-center justify-center flex-1 text-white/80 font-bold text-[0.9rem] h-full lg:text-base spartan"
    >
      <p
        className={` cursor-pointer transition-all duration-200 ease-in-out ${
          currentPlanet?.name === planet.name && "scale-130"
        }`}
      >
        {planet.name}
      </p>

      {currentPlanet?.name === planet.name && (
        <div
          style={{ background: `${theme}` }}
          className="h-[4px] bottom-0 w-full lg:hidden absolute"
        ></div>
      )}

      <div
        style={{ background: `${theme}` }}
        className={`h-[4px] top-0 transition-all duration-300 ease-in-out md:hidden ${
          isHovered ? "w-full" : "w-0"
        } lg:block absolute`}
      ></div>
    </li>
  );
}
