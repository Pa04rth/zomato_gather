"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BrowseVendor = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  // You can now use `location` to fetch/filter vendors
  // For demonstration, we'll just show the location
  return (
    <div className="p-8">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Browse Vendors</h1>
      {location ? (
        <p className="mb-4">
          Showing results for: <span className="font-semibold">{location}</span>
        </p>
      ) : (
        <p className="mb-4">Please enter a location to see vendors.</p>
      )}
      {/* TODO: Fetch and display vendors based on location */}
      <Footer />
    </div>
  );
};

export default BrowseVendor;
