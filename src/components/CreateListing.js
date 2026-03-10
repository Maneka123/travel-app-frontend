import React, { useState } from "react";
import api from "../services/api"; // Axios instance

const CreateListing = () => {
  const [form, setForm] = useState({
    title: "",
    location: "",
    image: null, // now store a File object
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] }); // store selected file
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to create a listing");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("location", form.location);
      formData.append("description", form.description);
      formData.append("price", form.price);
      if (form.image) formData.append("image", form.image);

      const res = await api.post("/createListing", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // important for file upload
        },
      });

      alert(res.data.message);
      setForm({ title: "", location: "", image: null, description: "", price: "" });
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
          type="file"
          name="image"
          accept="image/*"
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