import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@/app/store.ts';
import ProductDetail from '@/pages/ProductDetail';
// import Loading from '@/components/Loading';

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            {/*<Loading />*/}
            <Header />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route
                  path="product/:platform/:productId"
                  element={<ProductDetail />}
                />
              </Route>
            </Routes>
            {/*footer*/}
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
