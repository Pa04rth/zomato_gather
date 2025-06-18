import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Create Your Event",
      description:
        "Tell us about your event - date, location, cuisine preferences, and budget. It takes less than 2 minutes!",
      icon: "📝",
      color: "bg-blue-50 border-blue-200",
    },
    {
      step: 2,
      title: "Receive Vendor Bids",
      description:
        "Top-rated chefs and vendors in your area will send you customized proposals with menus and pricing.",
      icon: "💰",
      color: "bg-green-50 border-green-200",
    },
    {
      step: 3,
      title: "Book & Enjoy",
      description:
        "Compare options, chat with vendors, make your choice, and enjoy your perfectly catered event!",
      icon: "🎉",
      color: "bg-purple-50 border-purple-200",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold [color:#333333] [font-family:'Sora',sans-serif] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto [font-family:'Inter',sans-serif]">
            Planning your food event has never been easier. Follow these simple
            steps to get started.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#E23744] to-[#FF6B75] transform translate-x-4 z-0"></div>
              )}

              {/* Step Card */}
              <div
                className={`relative z-10 ${step.color} border-2 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group-hover:scale-105`}
              >
                {/* Step Number */}
                <div className="w-16 h-16 bg-[#E23744] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-bold [color:#333333] mb-4 [font-family:'Sora',sans-serif]">
                  {step.title}
                </h3>
                <p className="text-gray-600 [font-family:'Inter',sans-serif] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#E23744] hover:bg-[#C41E3A] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Planning Your Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
