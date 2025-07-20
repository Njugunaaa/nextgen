// Simple data for our food court app
// This file contains all the restaurant and menu information

export const restaurants = [
  {
    id: '1',
    name: 'Tamu Tamu Grills',
    cuisine: 'BBQ',
    description: 'Authentic grilled meats and vegetables with traditional African spices',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    dishes: [
      { id: '1', name: 'Grilled Chicken', price: 1200, description: 'Marinated chicken with traditional spices', isPopular: true },
      { id: '2', name: 'Beef Kebabs', price: 1500, description: 'Tender beef skewers' },
      { id: '3', name: 'Grilled Fish', price: 1800, description: 'Fresh fish with herbs' },
    ]
  },
  {
    id: '2',
    name: 'Swahili Plates',
    cuisine: 'Coastal',
    description: 'Traditional Swahili dishes with coconut and spices',
    image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400',
    dishes: [
      { id: '4', name: 'Chicken Biryani', price: 1000, description: 'Fragrant rice with spiced chicken', isPopular: true },
      { id: '5', name: 'Coconut Rice', price: 600, description: 'Rice cooked in coconut milk' },
      { id: '6', name: 'Fish Curry', price: 1400, description: 'Coconut fish curry' },
    ]
  },
  {
    id: '3',
    name: 'Burger Bros',
    cuisine: 'Fast Food',
    description: 'Juicy burgers and crispy fries for quick meals',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
    dishes: [
      { id: '7', name: 'Classic Burger', price: 800, description: 'Beef patty with lettuce and tomato', isPopular: true },
      { id: '8', name: 'Chicken Burger', price: 750, description: 'Grilled chicken breast burger' },
      { id: '9', name: 'Fries', price: 400, description: 'Crispy golden fries' },
    ]
  },
  {
    id: '4',
    name: 'Sushi Spot',
    cuisine: 'Japanese',
    description: 'Fresh sushi and Japanese favorites',
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
    dishes: [
      { id: '10', name: 'California Roll', price: 1200, description: 'Avocado and crab roll', isPopular: true },
      { id: '11', name: 'Salmon Nigiri', price: 1500, description: 'Fresh salmon over rice' },
      { id: '12', name: 'Miso Soup', price: 500, description: 'Traditional soybean soup' },
    ]
  },
  {
    id: '5',
    name: 'Spice Garden',
    cuisine: 'Indian',
    description: 'Authentic Indian curries and breads',
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
    dishes: [
      { id: '13', name: 'Butter Chicken', price: 1300, description: 'Creamy tomato chicken curry', isPopular: true },
      { id: '14', name: 'Naan Bread', price: 300, description: 'Fresh baked Indian bread' },
      { id: '15', name: 'Dal Curry', price: 700, description: 'Lentil curry with spices' },
    ]
  },
  {
    id: '6',
    name: 'Green Bowl',
    cuisine: 'Vegan',
    description: 'Healthy plant-based meals and smoothies',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
    dishes: [
      { id: '16', name: 'Buddha Bowl', price: 900, description: 'Mixed vegetables and quinoa', isPopular: true },
      { id: '17', name: 'Green Smoothie', price: 500, description: 'Spinach, banana, and mango' },
      { id: '18', name: 'Veggie Wrap', price: 700, description: 'Fresh vegetables in a tortilla' },
    ]
  },
];

// List of all cuisine types
export const cuisineTypes = ['BBQ', 'Coastal', 'Fast Food', 'Japanese', 'Indian', 'Vegan'];

// Sample tables for reservations
export const tables = [
  { id: '1', number: 1, capacity: 4, isAvailable: true },
  { id: '2', number: 2, capacity: 6, isAvailable: true },
  { id: '3', number: 3, capacity: 4, isAvailable: true },
  { id: '4', number: 4, capacity: 8, isAvailable: true },
  { id: '5', number: 5, capacity: 4, isAvailable: true },
  { id: '6', number: 6, capacity: 6, isAvailable: true },
  { id: '7', number: 7, capacity: 4, isAvailable: true },
  { id: '8', number: 8, capacity: 6, isAvailable: true },
];

// Sample reviews
export const initialReviews = [
  {
    id: '1',
    customerName: 'John Mwangi',
    restaurant: 'Tamu Tamu Grills',
    rating: 5,
    comment: 'Amazing grilled chicken! The spices were perfect and the meat was so tender.',
    date: '2024-01-15'
  },
  {
    id: '2',
    customerName: 'Sarah Ahmed',
    restaurant: 'Swahili Plates',
    rating: 4,
    comment: 'Love the coconut rice and fish curry. Authentic coastal flavors.',
    date: '2024-01-14'
  },
  {
    id: '3',
    customerName: 'Mike Johnson',
    restaurant: 'Burger Bros',
    rating: 4,
    comment: 'Quick service and tasty burgers. Great for a fast lunch.',
    date: '2024-01-13'
  },
];