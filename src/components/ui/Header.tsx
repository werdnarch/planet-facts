"use client";

import React, { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import Nav from "./Nav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  /* PREVENT OVERFLOW WHEN THE MENU IS OPEN */

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menuOpen");
    } else {
      document.body.classList.remove("menuOpen");
    }
  }, [menuOpen]);

  return (
    <header className="flex h-20 px-2 md:h-fit justify-between border-b-1 md:gap-6 md:pt-6 lg:pt-0 border-white/30 md:flex-col lg:flex-row lg:justify-between items-center relative">
      <p className="uppercase antonio  text-2xl md:text-3xl">The Planets</p>

      <MenuButton setMenuOpen={setMenuOpen} />
      <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Nav />
    </header>
  );
}
