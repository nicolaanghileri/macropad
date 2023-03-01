//Importing app styles
import './App.css';

//Importing views forms (route views)
import LoginForm, { Login } from './views/login/Login.js'
import Sharing from './views/share/Sharing.js'
import Nav from './components/navbar/Navbar.js';

//Import utils
import { Link, Route } from "wouter";
import { AppShell, MantineProvider } from '@mantine/core';
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
      
      <AppShell
        navbar={<Nav></Nav>
        
        
        }
        
        
        >
        <Route path="/sharings" component={Sharing}></Route>
        <Route path="/mymacro" component={LoginForm}>My macros</Route>
        <Route path="/myaccount" component={LoginForm}>My Account</Route>
        <Route path="/dashboard" component={LoginForm} >Macro Dashboard</Route>
      
      </AppShell>
 

      

      </MantineProvider>

    </div>

  );
}

export default App;
