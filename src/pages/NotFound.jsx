import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-5xl font-bold text-blue-600 mb-4">404</h1>
    <p className="text-lg text-gray-700 mb-6">Page not found.</p>
    <Link to="/" className="text-blue-600 hover:underline">Go Home</Link>
  </section>
);

export default NotFound; 