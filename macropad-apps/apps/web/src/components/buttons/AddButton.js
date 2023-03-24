import { Button } from "@mantine/core";
import { PlaylistAdd } from "tabler-icons-react";

/**
 * AddButton - Button component styled for "Add Macro" string.
 * Static component beacuse used only for this purpose.
 *
 * @returns {JSX.Element} - Styled Add Macro button element.
 */
const AddButton = () => {
  return (
    <Button
      leftIcon={<PlaylistAdd size="2rem" />}
      variant="subtle"
      color="dark"
    >
      Add Macro
    </Button>
  );
};

export default AddButton;
