import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");

  const [products, setProducts] = useState([
    { id: 1, title: "Used Laptop", category: "Electronics", price: 15000, description: "Good working condition" },
    { id: 2, title: "Mountain Bicycle", category: "Vehicles", price: 3500, description: "2 years old, new tyres" },
  ]);

  const handlePostAd = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      title,
      category,
      price,
      description,
    };
    setProducts([newProduct, ...products]);
    setTitle("");
    setCategory("");
    setPrice("");
    setDescription("");
  };

  const deleteAd = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Filter products by title or category
  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Used Products Marketplace</h1>
      <p>Buy and sell used products easily.</p>

      <h2>Post an Advertisement</h2>
      <form onSubmit={handlePostAd}>
        <input placeholder="Product Title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br /><br />
        <input placeholder="Category (e.g. Electronics)" value={category} onChange={(e) => setCategory(e.target.value)} required /><br /><br />
        <input type="number" placeholder="Price (₹)" value={price} onChange={(e) => setPrice(e.target.value)} required /><br /><br />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required /><br /><br />
        <button type="submit">Post Ad</button>
      </form>

      <h2>Browse Products</h2>
      <input
        placeholder="Search by title or category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />{" "}
      <button onClick={() => setSearch("")}>Clear</button>

      {filteredProducts.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p>Category: {p.category}</p>
          <strong>Price: ₹{p.price}</strong><br /><br />
          <button onClick={() => deleteAd(p.id)}>Delete Ad</button>
        </div>
      ))}
    </div>
  );
}

export default App;