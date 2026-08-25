import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useCart } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import Contact from './pages/Contact';
import About from './pages/About';
import OrderSuccess from './pages/OrderSuccess';

export default function App() {
  const { drawerOpen, setDrawerOpen } = useCart();
  return <div className="app-shell">
    <Header />
    <main><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart-2" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout-2" element={<Checkout />} />
      <Route path="/my-account" element={<Account />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes></main>
    <Footer />
    {drawerOpen && <CartDrawer onClose={() => setDrawerOpen(false)} />}
  </div>;
}
