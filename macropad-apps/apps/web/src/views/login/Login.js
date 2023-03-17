import { useRef, useState, useEffect, useContext } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Center,
} from "@mantine/core";

import { handleLogin, handleRegister } from "../../utils/authHandler"; 

import axios from "../../api/axios";

const LOGIN_URL = "auth/login";
const REGISTER_URL = "auth/register";

export function Login(props) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    //e.preventDefault();

    try {
      //console.log(form.values.email, form.values.password)
      //const json = JSON.stringify({ email: email, password: password });
      //const response = await axios.get(LOGIN_URL, { email: email, password: password });

      console.log("Uela:" + form.values.email + form.values.password);
      const emailProva = form.values.email;
      const pwdProva = form.values.password;

      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({emailProva, pwdProva}),
        {
          headers: { "Content-Type": "application/json"},
          withCredentials: true,
        }
      );
      console.log("Uscito success");
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      //setAuth({ user, pwd, roles, accessToken });
      //setEmail("");
      //setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        //setErrMsg("No Server Response");
        console.log("No Server Response");
      } else if (err.response?.status === 400) {
        //setErrMsg("Missing Username or Password");
        console.log("Missing Username or Password");
      } else if (err.response?.status === 401) {
        //setErrMsg("Unauthorized");
        console.log("Unauthorized");
      } else {
        //setErrMsg("Login Failed");
        console.log("Login Failed");
      }
      //errRef.current.focus();
    }
  }

  
  return (
    <Center>
      <Paper shadow="xs" radius="xs" p="xl" withBorder {...props}>
        <Text size="lg" weight={500}>
          Macropad {type}:
        </Text>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="john@zillo.ch"
              value={form.values.email}
              id="email"
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              id="password"
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit">{upperFirst(type)}</Button>
          </Group>
        </form>
      </Paper>
    </Center>
  );
}

export default Login;
