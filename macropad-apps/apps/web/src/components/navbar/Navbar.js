import { Navbar } from '@mantine/core';
import Bar from './Bar';



function Nav(props) {
    const username = props.username || 'default username';


  return (
      <>
        <Navbar height={900} p="xs" width={{ base: 200 }}>
        <Navbar.Section>{<h1>Macropad</h1>}</Navbar.Section>
        <Navbar.Section grow mt="md">{<Bar></Bar>}</Navbar.Section>
        <Navbar.Section>{username}</Navbar.Section>
        </Navbar>
    </>
  );
}

export default Nav;
