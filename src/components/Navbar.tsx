import React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  useTheme,
  Dropdown,
  Avatar,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import * as Component from "./index";
import { signOut, useSession } from "next-auth/react";

const NavbarComp = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const { data: sessionData } = useSession();

  console.log(sessionData);

  const setDarkMode = () => {
    setTheme(!isDark ? "dark" : "light");
  };

  const collapseItems = ["Sign In", "Sign Up"];

  return (
    <Navbar isBordered={isDark} disableShadow={true} variant="floating">
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <svg
          className=""
          fill="none"
          height="36"
          viewBox="0 0 32 32"
          width="36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
          <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <Text b color="inherit" hideIn="xs">
          URDOT
        </Text>
      </Navbar.Brand>
      {/* <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content> */}
      <Navbar.Content showIn={"xs"} css={{ paddingRight: "5px" }}>
        <Component.DarkModeIcon
          size={30}
          isDark={!!isDark}
          onClick={setDarkMode}
        />
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
        hideIn="xs"
      >
        <Component.DarkModeIcon
          size={30}
          isDark={!!isDark}
          onClick={setDarkMode}
        />
        {sessionData?.user ? (
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src={sessionData.user.image || ""}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {sessionData.user.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                My Link
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                <Text color="error" onClick={() => signOut()}>
                  Log Out
                </Text>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <>
            <Navbar.Item>
              <Component.ModalLogin />
            </Navbar.Item>
            <Navbar.Item>
              <Component.ModalRegister />
            </Navbar.Item>
          </>
        )}
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => signOut() : () => signIn("discord")}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
