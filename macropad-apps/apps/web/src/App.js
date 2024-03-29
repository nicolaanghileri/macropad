//Importing app styles
import "./App.css";

//Importing views forms (route views)
import LoginForm, { Login } from "./views/login/Login.js";
import ShareForm, { Share } from "./views/share/Sharing";
import HomeForm, { Home } from "./views/home/Home";
import MacroDashboard from "./views/macros/MacroDashboard";
import MacroCreation from "./views/macros/MacroCreation";
import Nav from "./components/navbar/Navbar";
import MyAccount from "./views/myAccount/MyAccount";

//Import utils
import { Link, Route, Redirect, Router, Switch } from "wouter";
import { AppShell, MantineProvider } from "@mantine/core";
//Auth hook for Conditional Rendering
import { useAuth } from "./hooks/useAuth";


function App() {
  const user = useAuth();
  return (
    <div>
      <MantineProvider
        theme={{ colorScheme: "dark" }}
        withGlobalStyles
        withNormalizeCSS
      >
        {user ? (
          <AppShell navbar={<Nav username={user}/>}>
            <Switch>
              <Route path="/dashboard" component={MacroDashboard}/>
              <Route path="/home" component={HomeForm}/>
              <Route path="/creation" component={MacroCreation}/>
              <Route path="/myaccount" component={MyAccount}/>
              <Route path="/logout"/>
            </Switch>
          </AppShell>
        ) : (
          <LoginForm />
        )}
      </MantineProvider>
    </div>
  );
}

export default App;
