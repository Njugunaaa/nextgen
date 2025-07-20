import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'FoodCourt Hub',
  description: 'Reserve tables and order food in advance at our shared seating food court',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900 min-h-screen transition-colors duration-300">
        <Header />
        <main className="max-w-7xl mx-auto px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}