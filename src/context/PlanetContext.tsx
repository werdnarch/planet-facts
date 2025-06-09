"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { PlanetData, PlanetName } from "../types";

export interface PlanetContextType {
  planets: PlanetData[];
  themes: Record<PlanetName, string>;
  currentPlanet: PlanetData | null;
  setCurrentPlanet: (planet: PlanetData) => void;
}

const PlanetContext = createContext<PlanetContextType>({
  planets: [],
  themes: {} as Record<PlanetName, string>,
  currentPlanet: null,
  setCurrentPlanet: () => {},
});

export function PlanetProvider({ children }: { children: ReactNode }) {
  const [planets, setPlanets] = useState<PlanetData[]>([]);
  const [currentPlanet, setCurrentPlanet] = useState<PlanetData | null>(null);

  const themes = {
    Mercury: "#419EBB",
    Venus: "#EDA348",
    Earth: "#6C2ED4",
    Mars: "#D14C32",
    Jupiter: "#D93A35",
    Saturn: "#CD5021",
    Uranus: "#1EC1A2",
    Neptune: "#2C68F1",

    // ...other planets
  };

  useEffect(() => {
    if (planets.length) {
      const earth = planets.find((p) => p.name === "Earth");
      if (earth) setCurrentPlanet(earth);
    }
  }, [planets]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("/data.json");
      const json = await resp.json();
      setPlanets(json);
    };

    fetchData();
  }, []);

  return (
    <PlanetContext.Provider
      value={{ planets, currentPlanet, themes: themes, setCurrentPlanet }}
    >
      {children}
    </PlanetContext.Provider>
  );
}

export function usePlanetContext() {
  return useContext(PlanetContext);
}
