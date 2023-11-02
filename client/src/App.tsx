import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import SearchedProducts from '@/pages/SearchedProducts';
import ProductDetail from '@/pages/ProductDetail';
import ElectronicsPage from './pages/ElectronicsPage';
import FurnituresPage from './pages/FurnituresPage';
import { PersistGate } from 'redux-persist/integration/react';

// Usage :
// <Button sx={{ color: "primary.main" }}></Button>
// <Button sx={{ color: (theme) => theme.palette.primary.main }}></Button>
// <Button variant="contained" color="secondary"></Button>
const theme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      // main: '#2a9461'
      main: '#1e3a8a'
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
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Router>
              <Header />
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="electronics" element={<ElectronicsPage />} />
                  <Route path="furnitures" element={<FurnituresPage />} />
                  <Route
                    path="product/:platform/:productId"
                    element={<ProductDetail />}
                  />
                  <Route path="search" element={<SearchedProducts />} />
                </Route>
              </Routes>
              {/*footer*/}
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
