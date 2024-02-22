import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Providers } from "./providers";
import { ClientSafeProvider, getProviders } from "next-auth/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "RPI Chess Club",
  description: "Rensselaer Polytechnic Institute's Chess Club",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const providers = await getProviders();
  const discord: ClientSafeProvider = providers!.discord;

  return (
    <html lang="en">
      <body
        className={`h-full bg-background font-sans text-foreground dark ${inter.variable}`}
      >
        <TRPCReactProvider>
          <Providers loginProvider={discord}>{children}</Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
