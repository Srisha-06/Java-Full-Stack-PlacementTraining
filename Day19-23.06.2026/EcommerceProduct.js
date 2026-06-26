import React, { useEffect, useState } from "react";

function EcommerceProduct({ cart, setCart }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

  fetch("http://localhost:8080/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    })
    .catch((err) => {
      console.log(err);
    });

}, []);

  const addToCart = (product) => {

    const existing = cart.find(
      item => item.id === product.id
    );

    if (existing) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ]);
    }
  };

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add To Cart
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default EcommerceProduct;