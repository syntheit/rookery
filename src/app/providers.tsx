"use client";

import { NextUIProvider } from "@nextui-org/react";
import NavbarRookery from "./components/NavbarRookery";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NavbarRookery />
      {children}
    </NextUIProvider>
  );
}
