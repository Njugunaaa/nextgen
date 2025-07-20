'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  // State to track if user is logged in and their type
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Check login status when component loads
  useEffect(() => {
    // Check if we're in the browser (not server)
    if (typeof window !== 'undefined') {
      const userType = localStorage.getItem('userType');
      setIsLoggedIn(!!userType);
      setIsOwner(userType === 'owner');
      
      // Get cart count
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.length);
    }
  }, []);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-orange-500 p-2 rounded-full">
              <span className="text-white text-xl">🍽️</span>
            </div>
            <span className="text-2xl font-bold text-orange-600">
              FoodCourt Hub
            </span>
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
              Home
            </Link>
            <Link href="/order" className="text-gray-700 hover:text-orange-600 font-medium">
              Orders
            </Link>
            <Link href="/reservations" className="text-gray-700 hover:text-orange-600 font-medium">
              Reservations
            </Link>
            <Link href="/signup" className="text-gray-700 hover:text-orange-600 font-medium">
              Sign Up
            </Link>
            
            {/* Cart Icon */}
            <Link href="/cart" className="relative text-gray-700 hover:text-orange-600">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Owner Dashboard Link (only show if logged in as owner) */}
            {isOwner && (
              <Link href="/owner-dashboard" className="text-gray-700 hover:text-orange-600 font-medium">
                Dashboard
              </Link>
            )}
          </nav>

          {/* Mobile Menu (simplified) */}
          <div className="md:hidden">
            <select 
              onChange={(e) => window.location.href = e.target.value}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="/">Home</option>
              <option value="/order">Orders</option>
              <option value="/reservations">Reservations</option>
              <option value="/signup">Sign Up</option>
              <option value="/cart">Cart ({cartCount})</option>
              {isOwner && <option value="/owner-dashboard">Dashboard</option>}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}