import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Authentication from './pages/Auth';
import CheckOut from './pages/Checkout';
import NavBar from './assets/components/navBar';

function App() {
  return(
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
          </div>
  );
}

export default App;
