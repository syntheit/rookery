import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  console.log(session)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">

        <div className="flex flex-col items-center gap-2">

          {/*
            Profile login/out
            todo:
              - make a top navbar
              - style this so its located on the right-corner of the navbar
          */}
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-black">
              {session && <span> 
                <a href={`/profile/${session.user?.name}`}>{session.user?.name}</a> 
              </span>}
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-black/10 px-10 py-3 font-semibold no-underline transition hover:bg-black/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
