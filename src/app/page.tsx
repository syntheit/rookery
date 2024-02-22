import {
  Card,
  CardFooter,
  Image,
  Button,
  Tooltip,
  Link,
  CardHeader,
} from "@nextui-org/react";
import {
  DiscordIcon,
  EmailIcon,
  EventIcon,
  GithubIcon,
  WarningIcon,
} from "./components/Icons";

import { unstable_noStore as noStore } from "next/cache";

export default function Home() {
  noStore();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      <div className="flex items-center justify-center w-full">
        <Card
          isFooterBlurred
          radius="lg"
          className="h-full border-none"
          id="footer"
        >
          <CardHeader>
            <div className="flex flex-col gap-2 p-5">
              <h1 className="text-[2.5rem] font-bold">RPI Chess Club</h1>
              <p className="w-7/12 leading-8 text-default-500">
                We give chess players at Rensselaer and around the Capital
                Region a spot to play chess, get better at it, and take part in
                scrimmages and tournaments
              </p>
              <div className="flex items-center gap-3 mt-4">
                <WarningIcon size={32} color="#f5a524" />
                <p className="text-warning">
                  This website is under active development. Expect things to
                  break & frequent updates.
                </p>
              </div>
            </div>
          </CardHeader>
          <Image
            className="h-[30rem] object-cover"
            src="/images/jan-27-tournament.webp"
            height="60%"
          />
          <CardFooter className="absolute bottom-1 z-10 ml-1 h-24 w-[calc(100%_-_8px)] justify-center gap-6 overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
            <Button
              size="lg"
              as={Link}
              href="/events"
              startContent={<EventIcon />}
              color="primary"
            >
              View our upcoming events
            </Button>
            <Button
              size="lg"
              as={Link}
              href="https://discord.gg/ZXz6whyAdW"
              startContent={<DiscordIcon />}
            >
              Join our Discord
            </Button>
            <Button
              size="lg"
              startContent={<GithubIcon />}
              as={Link}
              href="https://www.github.com/syntheit/rookery"
            >
              View on GitHub
            </Button>
            <Tooltip content="hello@rpichess.org">
              <Button
                size="lg"
                startContent={<EmailIcon />}
                as={Link}
                href="mailto:hello@rpichess.org"
              >
                Email us
              </Button>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
