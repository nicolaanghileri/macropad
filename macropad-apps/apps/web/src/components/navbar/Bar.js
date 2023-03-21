import BigButton from './../buttons/BigButton';
import SmallButton from './../buttons/SmallButton';
import { Grid } from '@mantine/core';
import { Link } from "wouter";

import {useLogout} from '../../hooks/useLogout';

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
                <Link href="/logout">
                    <SmallButton content="Logout" onClick={useLogout}>
                    </SmallButton>
                </Link>
            </Grid.Col>
            <Grid.Col>
                <Link href="/home"> 
                    <SmallButton content="Home">
                    </SmallButton>
                </Link>
            </Grid.Col>
        </Grid>
    );
}

export default Bar;