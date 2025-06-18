import React from "react";
import { Button } from "../components/ui/button";

const MobileApp = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E23744] to-[#C41E3A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold [font-family:'Sora',sans-serif] mb-6">
              Take ZomatoGather On The Go
            </h2>
            <p className="text-xl text-white/90 [font-family:'Inter',sans-serif] mb-8 leading-relaxed">
              Plan events, chat with vendors, and manage your bookings from
              anywhere. Our mobile app puts the power of event planning in your
              pocket.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">📱</span>
                </div>
                <span className="[font-family:'Inter',sans-serif]">
                  Real-time notifications
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">💬</span>
                </div>
                <span className="[font-family:'Inter',sans-serif]">
                  Direct vendor chat
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">📍</span>
                </div>
                <span className="[font-family:'Inter',sans-serif]">
                  Location-based search
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">⭐</span>
                </div>
                <span className="[font-family:'Inter',sans-serif]">
                  Review & rate vendors
                </span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                className="bg-white [color:#E23744] hover:bg-gray-100 border-0 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-white [color:#E23744] hover:bg-gray-100 border-0 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🤖</span>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-96 bg-gradient-to-b from-[#F8F9FA] to-white p-4">
                    {/* Mock App Content */}
                    <div className="bg-[#E23744] text-white p-3 rounded-xl mb-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">ZomatoGather</h3>
                        <span className="text-sm">📍 NYC</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                          <div>
                            <div className="font-semibold text-sm text-gray-800">
                              Italian Catering
                            </div>
                            <div className="text-xs text-gray-600">
                              ⭐ 4.9 • 2.1 km
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                          <div>
                            <div className="font-semibold text-sm text-gray-800">
                              BBQ Masters
                            </div>
                            <div className="text-xs text-gray-600">
                              ⭐ 4.8 • 1.5 km
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white [color:#E23744] px-3 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                📲 Coming Soon!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
