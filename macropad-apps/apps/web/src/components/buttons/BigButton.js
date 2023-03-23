import { Button } from '@mantine/core';

const BigButton = (props) => {
    const content = props.content || 'Default Button Text';
    return (
        <Button variant="default" color="dark" onClick={console.log("uela")}>
            {content}
        </Button>
    );

}

export default BigButton;