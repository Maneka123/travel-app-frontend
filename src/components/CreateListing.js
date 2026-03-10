import React, { useState } from "react";
import api from "../services/api"; // your Axios instance with baseURL and withCredentials

const CreateListing = () => {
  const [form, setForm] = useState({
    title: "",
    location: "",
    image: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to create a listing");
      return;
    }

    try {
      const res = await api.post("/createListing", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(res.data.message);
      // Reset form after success
      setForm({ title: "", location: "", image: "", description: "", price: "" });
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.error || "Failed to create listing");
    }
  };

  return (
    <div style={{ maxWidth: 600 }}>
      <h2>Create Listing</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={form.image}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
};

export default CreateListing;