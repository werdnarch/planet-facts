"use client";

import { ChevronRight } from "lucide-react";
import React from "react";
import { usePlanetContext } from "@/src/context/PlanetContext";
import { PlanetData } from "@/src/types";
import MenuItem from "./MenuItem";

interface MenuProps {
  setMenuOpen: (value: boolean) => void;
  menuOpen: boolean;
}

export default function Menu({ menuOpen, setMenuOpen }: MenuProps) {
  const { planets } = usePlanetContext();

  if (!planets) return null;

  return (
    <section
      className={`absolute top-full flex flex-col left-0 min-h-screen darkbg z-100 p-2 w-full ${
        menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {planets?.map((planet: PlanetData, index: number) => (
        <MenuItem
          setMenuOpen={setMenuOpen}
          key={index}
          menuOpen={menuOpen}
          index={index}
          planet={planet.name}
        />
      ))}
    </section>
  );
}
