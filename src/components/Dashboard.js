// DashboardRoutes.js (or inside Dashboard.js)
import { Routes, Route } from "react-router-dom";
import CreateListing from "./CreateListing";
import AllListings from "./AllListings";
import ListingDetail from "./ListingDetail";

<Routes>
  <Route path="create" element={<CreateListing />} />
  <Route path="all" element={<AllListings />} />
  <Route path="listing/:id" element={<ListingDetail />} />
  {/* Add more routes like mine, search etc. */}
</Routes>