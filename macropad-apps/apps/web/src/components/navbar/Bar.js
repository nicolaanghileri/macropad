import BigButton from "./../buttons/BigButton";
import SmallButton from "./../buttons/SmallButton";
import LogoutButton from "../buttons/LogoutButton";
import { Grid } from "@mantine/core";
import { Link } from "wouter";

const Bar = (props) => {
  return (
    <Grid>
      <Grid.Col>
        <Link href="/dashboard">
          <BigButton content="Macro Dashboard"></BigButton>
        </Link>
      </Grid.Col>
      <Grid.Col>
        <Link href="/home">
          <SmallButton content="Home"></SmallButton>
        </Link>
      </Grid.Col>
      <Grid.Col>
        <Link href="/logout">
          <LogoutButton content="Logout"></LogoutButton>
        </Link>
      </Grid.Col>
    </Grid>
  );
};

export default Bar;
