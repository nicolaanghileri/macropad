import { Button } from '@mantine/core';
import { Logout } from 'tabler-icons-react';
import { useLogout } from '../../hooks/useLogout';


const LogoutButton = (props) => {
    return (
        <Button rightIcon={<Logout size="1rem" />} variant="subtle" color="dark" onClick={useLogout()} >
            Logout
        </Button>
    );

}

export default LogoutButton;