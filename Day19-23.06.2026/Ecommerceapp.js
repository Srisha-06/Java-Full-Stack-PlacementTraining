import React from "react";

import { Routes, Route } from "react-router-dom";
import EcommerceHome from "./EcommerceHome";
import EcommerceProduct from "./EcommerceProduct";
import EcommerceCart from "./EcommerceCart";
import EcommerceCheckout from "./EcommerceCheckout";
import EcommerceNavbar from "./EcommerceNavbar";
import { useState } from "react";

function Ecommerceapp() {

  const [cart, setCart] = useState([]);

  return (
    <>
      <EcommerceNavbar />

      <Routes>

        <Route
          path="/"
          element={<EcommerceHome />}
        />

        <Route
          path="/product"
          element={
            <EcommerceProduct
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <EcommerceCart
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <EcommerceCheckout
              cart={cart}
            />
          }
        />

      </Routes>
    </>
  );
}

export default Ecommerceapp;