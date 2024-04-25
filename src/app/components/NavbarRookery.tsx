import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
  Image,
} from "@nextui-org/react";
import {
  useSession,
  signOut,
  ClientSafeProvider,
  signIn,
} from "next-auth/react";
import {
  DiscordIcon,
  EventRegistrationIcon,
  LoginIcon,
  LogoutIcon,
  ProfileIcon,
} from "./Icons";

// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavbarRookery({
  loginProvider,
}: {
  loginProvider: ClientSafeProvider;
}) {
  const { data: session, status } = useSession();


  return (
    <Navbar className="absolute">
      <NavbarBrand>
        <Link href="/" className="flex gap-4 font-bold text-inherit">
          <Avatar
            isBordered
            className="transition-transform"
            color="default"
            size="sm"
            src="logo.webp"
          />
          <p>RPI Chess Club</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        {/* use isActive and primary */}
        <NavbarItem>
          <Link color="foreground" href="/events">
            Events
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        {status === "authenticated" && session && (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name={session?.user.name || ""}
                size="sm"
                src={session?.user.image || ""}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profileinfo" className="gap-2 h-14">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{session?.user.name}</p>
              </DropdownItem>
              <DropdownItem
                href="/profile"
                key="profile"
                startContent={<ProfileIcon />}
              >
                My Profile
              </DropdownItem>
              <DropdownItem
                href="/registration"
                key="registration"
                startContent={<EventRegistrationIcon />}
              >
                Event Registration
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                startContent={<LogoutIcon />}
                onClick={() => signOut()}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
        {status === "unauthenticated" && (
          <Button
            endContent={<DiscordIcon />}
            as={Link}
            onClick={() => signIn(loginProvider.id)}
            className="bg-[#5865F2]"
          >
            Sign in with Discord
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
}
