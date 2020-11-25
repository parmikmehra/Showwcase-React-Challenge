import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import HomePage from './components/HomePage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;
