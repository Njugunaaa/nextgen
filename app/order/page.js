'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { restaurants } from '@/lib/data';

export default function OrderPage() {
  // Get restaurant ID from URL if provided
  const searchParams = useSearchParams();
  const restaurantId = searchParams.get('restaurant');
  
  // State for the page
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurantId || '');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in when page loads
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userType = localStorage.getItem('userType');
      setIsLoggedIn(!!userType);
      
      // Load existing cart
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(savedCart);
    }
  }, []);

  // Show login message if user is not logged in
  if (!isLoggedIn) {
    return (
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Please Log In</h1>
        <p className="text-xl text-gray-600 mb-8">
          You need to be logged in to place orders
        </p>
        <a
          href="/signup"
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-600 transition-colors"
        >
          Sign Up Now
        </a>
      </div>
    );
  }

  // Get the selected restaurant data
  const restaurant = restaurants.find(r => r.id === selectedRestaurant);

  // Filter dishes based on search term
  const filteredDishes = restaurant?.dishes.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dish.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  // Add item to cart
  const addToCart = (dish) => {
    const existingItem = cart.find(item => item.id === dish.id);
    let newCart;
    
    if (existingItem) {
      // If item exists, increase quantity
      newCart = cart.map(item =>
        item.id === dish.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new item to cart
      newCart = [...cart, { 
        ...dish, 
        quantity: 1, 
        restaurantName: restaurant.name 
      }];
    }
    
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    alert(`${dish.name} added to cart!`);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">Place Your Order</h1>
        <p className="text-xl text-gray-600">
          Select a restaurant and add dishes to your cart
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Restaurant Selection and Menu */}
        <div className="lg:col-span-2">
          {/* Restaurant Selection */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Select Restaurant
            </label>
            <select
              value={selectedRestaurant}
              onChange={(e) => setSelectedRestaurant(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:border-orange-500 bg-white"
            >
              <option value="">Choose a restaurant...</option>
              {restaurants.map((restaurant) => (
                <option key={restaurant.id} value={restaurant.id}>
                  {restaurant.name} - {restaurant.cuisine}
                </option>
              ))}
            </select>
          </div>

          {/* Search Bar (only show if restaurant is selected) */}
          {restaurant && (
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Search Dishes
              </label>
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:border-orange-500"
              />
            </div>
          )}

          {/* Restaurant Menu */}
          {restaurant && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {restaurant.name}
              </h2>
              <p className="text-gray-600 mb-6">
                {restaurant.description}
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Menu</h3>
              
              {filteredDishes.length === 0 && searchTerm ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-lg">
                    No dishes found matching "{searchTerm}"
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredDishes.map((dish) => (
                    <div key={dish.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-bold text-gray-800">{dish.name}</h4>
                          {dish.isPopular && (
                            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-semibold">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">{dish.description}</p>
                        <p className="text-xl font-bold text-green-600">
                          KSh {dish.price.toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => addToCart(dish)}
                        className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Your Cart</h3>
            
            {cart.length === 0 ? (
              <p className="text-gray-500">No items in your cart yet</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.restaurantName}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm">Qty: {item.quantity}</span>
                      <span className="font-semibold text-green-600">
                        KSh {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4">
                  <div className="flex items-center justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-green-600">KSh {getTotalPrice().toLocaleString()}</span>
                  </div>
                  
                  <a
                    href="/cart"
                    className="w-full mt-4 bg-orange-500 text-white py-3 rounded-xl text-lg font-bold hover:bg-orange-600 transition-colors block text-center"
                  >
                    View Cart & Checkout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}