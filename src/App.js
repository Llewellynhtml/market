import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Import AuthProvider
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <AuthProvider> {/* Wrap the application with AuthProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
