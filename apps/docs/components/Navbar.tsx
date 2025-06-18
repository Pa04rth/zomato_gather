"use client";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold [font-family:'Sora',sans-serif] text-[#E23744]">
              ZomatoGather
            </h1>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-[#E23744] transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#E23744] transition-colors duration-200 font-medium"
              >
                Browse Events
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#E23744] transition-colors duration-200 font-medium"
              >
                Vendors
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#E23744] transition-colors duration-200 font-medium"
              >
                How it Works
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#E23744] transition-colors duration-200 font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          {/* Auth Buttons */}

          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="outline"
                  className="border-[#E23744] text-[#E23744] hover:bg-[#E23744] hover:text-white"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-[#E23744] hover:bg-[#C41E3A] text-white">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
              <SignOutButton>
                <Button
                  variant="outline"
                  className="ml-2 border-[#E23744] text-[#E23744] hover:bg-[#E23744] hover:text-white"
                >
                  Sign Out
                </Button>
              </SignOutButton>
            </SignedIn>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#E23744] focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              title={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-[#E23744]"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-[#E23744]"
              >
                Browse Events
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-[#E23744]"
              >
                Vendors
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-[#E23744]"
              >
                How it Works
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-[#E23744]"
              >
                Contact
              </a>
              <SignedIn>
                <div className="flex flex-col space-y-2 px-3 py-2">
                  <UserButton />
                  <SignOutButton>
                    <Button
                      variant="outline"
                      className="border-[#E23744] text-[#E23744]"
                    >
                      Sign Out
                    </Button>
                  </SignOutButton>
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
