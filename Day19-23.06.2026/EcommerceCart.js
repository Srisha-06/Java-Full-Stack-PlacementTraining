import React from "react";

import { Link } from "react-router-dom";

function EcommerceCart({cart,setCart}) {

  const increase=(id)=>{

    setCart(
      cart.map(item=>
        item.id===id
        ? {
            ...item,
            quantity:item.quantity+1
          }
        : item
      )
    );
  };

  const decrease=(id)=>{

    setCart(
      cart.map(item=>
        item.id===id
        ? {
            ...item,
            quantity:item.quantity-1
          }
        : item
      )
      .filter(item=>item.quantity>0)
    );
  };

  const total=
    cart.reduce(
      (sum,item)=>
      sum+(item.price*item.quantity),
      0
    );

  return (

    <div>

      <h2>Cart</h2>

      {
        cart.map(item=>(

          <div key={item.id}>

            <h3>{item.name}</h3>

            <button
             onClick={()=>
             decrease(item.id)}>
              -
            </button>

            {item.quantity}

            <button
             onClick={()=>
             increase(item.id)}>
              +
            </button>

            <p>
              ₹
              {item.price *
              item.quantity}
            </p>

            <hr/>

          </div>

        ))
      }

      <h2>
        Total : ₹{total}
      </h2>

      <Link to="/checkout">

        <button>
          Proceed To Checkout
        </button>

      </Link>

    </div>
  );
}

export default EcommerceCart;