import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import Header from './components/Header/Header'
import { ColorModeContext, useMode } from "./theme"
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import SingleProduct from './pages/single-product/SingleProduct';
import SpecialOfferPage from './pages/special-offer-page/SpecialOfferPage';
import Products from './pages/products/Products';


function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path = "/cart" element={<Cart />} />
              <Route path = "/products" element={<Products />} />
              <Route path = "/product/:id" element={<SingleProduct />} />
              <Route path = "/special-offer/:id" element={<SpecialOfferPage/>} />

            </Routes>
            <Footer />
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>

    </>
  )
}

export default App
