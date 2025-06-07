"use client";

import React, { useState } from "react";
import { MenuIcon } from "lucide-react";
import Menu from "./Menu";

interface MenuButtonProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuButton({ setMenuOpen }: MenuButtonProps) {
  return (
    <button
      onClick={() => setMenuOpen((prev) => !prev)}
      className="cursor-pointer"
    >
      <MenuIcon size={30} />
    </button>
  );
}
