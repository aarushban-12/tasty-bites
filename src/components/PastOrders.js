import React from "react";

import Navbar from "./Navbar";

function PastOrders({ pastOrders, email }) {
  const userOrders = pastOrders[email] || []; 

  const calculateOrderTotal = (cart) => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price * item.quantity;
    }, 0);
  };

  return (
      <div>
          <Navbar />
          <div className="order-history container">
              <h2 className="mt-3">{email}'s Order History</h2>

              {userOrders.length > 0 ? (
                  userOrders.map((order, index) => (
                      <div key={index} className="order-summary">
                          <h4>Order {index + 1}</h4>
                          <p><strong>Delivery Address:</strong> {order.address}</p>
                          <ul>
                              {order.cart.map((item, idx) => (
                                  <li key={idx}>
                                      {item.name} - x{item.quantity} - ${parseFloat(item.price) * item.quantity}
                                  </li>
                              ))} 
                          </ul>
                          <h6>Total Price: ${calculateOrderTotal(order.cart).toFixed(2)}</h6>
                          <hr />
                      </div>
                  ))
              ) : (
                  <p>No past orders found.</p>
              )}
          </div>
      </div>
  );
}




export default PastOrders;
