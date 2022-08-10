import './App.css';

import { Box, CssBaseline, } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import CollectionGallery from 'components/CollectionGallery';
import React from 'react';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    }
  });

  const allJson = require.context('../../thc-art-engine/build/json/', true)
  const tokens = allJson('./_metadata.json')

  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CollectionGallery tokens={tokens} />
      </ThemeProvider>
    </Box >
  );
}

export default App;
