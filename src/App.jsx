import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Auth from './pages/Auth';
import CheckOut from './pages/Checkout';
import NavBar from './assets/components/navBar';

import AuthProvider from './context/AuthContext';
import ProductDetails  from './pages/productDetails';
import CartProvider from './context/CartContext';

function App() {
  return(

    <AuthProvider> 
      <CartProvider>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<CheckOut />} />

        <Route path="/products/:id" element={<ProductDetails />} />

      </Routes>
          </div>
          </CartProvider>
          </AuthProvider>
  );
}

export default App;
