import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold [color:#E23744] [font-family:'Sora',sans-serif] mb-4">
              ZomatoGather
            </h3>
            <p className="text-gray-600 [font-family:'Inter',sans-serif] mb-6 max-w-md">
              The ultimate catering marketplace connecting event planners with
              top-rated chefs and vendors. From intimate gatherings to grand
              celebrations, we make food planning effortless.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-[#E23744] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C41E3A] transition-colors duration-300"
              >
                <span className="text-sm">📷</span>
              </a>
              <a
                href="#"
                className="bg-[#E23744] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C41E3A] transition-colors duration-300"
              >
                <span className="text-sm">📺</span>
              </a>
              <a
                href="#"
                className="bg-[#E23744] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C41E3A] transition-colors duration-300"
              >
                <span className="text-sm">💼</span>
              </a>
              <a
                href="#"
                className="bg-[#E23744] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C41E3A] transition-colors duration-300"
              >
                <span className="text-sm">🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold [color:#333333] [font-family:'Sora',sans-serif] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:[color:#E23744] transition-colors duration-300 [font-family:'Inter',sans-serif]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:[color:#E23744] transition-colors duration-300 [font-family:'Inter',sans-serif]"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:[color:#E23744] transition-colors duration-300 [font-family:'Inter',sans-serif]"
                >
                  Browse Vendors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:[color:#E23744] transition-colors duration-300 [font-family:'Inter',sans-serif]"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:[color:#E23744] transition-colors duration-300 [font-family:'Inter',sans-serif]"
                >
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold [color:#333333] [font-family:'Sora',sans-serif] mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:[color:#E23744] transition-colors duration-300 [font-family:'Inter',sans-serif]"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:[color:#E23744] transition-colors duration-300 [font-family:'Inter',sans-serif]"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:[color:#E23744] transition-colors duration-300 [font-family:'Inter',sans-serif]"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:[color:#E23744] transition-colors duration-300 [font-family:'Inter',sans-serif]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:[color:#E23744] transition-colors duration-300 [font-family:'Inter',sans-serif]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-bold [color:#333333] [font-family:'Sora',sans-serif] mb-2">
                Stay Updated
              </h4>
              <p className="text-gray-600 [font-family:'Inter',sans-serif]">
                Get the latest vendor updates and event planning tips.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#E23744] [font-family:'Inter',sans-serif]"
              />
              <button className="bg-[#E23744] hover:bg-[#C41E3A] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 [font-family:'Inter',sans-serif]">
            © 2024 ZomatoGather. All rights reserved. Made with ❤️ for food
            lovers and event planners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
