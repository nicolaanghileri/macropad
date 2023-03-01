import './App.css';
import LoginForm, { Login } from './views/login/Login.js'
import Nav from './components/navbar/Navbar.js';
import { Link, Route } from "wouter";
import { MantineProvider } from '@mantine/core';
import { useCookies } from "react-cookie";





function App() {

  const [cookies, setCookie] = useCookies(["user"]);

  function handleCookie() {
    setCookie("user", "gowtham", {
      path: "/"
    });
  }

  function isLogged(){
    return cookies.user || null;
  }

  return (
    <div>
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        
        <Nav></Nav>
      </MantineProvider>
      <Route path="/sharings" component={LoginForm}></Route>
      <Route path="/mymacro" component={LoginForm}>My macros</Route>
      <Route path="/myaccount" component={LoginForm}>My Account</Route>
      <Route path="/dashboard" component={LoginForm} >Macro Dashboard</Route>
    </div>

  );
}

export default App;
