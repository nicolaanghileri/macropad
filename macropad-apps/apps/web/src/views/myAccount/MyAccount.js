import { Center, TextInput } from "@mantine/core";
import { KeyTable } from "../../components/keyTable/KeyTable";
import axios from "../../services/axios";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "@mantine/core";

const KEY_URL = "/key";
const MyAccount = (props) => {

  const user = useAuth();

  const addKey = ()  => {
    axios.post(KEY_URL + "/create/" + user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>My Account</h1>
      <Center>
        <KeyTable></KeyTable>
        <Button color="gray" onClick={addKey}>
        Add Key
      </Button>
      </Center>
      <TextInput
        label="Your email:"
        disabled
        placeholder={useAuth()}
      ></TextInput>
    </>
  );
};

export default MyAccount;
