import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              CarMarketplace
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/cars" className="text-gray-700 hover:text-blue-600 transition-colors">
              Inventory
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};