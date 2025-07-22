'use client';

import { useState } from 'react';
import { restaurants, owners } from '@/lib/data';

export default function OwnerDashboard() {
  const [selectedOwnerId] = useState('1');
  const owner = owners.find(o => o.id === selectedOwnerId);
  const restaurant = restaurants.find(r => r.id === owner?.restaurantId);
  const popularDishes = restaurant?.dishes.filter(d => d.isPopular) || [];

  // Dummy Data for demonstration purposes
  const orders = [
    { id: 1, status: 'Pending' },
    { id: 2, status: 'Completed' },
    { id: 3, status: 'Pending' },
    { id: 4, status: 'Completed' },
  ];
  const lowStockIngredients = ['Tomatoes', 'Cheese', 'Chicken Breast'];
  const feedback = [
    { id: 1, user: 'Jane M.', comment: 'Great food, but service was slow.' },
    { id: 2, user: 'Ali K.', comment: 'Loved the ambiance and biryani!' },
  ];

  if (!owner || !restaurant) {
    return <div>Owner not found</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {owner.name}
        </h1>
        <p className="text-gray-600">
          Managing {restaurant.name} - {restaurant.cuisine} Cuisine
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-600">
            KSh {owner.totalRevenue.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Pending Orders</h3>
          <p className="text-3xl font-bold text-orange-500">
            {orders.filter(o => o.status === 'Pending').length}
          </p>
          <p className="text-sm text-gray-500 mt-1">Needs Attention</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Popular Dishes</h3>
          <p className="text-3xl font-bold text-amber-600">{popularDishes.length}</p>
          <p className="text-sm text-gray-500 mt-1">Customer Favorites</p>
        </div>
      </div>

      {/* Feedback + Stock Alerts */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Customer Feedback */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Feedback</h2>
          <ul className="space-y-4">
            {feedback.map(f => (
              <li key={f.id} className="bg-gray-50 p-4 rounded-md border border-gray-100">
                <p className="font-medium text-gray-700">{f.user}</p>
                <p className="text-sm text-gray-600">{f.comment}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Stock Alerts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Low Stock Alerts</h2>
          {lowStockIngredients.length > 0 ? (
            <ul className="list-disc list-inside text-red-600 font-medium">
              {lowStockIngredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-green-600">All ingredients in stock</p>
          )}
        </div>
      </div>

      {/* Restaurant Menu */}
      <div className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Menu</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurant.dishes.map((dish) => (
            <div key={dish.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-gray-800">{dish.name}</h4>
                {dish.isPopular && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-2">{dish.description}</p>
              <p className="font-semibold text-green-600">
                KSh {dish.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics & Quick Actions */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Restaurant Analytics</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Total Orders This Month: <strong>123</strong></li>
            <li>Average Rating: <strong>4.5 ⭐</strong></li>
            <li>Returning Customers: <strong>38%</strong></li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="bg-amber-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors">
              Add New Dish
            </button>
            <button className="bg-blue-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Update Menu
            </button>
            <button className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
              View Orders
            </button>
            <button className="bg-purple-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-purple-600 transition-colors">
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
