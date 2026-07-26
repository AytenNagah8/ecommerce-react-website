import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Authentication from './pages/Auth';
import CheckOut from './pages/Checkout';
import NavBar from './assets/components/navBar';
import AuthProvider from './context/AuthContext';


function App() {
  return(
    <AuthProvider> 
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
          </div>
          </AuthProvider>
  );
}

export default App;
