import BigButton from './../buttons/BigButton';
import SmallButton from './../buttons/SmallButton';
import { Grid } from '@mantine/core';
import { Link } from "wouter";

const Bar = (props) => {

    return (
        <Grid>
            <Grid.Col>
                <Link href="/dashboard">
                    <BigButton content="Macro Dashboard" >

                    </BigButton>
                </Link>
            </Grid.Col>
            <Grid.Col>
                <Link href="/sharings">
                    <SmallButton content="Share your macro!">

                    </SmallButton>
                </Link>
            </Grid.Col>
            <Grid.Col>
                <Link href="/mymacro">
                    <SmallButton content="Macro creator">

                    </SmallButton>
                </Link>
            </Grid.Col>
            <Grid.Col>
                <Link href="/myaccount"> 
                    <SmallButton content="My Account">

                    </SmallButton>
                </Link>
            </Grid.Col>
        </Grid>

    );
}

export default Bar;