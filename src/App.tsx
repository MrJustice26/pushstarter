import React from 'react';
import { createMuiTheme, ThemeProvider} from '@material-ui/core';
import {SignIn, SignUp} from './components/Registration';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#18A794',
      light: '#00BFA5'
    },
    secondary: {
      main: '#212121',
      light: '#616161'
    }
  },
  typography: {
    fontFamily: [
      '"Montserrat"',
      'sans-serif'
    ].join(',')
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
          
        </div>
      </BrowserRouter>
      
    </ThemeProvider>
    
  );
}

export default App;
