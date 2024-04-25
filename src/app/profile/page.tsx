import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";
import EditModal from "./EditModal";
import type { Account, Session } from "@prisma/client";

export type User = {
  id: string;
  name: string;
  email?: string | null;
  image?: string | null;
  emailVerified?: Date | null;
  accounts: Account[];
  sessions: Session[];
  display_name?: string | null;
  discord_id?: string | null;
  display_image?: string | null;
  discord_name?: string | null;
  uscf_username?: string | null;
  uscf_rating?: number | null;
  chesscom_username?: string | null;
  chesscom_rating?: number | null;
  lichess_username?: string | null;
  lichess_rating?: number | null;
  affiliated_school?: string | null;
  phone_number?: string | null;
  events: Event[];
};

let user: User | undefined = undefined;

export default async function ProfilePage() {
  const session = await getServerAuthSession();
  if (!session) redirect("/");
  const id = session.user.id;
  // add type safety
  user = await db.user.findUnique({ where: { id } });

  return (
    <main className="flex flex-col items-center min-h-screen text-white bg-black p-36">
      {!session && !user && redirect("/")}
      {session && user && (
        <div className="flex flex-col w-8/12 gap-5">
          <Card className="flex ">
            <CardHeader className="flex justify-between">
              <h1 className="text-2xl font-bold">{user.display_name}</h1>
              <EditModal user={user} />
            </CardHeader>
            <Divider />
            <CardBody>
              <h3>USCF Rating: </h3>
              <h3>Chess.com Rating: </h3>
              <h3>School: </h3>
            </CardBody>
          </Card>
          <h2 className="text-2xl">Event History</h2>
          <div>
            <Card className="w-[15rem]">
              <CardHeader>
                <h3>Event Name</h3>
              </CardHeader>
              <CardBody>
                <h4>Date: </h4>
                <h4>Location: </h4>
                <h4>Placement: </h4>
              </CardBody>
            </Card>
          </div>
        </div>
      )}
    </main>
  );
}
