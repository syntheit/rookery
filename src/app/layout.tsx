import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Providers } from "./providers";
import { getServerAuthSession } from "~/server/auth";
import NavbarRookery from "./components/NavbarRookery";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "RPI Chess Club",
  description: "Rensselaer Polytechnic Institute's Chess Club",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  console.log(session);

  return (
    <html lang="en">
      <body
        className={`bg-background text-foreground dark font-sans ${inter.variable}`}
      >
        <TRPCReactProvider>
          <Providers>
            {children}
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
