import { Avatar } from '@mantine/core';

const UserDisplay = (props) => {

    const text = props.text || "XX";

    return (
        <Avatar color="dark" radius="l">{text}</Avatar>
    );
}

export default UserDisplay;