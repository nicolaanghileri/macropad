import { Button } from '@mantine/core';

/**
 * BigButton - Component for big button used inside Navbar.
 * 
 *
 * @param {string} props.content - The text displayed inside the button.
 * @param {} props.onClick - Metod that permits the Routing to the path when button clicked.
 * 
 * @returns {JSX.Element} - BigButton styled for Navbar.
 */
const BigButton = (props) => {
    const content = props.content || 'Default Button Text';
    return (
        <Button variant="default" color="dark" onClick={props.onClick}>
            {content}
        </Button>
    );

}

export default BigButton;