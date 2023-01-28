import React from "react";
import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import * as Component from "./index";

const NavbarComp = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const setDarkMode = () => {
    setTheme(!isDark ? "dark" : "light");
  };

  const collapseItems = ["Sign In", "Sign Up"];

  return (
    // <Navbar isBordered={isDark} disableShadow={true} variant="floating">
    //   <Navbar.Brand>
    //     {/* <AcmeLogo /> */}
    //     <Text b color="inherit" hideIn="xs">
    //       ACME
    //     </Text>
    //   </Navbar.Brand>
    //   {/* <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
    //     <Navbar.Link href="#">Features</Navbar.Link>
    //     <Navbar.Link isActive href="#">
    //       Customers
    //     </Navbar.Link>
    //     <Navbar.Link href="#">Pricing</Navbar.Link>
    //     <Navbar.Link href="#">Company</Navbar.Link>
    //   </Navbar.Content> */}
    //   <Navbar.Content>
    //     <Component.DarkModeIcon isDark={!!isDark} onClick={setDarkMode} />
    //     <Navbar.Link color="inherit" href="#">
    //       Login
    //     </Navbar.Link>
    //     <Navbar.Item>
    //       <Button auto flat as={Link} href="#">
    //         Sign Up
    //       </Button>
    //     </Navbar.Item>
    //   </Navbar.Content>
    // </Navbar>

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
          ACME
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
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
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
