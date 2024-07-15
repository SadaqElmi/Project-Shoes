// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nike from './Pages/Nike';
import Jordan from './Pages/Jorden';
import Cart from './Pages/Cart';
import Adidas from './Pages/Adidas';
import { CartProvider } from '../src/Pages/CartContext'; // Import CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/nike" element={<Nike />} />
            <Route path="/jordan" element={<Jordan />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/adidas" element={<Adidas />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
