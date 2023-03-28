import { Center, TextInput } from '@mantine/core';
import { IconAt } from "tabler-icons-react";
import { KeyTable } from '../../components/keyTable/KeyTable';
import axios from '../../services/axios';
import { useAuth } from '../../hooks/useAuth';

const KEY_URL = "/key";

async function getKeys(email) {
    const keyPayload = JSON.stringify({email});
    const keys = await axios.get(KEY_URL + email, keyPayload, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(keys.data);
    return keys.data;
}

const MyAccount = (props) => {
    console.log(getKeys());

    return (
        <>
            <h1>My Account</h1>
            <Center>
                <TextInput label='Your email:' disabled placeholder={useAuth()}></TextInput>
            </Center>
        </>
    );
}

export default MyAccount;