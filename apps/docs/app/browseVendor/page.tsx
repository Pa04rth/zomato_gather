"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const BrowseVendor = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const [vendors, setVendors] = React.useState([]);

  React.useEffect(() => {
    const fetchLatLngAndVendors = async () => {
      if (!location) return;

      // Geocode the address to lat/lng
      const geoRes = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          location
        )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      );
      const geoData = await geoRes.json();
      if (
        geoData.results &&
        geoData.results[0] &&
        geoData.results[0].geometry
      ) {
        const { lat, lng } = geoData.results[0].geometry.location;
        fetchVendors(lat, lng);
      }
    };

    fetchLatLngAndVendors();
  }, [location]);

  const autocompleteRef = React.useRef<google.maps.places.Autocomplete | null>(
    null
  );

  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place && place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        // Use lat & lng to fetch vendors
      }
    }
  };
  const fetchVendors = async (lat: number, lng: number) => {
    const res = await fetch(`/api/vendors?lat=${lat}&lng=${lng}`);
    const data = await res.json();
    setVendors(data);
  };
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vendors.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No vendors found for this location.
          </div>
        )}
        {vendors.map((vendor: any) => (
          <div
            key={vendor.id}
            className="bg-white rounded-lg shadow-md p-4 m-2"
          >
            <h2 className="text-xl font-bold">{vendor.name}</h2>
            <p>Address: {vendor.address}</p>
            <p>Rating: ⭐ {vendor.rating}</p>
            {/* Add more vendor details as needed */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BrowseVendor;
