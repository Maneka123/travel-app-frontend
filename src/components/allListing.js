// src/components/AllListings.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const AllListings = () => {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await api.get("/getListings"); // backend endpoint
        setListings(res.data.listings);
      } catch (err) {
        console.error(err.response?.data || err.message);
        alert("Failed to fetch listings");
      }
    };
    fetchListings();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Listings</h2>
      {listings.length === 0 ? (
        <p>No listings found</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {listings.map((listing) => (
            <div
              key={listing._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              {listing.image && (
                <img
                  src={listing.image}
                  alt={listing.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginBottom: "10px",
                  }}
                />
              )}
              <h3 style={{ margin: "5px 0" }}>{listing.title}</h3>
              <p style={{ margin: "3px 0", fontWeight: "bold" }}>
                {listing.location}
              </p>
              <p style={{ margin: "3px 0" }}>
                {listing.description.length > 50
                  ? listing.description.substring(0, 50) + "..."
                  : listing.description}
              </p>
              <p style={{ margin: "5px 0", color: "#007bff", fontWeight: "bold" }}>
                ${listing.price}
              </p>
              <button
                onClick={() => navigate(`/dashboard/listing/${listing._id}`)}
                style={{
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllListings;