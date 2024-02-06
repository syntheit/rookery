import { HeaderNavbar } from "~/app/_components/header-navbar";
import { getServerAuthSession } from "~/server/auth";

export default async function Page({ params }: { params: { slug: string } }) {
    {/*
        TODO:
        - check if this user (slug) even exists
        - display all their stats by querying data from psql
        - if the current user is logged in let them make changes to this page
    */}

    return (
        <div>
            <HeaderNavbar></HeaderNavbar>
            <div className="h-screen flex justify-center">
                <h1>{params.slug}</h1>
            </div>
        </div>
    );
  }