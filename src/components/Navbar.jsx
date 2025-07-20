import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
    <div className="text-2xl font-bold text-blue-600">ReactBoiler</div>
    <div className="space-x-6">
      <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
      <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
    </div>
  </nav>
);

export default Navbar; 