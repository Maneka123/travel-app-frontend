import React, { useEffect, useState } from "react";
import api from "../services/api"; // Axios instance with baseURL and withCredentials

const AllListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const res = await api.get("/getListing"); // fetch all listings
        setListings(res.data.listings || []);
      } catch (err) {
        console.error(err.response?.data || err.message);
        setError(err.response?.data?.error || "Failed to load listings");
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) return <p>Loading listings...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (listings.length === 0) return <p>No listings found.</p>;

  return (
    <div>
      <h2>All Listings</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {listings.map((listing) => (
          <div
            key={listing._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "250px",
              borderRadius: "5px",
            }}
          >
            {listing.image && (
              <img
                src={listing.image}
                alt={listing.title}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
            )}
            <h3>{listing.title}</h3>
            <p><strong>Location:</strong> {listing.location}</p>
            <p>{listing.description}</p>
            <p><strong>Price:</strong> ${listing.price}</p>
            <p><em>Posted on: {new Date(listing.timePosted).toLocaleDateString()}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllListings;