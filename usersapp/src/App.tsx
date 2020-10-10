import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import HomePage from './Pages/Home';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HomePage />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
