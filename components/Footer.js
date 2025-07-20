export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">
              FoodCourt Hub
            </h3>
            <p className="text-gray-400">
              Experience great food from multiple restaurants in one convenient location.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/order" className="text-gray-400 hover:text-white">Order Food</a></li>
              <li><a href="/reservations" className="text-gray-400 hover:text-white">Reservations</a></li>
              <li><a href="/reviews" className="text-gray-400 hover:text-white">Reviews</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Us</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 FoodCourt Hub, Level 2</p>
              <p>📞 +254 700 123 456</p>
              <p>✉️ info@foodcourthub.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FoodCourt Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}