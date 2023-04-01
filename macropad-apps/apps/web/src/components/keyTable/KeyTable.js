import { useState, useEffect } from "react";
import { createStyles, Table, ScrollArea, Anchor } from "@mantine/core";
import { useDisclosure, useCounter } from "@mantine/hooks";
import { Modal, Button, Group, Text, Badge } from "@mantine/core";
import axios from "../../services/axios";
import { useAuth } from "../../hooks/useAuth";
const KEY_URL = "/key/";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

function KeyTable() {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState([]);
  const email = useAuth();
  const [opened, { close, open }] = useDisclosure(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const payload = JSON.stringify(email);
    console.log("payload email: " + payload);
    axios
      .get(KEY_URL + email, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data.keys);
        console.log("log");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);

  const deletion = () => {
    console.log("DELETION");
    if (selected != null) {
      console.log("Selected" + selected);
      const payload = JSON.stringify(selected);
      console.log(payload);
      axios.delete(KEY_URL + "delete/" + selected, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("Key Deleted");
          setSelected(null);
          //Fai partire notifica
          close();
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }
    console.log("Fuori log")
    return;
  };

  const rows = data.map((row) => (
    <tr key={row.id}>
      <td>{row.id}</td>
      <td>{row.api_key}</td>
      <td>{row.createdAt}</td>
      <td>{row.device || "Not connected"}</td>
      <td>
        <Anchor component="button" fz="sm" onClick={() => { open(); setSelected(row.id); }}>
          Delete
        </Anchor>
      </td>
    </tr>
  ));

  return (
    <ScrollArea
      h={300}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Modal
        opened={opened}
        onClose={close}
        size="auto"
        title="Watch out!"
        centered
      >
        <Text>Are you sure you want to delete this key?</Text>

        <Group mt="xl">
          <Button variant="outline" onClick={close}>
            Go back
          </Button>
          <Button color="red" onClick={deletion}>
            Delete
          </Button>
        </Group>
      </Modal>
      <Table miw={700}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>ID</th>
            <th>Key</th>
            <th>Created At</th>
            <th>Device</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export { KeyTable };
