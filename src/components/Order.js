import React, { useState } from "react";
import "./order.css";
import Navbar from "./Navbar";

function Order({ cart, setCart, name, email, pastOrders, setPastOrders }) {
  // Aggregate the cart to get unique items with quantities
  const aggregateCart = cart.reduce((acc, item) => {
    const existingItem = acc.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Calculate the total price
  const totalPrice = aggregateCart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price * item.quantity;
  }, 0);

  const [address, setAddress] = useState("");

  // Function to remove one item from the cart
  const removeItem = (itemName) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
      const item = updatedCart[itemIndex];
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        updatedCart.splice(itemIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  const placeOrder = () => {
    if (totalPrice > 0) {
        // Aggregate the cart before saving
        const aggregatedCart = cart.reduce((acc, item) => {
            const existingItem = acc.find(i => i.name === item.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                acc.push({ ...item, quantity: 1 });
            }
            return acc;
        }, []);

        // Ensure price is handled properly
        const formattedCart = aggregatedCart.map(item => ({
            ...item,
            price: typeof item.price === "string" ? item.price.replace("$", "") : item.price,
        }));

        // Save order with the user's email
        const updatedPastOrders = { ...pastOrders, [email]: [...(pastOrders[email] || []), { cart: formattedCart, address }] };
        console.log(updatedPastOrders);
        setPastOrders(updatedPastOrders);

        // Clear cart
        setCart([]);
        setAddress("");
        alert("Your order has been placed successfully!");
    } else {
        alert("Total must be greater than 0 to place an order.");
    }
};



  return (
    <div>
      <Navbar />
      <div className="order-summary container">
        <h2 className="mb-4">{name}'s Order</h2>

        <div className="order-items">
          {aggregateCart.map((item, index) => (
            <div key={index} className="order-item mb-3">
              <div className="card-body">
                <div className="order-content">
                  <span className="order-item-name">{item.name}</span>
                </div>
                <div className="price-quantity-container">
                  <span className="order-item-price">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                  <span className="quantity">x{item.quantity}</span>
                  <button className="btn btn-danger btn-sm ms-2" onClick={() => removeItem(item.name)}>✕</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="total-price mb-5">
          <span>Total: ${totalPrice.toFixed(2)}</span>
        </div>
        
        <h4>Order email: {email}</h4>
        <input className="form-control mb-4" placeholder="Enter Delivery Address:" onChange={(e) => setAddress(e.target.value)}></input>
        <div className="text-center">
          {address && totalPrice > 0 && (
            <button className="btn btn-success my-3" onClick={placeOrder}>Place Order</button>
          )}
          {!address && (
            <span className="text-danger">Please enter a delivery address.</span>
          )}
          {totalPrice <= 0 && (
            <span className="text-danger"> Total must be greater than 0 to place the order.</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
