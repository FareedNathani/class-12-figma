// components/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  bg-[#0A2540] px-8 py-4 md:px-16">
      <div className="text-3xl font-bold text-white">Whitespace</div>
      <div className="hidden space-x-8 md:flex">
        <a href="#products" className="text-white text-sm font-medium hover:text-blue-300 transition">
          Products
        </a>
        <a href="#solutions" className="text-white text-sm font-medium hover:text-blue-300 transition">
          Solutions
        </a>
        <a href="#resources" className="text-white text-sm font-medium hover:text-blue-300 transition">
          Resources
        </a>
        <a href="#pricing" className="text-white text-sm font-medium hover:text-blue-300 transition">
          Pricing
        </a>
      </div>
      <button className="text-sm font-medium text-[#0A2540] bg-[#FFC107] px-6 py-2 rounded-md hover:bg-[#e0a600] transition">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
