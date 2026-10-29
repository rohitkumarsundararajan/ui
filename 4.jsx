import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([]);

  // Simple add function: adds name to list, adds number to total
  const addItem = (foodName, price) => {
    setCart([...cart, `${foodName} - ₹${price}`]);
    setTotal(total + price);
  };

  // Place order: saves total to orders, clears the cart
  const placeOrder = () => {
    if (cart.length === 0) return alert("Your cart is empty!");
    setOrders([...orders, `Order Total: ₹${total}`]);
    setCart([]);
    setTotal(0);
    alert("Order placed successfully!");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Food Hub</h1>

      <h2>Restaurant Menu</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <strong>Veg Burger</strong> — ₹100{" "}
        <button onClick={() => addItem("Veg Burger", 100)}>Add to Cart</button>
      </div>

      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <strong>Pizza</strong> — ₹200{" "}
        <button onClick={() => addItem("Pizza", 200)}>Add to Cart</button>
      </div>

      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <strong>Sandwich</strong> — ₹80{" "}
        <button onClick={() => addItem("Sandwich", 80)}>Add to Cart</button>
      </div>

      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
      <button onClick={placeOrder}>Place Order</button>

      <h2>Order History</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;