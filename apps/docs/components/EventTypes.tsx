import React from "react";

const EventTypes = () => {
  const eventTypes = [
    {
      id: 1,
      title: "Backyard Party",
      description: "Casual gatherings with friends and family",
      icon: "🏡",
      gradient: "from-orange-400 to-red-500",
      hoverGradient: "from-orange-500 to-red-600",
    },
    {
      id: 2,
      title: "Wedding Event",
      description: "Elegant celebrations for your special day",
      icon: "💒",
      gradient: "from-pink-400 to-rose-500",
      hoverGradient: "from-pink-500 to-rose-600",
    },
    {
      id: 3,
      title: "Corporate Lunch",
      description: "Professional catering for business events",
      icon: "🏢",
      gradient: "from-blue-400 to-indigo-500",
      hoverGradient: "from-blue-500 to-indigo-600",
    },
    {
      id: 4,
      title: "Birthday Bash",
      description: "Fun celebrations for all ages",
      icon: "🎂",
      gradient: "from-purple-400 to-pink-500",
      hoverGradient: "from-purple-500 to-pink-600",
    },
    {
      id: 5,
      title: "Holiday Gathering",
      description: "Festive meals for seasonal celebrations",
      icon: "🎄",
      gradient: "from-green-400 to-emerald-500",
      hoverGradient: "from-green-500 to-emerald-600",
    },
    {
      id: 6,
      title: "Baby Shower",
      description: "Sweet celebrations for new arrivals",
      icon: "👶",
      gradient: "from-yellow-400 to-orange-500",
      hoverGradient: "from-yellow-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold [color:#333333] [font-family:'Sora',sans-serif] mb-4">
            What Type of Event Are You Planning?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto [font-family:'Inter',sans-serif]">
            Choose your event type to get personalized vendor recommendations
            and menu suggestions.
          </p>
        </div>

        {/* Event Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventTypes.map((eventType) => (
            <div
              key={eventType.id}
              className={`relative bg-gradient-to-br ${eventType.gradient} hover:bg-gradient-to-br hover:${eventType.hoverGradient} rounded-2xl p-8 text-white cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {eventType.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 [font-family:'Sora',sans-serif]">
                  {eventType.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 [font-family:'Inter',sans-serif] mb-6 leading-relaxed">
                  {eventType.description}
                </p>

                {/* CTA */}
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:border-white/50">
                  Plan This Event
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
