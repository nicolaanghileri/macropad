import { Button } from '@mantine/core';

/**
 * SmallButton - Component for the small button used inside Navbar.
 * 
 *
 * @param {string} props.content - The text displayed inside the button.
 * @param {} props.onClick - Metod that permits the Routing to the path when button clicked.
 * 
 * @returns {JSX.Element} - SmallButton styled for Navbar.
 */
const SmallButton = (props) => {
    const content = props.content || 'Default Button Text';
    return (
        <Button variant="subtle" color="dark" onClick={props.onClick}>
            {content}
        </Button>
    );

}

export default SmallButton;