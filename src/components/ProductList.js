import React, { useEffect, useState } from 'react';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Dell S3221QSA 31.5-inch 4K UHD 4ms LED Curved Monitor",
        description: "4K UHD monitor with 1800R curvature and AMD FreeSync.",
        price: "R 8,999.00",
        category: "Monitors"
      },
      {
        id: 2,
        name: "Dell Optiplex 7420 23.8-inch Core i7 All-in-One PC",
        description: "Powerful All-in-One with Core i7 and space-saving design.",
        price: "R 31,999.00",
        category: "Desktops & All-in-Ones"
      },
      {
        id: 3,
        name: "Dell S2725H 27-inch Full HD IPS LED Monitor",
        description: "Full HD IPS monitor with 99% sRGB and ComfortView Plus.",
        price: "R 3,299.00",
        category: "Monitors"
      },
      {
        id: 4,
        name: "Dell Precision 3561 Mobile Workstation",
        description: "15.6-inch workstation with Intel Core i7, NVIDIA graphics, and 512GB SSD.",
        price: "R 42,999.00",
        category: "Laptops"
      },
      {
        id: 5,
        name: "Dell Latitude 7420 Business Laptop",
        description: "14-inch business laptop with Intel Core i5 and 256GB SSD.",
        price: "R 27,999.00",
        category: "Laptops"
      },
      {
        id: 6,
        name: "Dell USB-C Mobile Adapter",
        description: "Compact USB-C adapter with HDMI, Ethernet, and USB-A ports.",
        price: "R 1,599.00",
        category: "Accessories"
      },
      {
        id: 7,
        name: "Dell Premier Wireless Mouse",
        description: "Ergonomic wireless mouse with customizable buttons.",
        price: "R 899.00",
        category: "Accessories"
      },
      {
        id: 8,
        name: "Dell UltraSharp 38 Curved Monitor",
        description: "38-inch WQHD+ curved monitor with 21:9 aspect ratio.",
        price: "R 21,999.00",
        category: "Monitors"
      },
      {
        id: 9,
        name: "Dell Precision 3650 Tower Workstation",
        description: "Tower workstation with Intel Xeon and 32GB RAM for demanding tasks.",
        price: "R 38,999.00",
        category: "Workstations"
      },
      {
        id: 10,
        name: "Dell P2422H 23.8-inch Monitor",
        description: "Full HD monitor with IPS technology and thin bezels.",
        price: "R 2,999.00",
        category: "Monitors"
      },
      {
        id: 11,
        name: "Dell Inspiron 15 3000 Laptop",
        description: "15.6-inch laptop with Intel Core i3 and 256GB SSD.",
        price: "R 9,999.00",
        category: "Laptops"
      },
      {
        id: 12,
        name: "Dell Latitude 5520 15.6-inch Laptop",
        description: "Business laptop with Core i7, 16GB RAM, and 512GB SSD.",
        price: "R 29,999.00",
        category: "Laptops"
      },
      {
        id: 13,
        name: "Dell USB Soundbar",
        description: "Clip-on soundbar with rich stereo sound for Dell monitors.",
        price: "R 499.00",
        category: "Accessories"
      },
      {
        id: 14,
        name: "Dell Optiplex 3080 Tower",
        description: "Compact desktop tower with Core i5 and 8GB RAM.",
        price: "R 10,499.00",
        category: "Desktops & All-in-Ones"
      },
      {
        id: 15,
        name: "Dell UltraSharp 24-inch USB-C Monitor",
        description: "Full HD USB-C monitor with accurate colors for professional work.",
        price: "R 4,499.00",
        category: "Monitors"
      },
      {
        id: 16,
        name: "Dell Precision 5550 Mobile Workstation",
        description: "15-inch mobile workstation with Core i9, 32GB RAM, and NVIDIA Quadro graphics.",
        price: "R 48,999.00",
        category: "Laptops"
      },
      {
        id: 17,
        name: "Dell 24 Video Conferencing Monitor",
        description: "Monitor with integrated webcam, ideal for video calls.",
        price: "R 5,299.00",
        category: "Monitors"
      },
      {
        id: 18,
        name: "Dell Inspiron 27 7000 All-in-One",
        description: "27-inch AIO with AMD Ryzen 7 and 512GB SSD.",
        price: "R 22,999.00",
        category: "Desktops & All-in-Ones"
      },
      {
        id: 19,
        name: "Dell Multi-Device Wireless Keyboard",
        description: "Slim wireless keyboard that pairs with multiple devices.",
        price: "R 1,299.00",
        category: "Accessories"
      },
      {
        id: 20,
        name: "Dell Precision 7540 Mobile Workstation",
        description: "High-end workstation with Core i9, 64GB RAM, and NVIDIA graphics.",
        price: "R 61,999.00",
        category: "Workstations"
      }
    ]);
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
