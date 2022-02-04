import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';


function App() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (

    <BrowserRouter>
      <div className={sidebar ? 'sidebar' : 'sidebar active'}>
        <div className="sidebar-button" onClick={showSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazona
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <Link to="/signin">Sign in</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/cart/:id" element={<CartScreen />}> </Route>
            <Route path="/cart/" element={<CartScreen />}> </Route>
            <Route path="/product/:id" element={<ProductScreen />}> </Route>
            <Route path="/" element={<HomeScreen />}> </Route>
            <Route path="/signin" element={<SigninScreen />}> </Route>
            <Route path="/Contact" element={<ContactScreen />}> </Route>
            <Route path="/About" element={<AboutScreen />}> </Route>
          </Routes>

        </main>

        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter >
  );
}

export default App;
