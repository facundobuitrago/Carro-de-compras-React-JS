import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import CartContextProvider from './components/context/CartContext';
import "./App.css";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </CartContextProvider>
  );
}

export default App;

