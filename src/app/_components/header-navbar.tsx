import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export async function HeaderNavbar() {
    noStore();
    const session = await getServerAuthSession();

    return (
        <div>
            {/*HEADER*/}
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rookery</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <div className="flex flex-col items-center gap-2">

                            {/*LOGIN COMPONENT*/}
                            <div className="flex flex-col items-center justify-center gap-4">
                            <p className="text-center text-2xl text-white">
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
                </div>
            </nav>

            {/*SUBMENU*/}
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="/tournaments" className="text-gray-900 dark:text-white hover:underline">tournaments</a>
                            </li>
                            <li>
                                <a href="/ratings" className="text-gray-900 dark:text-white hover:underline">ratings</a>
                            </li>
                            <li>
                                <a href="/faq" className="text-gray-900 dark:text-white hover:underline">faq</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}