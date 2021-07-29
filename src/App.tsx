import React from 'react';
import { createMuiTheme, ThemeProvider} from '@material-ui/core';
import { BrowserRouter, Switch, Route, useHistory} from 'react-router-dom';
import {Auth, Home, UserProjects} from './pages';
import Nav from './components/Nav/Nav';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#30655E',
      light: '#2E8B7E'
    },
    secondary: {
      main: '#212121',
      light: '#616161'
    }
  },
  typography: {
    fontFamily: [
      '"Inter"'
    ].join(',')
  },
  spacing: 15
})

function App() {


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path={["/", "/login", "/register"]}>
              <Auth />
            </Route>
            <Route path={'/home'}>
              <Nav />
              <Home />
            </Route>
            <Route path={'/my-projects'}>
              <Nav />
              <UserProjects />
            </Route>

          </Switch>
          
        </div>
      </BrowserRouter>
      
    </ThemeProvider>
    
  );
}

export default App;
