// ListingDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const ListingDetail = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await api.get(`/getListing?id=${id}`); // deployed API
        setListing(res.data.listing);
      } catch (err) {
        console.error(err.response?.data || err.message);
        alert("Failed to fetch listing");
      }
    };

    fetchListing();
  }, [id]);

  const handleLike = async () => {
    alert("Like feature will be implemented");
  };

  const handleSave = async () => {
    alert("Save feature will be implemented");
  };

  if (!listing) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: 600 }}>
      <h2>{listing.title}</h2>
      <p><strong>Location:</strong> {listing.location}</p>
      <p><strong>Description:</strong> {listing.description}</p>
      <p><strong>Price:</strong> ${listing.price}</p>
      {listing.image && <img src={listing.image} alt={listing.title} style={{ maxWidth: "100%" }} />}
      <div style={{ marginTop: 20 }}>
        <button onClick={handleLike}>Like</button>
        <button onClick={handleSave} style={{ marginLeft: 10 }}>Save</button>
      </div>
    </div>
  );
};

export default ListingDetail;