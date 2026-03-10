import React, { useState } from "react";
import api from "../services/api"; // Axios instance with baseURL and withCredentials

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dr8cn77wn/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "travel_app_preset";

const CreateListing = () => {
  const [form, setForm] = useState({
    title: "",
    location: "",
    image: null, // File object
    description: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
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
      setLoading(true);
      let imageUrl = "";

      // 1️⃣ Upload image to Cloudinary if selected
      if (form.image) {
        const data = new FormData();
        data.append("file", form.image);
        data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        const res = await fetch(CLOUDINARY_URL, {
          method: "POST",
          body: data,
        });

        const file = await res.json();
        imageUrl = file.secure_url;
      }

      // 2️⃣ Send form data + image URL to backend
      const payload = {
        title: form.title,
        location: form.location,
        description: form.description,
        price: form.price,
        image: imageUrl, // string URL
      };

      const backendRes = await api.post("/createListing", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(backendRes.data.message);

      // Reset form
      setForm({ title: "", location: "", image: null, description: "", price: "" });
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.error || "Failed to create listing");
    } finally {
      setLoading(false);
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
        <input type="file" name="image" accept="image/*" onChange={handleChange} />
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
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Listing"}
        </button>
      </form>
    </div>
  );
};

export default CreateListing;