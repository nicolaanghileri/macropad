import { Button } from '@mantine/core';

const BigButton = (props) => {
    const content = props.content || 'Default Button Text';
    return (
        <Button variant="default" color="dark" onClick={props.onClick}>
            {content}
        </Button>
    );

}

export default BigButton;