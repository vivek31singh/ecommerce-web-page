export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Car Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};