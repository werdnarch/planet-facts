import { PlanetData, Tab } from "@/src/types";
import Link from "next/link";
import React, { useState } from "react";
import SourceIcon from "../icons/SourceIcon";

interface DescriptionProps {
  currentPlanet: PlanetData;
  activeTab: Tab;
}
export default function Description({
  currentPlanet,
  activeTab,
}: DescriptionProps) {
  if (!currentPlanet) return null;

  return (
    <div className="text-center p-2 text-sm spartan">
      {activeTab === "overview" && <p>{currentPlanet.overview.content}</p>}
      {activeTab === "structure" && <p>{currentPlanet.structure.content}</p>}
      {activeTab === "surface" && <p>{currentPlanet.geology.content}</p>}

      <div className="my-8 text-base text-zinc-500 flex items-center justify-center gap-1">
        <p>Source:</p>
        {activeTab === "overview" && (
          <Link
            href={currentPlanet.overview.source}
            className="underline font-bold flex items-center gap-1"
          >
            <p>Wikipedia</p>
            <SourceIcon />
          </Link>
        )}
        {activeTab === "structure" && (
          <Link
            href={currentPlanet.structure.source}
            className="underline font-bold flex items-center gap-1"
          >
            <p>Wikipedia</p>
            <SourceIcon />
          </Link>
        )}
        {activeTab === "surface" && (
          <Link
            href={currentPlanet.geology.source}
            className="underline font-bold flex items-center gap-1"
          >
            <p>Wikipedia</p>
            <SourceIcon />
          </Link>
        )}
      </div>
    </div>
  );
}
