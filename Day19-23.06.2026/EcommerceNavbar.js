import React from "react";
import { Link } from "react-router-dom";

function EcommerceNavbar() {
  return (
    <div>
      <Link to="/">Home</Link>{" | "}
      <Link to="/product">Products</Link>{" | "}
      <Link to="/cart">Cart</Link>{" | "}
      <Link to="/checkout">Checkout</Link>
      <hr />
    </div>
  );
}

export default EcommerceNavbar;