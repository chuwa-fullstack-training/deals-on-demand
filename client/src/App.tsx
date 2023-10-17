import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material';

// Usage :
// <Button sx={{ color: "primary.main" }}></Button>
// <Button sx={{ color: (theme) => theme.palette.primary.main }}></Button>
// <Button variant="contained" color="secondary"></Button>
const theme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      main: '#2a9461'
    },
    secondary: {
      main: '#494c7d'
    }
  },
  components: {}
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
          {/*footer*/}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
