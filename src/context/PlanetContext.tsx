"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { PlanetData } from "../types";

export interface PlanetContextType {
  planets: PlanetData[];
  currentPlanet: PlanetData | null;
  setCurrentPlanet: (planet: PlanetData) => void;
}

const PlanetContext = createContext<PlanetContextType>({
  planets: [],
  currentPlanet: null,
  setCurrentPlanet: () => {},
});

export function PlanetProvider({ children }: { children: ReactNode }) {
  const [planets, setPlanets] = useState<PlanetData[]>([]);
  const [currentPlanet, setCurrentPlanet] = useState<PlanetData | null>(null);

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
      value={{ planets, currentPlanet, setCurrentPlanet }}
    >
      {children}
    </PlanetContext.Provider>
  );
}

export function usePlanetContext() {
  return useContext(PlanetContext);
}
