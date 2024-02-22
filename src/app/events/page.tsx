import Link from "next/link";

export default function EventsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-10 text-2xl text-white bg-black">
      <p>
        Regular meetings Tuesdays & Thursdays 5-7pm in VCC 208
      </p>
      <p>
        Scrimmage with UAlbany, 11-3pm, Feb 24th, Union Shelnutt Gallery -&nbsp;
        <Link href="https://forms.gle/V4UUZ8UReqxHQBuS8" className="text-primary">Registration</Link>
      </p>
      <p>
        Rated tournament, 11-3pm, April 13th. Union Shelnutt Gallery
      </p>
    </main>
  );
}
