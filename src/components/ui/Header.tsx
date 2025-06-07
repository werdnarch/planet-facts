"use client";

import React, { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

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
    <header className="p-3 flex items-center justify-between relative">
      <p className="uppercase antonio  text-2xl">The Planets</p>

      <MenuButton setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} />
    </header>
  );
}
