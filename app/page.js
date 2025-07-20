'use client';

import Link from 'next/link';
import Image from 'next/image';
import { restaurants, cuisineTypes } from '@/lib/data';

export default function HomePage() {
  // Get unique cuisines for display (limit to 4)
  const displayCuisines = cuisineTypes.slice(0, 4);
  
  // Get cuisine image from restaurants
  const getCuisineImage = (cuisineName) => {
    const restaurant = restaurants.find(r => r.cuisine === cuisineName);
    return restaurant ? restaurant.image : '';
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-96 rounded-lg overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Food Court"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to FoodCourt Hub
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover amazing cuisines from multiple restaurants all in one place. 
              Reserve your table and order your favorite dishes!
            </p>
          </div>
        </div>
      </section>

      {/* Browse by Outlet Section */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Browse by Restaurant</h2>
          <p className="text-xl text-gray-600">
            Explore all our restaurant partners
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {restaurants.slice(0, 4).map((restaurant) => (
            <Link 
              key={restaurant.id} 
              href={`/order?restaurant=${restaurant.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-lg text-orange-600 font-semibold">
                  {restaurant.cuisine}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/browse-outlets"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-orange-600 transition-colors"
          >
            View All Restaurants
          </Link>
        </div>
      </section>

      {/* Browse by Cuisines Section */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Browse by Cuisine</h2>
          <p className="text-xl text-gray-600">
            Find restaurants by your favorite cuisine type
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {displayCuisines.map((cuisine) => (
            <Link 
              key={cuisine} 
              href={`/browse-cuisines?cuisine=${cuisine}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-32 w-full">
                <Image
                  src={getCuisineImage(cuisine)}
                  alt={`${cuisine} Cuisine`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800 text-center">
                  {cuisine}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/browse-cuisines"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-orange-600 transition-colors"
          >
            Explore All Cuisines
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <Link 
          href="/popular-dishes" 
          className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Popular Dishes</h3>
          <p className="text-lg text-gray-600">See what everyone's ordering today</p>
        </Link>
        
        <Link 
          href="/reservations" 
          className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Reserve Table</h3>
          <p className="text-lg text-gray-600">Book your spot in advance</p>
        </Link>
        
        <Link 
          href="/reviews" 
          className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h3>
          <p className="text-lg text-gray-600">Read what others are saying</p>
        </Link>
      </section>
    </div>
  );
}