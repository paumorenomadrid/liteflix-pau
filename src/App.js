import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      primary: {
        main: '#64EEBC'
      },
      secondary: {
          main: '#ffffff'
      },
      background: {
        paper: '#242424',
      },
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
