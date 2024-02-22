"use client";

import { NextUIProvider } from "@nextui-org/react";
import NavbarRookery from "./components/NavbarRookery";
import { ClientSafeProvider, SessionProvider } from "next-auth/react";

export function Providers({
  loginProvider,
  children,
}: {
  loginProvider: ClientSafeProvider;
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      <SessionProvider>
        <NavbarRookery loginProvider={loginProvider}/>
        {children}
      </SessionProvider>
    </NextUIProvider>
  );
}
