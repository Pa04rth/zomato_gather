"use client";
import React, { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useRouter } from "next/navigation";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
const libraries: "places"[] = ["places"];

const HeroSection = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const autocompleteRef = useRef<any>(null);

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.formatted_address) {
      setSearch(place.formatted_address);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/browseVendor?location=${encodeURIComponent(search)}`);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#F8F9FA] to-white py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1920&q=80"
          alt="Beautiful food event setup"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Content */}
          <div className="text-center lg:text-left [animation:fade-in_0.6s_ease-out]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] [font-family:'Sora',sans-serif] leading-tight">
              Plan Your Perfect{" "}
              <span className="text-[#E23744]">Food Event</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mt-4 [font-family:'Inter',sans-serif]">
              From Street Food to Fine Dining
            </p>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl [font-family:'Inter',sans-serif]">
              Connect with top chefs and vendors in your area. Whether it's a
              backyard party, wedding, or corporate event, we make food planning
              effortless and delicious.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#E23744] hover:bg-[#C41E3A] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => router.push("/dashboard")}
              >
                Create Event Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#E23744] text-[#E23744] hover:bg-[#E23744] hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                onClick={() => router.push("/browseVendor")}
              >
                Browse Vendors
              </Button>
            </div>

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto lg:mx-0 relative">
              <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
                libraries={libraries}
              >
                <form onSubmit={handleSearch}>
                  <Autocomplete
                    onLoad={(autocomplete) =>
                      (autocompleteRef.current = autocomplete)
                    }
                    onPlaceChanged={handlePlaceChanged}
                  >
                    <Input
                      placeholder="Search for Chefs/Vendors near you..."
                      className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-[#E23744]"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Autocomplete>
                </form>
              </LoadScript>
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative flex justify-center lg:justify-end [animation:slide-in-left_0.6s_ease-out]">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
                alt="Chef preparing food"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-[#E23744] text-white px-4 py-2 rounded-full font-semibold animate-bounce shadow-lg">
              ⭐ 4.9/5 Rating
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white shadow-lg px-4 py-2 rounded-full font-semibold text-[#333333]">
              🍽️ 1000+ Events
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
