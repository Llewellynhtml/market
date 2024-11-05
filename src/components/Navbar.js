// Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const context = useContext(AuthContext);
  
  if (!context) return null; // In case AuthContext is not available
  
  const { isAuthenticated, logout } = context;

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Marketplace</Link>
      {isAuthenticated ? (
        <>
          <Link to="/add-product" style={styles.link}>Add Product</Link>
          <Link to="/cart" style={styles.link}>Cart</Link>
          <button onClick={logout} style={styles.button}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/register" style={styles.link}>Register</Link>
        </>
      )}
    </nav>
  );
};

// Basic styling
const styles = {
  navbar: {
    display: 'flex',
    gap: '10px',
    padding: '10px',
    background: '#f0f0f0',
    boxShadow: '0px 4px 6px lightblue',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  button: {
    background: 'transparent',
    border: 'none',
    color: 'blue',
    cursor: 'pointer',
  }
};

export default Navbar;
