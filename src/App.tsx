import React from 'react';
import { createMuiTheme, ThemeProvider} from '@material-ui/core';
import {SignIn, SignUp} from './components/Registration';

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
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SignUp />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
