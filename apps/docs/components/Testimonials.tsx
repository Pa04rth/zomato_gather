"use client";
import React, { useState } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      event: "Wedding Reception",
      vendor: "Chef Marco's Italian Kitchen",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c108?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      quote:
        "ZomatoGather made our wedding catering stress-free! Chef Marco exceeded our expectations with authentic Italian cuisine that had our guests raving. The platform made it so easy to compare options and communicate with vendors.",
    },
    {
      id: 2,
      name: "Michael Chen",
      event: "Corporate Event",
      vendor: "Spice Route Catering",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      quote:
        "Perfect for our company lunch! The Indian fusion menu was a huge hit with our diverse team. Professional service, great food, and fair pricing. Will definitely use ZomatoGather for future events.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      event: "Birthday Party",
      vendor: "BBQ Masters",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      quote:
        "My husband's 40th birthday party was amazing! BBQ Masters delivered incredible food and the whole process through ZomatoGather was seamless. From booking to cleanup, everything was handled professionally.",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold [color:#333333] [font-family:'Sora',sans-serif] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto [font-family:'Inter',sans-serif]">
            Real stories from real customers who trusted us with their special
            events.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 [background-color:rgba(226,55,68,0.05)] rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 [background-color:rgba(226,55,68,0.05)] rounded-full translate-y-12 -translate-x-12"></div>

            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-6xl [color:rgba(226,55,68,0.2)]">
              "
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial]?.rating ?? 0)].map(
                  (_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">
                      ⭐
                    </span>
                  )
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl [color:#333333] [font-family:'Inter',sans-serif] leading-relaxed mb-8">
                {testimonials[activeTestimonial]?.quote}
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[activeTestimonial]?.image}
                  alt={testimonials[activeTestimonial]?.name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <h4 className="font-bold [color:#333333] text-lg [font-family:'Sora',sans-serif]">
                    {testimonials[activeTestimonial]?.name}
                  </h4>
                  <p className="text-gray-600 [font-family:'Inter',sans-serif]">
                    {testimonials[activeTestimonial]?.event}
                  </p>
                  <p className="[color:#E23744] font-medium text-sm">
                    Vendor: {testimonials[activeTestimonial]?.vendor}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:[background-color:#E23744] [color:#E23744] hover:text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            title="Previous testimonial"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:[background-color:#E23744] [color:#E23744] hover:text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            title="Next testimonial"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "[background-color:#E23744]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
                title={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
