import { Center, TextInput } from '@mantine/core';
import { IconAt } from "tabler-icons-react";
import { KeyTable } from '../../components/keyTable/KeyTable';
import axios from '../../services/axios';
import { useAuth } from '../../hooks/useAuth';

const KEY_URL = "/key";
const MyAccount = (props) => {
    return (
        <>
            <h1>My Account</h1>
            <Center>
                <KeyTable></KeyTable>
            </Center>
            <TextInput label='Your email:' disabled placeholder={useAuth()}></TextInput>
        </>
    );
}

export default MyAccount;