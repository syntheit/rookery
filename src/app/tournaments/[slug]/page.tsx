import { HeaderNavbar } from "~/app/_components/header-navbar";

export default async function Page({ params }: { params: { slug: string } }) {
    return (
        <div>
            <HeaderNavbar></HeaderNavbar>
            <div className="h-screen flex items-center justify-center">
                <h1>specific tournament page</h1>
                <h1>{params.slug}</h1>
            </div>
        </div>
    );
  }