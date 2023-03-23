import { Button } from "@mantine/core";
import { Logout } from "tabler-icons-react";
import { useLogout } from "../../hooks/useLogout";

const LogoutButton = () => {
  return (
    <Button
      rightIcon={<Logout size="1rem" />}
      variant="subtle"
      color="dark"
      onClick={useLogout} // se non va: () => useLogout()
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
