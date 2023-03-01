import { Button } from '@mantine/core';


const SmallButton = (props) => {

    const content = props.content || 'Default Button Text';

    return (
        <Button variant="subtle" color="dark">
            {content}
        </Button>
    );

}

export default SmallButton;