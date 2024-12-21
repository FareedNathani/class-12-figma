// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-2">Whitespace</h3>
          <p className="text-sm text-gray-400">
            Whitespace was created for the new ways we live and work.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-300 text-sm">Overview</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">Customer stories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-300 text-sm">Blog</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">Guides</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">Help center</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-300 text-sm">About us</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">Careers</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">Media kit</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-8">©2024 Whitespace LLC</p>
    </footer>
  );
};

export default Footer;
