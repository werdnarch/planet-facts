import React from "react";
import { ChevronRight } from "lucide-react";
import { PlanetName } from "@/src/types";

interface MenuItemProps {
  menuOpen: boolean;
  index: number;
  planet: PlanetName;
}

export default function MenuItem({ menuOpen, index, planet }: MenuItemProps) {
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

  const theme = themes[planet];
  return (
    <div className=" h-fit flex items-center justify-center my-1  relative overflow-x-hidden">
      <div className="py-4 opacity-0">planet</div>
      <div
        style={{ animationDelay: `${index * 100}ms` }}
        className={`flex items-center w-[95%] border-b-[1px] py-3 border-white/30 justify-between gap-5 ${
          menuOpen && "menuItemAnimation"
        }`}
      >
        <div className="flex items-center gap-5">
          <div
            style={{ background: `${theme}` }}
            className="w-6 aspect-square rounded-full bg-red-400"
          ></div>
          <p className="text-lg spartan uppercase tracking-tighter font-semibold">
            {planet}
          </p>
        </div>
        <button className="text-white/50">
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
