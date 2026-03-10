// AllListings.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const AllListings = () => {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await api.get("/getListing"); // Use your deployed endpoint
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
        <ul>
          {listings.map((listing) => (
            <li key={listing._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <h3>{listing.title}</h3>
              <p>{listing.location}</p>
              <p>{listing.description.substring(0, 50)}...</p>
              <p>Price: ${listing.price}</p>
              <button onClick={() => navigate(`/dashboard/listing/${listing._id}`)}>
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllListings;