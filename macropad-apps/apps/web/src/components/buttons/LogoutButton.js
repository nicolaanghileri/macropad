import { Button } from "@mantine/core";
import { Logout } from "tabler-icons-react";
import { useLogout } from "../../hooks/useLogout";

/**
 * LogoutButton - Static component only for logout button in the navbar.
 *
 * @returns {JSX.Element} - LogoutButton component with "Logout" string and logout Icon
 *                          on the right.
 */
const LogoutButton = () => {
  return (
    <Button
      rightIcon={<Logout size="1rem" />}
      variant="subtle"
      color="dark"
      onClick={useLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
