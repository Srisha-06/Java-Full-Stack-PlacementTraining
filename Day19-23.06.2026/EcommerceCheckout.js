import React from "react";

function EcommerceCheckout({cart}) {

  const total=
    cart.reduce(
      (sum,item)=>
      sum+(item.price*item.quantity),
      0
    );

  return (

    <div>

      <h2>Checkout</h2>

      {
        cart.map(item=>(

          <div key={item.id}>

            <p>
              {item.name}
              x
              {item.quantity}
            </p>

          </div>

        ))
      }

      <h2>
        Grand Total :
        ₹{total}
      </h2>

      <button>
        Place Order
      </button>

    </div>
  );
}

export default EcommerceCheckout;