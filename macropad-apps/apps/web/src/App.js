//Importing app styles
import './App.css';

//Importing views forms (route views)
import LoginForm, { Login } from './views/login/Login.js'
import ShareForm, {Share} from './views/share/Sharing';
import HomeForm, {Home} from './views/Home.js';
import Nav from './components/navbar/Navbar';

//Import utils
import { Link, Route, Redirect, Router } from "wouter";
import { AppShell, MantineProvider } from '@mantine/core';

//Auth hook for Conditional Rendering
import { useAuth } from './hooks/useAuth';


function ConditionalRender() {
  const logged = useAuth == null ? false : true;
  if (logged) {
    return <LoginForm />;
  }
  return <HomeForm />;
}


function App() {
  console.log(localStorage.getItem('user'));
  return (
    <div>
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
          <ConditionalRender></ConditionalRender>
      </MantineProvider>
    </div>
  );
}

export default App;
