import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'FoodCourt Hub',
  description: 'Order food and reserve tables at our food court',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-orange-50 min-h-screen">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}