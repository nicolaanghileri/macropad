import { Box } from "@mantine/core";
import { Logout } from "tabler-icons-react";

const Macro = (props) => {
  return (
    <Box
      sx={(theme) => ({
        width: 200,
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        textAlign: "center",
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: "pointer",

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[1],
        
        },
      })}
    >
      <p>Macro name</p>
      <Logout></Logout>
    </Box>
  );
};

export default Macro;
