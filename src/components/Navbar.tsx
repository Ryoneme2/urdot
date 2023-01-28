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

  return (
    <Navbar isBordered={isDark} disableShadow={true} variant="floating">
      <Navbar.Brand>
        {/* <AcmeLogo /> */}
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
      <Navbar.Content>
        <Component.DarkModeIcon isDark={!!isDark} onClick={setDarkMode} />
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarComp;
