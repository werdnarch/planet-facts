"use client";

import { ChevronRight } from "lucide-react";
import React from "react";
import { usePlanetContext } from "@/src/context/PlanetContext";
import { PlanetData } from "@/src/types";
import MenuItem from "./MenuItem";

export default function Menu({ menuOpen }: { menuOpen: boolean }) {
  const { planets } = usePlanetContext();

  if (!planets) return null;

  return (
    <section
      className={`absolute top-full flex flex-col left-0 min-h-screen darkbg bg-red-500 p-2 w-full ${
        menuOpen ? "opacity-100" : "opacity-0 pointer-event-none"
      }`}
    >
      {planets?.map((planet: PlanetData, index: number) => (
        <MenuItem
          key={index}
          menuOpen={menuOpen}
          index={index}
          planet={planet.name}
        />
      ))}
    </section>
  );
}
