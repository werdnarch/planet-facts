import { usePlanetContext } from "@/src/context/PlanetContext";
import React from "react";

type Tab = "overview" | "structure" | "surface";

interface TabProps {
  name: Tab;
  activeTab: Tab;
  setActiveTab: (name: Tab) => void;
}
export default function Tab({ name, activeTab, setActiveTab }: TabProps) {
  const { themes, currentPlanet } = usePlanetContext();

  const theme = currentPlanet ? themes[currentPlanet?.name] : null;

  return (
    <div className="relative">
      <button
        onClick={() => setActiveTab(name)}
        className={`p-5 cursor-pointer transition-colors duration-300 ease-in-out uppercase text-sm spartan font-bold ${
          activeTab === name ? "text-white/70" : "text-white/20"
        }`}
      >
        {name}
      </button>

      <div
        style={{ background: `${theme}` }}
        className={`h-1 transition-all duration-300 left-1/2 -translate-x-1/2 ease-in-out absolute bottom-0 ${
          activeTab === name ? "w-full" : "w-0"
        } bg-red-500`}
      ></div>
    </div>
  );
}
