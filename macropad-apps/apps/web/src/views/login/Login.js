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
  filterProps,
} from "@mantine/core";

import AuthProvider from "../../services/AuthProvider";
import { Link, Route, Redirect, Router } from "wouter";

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
  const [success, setSuccess] = useState(false)
  
  const red = () => {
    return (
      <Redirect to={'/home'} />
    )
  }

  const handleSubmit = async (e) => {
    console.log(e);
    //e.preventDefault();
    if (type === "login") {
      const response = await AuthProvider.login(form.values.email, form.values.password);
      if(response.email){
        //console.log(localStorage.getItem('user'));
        window.location.href = '/home';
      }else{
        console.log("error");
      }
    } else {
      const response = await AuthProvider.register(form.values.email, form.values.password); 
      if(response.status == 200){
        console.log("success");
      }else{
        console.log("error");
      }
    }
  };

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
