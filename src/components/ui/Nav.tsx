import { usePlanetContext } from "@/src/context/PlanetContext";
import { PlanetData, PlanetName } from "@/src/types";
import React, { useState } from "react";
import NavItem from "./NavItem";

export default function Nav() {
  const { planets, currentPlanet, themes, setCurrentPlanet } =
    usePlanetContext();

  if (!planets) return null;

  const handlePlanetSwitch = (name: PlanetName) => {
    if (!planets) return;

    const selectedPlanet = planets.find(
      (planet: PlanetData) => planet.name === name
    );
    if (selectedPlanet) {
      setCurrentPlanet(selectedPlanet); // ✅ safe, never null
    }
  };

  return (
    <nav className="hidden md:block w-full lg:w-[50%]">
      <ul className="flex items-center gap-3  h-18">
        {planets.map((planet: PlanetData, index: number) => (
          <NavItem
            key={index}
            currentPlanet={currentPlanet}
            planet={planet}
            handlePlanetSwitch={handlePlanetSwitch}
            themes={themes}
          />
        ))}
      </ul>
    </nav>
  );
}
