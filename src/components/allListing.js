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
        const res = await api.get("/getListings"); // make sure this matches your backend
        setListings(res.data.listings);
      } catch (err) {
        console.error(err.response?.data || err.message);
        alert("Failed to fetch listings");
      }
    };
    fetchListings();
  }, []);

  return (
    <div>
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
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {listing.image && (
                <img
                  src={listing.image}
                  alt={listing.title}
                  style={{ maxWidth: "200px", marginBottom: "10px" }}
                />
              )}
              <h3>{listing.title}</h3>
              <p>{listing.location}</p>
              <p>{listing.description.substring(0, 50)}...</p>
              <p>Price: ${listing.price}</p>
              <button
                style={{ marginTop: "10px" }}
                onClick={() => navigate(`/dashboard/listing/${listing._id}`)}
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