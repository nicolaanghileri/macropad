import { Navbar } from "@mantine/core";
import Bar from "./Bar";

/**
 * Nav - Component for entire Navbar from mantine UI, including Bar.js Grids.
 *
 *
 * @param {string} props.username - Username of the logged user, should be email.
 *
 * @returns {JSX.Element} - Complete Navbar component shown in the entire Web App.
 */
function Nav(props) {
  const username = props.username || "Undefined";
  return (
    <>
      <Navbar height={900} p="xs" width={{ base: 200 }}>
        <Navbar.Section>{<h1>Macropad</h1>}</Navbar.Section>
        <Navbar.Section grow mt="md">
          {<Bar></Bar>}
        </Navbar.Section>
        <Navbar.Section>{username}</Navbar.Section>
      </Navbar>
    </>
  );
}

export default Nav;
