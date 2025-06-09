"use client";
import { usePlanetContext } from "@/src/context/PlanetContext";
import Image from "next/image";
import Tab from "./Tab";
import React, { act, useState } from "react";
import Description from "./Description";
import Hero from "./Hero";
import Link from "next/link";
type Tab = "overview" | "structure" | "surface";

export default function MainContent() {
  const { currentPlanet } = usePlanetContext();
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  if (!currentPlanet) return null;

  return (
    <main className="flex flex-col items-center gap-5">
      {/* TABS */}

      <section className="border-b-1 w-full border-white/30 flex items-center justify-between">
        <Tab
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          name="overview"
        />
        <Tab
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          name="structure"
        />
        <Tab setActiveTab={setActiveTab} activeTab={activeTab} name="surface" />
      </section>

      {/* IMAGE */}

      <Hero activeTab={activeTab} currentPlanet={currentPlanet} />

      {/* DESCRIPTION */}

      <div className="antonio tracking-tight text-5xl font-semibold uppercase w-fit">
        {currentPlanet.name}
      </div>

      <Description currentPlanet={currentPlanet} activeTab={activeTab} />

      <div className="flex flex-col gap-4 w-full p-4 mb-8">
        <div className="border flex items-center justify-between  uppercase p-3 border-white/40">
          <p className="text-sm text-white/60 spartan font-semibold">
            Rotation Time
          </p>

          <p className="text-white font-bold antonio">
            {Math.round(parseFloat(currentPlanet.rotation))}{" "}
            {currentPlanet.rotation.replace(/[0-9.\s]/g, "")}
          </p>
        </div>
        <div className="border flex items-center justify-between  uppercase p-3 border-white/40">
          <p className="text-sm text-white/60 spartan font-semibold">
            Revolution time
          </p>

          <p className="text-white font-bold antonio">
            {Math.round(parseFloat(currentPlanet.revolution))}{" "}
            {currentPlanet.revolution.replace(/[0-9.\s]/g, "")}
          </p>
        </div>
        <div className="border flex items-center justify-between  uppercase p-3 border-white/40">
          <p className="text-sm text-white/60 spartan font-semibold">Radius</p>

          <p className="text-white font-bold antonio">{currentPlanet.radius}</p>
        </div>

        <div className="border flex items-center justify-between  uppercase p-3 border-white/40">
          <p className="text-sm text-white/60 spartan font-semibold">
            Average temp
          </p>

          <p className="text-white font-bold antonio">
            {Math.round(parseFloat(currentPlanet.temperature))} &deg;C
          </p>
        </div>
      </div>
    </main>
  );
}
