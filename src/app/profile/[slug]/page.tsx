import { HeaderNavbar } from "~/app/_components/header-navbar";

export default function Page({ params }: { params: { slug: string } }) {
    {/*
        TODO:
        - check if this user (slug) even exists
        - display all their stats
        - if the current user is logged in let them make changes to this page
    */}
    return (
        <div>
            <HeaderNavbar></HeaderNavbar>
            <div>
                <h1>{params.slug}</h1>
            </div>
        </div>
    );
  }