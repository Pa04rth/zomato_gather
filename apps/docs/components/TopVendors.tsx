import React from "react";
import { Button } from "../components/ui/button";

const TopVendors = () => {
  const vendors = [
    {
      id: 1,
      name: "Chef Marco's Italian Kitchen",
      cuisine: "Italian Cuisine",
      rating: 4.9,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      specialties: ["Pasta", "Pizza", "Risotto"],
      priceRange: "$$$",
    },
    {
      id: 2,
      name: "Spice Route Catering",
      cuisine: "Indian Fusion",
      rating: 4.8,
      reviews: 187,
      image:
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80",
      specialties: ["Biryani", "Curry", "Tandoor"],
      priceRange: "$$",
    },
    {
      id: 3,
      name: "Green Garden Organics",
      cuisine: "Healthy & Organic",
      rating: 4.7,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
      specialties: ["Salads", "Smoothies", "Vegan"],
      priceRange: "$$",
    },
    {
      id: 4,
      name: "BBQ Masters",
      cuisine: "American BBQ",
      rating: 4.9,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      specialties: ["Ribs", "Brisket", "Wings"],
      priceRange: "$$$",
    },
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold [color:#333333] [font-family:'Sora',sans-serif] mb-4">
            Top Vendors in Your Area
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto [font-family:'Inter',sans-serif]">
            Discover highly-rated chefs and catering services trusted by
            thousands of happy customers.
          </p>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Vendor Image */}
              <div className="relative overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                  {vendor.priceRange}
                </div>
              </div>

              {/* Vendor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold [color:#333333] mb-2 [font-family:'Sora',sans-serif]">
                  {vendor.name}
                </h3>
                <p className="text-gray-600 mb-3 [font-family:'Inter',sans-serif]">
                  {vendor.cuisine}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">⭐</span>
                    <span className="font-bold [color:#333333] ml-1">
                      {vendor.rating}
                    </span>
                    <span className="text-gray-500 ml-1">
                      ({vendor.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {vendor.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-[#F8F9FA] text-[#E23744] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-[#E23744] hover:bg-[#C41E3A] text-white font-semibold py-3 rounded-full transition-all duration-300">
                  Request Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-[#E23744] text-[#E23744] hover:bg-[#E23744] hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            View All Vendors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopVendors;
