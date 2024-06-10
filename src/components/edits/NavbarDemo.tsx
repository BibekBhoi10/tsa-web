"use client";
import React, { useState } from "react";
import MenuDemo from "./Menu/MenuDemo"

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />

      <p className="text-black dark:text-white"></p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <MenuDemo />
  );
}