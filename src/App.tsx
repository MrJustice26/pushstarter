import React from 'react';
import { createMuiTheme, ThemeProvider} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Auth, Home } from './pages';
import Nav from './components/Nav/Nav';

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
  },
  spacing: 15
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path={["/", "/signin", "/signup"]}>
              <Auth />
            </Route>
            <Route exact path={'/home'}>
              <Nav />
              <Home />
            </Route>
          </Switch>
          
        </div>
      </BrowserRouter>
      
    </ThemeProvider>
    
  );
}

export default App;
