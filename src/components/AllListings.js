import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const AllListings = () => {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await api.get("/getListings");
        console.log("Listings fetched:", res.data.listings); // 🔹 debug
        setListings(res.data.listings || []);
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
        listings.map((listing) => (
          <div
            key={listing._id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {listing.image && (
              <img
                src={listing.image}
                alt={listing.title}
                style={{ maxWidth: "200px", maxHeight: "150px" }}
              />
            )}
            <h3>{listing.title}</h3>
            <p>{listing.location}</p>
            <p>{listing.description?.substring(0, 50)}...</p>
            <p>Price: ${listing.price}</p>
            <button onClick={() => navigate(`/dashboard/listing/${listing._id}`)}>
              View Details
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AllListings;